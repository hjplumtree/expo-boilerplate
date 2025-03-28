import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { SWRProvider } from './src/config/swr';
import Navigation from './src/navigation';
import { theme } from './src/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <SWRProvider>
          <Navigation />
        </SWRProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
