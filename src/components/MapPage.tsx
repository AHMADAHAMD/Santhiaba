import React, { useState } from 'react';
import { MapPin, School, Church, Building, Store, Users, Filter } from 'lucide-react';

export default function MapPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sample locations data
  const locations = [
    {
      id: '1',
      name: 'Mosquée Centrale de Santhiaba',
      type: 'mosquee',
      description: 'Lieu de culte principal du quartier, centre spirituel de la communauté',
      coordinates: { lat: 14.7645, lng: -17.3660 }
    },
    {
      id: '2',
      name: 'École Primaire Santhiaba',
      type: 'ecole',
      description: 'École publique accueillant les enfants du quartier de 6 à 12 ans',
      coordinates: { lat: 14.7650, lng: -17.3670 }
    },
    {
      id: '3',
      name: 'Terrain de Football',
      type: 'sport',
      description: 'Terrain où se déroulent les matchs et entraînements des équipes locales',
      coordinates: { lat: 14.7640, lng: -17.3650 }
    },
    {
      id: '4',
      name: 'Place Centrale',
      type: 'public',
      description: 'Lieu de rassemblement pour les événements communautaires et festivités',
      coordinates: { lat: 14.7655, lng: -17.3665 }
    },
    {
      id: '5',
      name: 'Marché de Proximité',
      type: 'commerce',
      description: 'Petit marché local pour les achats quotidiens',
      coordinates: { lat: 14.7648, lng: -17.3655 }
    },
    {
      id: '6',
      name: 'Centre de Santé',
      type: 'public',
      description: 'Dispensaire offrant des soins de base aux résidents',
      coordinates: { lat: 14.7642, lng: -17.3675 }
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: MapPin, color: 'gray' },
    { id: 'mosquee', label: 'Mosquées', icon: Church, color: 'green' },
    { id: 'ecole', label: 'Écoles', icon: School, color: 'blue' },
    { id: 'sport', label: 'Sport', icon: Users, color: 'red' },
    { id: 'public', label: 'Public', icon: Building, color: 'purple' },
    { id: 'commerce', label: 'Commerce', icon: Store, color: 'orange' }
  ];

  const filteredLocations = selectedCategory === 'all' 
    ? locations 
    : locations.filter(location => location.type === selectedCategory);

  const getCategoryInfo = (type: string) => {
    const category = categories.find(cat => cat.id === type);
    return category || categories[0];
  };

  const getMarkerColor = (type: string) => {
    const colors = {
      mosquee: 'bg-green-500',
      ecole: 'bg-blue-500',
      sport: 'bg-red-500',
      public: 'bg-purple-500',
      commerce: 'bg-orange-500'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Carte du Quartier
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explorez les lieux emblématiques de Santhiaba et découvrez les services 
            et infrastructures qui font la richesse de notre quartier.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filtrer les lieux :</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-300'
                  }`}
                >
                  <Icon size={18} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 relative flex items-center justify-center">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-cover bg-center" 
                   style={{backgroundImage: 'url(https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg)'}}>
              </div>
            </div>
            
            {/* Map Markers */}
            <div className="relative w-full h-full">
              {filteredLocations.map((location, index) => {
                const categoryInfo = getCategoryInfo(location.type);
                const Icon = categoryInfo.icon;
                
                // Simple positioning for demo (in real app, would use actual map coordinates)
                const positions = [
                  { top: '20%', left: '30%' },
                  { top: '40%', left: '60%' },
                  { top: '70%', left: '25%' },
                  { top: '30%', left: '70%' },
                  { top: '60%', left: '45%' },
                  { top: '50%', left: '20%' }
                ];
                
                const position = positions[index] || { top: '50%', left: '50%' };
                
                return (
                  <div
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ top: position.top, left: position.left }}
                  >
                    {/* Marker */}
                    <div className={`w-8 h-8 ${getMarkerColor(location.type)} rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform`}>
                      <Icon size={16} />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-2 text-sm whitespace-nowrap">
                        {location.name}
                      </div>
                      <div className="w-3 h-3 bg-white border-r border-b border-gray-300 transform rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1.5"></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Map Placeholder Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 p-6 rounded-lg text-center max-w-md">
                <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Carte Interactive de Santhiaba
                </h3>
                <p className="text-gray-600 text-sm">
                  Survolez les marqueurs pour voir les détails des lieux. 
                  Dans une version complète, cette carte serait interactive avec géolocalisation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Locations List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => {
            const categoryInfo = getCategoryInfo(location.type);
            const Icon = categoryInfo.icon;
            
            return (
              <div key={location.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${getMarkerColor(location.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {location.name}
                    </h3>
                    
                    <div className="mb-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700`}>
                        {categoryInfo.label}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {location.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results message */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun lieu trouvé
            </h3>
            <p className="text-gray-500">
              Aucun lieu ne correspond à cette catégorie pour le moment.
            </p>
          </div>
        )}

        {/* Legend */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Légende</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat.id !== 'all').map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="flex items-center space-x-2">
                  <div className={`w-6 h-6 ${getMarkerColor(category.id)} rounded-full flex items-center justify-center`}>
                    <Icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{category.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Directions Section */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-orange-800 mb-3">
            Comment nous trouver ?
          </h2>
          <p className="text-orange-700 leading-relaxed">
            Le quartier Santhiaba est facilement accessible en transport en commun. 
            Plusieurs lignes de bus desservent la zone, et des taxis sont régulièrement 
            disponibles. Pour les visiteurs, nous recommandons de nous contacter 
            pour obtenir des indications précises selon votre point de départ.
          </p>
        </div>
      </div>
    </div>
  );
}