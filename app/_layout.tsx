import { setUpDatabase } from "@/api/sql";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initDB = async () => {
      try {
        await setUpDatabase();
      } catch (e) {
        console.error(e);
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
      <Stack.Screen name="list/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="create"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
};

export default RootLayout;
