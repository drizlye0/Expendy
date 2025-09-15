import Modal from "@/Components/Modal";
import { useBottomSheetModal } from "@/Hooks/useBottomSheetModal";
import { HEIGHT } from "@/lib/constants";
import { useState } from "react";
import { Pressable } from "react-native";
import { Div, Input, InputProps, Text } from "react-native-magnus";

interface Props {
  inputProps: InputProps;
  options: string[];
}

const modalHeight = HEIGHT * 0.3;

export function FormSelect({ inputProps, options }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const { ref, handleModalPresent, handleModalClose } = useBottomSheetModal();

  const handleSelect = (value: string) => {
    setSelected(value);
    handleModalClose();
  };

  return (
    <>
      <Pressable onPress={handleModalPresent}>
        <Input editable={false} {...inputProps} value={selected || ""} />
      </Pressable>
      <Modal ref={ref} height={modalHeight}>
        <Div>
          {options.map((opt, index) => (
            <Pressable key={index} onPress={() => handleSelect(opt)}>
              <Div py="md" px="xl">
                <Text>{opt}</Text>
              </Div>
            </Pressable>
          ))}
        </Div>
      </Modal>
    </>
  );
}
