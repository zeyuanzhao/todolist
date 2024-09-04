import { setUpDatabase } from "@/core/sql";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="list/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="create"
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
