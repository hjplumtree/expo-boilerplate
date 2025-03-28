# Expo React Native Boilerplate

A modern, feature-rich boilerplate for building React Native applications with Expo and TypeScript.

## Features

- 🚀 **Expo SDK** - Take advantage of Expo's streamlined development experience
- 📱 **React Navigation** - Pre-configured navigation with bottom tabs
- 🎨 **React Native Paper** - Beautiful Material Design components
- 🔄 **Zustand** - Simple yet powerful state management
- ⚡ **SWR** - Data fetching with caching and revalidation
- ✅ **Zod** - Runtime type validation for forms and API data
- 📁 **Organized Structure** - Clean, scalable project organization
- 🔍 **TypeScript** - Type safety with path aliases for imports
- 🧪 **CI/CD Ready** - GitHub Actions workflow included

## Getting Started

### Prerequisites

- Node.js (v16+)
- pnpm (recommended) or npm/yarn
- For iOS builds: macOS with Xcode
- For Android builds: Android Studio and SDK

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/expo-boilerplate.git
cd expo-boilerplate

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm start

# Start on specific platforms
pnpm ios        # iOS (uses Expo Go or simulator)
pnpm android    # Android (uses Expo Go or emulator)
pnpm web        # Web browser
```

### Building for Production

```bash
# Create standalone builds
pnpm build:ios      # Build for iOS
pnpm build:android  # Build for Android
```

## Project Structure

```
expo-boilerplate/
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── navigation/      # Navigation setup and screens
│   ├── screens/         # Application screens
│   ├── store/           # State management with Zustand
│   ├── hooks/           # Custom React hooks
│   ├── theme/           # Theme configuration
│   ├── validation/      # Form validation schemas
│   ├── services/        # API and external services
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript type definitions
├── .github/             # GitHub Actions CI workflow
├── App.tsx              # App entry point
├── babel.config.js      # Babel configuration
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Themes

Customize the app's theme in `src/theme/index.ts`:

```typescript
// Example theme customization
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ee", // Change primary color
    secondary: "#03dac6", // Change secondary color
  },
};
```

### Adding New Screens

1. Create your screen component in `src/screens/`
2. Add it to the navigation in `src/navigation/index.tsx`

### State Management

Use the Zustand store for state management:

```typescript
// Access store in your components
import { useStore } from "../store";

function MyComponent() {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <Button onPress={toggleDarkMode}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </Button>
  );
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Zustand](https://github.com/pmndrs/zustand)
- [SWR](https://swr.vercel.app/)
- [Zod](https://github.com/colinhacks/zod)

---

Built with ❤️ by [claude with HeJ]
