import React from 'react';
import { Calendar, Star, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function HistoryPage() {
  const { historyEvents } = useApp();

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getImportanceIcon = (importance: string) => {
    switch (importance) {
      case 'high': return <Star className="w-4 h-4" />;
      case 'medium': return <Calendar className="w-4 h-4" />;
      case 'low': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Histoire de Santhiaba
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les moments clés qui ont façonné notre quartier, des origines à nos jours. 
            Chaque événement raconte une partie de notre identité collective.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg"
            alt="Histoire de Santhiaba"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-300 md:transform md:-translate-x-0.5"></div>
          
          {/* Timeline Events */}
          <div className="space-y-8">
            {historyEvents
              .sort((a, b) => parseInt(a.year) - parseInt(b.year))
              .map((event, index) => (
                <div key={event.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-orange-500 rounded-full border-4 border-white shadow-lg md:transform md:-translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getImportanceColor(event.importance)}`}>
                          {getImportanceIcon(event.importance)}
                          <span className="capitalize">{event.importance === 'high' ? 'Majeur' : event.importance === 'medium' ? 'Important' : 'Notable'}</span>
                        </div>
                        <span className="text-2xl font-bold text-orange-600">{event.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Notre Histoire Continue
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              L'histoire de Santhiaba ne s'arrête pas ici. Chaque jour, nous écrivons de nouvelles pages 
              grâce à l'engagement de notre communauté et aux projets que nous menons ensemble. 
              L'avenir de notre quartier se construit aujourd'hui, avec vous.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">65+</div>
              <div className="text-gray-700">Années d'existence</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-700">Familles</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-700">Possibilités d'avenir</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}