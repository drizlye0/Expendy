import Modal from "@/Components/Modal";
import { useBottomSheetModal } from "@/Hooks/useBottomSheetModal";
import { HEIGHT } from "@/lib/constants";
import { Pressable } from "react-native";
import { Div, Input, InputProps, Text } from "react-native-magnus";

interface Props {
  inputProps: InputProps;
  options: string[];
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const modalHeight = HEIGHT * 0.3;

export function FormSelect({
  inputProps,
  options,
  selected,
  setSelected,
}: Props) {
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
