import { View, StyleSheet } from "react-native";
import { Text, Card, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserData } from "../hooks/useSWRData";

export default function ProfileScreen() {
  // Use SWR to fetch user data
  const { user, isLoading, error } = useUserData();

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Profile
        </Text>

        <Card style={styles.card}>
          {isLoading ? (
            <Card.Content style={styles.centerContent}>
              <Text>Loading...</Text>
            </Card.Content>
          ) : error ? (
            <Card.Content style={styles.centerContent}>
              <Text>Error loading profile</Text>
            </Card.Content>
          ) : user ? (
            <Card.Content>
              <View style={styles.profileHeader}>
                <Avatar.Text size={60} label={user.name.substring(0, 2)} />
                <View style={styles.profileInfo}>
                  <Text variant="titleLarge">{user.name}</Text>
                  <Text variant="bodyMedium">{user.email}</Text>
                </View>
              </View>
            </Card.Content>
          ) : (
            <Card.Content style={styles.centerContent}>
              <Text>No user found</Text>
            </Card.Content>
          )}
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 24,
  },
  card: {
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileInfo: {
    marginLeft: 16,
  },
  centerContent: {
    alignItems: "center",
    padding: 16,
  },
});
