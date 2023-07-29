const Color = {
  red: "RED",
  green: "GREEN",
  blue: "BLUE",
} as const;

type RGB = [number, number, number];

const pallete = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<keyof typeof Color, string | RGB>;
