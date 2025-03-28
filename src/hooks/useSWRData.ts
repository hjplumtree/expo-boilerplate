import useSWR from "swr";

// Simple type for fetcher function
type Fetcher<Data> = (key: string) => Promise<Data>;

// Create a generic fetcher for mock data
const createFetcher = <T>(mockData: T): Fetcher<T> => {
  return async (key: string) => {
    console.log("Fetching:", key);
    // Return mock data
    return mockData;
  };
};

// User mock data
const userMockData = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
};

// Hook for user data
export function useUserData() {
  const { data, error, isLoading } = useSWR(
    "user",
    createFetcher(userMockData)
  );

  return {
    user: data,
    isLoading,
    error,
  };
}
