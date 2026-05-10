/** Fare izine düşen blur — çakra / esans ilhamlı canlı palet */
const PALETTE: [number, number, number][] = [
  [232, 121, 149],
  [245, 158, 85],
  [251, 191, 36],
  [52, 211, 153],
  [56, 189, 248],
  [129, 140, 248],
  [192, 132, 252],
  [244, 114, 182],
  [34, 211, 238],
  [167, 139, 250],
  [251, 113, 133],
  [125, 211, 252],
];

export function pickHeroGradientBlurColor(): [number, number, number] {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)]!;
}
