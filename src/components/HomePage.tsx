import React from 'react';
import { MapPin, Users, Heart, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-orange-600 to-orange-800 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg)' }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue à Santhiaba
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Un quartier vibrant où tradition et modernité se rencontrent
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Quartier
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Santhiaba est un quartier dynamique et chaleureux, riche de son histoire et de sa diversité culturelle. 
                Depuis sa création dans les années 1960, notre communauté n'a cessé de grandir et de se développer, 
                portée par l'esprit de solidarité et de <span className="font-semibold text-orange-600">teranga</span> qui nous caractérise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Aujourd'hui, Santhiaba est le foyer de nombreuses familles, associations et initiatives communautaires 
                qui œuvrent ensemble pour le bien-être de tous. De notre mosquée centrale à nos terrains de sport, 
                en passant par nos écoles et nos espaces de rencontre, chaque coin de notre quartier raconte une histoire 
                et témoigne de notre unité.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-700 mb-2">15+</h3>
              <p className="text-orange-600 font-medium">Associations Actives</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">65</h3>
              <p className="text-green-600 font-medium">Années d'Histoire</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-2">20+</h3>
              <p className="text-blue-600 font-medium">Lieux Emblématiques</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-2">100%</h3>
              <p className="text-purple-600 font-medium">Esprit Teranga</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              La Vie à Santhiaba
            </h2>
            <p className="text-lg text-gray-600">
              Des moments de partage qui font la richesse de notre communauté
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Identité</h3>
                <p className="text-gray-700 leading-relaxed">
                  Santhiaba puise sa force dans ses valeurs traditionnelles : respect des aînés, 
                  solidarité entre voisins, et ouverture aux autres. Ces principes guident notre 
                  vie quotidienne et nos projets d'avenir.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Avenir</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ensemble, nous construisons l'avenir de Santhiaba à travers des projets innovants 
                  qui respectent notre héritage tout en embrassant les défis modernes.
                </p>
              </div>
            </div>
            
            <div className="order-first lg:order-last">
              <img
                src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg"
                alt="Vie communautaire à Santhiaba"
                className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Découvrez Notre Quartier
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explorez notre riche histoire, nos associations dynamiques, et tout ce qui fait 
            de Santhiaba un lieu unique où il fait bon vivre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explorer l'Histoire
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Voir la Galerie
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}