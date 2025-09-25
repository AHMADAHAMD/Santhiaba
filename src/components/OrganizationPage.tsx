import React, { useState } from 'react';
import { UserCheck, Crown, Users, Heart, Phone, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function OrganizationPage() {
  const { leaders } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous', icon: Users },
    { id: 'comité', label: 'Comités', icon: Shield },
    { id: 'religieux', label: 'Religieux', icon: Crown },
    { id: 'femmes', label: 'Femmes', icon: Heart },
    { id: 'jeunesse', label: 'Jeunesse', icon: UserCheck }
  ];

  const filteredLeaders = selectedCategory === 'all' 
    ? leaders 
    : leaders.filter(leader => leader.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'comité': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'religieux': return 'bg-green-100 text-green-700 border-green-200';
      case 'femmes': return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'jeunesse': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'comité': return Shield;
      case 'religieux': return Crown;
      case 'femmes': return Heart;
      case 'jeunesse': return UserCheck;
      default: return Users;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Organisation Sociale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les leaders et structures qui organisent et animent la vie sociale 
            de notre quartier Santhiaba.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Structure Communautaire
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'organisation sociale de Santhiaba repose sur des structures traditionnelles 
                et modernes qui travaillent en harmonie pour le bien-être de tous. Des comités 
                de quartier aux groupements de femmes, en passant par les mouvements de jeunesse 
                et les autorités religieuses, chaque structure joue un rôle crucial dans notre 
                cohésion sociale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ces leaders et organisations sont les piliers de notre démocratie participative 
                locale, assurant la représentation de tous les groupes et la prise en compte 
                des besoins de chaque famille.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Leadership communautaire"
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
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

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeaders.map((leader) => {
            const CategoryIcon = getCategoryIcon(leader.category);
            
            return (
              <div
                key={leader.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CategoryIcon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">
                    {leader.role}
                  </p>
                  
                  <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(leader.category)}`}>
                    {leader.category.charAt(0).toUpperCase() + leader.category.slice(1)}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-center mb-4">
                  {leader.description}
                </p>
                
                <div className="flex items-center justify-center text-gray-600 text-sm">
                  <Phone size={16} className="mr-2" />
                  <span>{leader.contact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results message */}
        {filteredLeaders.length === 0 && (
          <div className="text-center py-12">
            <UserCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun leader trouvé
            </h3>
            <p className="text-gray-500">
              Aucun leader ne correspond à cette catégorie pour le moment.
            </p>
          </div>
        )}

        {/* Organization Structure */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Fonctionnement de nos Structures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Shield className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-700 mb-2">Comités</h3>
              <p className="text-blue-600 text-sm">
                Gestion administrative et représentation officielle
              </p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Crown className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-green-700 mb-2">Religieux</h3>
              <p className="text-green-600 text-sm">
                Guidance spirituelle et conseil moral
              </p>
            </div>
            
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold text-pink-700 mb-2">Femmes</h3>
              <p className="text-pink-600 text-sm">
                Développement social et autonomisation
              </p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <UserCheck className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-purple-700 mb-2">Jeunesse</h3>
              <p className="text-purple-600 text-sm">
                Animation et dynamisme du quartier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}