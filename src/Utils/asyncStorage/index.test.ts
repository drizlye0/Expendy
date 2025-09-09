import AsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

describe("Storage module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("saves an item", async () => {
    await AsyncStorage.setItem("key", JSON.stringify({ name: "Daniel" }));
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "key",
      JSON.stringify({ name: "Daniel" }),
    );
  });
});
