import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

// Define our app colors
const colors = {
  primary: '#6200ee',
  secondary: '#03dac6',
  background: '#f5f5f5',
  surface: '#ffffff',
  error: '#B00020',
  text: '#000000',
  disabled: '#9e9e9e',
  placeholder: '#9e9e9e',
  border: '#e0e0e0',
};

// Define our spacing values
export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

// Create the theme
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  spacing,
  roundness: 8,
};

// Export the theme type
export type AppTheme = typeof theme;
