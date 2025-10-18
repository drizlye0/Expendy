import { mediaAndroidPermissions } from '@/Utils/permissions/mediaAndroidPermissions';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function ExpendyCamera() {
  const navigation = useNavigation();
  const device = useCameraDevice('back');
  const {
    hasPermission: hasCameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();

  const [permissionsReady, setPermissionsReady] = useState(false);

  useEffect(() => {
    const setupPermissions = async () => {
      if (!hasCameraPermission) {
        const granted = await requestCameraPermission();
        if (!granted) {
          Alert.alert('Permiso de cámara denegado');
          navigation.goBack();
          return;
        }
      }

      const {
        hasPermission: hasMediaPermission,
        requestPermission: requestMediaPermission,
      } = await mediaAndroidPermissions();

      if (!hasMediaPermission) {
        const grantedMedia = await requestMediaPermission();
        if (!grantedMedia) {
          Alert.alert('Permiso de almacenamiento denegado');
          navigation.goBack();
          return;
        }
      }

      setPermissionsReady(true);
    };

    setupPermissions();
  }, [hasCameraPermission, navigation, requestCameraPermission]);

  if (!permissionsReady) return null;

  if (device == null) {
    Alert.alert('Error: no se detectó cámara');
    navigation.goBack();
    return null;
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}
