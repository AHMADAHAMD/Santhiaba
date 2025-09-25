import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  Clock,
  Users,
  UserCheck,
  Image,
  Calendar,
  Map,
  Phone,
  Settings,
} from 'lucide-react';
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

type Page =
  | 'home'
  | 'history'
  | 'associations'
  | 'organization'
  | 'gallery'
  | 'news'
  | 'map'
  | 'contact'
  | 'admin';

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
      case 'home':
        return <HomePage />;
      case 'history':
        return <HistoryPage />;
      case 'associations':
        return <AssociationsPage />;
      case 'organization':
        return <OrganizationPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'news':
        return <NewsPage />;
      case 'map':
        return <MapPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const handleNavClick = (pageId: Page) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  return (
    <AppProvider>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <span className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-orange-500/40 via-pink-500/40 to-purple-500/30 blur-3xl" />
          <span className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent blur-3xl" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 bg-clip-text text-xl font-bold text-transparent">
                Quartier Santhiaba
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-2 lg:flex">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as Page)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-white/20 text-white shadow-lg shadow-orange-500/20'
                        : 'text-slate-100 hover:bg-white/10 hover:text-white'
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
                className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-slate-100 shadow-inner transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Settings size={20} />
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-slate-100 transition-all hover:bg-white/20 lg:hidden"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="border-t border-white/10 bg-slate-900/80 backdrop-blur-xl lg:hidden">
              <div className="space-y-2 px-3 py-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id as Page)}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                        isActive
                          ? 'bg-white/15 text-white shadow-lg shadow-orange-500/20'
                          : 'text-slate-100 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={20} />
                        {item.label}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-white/40">Voir</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="relative z-10">{renderPage()}</main>

        {/* Footer */}
        {!isAdmin && (
          <footer className="relative z-10 border-t border-white/10 bg-slate-900/70 py-10 text-white backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <h3 className="text-lg font-semibold tracking-wide">Quartier Santhiaba</h3>
              <p className="mt-3 text-sm text-white/70">
                Ensemble pour le développement de notre communauté
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
                <span className="h-px w-10 bg-white/20" />
                <span>Depuis 1960</span>
                <span className="h-px w-10 bg-white/20" />
              </div>
              <p className="mt-6 text-xs text-white/50">
                © 2025 Application Santhiaba. Développé avec ❤️ pour la communauté.
              </p>
            </div>
          </footer>
        )}
      </div>
    </AppProvider>
  );
}

export default App;
