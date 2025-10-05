import "tsx/cjs";

import { ExpoConfig } from "expo/config";
import withDisableBackup from "@/lib/plugins/withDisableBackup";

export default ({ config }: { config: ExpoConfig }) => ({
  ...config,
  name: "ExpenseTracker",
  slug: "ExpenseTracker",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.anonymous.ExpenseTracker",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: "com.anonymous.ExpenseTracker",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [withDisableBackup],
});
