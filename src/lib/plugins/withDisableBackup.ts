import { ConfigPlugin, withAndroidManifest } from "expo/config-plugins";

const withDisableBackup: ConfigPlugin = (config) => {
  return withAndroidManifest(config, (config) => {
    const mainApplication = config?.modResults?.manifest?.application?.[0];
    if (!mainApplication) {
      return config;
    }

    mainApplication.$ = mainApplication.$ || {};
    mainApplication.$["android:allowBackup"] = "false";

    return config;
  });
};

export default withDisableBackup;
