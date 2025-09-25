import React, { useState } from 'react';
import { Menu, X, Home, Clock, Users, UserCheck, Image, Calendar, Map, Phone, Settings } from 'lucide-react';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import AssociationsPage from './components/AssociationsPage';
import OrganizationPage from './components/OrganizationPage';
import GalleryPage from './components/GalleryPage';
import NewsPage from './components/NewsPage';
import MapPage from './components/MapPage';
import ContactPage from './components/ContactPage';
import AdminPanel from './components/AdminPanel';
import { AppProvider } from './context/AppContext';

type Page = 'home' | 'history' | 'associations' | 'organization' | 'gallery' | 'news' | 'map' | 'contact' | 'admin';

const navigation = [
  { id: 'home', label: 'Accueil', icon: Home },
  { id: 'history', label: 'Historique', icon: Clock },
  { id: 'associations', label: 'Vie Associative', icon: Users },
  { id: 'organization', label: 'Organisation', icon: UserCheck },
  { id: 'gallery', label: 'Galerie', icon: Image },
  { id: 'news', label: 'Actualités', icon: Calendar },
  { id: 'map', label: 'Carte', icon: Map },
  { id: 'contact', label: 'Contact', icon: Phone },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const renderPage = () => {
    if (isAdmin) return <AdminPanel onClose={() => setIsAdmin(false)} />;
    
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'history': return <HistoryPage />;
      case 'associations': return <AssociationsPage />;
      case 'organization': return <OrganizationPage />;
      case 'gallery': return <GalleryPage />;
      case 'news': return <NewsPage />;
      case 'map': return <MapPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  const handleNavClick = (pageId: Page) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-orange-600 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-white text-xl font-bold">Quartier Santhiaba</h1>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id as Page)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        currentPage === item.id
                          ? 'bg-orange-700 text-white'
                          : 'text-orange-100 hover:bg-orange-500 hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Admin & Mobile Menu Button */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsAdmin(!isAdmin)}
                  className="p-2 rounded-md text-orange-100 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <Settings size={20} />
                </button>
                
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-md text-orange-100 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-orange-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id as Page)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        currentPage === item.id
                          ? 'bg-orange-800 text-white'
                          : 'text-orange-100 hover:bg-orange-600 hover:text-white'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {renderPage()}
        </main>

        {/* Footer */}
        {!isAdmin && (
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Quartier Santhiaba</h3>
                <p className="text-gray-400">
                  Ensemble pour le développement de notre communauté
                </p>
                <p className="text-gray-500 text-sm mt-4">
                  © 2025 Application Santhiaba. Développé avec ❤️ pour la communauté.
                </p>
              </div>
            </div>
          </footer>
        )}
      </div>
    </AppProvider>
  );
}

export default App;