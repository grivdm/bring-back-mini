export const mini = {
  name: 'iPhone 13 mini', width: 64.2, height: 131.5, weight: 140,
  source: 'https://support.apple.com/en-gb/111873',
};
export const comparisons = [
  { name: 'iPhone 16', width: 71.6, height: 147.6, weight: 170, source: 'https://support.apple.com/en-us/121029' },
  { name: 'iPhone 16 Pro Max', width: 77.6, height: 163, weight: 227, source: 'https://support.apple.com/en-gb/121032' },
];
// Both silhouettes use the same canvas and millimetre-to-percentage scale.
export const comparisonHeight = Math.max(mini.height, ...comparisons.map(device => device.height));
export function scaledSize(device: { width: number; height: number }) {
  return { width: device.width / comparisonHeight * 100, height: device.height / comparisonHeight * 100 };
}
export function sizeDifference(device: typeof mini) {
  return { narrower: (device.width - mini.width).toFixed(1), lighter: device.weight - mini.weight };
}
