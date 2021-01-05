import colors from './colors.json';

export default function returnRandomColor() {
  const mainLength = Math.floor(Math.random() * Object.keys(colors).length);
  const mainName = Object.keys(colors)[mainLength];
  const colorNames = Object.values(colors[mainName]);
  const mainCol = colorNames[Math.floor(Math.random() * colorNames.length)];

  return (mainCol);
}