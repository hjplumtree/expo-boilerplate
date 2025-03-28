import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Button, Avatar, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const theme = useTheme();
  
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant="headlineLarge">Home</Text>
          <Text variant="bodyLarge">Welcome to the app</Text>
        </View>
        
        <View style={styles.section}>
          <Text variant="titleLarge" style={styles.sectionTitle}>Recent Items</Text>
          
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">Item 1</Text>
              <Text variant="bodyMedium">This is a description of item 1</Text>
            </Card.Content>
            <Card.Actions>
              <Button>View</Button>
            </Card.Actions>
          </Card>
          
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">Item 2</Text>
              <Text variant="bodyMedium">This is a description of item 2</Text>
            </Card.Content>
            <Card.Actions>
              <Button>View</Button>
            </Card.Actions>
          </Card>
        </View>
        
        <View style={styles.section}>
          <Text variant="titleLarge" style={styles.sectionTitle}>Quick Actions</Text>
          
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.cardRow}>
                <Avatar.Icon size={40} icon="star" />
                <View style={styles.cardTextContainer}>
                  <Text variant="titleMedium">Action 1</Text>
                  <Text variant="bodyMedium">Perform action 1</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
          
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.cardRow}>
                <Avatar.Icon size={40} icon="heart" />
                <View style={styles.cardTextContainer}>
                  <Text variant="titleMedium">Action 2</Text>
                  <Text variant="bodyMedium">Perform action 2</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  card: {
    marginBottom: 12,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTextContainer: {
    marginLeft: 16,
  },
});
