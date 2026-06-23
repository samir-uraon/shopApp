import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  StatusBar,
} from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  useEffect(() => {
    async function requestPermission() {
      if (Platform.OS === "android") {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
      }
    }

    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <WebView
        source={{ uri: "https://my-shop-samir.vercel.app" }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        geolocationEnabled
        originWhitelist={["*"]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});