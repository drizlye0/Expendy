export function generateRandomColor(): string {
  const randomColor = Math.floor(Math.random() * 0xffffff);
  return `#${randomColor.toString(16).padStart(6, "0")}`;
}

export function generateRandomGrayHex(): string {
  const min = 40;
  const max = 215;
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  const hex = value.toString(16).padStart(2, "0");
  return `#${hex}${hex}${hex}`; // R=G=B
}
