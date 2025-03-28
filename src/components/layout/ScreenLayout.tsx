import { ReactNode } from 'react';
import { StyleSheet, View, ScrollView, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenLayoutProps = {
  children: ReactNode;
  scrollable?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};

export default function ScreenLayout({
  children,
  scrollable = true,
  style,
  contentContainerStyle,
}: ScreenLayoutProps) {
  if (scrollable) {
    return (
      <SafeAreaView style={[styles.container, style]} edges={['right', 'left']}>
        <ScrollView contentContainerStyle={[styles.scrollContent, contentContainerStyle]}>
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, style]} edges={['right', 'left']}>
      <View style={[styles.content, contentContainerStyle]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
