import Modal from "@/Components/Modal";
import { useBottomSheetModal } from "@/Hooks/useBottomSheetModal";
import { useKeyboard } from "@/Hooks/useKeyboard";
import { Pressable, Keyboard } from "react-native";
import { Div, Input, InputProps, Text } from "react-native-magnus";

interface Props {
  inputProps: InputProps;
  options: string[];
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export function FormSelect({
  inputProps,
  options,
  selected,
  setSelected,
}: Props) {
  const { ref, handleModalPresent, handleModalClose } = useBottomSheetModal();
  const isKeyboardOpen = useKeyboard();

  const handlePresent = () => {
    if (!isKeyboardOpen) {
      handleModalPresent();
      return;
    }

    Keyboard.dismiss();
    handleModalPresent();
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    handleModalClose();
  };

  return (
    <>
      <Pressable onPress={handlePresent}>
        <Input editable={false} {...inputProps} value={selected || ""} />
      </Pressable>
      <Modal ref={ref}>
        <Div>
          {options.map((opt, index) => (
            <Pressable key={index} onPress={() => handleSelect(opt)}>
              <Div py="sm" px="xl">
                <Text mb="sm" fontSize="xl" fontWeight="bold">{opt}</Text>
              </Div>
            </Pressable>
          ))}
        </Div>
      </Modal>
    </>
  );
}
