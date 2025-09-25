import React, { useState } from 'react';
import { X, Plus, Edit, Trash2, Save, User, Calendar, Users, Image } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface AdminPanelProps {
  onClose: () => void;
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const { associations, events, leaders, addAssociation, addEvent, addLeader } = useApp();
  const [activeTab, setActiveTab] = useState<string>('associations');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const tabs = [
    { id: 'associations', label: 'Associations', icon: Users },
    { id: 'events', label: 'Événements', icon: Calendar },
    { id: 'leaders', label: 'Leaders', icon: User },
    { id: 'media', label: 'Médias', icon: Image }
  ];

  const AddAssociationForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      mission: '',
      createdDate: '',
      category: 'social' as const,
      activities: '',
      contact: '',
      image: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addAssociation({
        id: Date.now().toString(),
        ...formData,
        activities: formData.activities.split(',').map(a => a.trim())
      });
      setFormData({ name: '', mission: '', createdDate: '', category: 'social', activities: '', contact: '', image: '' });
      setShowAddForm(false);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mission</label>
          <textarea
            required
            value={formData.mission}
            onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            rows={3}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Année de création</label>
            <input
              type="text"
              required
              value={formData.createdDate}
              onChange={(e) => setFormData({ ...formData, createdDate: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="culturel">Culturelle</option>
              <option value="sportif">Sportive</option>
              <option value="religieux">Religieuse</option>
              <option value="social">Sociale</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Activités (séparées par des virgules)</label>
          <input
            type="text"
            required
            value={formData.activities}
            onChange={(e) => setFormData({ ...formData, activities: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Football, Basketball, Tournois"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
          <input
            type="text"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Nom - Téléphone"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (optionnel)</label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex space-x-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Save size={18} />
            <span>Sauvegarder</span>
          </button>
          <button
            type="button"
            onClick={() => setShowAddForm(false)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
        </div>
      </form>
    );
  };

  const AddEventForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      date: '',
      description: '',
      location: '',
      image: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addEvent({
        id: Date.now().toString(),
        ...formData
      });
      setFormData({ title: '', date: '', description: '', location: '', image: '' });
      setShowAddForm(false);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            rows={3}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lieu</label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (optionnel)</label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex space-x-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Save size={18} />
            <span>Sauvegarder</span>
          </button>
          <button
            type="button"
            onClick={() => setShowAddForm(false)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panneau d'Administration</h1>
            <p className="text-gray-600 mt-2">Gérez le contenu de l'application Santhiaba</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-200 p-1 rounded-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-orange-600 shadow-sm'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md">
          {/* Header with Add Button */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
            >
              <Plus size={18} />
              <span>Ajouter</span>
            </button>
          </div>

          {/* Add Form */}
          {showAddForm && (
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Ajouter {activeTab === 'associations' ? 'une association' : 
                         activeTab === 'events' ? 'un événement' : 
                         activeTab === 'leaders' ? 'un leader' : 'un média'}
              </h3>
              {activeTab === 'associations' && <AddAssociationForm />}
              {activeTab === 'events' && <AddEventForm />}
            </div>
          )}

          {/* Content List */}
          <div className="p-6">
            {activeTab === 'associations' && (
              <div className="space-y-4">
                {associations.map((association) => (
                  <div key={association.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{association.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{association.mission}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Créée en {association.createdDate}</span>
                          <span className="capitalize">{association.category}</span>
                          <span>{association.activities.length} activités</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'leaders' && (
              <div className="space-y-4">
                {leaders.map((leader) => (
                  <div key={leader.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{leader.name}</h3>
                        <p className="text-orange-600 text-sm font-medium mb-2">{leader.role}</p>
                        <p className="text-gray-600 text-sm mb-2">{leader.description}</p>
                        <div className="text-sm text-gray-500">
                          <span className="capitalize">{leader.category}</span> • {leader.contact}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'media' && (
              <div className="text-center py-12">
                <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Gestion des médias
                </h3>
                <p className="text-gray-500">
                  Cette section sera développée pour la gestion des photos, vidéos et audios.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">{associations.length}</div>
            <div className="text-gray-600">Associations</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{events.length}</div>
            <div className="text-gray-600">Événements</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">{leaders.length}</div>
            <div className="text-gray-600">Leaders</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">0</div>
            <div className="text-gray-600">Médias</div>
          </div>
        </div>
      </div>
    </div>
  );
}