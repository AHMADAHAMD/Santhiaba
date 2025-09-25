import React, { useState } from 'react';
import { Users, Heart, Trophy, Church, Phone, Calendar, Filter } from 'lucide-react';
import { useApp, Association } from '../context/AppContext';

export default function AssociationsPage() {
  const { associations } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAssociation, setSelectedAssociation] = useState<Association | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes', icon: Users },
    { id: 'culturel', label: 'Culturelles', icon: Heart },
    { id: 'sportif', label: 'Sportives', icon: Trophy },
    { id: 'religieux', label: 'Religieuses', icon: Church },
    { id: 'social', label: 'Sociales', icon: Users }
  ];

  const filteredAssociations = selectedCategory === 'all' 
    ? associations 
    : associations.filter(assoc => assoc.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'culturel': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'sportif': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'religieux': return 'bg-green-100 text-green-700 border-green-200';
      case 'social': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vie Associative
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les associations dynamiques qui animent notre quartier et contribuent 
            à son développement social, culturel et sportif.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filtrer par catégorie :</span>
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

        {/* Associations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredAssociations.map((association) => (
            <div
              key={association.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => setSelectedAssociation(association)}
            >
              {/* Image */}
              {association.image && (
                <img
                  src={association.image}
                  alt={association.name}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              )}
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(association.category)}`}>
                    {association.category.charAt(0).toUpperCase() + association.category.slice(1)}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {association.createdDate}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {association.name}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {association.mission}
                </p>
                
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone size={16} className="mr-2" />
                  <span className="truncate">{association.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredAssociations.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune association trouvée
            </h3>
            <p className="text-gray-500">
              Aucune association ne correspond à cette catégorie pour le moment.
            </p>
          </div>
        )}

        {/* Association Detail Modal */}
        {selectedAssociation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedAssociation.name}
                </h2>
                <button
                  onClick={() => setSelectedAssociation(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                {selectedAssociation.image && (
                  <img
                    src={selectedAssociation.image}
                    alt={selectedAssociation.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedAssociation.mission}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Activités Principales</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedAssociation.activities.map((activity, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Catégorie</h3>
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(selectedAssociation.category)}`}>
                        {selectedAssociation.category.charAt(0).toUpperCase() + selectedAssociation.category.slice(1)}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Créée en</h3>
                      <p className="text-gray-700">{selectedAssociation.createdDate}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                    <div className="flex items-center text-gray-700">
                      <Phone size={18} className="mr-2 text-orange-500" />
                      {selectedAssociation.contact}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}