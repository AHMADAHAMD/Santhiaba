import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Association {
  id: string;
  name: string;
  mission: string;
  createdDate: string;
  category: 'culturel' | 'sportif' | 'religieux' | 'social';
  activities: string[];
  contact: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  image?: string;
}

export interface HistoryEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  importance: 'high' | 'medium' | 'low';
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  category: 'comité' | 'jeunesse' | 'femmes' | 'religieux';
  description: string;
  contact: string;
}

export interface MediaItem {
  id: string;
  type: 'photo' | 'video' | 'audio';
  title: string;
  url: string;
  description: string;
  date: string;
}

export interface Location {
  id: string;
  name: string;
  type: 'mosquee' | 'ecole' | 'sport' | 'public' | 'commerce';
  description: string;
  coordinates: { lat: number; lng: number };
}

interface AppContextType {
  associations: Association[];
  events: Event[];
  historyEvents: HistoryEvent[];
  leaders: Leader[];
  mediaItems: MediaItem[];
  locations: Location[];
  addAssociation: (association: Association) => void;
  addEvent: (event: Event) => void;
  addHistoryEvent: (event: HistoryEvent) => void;
  addLeader: (leader: Leader) => void;
  addMediaItem: (item: MediaItem) => void;
  addLocation: (location: Location) => void;
  updateAssociation: (id: string, association: Association) => void;
  deleteAssociation: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Sample data
const sampleAssociations: Association[] = [
  {
    id: '1',
    name: 'Association Sportive Santhiaba',
    mission: 'Promouvoir le sport et l\'activité physique chez les jeunes du quartier',
    createdDate: '2015',
    category: 'sportif',
    activities: ['Football', 'Basketball', 'Athlétisme', 'Tournois inter-quartiers'],
    contact: 'Mamadou Diallo - 77 123 45 67',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg'
  },
  {
    id: '2',
    name: 'Groupe Culturel Teranga',
    mission: 'Préserver et transmettre la culture sénégalaise aux nouvelles générations',
    createdDate: '2010',
    category: 'culturel',
    activities: ['Danse traditionnelle', 'Musique', 'Théâtre', 'Contes et légendes'],
    contact: 'Aminata Ndiaye - 76 987 65 43',
    image: 'https://images.pexels.com/photos/6032391/pexels-photo-6032391.jpeg'
  },
  {
    id: '3',
    name: 'Association des Femmes de Santhiaba',
    mission: 'Autonomiser les femmes et promouvoir l\'entrepreneuriat féminin',
    createdDate: '2012',
    category: 'social',
    activities: ['Micro-crédit', 'Formation professionnelle', 'Solidarité', 'Jardins communautaires'],
    contact: 'Fatou Sarr - 78 456 12 34'
  }
];

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Festival Culturel Santhiaba 2025',
    date: '2025-03-15',
    description: 'Grand festival annuel célébrant la richesse culturelle de notre quartier',
    location: 'Place centrale du quartier',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg'
  },
  {
    id: '2',
    title: 'Journée de Salubrité',
    date: '2025-02-10',
    description: 'Mobilisation générale pour le nettoyage et l\'embellissement du quartier',
    location: 'Tout le quartier'
  }
];

const sampleHistory: HistoryEvent[] = [
  {
    id: '1',
    year: '1960',
    title: 'Création du quartier Santhiaba',
    description: 'Fondation officielle du quartier par les premiers habitants venus de la région de Kaolack',
    importance: 'high'
  },
  {
    id: '2',
    year: '1975',
    title: 'Construction de la première mosquée',
    description: 'Édification de la mosquée centrale qui devient le cœur spirituel du quartier',
    importance: 'high'
  },
  {
    id: '3',
    year: '1990',
    title: 'Ouverture de l\'école primaire',
    description: 'Création de la première école du quartier, marquant un tournant dans l\'éducation locale',
    importance: 'high'
  },
  {
    id: '4',
    year: '2005',
    title: 'Installation de l\'éclairage public',
    description: 'Modernisation du quartier avec l\'arrivée de l\'éclairage dans toutes les rues principales',
    importance: 'medium'
  }
];

const sampleLeaders: Leader[] = [
  {
    id: '1',
    name: 'El Hadj Ousmane Ba',
    role: 'Imam de la mosquée centrale',
    category: 'religieux',
    description: 'Guide spirituel respecté, leader moral de la communauté depuis 20 ans',
    contact: '77 111 22 33'
  },
  {
    id: '2',
    name: 'Astou Diouf',
    role: 'Présidente du comité des femmes',
    category: 'femmes',
    description: 'Militante active pour les droits des femmes et le développement social',
    contact: '76 444 55 66'
  },
  {
    id: '3',
    name: 'Ibrahima Seck',
    role: 'Délégué de quartier',
    category: 'comité',
    description: 'Représentant officiel du quartier auprès des autorités municipales',
    contact: '78 777 88 99'
  }
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [associations, setAssociations] = useState<Association[]>(sampleAssociations);
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  const [historyEvents, setHistoryEvents] = useState<HistoryEvent[]>(sampleHistory);
  const [leaders, setLeaders] = useState<Leader[]>(sampleLeaders);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  const addAssociation = (association: Association) => {
    setAssociations(prev => [...prev, association]);
  };

  const addEvent = (event: Event) => {
    setEvents(prev => [...prev, event]);
  };

  const addHistoryEvent = (event: HistoryEvent) => {
    setHistoryEvents(prev => [...prev, event]);
  };

  const addLeader = (leader: Leader) => {
    setLeaders(prev => [...prev, leader]);
  };

  const addMediaItem = (item: MediaItem) => {
    setMediaItems(prev => [...prev, item]);
  };

  const addLocation = (location: Location) => {
    setLocations(prev => [...prev, location]);
  };

  const updateAssociation = (id: string, updatedAssociation: Association) => {
    setAssociations(prev => prev.map(assoc => assoc.id === id ? updatedAssociation : assoc));
  };

  const deleteAssociation = (id: string) => {
    setAssociations(prev => prev.filter(assoc => assoc.id !== id));
  };

  return (
    <AppContext.Provider value={{
      associations,
      events,
      historyEvents,
      leaders,
      mediaItems,
      locations,
      addAssociation,
      addEvent,
      addHistoryEvent,
      addLeader,
      addMediaItem,
      addLocation,
      updateAssociation,
      deleteAssociation
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}