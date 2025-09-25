import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, User, MessageSquare, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ContactPage() {
  const { associations, leaders } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vous avez des questions, suggestions ou souhaitez vous impliquer dans la vie 
            de notre quartier ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="77 123 45 67"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="L'objet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
                  placeholder="Écrivez votre message ici..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* General Contact */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations générales
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-700">Quartier Santhiaba, Thiès, Sénégal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-700">+221 77 XXX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-700">contact@santhiaba.sn</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Heures d'ouverture</h3>
                    <p className="text-gray-700">Lundi - Vendredi : 8h00 - 18h00</p>
                    <p className="text-gray-700">Samedi : 8h00 - 12h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Contacts */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contacts utiles
              </h2>
              
              <div className="space-y-4">
                {leaders.slice(0, 3).map((leader) => (
                  <div key={leader.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-3">
                      <User className="w-5 h-5 text-orange-500 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{leader.name}</h3>
                        <p className="text-orange-600 text-sm font-medium mb-1">{leader.role}</p>
                        <p className="text-gray-600 text-sm mb-2">{leader.description}</p>
                        <div className="flex items-center text-gray-700 text-sm">
                          <Phone size={14} className="mr-1" />
                          {leader.contact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4">
                Contacts d'urgence
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-red-700">Police :</span>
                  <span className="font-semibold text-red-800">17</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Pompiers :</span>
                  <span className="font-semibold text-red-800">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">SAMU :</span>
                  <span className="font-semibold text-red-800">15</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Associations Contact */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contacter nos associations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associations.slice(0, 6).map((association) => (
              <div key={association.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{association.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{association.mission}</p>
                <div className="flex items-center text-gray-700 text-sm">
                  <Phone size={14} className="mr-2 text-orange-500" />
                  <span className="truncate">{association.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
          <MessageSquare className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-orange-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            Vous souhaitez vous impliquer davantage dans la vie de Santhiaba ? 
            Participez aux réunions communautaires, rejoignez une association 
            ou proposez vos propres initiatives !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Participer aux réunions
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
              Proposer une initiative
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}