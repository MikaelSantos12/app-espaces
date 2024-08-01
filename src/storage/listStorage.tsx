import AsyncStorage from "@react-native-async-storage/async-storage";

export async function showTooltip() {
  const tooltip = await AsyncStorage.getItem("tooltip_list");
  return tooltip == null;
}

export async function saveStorageTooltipList() {
  await AsyncStorage.setItem("tooltip_list", JSON.stringify(true));
}
