import React, { useState } from 'react';
import { Image, Video, Mic, Play, Download, Eye } from 'lucide-react';

export default function GalleryPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Sample gallery data
  const galleryItems = [
    {
      id: '1',
      type: 'photo',
      title: 'Festival culturel 2024',
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      description: 'Spectacle de danse traditionnelle lors du festival annuel',
      date: '2024-03-15'
    },
    {
      id: '2',
      type: 'photo',
      title: 'Équipe de football locale',
      url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      description: 'Notre équipe de football après la victoire au tournoi inter-quartiers',
      date: '2024-02-20'
    },
    {
      id: '3',
      type: 'photo',
      title: 'Mosquée centrale',
      url: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg',
      description: 'Vue de notre magnifique mosquée centrale au coucher du soleil',
      date: '2024-01-10'
    },
    {
      id: '4',
      type: 'photo',
      title: 'Marché du quartier',
      url: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
      description: 'Animation matinale au marché local de Santhiaba',
      date: '2024-01-05'
    },
    {
      id: '5',
      type: 'photo',
      title: 'Enfants à l\'école',
      url: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg',
      description: 'Nos enfants dans la cour de l\'école primaire du quartier',
      date: '2023-11-15'
    },
    {
      id: '6',
      type: 'photo',
      title: 'Réunion communautaire',
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Assemblée générale des habitants pour discuter des projets d\'amélioration',
      date: '2023-10-30'
    }
  ];

  const types = [
    { id: 'all', label: 'Tout', icon: Eye },
    { id: 'photo', label: 'Photos', icon: Image },
    { id: 'video', label: 'Vidéos', icon: Video },
    { id: 'audio', label: 'Audio', icon: Mic }
  ];

  const filteredItems = selectedType === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'photo': return Image;
      case 'video': return Video;
      case 'audio': return Mic;
      default: return Image;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galerie Multimédia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les moments forts de la vie à Santhiaba à travers nos photos, 
            vidéos et témoignages audio qui racontent notre histoire au quotidien.
          </p>
        </div>

        {/* Type Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {types.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
                    selectedType === type.id
                      ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300'
                  }`}
                >
                  <Icon size={18} />
                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
                onClick={() => setSelectedItem(item)}
              >
                {/* Media Preview */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Type Overlay */}
                  <div className="absolute top-2 left-2">
                    <div className="bg-black bg-opacity-50 text-white p-2 rounded-full">
                      <TypeIcon size={16} />
                    </div>
                  </div>
                  
                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                    {item.description}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {new Date(item.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun média trouvé
            </h3>
            <p className="text-gray-500">
              Aucun élément ne correspond à cette catégorie pour le moment.
            </p>
          </div>
        )}

        {/* Media Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedItem.title}
                </h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                {/* Media Display */}
                <div className="mb-6">
                  {selectedItem.type === 'photo' && (
                    <img
                      src={selectedItem.url}
                      alt={selectedItem.title}
                      className="w-full max-h-96 object-contain rounded-lg"
                    />
                  )}
                  
                  {selectedItem.type === 'video' && (
                    <div className="relative bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                      <p className="text-white">Lecteur vidéo non disponible dans cette démo</p>
                    </div>
                  )}
                  
                  {selectedItem.type === 'audio' && (
                    <div className="bg-gray-100 p-8 rounded-lg text-center">
                      <Mic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Lecteur audio non disponible dans cette démo</p>
                    </div>
                  )}
                </div>
                
                {/* Media Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Date</h3>
                      <p className="text-gray-600">
                        {new Date(selectedItem.date).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      <Download size={18} />
                      <span>Télécharger</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload Section */}
        <div className="mt-16 bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Partagez vos moments
          </h2>
          <p className="text-orange-700 mb-6">
            Vous avez des photos, vidéos ou témoignages de la vie à Santhiaba ? 
            Partagez-les avec la communauté !
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Contribuer à la galerie
          </button>
        </div>
      </div>
    </div>
  );
}