import {
  createItemsTable,
  createListTable,
  initializeDatabase,
} from "@/api/sql";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initDB = async () => {
      try {
        await initializeDatabase();
        await createListTable();
        await createItemsTable();
      } catch (error) {
        console.error(error);
      } finally {
        SplashScreen.hideAsync();
        setIsLoading(false);
      }
    };

    initDB();
  }, []);

  if (isLoading) {
    return null; // or a loading spinner component
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
