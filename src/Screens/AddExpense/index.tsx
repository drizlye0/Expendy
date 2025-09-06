import { StatusBar } from "expo-status-bar";
import React from "react";
import { Modal, Text, Button, Div } from "react-native-magnus";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export default function AddExpense({ visible, setVisible }: Props) {
  return (
    <SafeAreaView>
      <StatusBar style="auto" translucent={true} />
      <Div flex={1} justifyContent="center" alignItems="center">
        <Modal isVisible={visible}>
          <Button onPress={() => setVisible(false)}>
            <Text>Close Modal</Text>
          </Button>
          <Text>Hello world</Text>
        </Modal>
      </Div>
    </SafeAreaView>
  );
}
