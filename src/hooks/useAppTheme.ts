import { useTheme as usePaperTheme } from 'react-native-paper';
import { AppTheme } from '../theme';

export function useAppTheme() {
  return usePaperTheme<AppTheme>();
}
