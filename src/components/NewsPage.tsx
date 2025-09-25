import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Plus, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function NewsPage() {
  const { events } = useApp();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Actualités & Événements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Restez informés des dernières nouvelles et des événements à venir 
            dans notre quartier Santhiaba.
          </p>
        </div>

        {/* Add Event Button */}
        <div className="text-center mb-8">
          <button className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            <Plus size={20} />
            <span>Proposer un événement</span>
          </button>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="mr-3 text-orange-500" />
            Événements à venir
          </h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        À venir
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={16} className="mr-1" />
                        {new Date(event.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2 text-orange-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Aucun événement à venir
              </h3>
              <p className="text-gray-500">
                Aucun événement n'est prévu pour le moment. Revenez bientôt !
              </p>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clock className="mr-3 text-gray-500" />
            Événements passés
          </h2>
          
          {pastEvents.length > 0 ? (
            <div className="space-y-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 lg:h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    )}
                    
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                          Terminé
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={16} className="mr-1" />
                          {new Date(event.date).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2 text-orange-500" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Aucun événement passé
              </h3>
              <p className="text-gray-500">
                L'historique des événements apparaîtra ici.
              </p>
            </div>
          )}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedEvent.title}
                </h2>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                {selectedEvent.image && (
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                )}
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      new Date(selectedEvent.date) >= new Date()
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {new Date(selectedEvent.date) >= new Date() ? 'À venir' : 'Terminé'}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock size={18} className="mr-2" />
                      {new Date(selectedEvent.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lieu</h3>
                    <div className="flex items-center text-gray-700">
                      <MapPin size={18} className="mr-2 text-orange-500" />
                      {selectedEvent.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-16 bg-orange-50 border border-orange-200 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">
              Restez informés
            </h2>
            <p className="text-orange-700 mb-6">
              Ne manquez aucun événement ! Inscrivez-vous pour recevoir les actualités 
              du quartier directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}