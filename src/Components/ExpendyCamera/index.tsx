import { mediaAndroidPermissions } from '@/Utils/permissions/mediaAndroidPermissions';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Button, Div } from 'react-native-magnus';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function ExpendyCamera() {
  const navigation = useNavigation();
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);

  const {
    hasPermission: hasCameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();

  const [permissionsReady, setPermissionsReady] = useState(false);

  // TODO: REFACTOR
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

  const handlePicture = async () => {
    try {
      if (camera.current == null) {
        navigation.goBack();
        Alert.alert('camera device error');
        return;
      }

      const picture = await camera.current.takePhoto();
      const localUri = `file://${picture.path}`;

      await CameraRoll.save(localUri, { type: 'photo' });

      navigation.navigate('ExpenseForm', {
        photoUri: localUri,
      });
    } catch (e) {
      Alert.alert('unxpected error ocurred');
      console.log(e);
      return;
    }
  };

  return (
    <Div flex={1}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      <Button
        onPress={handlePicture}
        position="absolute"
        bottom={0}
        alignSelf="center"
      >
        take expense
      </Button>
    </Div>
  );
}
