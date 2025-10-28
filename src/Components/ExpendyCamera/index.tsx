import { WIDTH } from '@/lib/constants';
import { RootStackParamList } from '@/Navigators/Root';
import { mediaAndroidPermissions } from '@/Utils/permissions/mediaAndroidPermissions';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { Button, Div } from 'react-native-magnus';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';

type Props = NativeStackScreenProps<RootStackParamList, 'ExpendyCamera'>;

export default function ExpendyCamera({ route }: Props) {
  const navigation = useNavigation();
  const device = useCameraDevice('back');
  const format = useCameraFormat(device, [
    { photoAspectRatio: 4 / 3 },
    { fps: 60 },
  ]);
  const camera = useRef<Camera>(null);

  const cameraHeight = (WIDTH * 4) / 3;

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
      route.params?.onPhotoTaken(localUri);

      navigation.goBack();
    } catch (e) {
      navigation.goBack();
      Alert.alert('unxpected error ocurred');
      console.log(e);
      return;
    }
  };

  return (
    <Div flex={1} bg="#171717">
      <Div flex={1} justifyContent="flex-start" mt={80}>
        <Camera
          ref={camera}
          style={{
            height: cameraHeight,
            width: '100%',
            overflow: 'hidden',
            borderRadius: 12,
          }}
          device={device}
          photo={true}
          format={format}
          isActive={true}
        />
      </Div>
      <Div flex={1} mt={20} alignSelf="center" justifyContent="center">
        <Button
          onPress={handlePicture}
          rounded="circle"
          bg="gray100"
          p={30}
          borderColor="gray900"
          borderWidth={6}
        ></Button>
      </Div>
    </Div>
  );
}
