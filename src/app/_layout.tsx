import { Stack } from "expo-router";
import { useEffect } from "react";
import { PermissionsAndroid, Platform } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    async function requestLocationPermission() {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app needs your location to provide location-based features.",
            buttonPositive: "Allow",
            buttonNegative: "Deny",
          }
        );

        console.log("Location permission:", granted);
      }
    }

    requestLocationPermission();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}