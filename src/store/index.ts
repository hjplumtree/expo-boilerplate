import { create } from 'zustand';

// Define the user type
type User = {
  id: string;
  email: string;
  name: string;
};

// Define your state shape
type AppState = {
  // Auth state
  user: User | null;
  isAuthenticated: boolean;
  authLoading: boolean;
  
  // App settings
  darkMode: boolean;
  
  // Actions
  login: (user: User) => void;
  logout: () => void;
  toggleDarkMode: () => void;
};

// Create the store
export const useStore = create<AppState>((set) => ({
  // Initial state
  user: null,
  isAuthenticated: false,
  authLoading: false,
  darkMode: false,
  
  // Actions
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

// Custom hooks for accessing slices of state
export const useAuth = () => useStore(state => ({
  user: state.user,
  isAuthenticated: state.isAuthenticated,
  authLoading: state.authLoading,
  login: state.login,
  logout: state.logout,
}));

export const useSettings = () => useStore(state => ({
  darkMode: state.darkMode,
  toggleDarkMode: state.toggleDarkMode,
}));
