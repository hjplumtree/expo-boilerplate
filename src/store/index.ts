import { create } from 'zustand';

// Define your state shape
type AppState = {
  // UI settings
  darkMode: boolean;
  
  // Actions
  toggleDarkMode: () => void;
};

// Create the store
export const useStore = create<AppState>((set) => ({
  // Initial state
  darkMode: false,
  
  // Actions
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
