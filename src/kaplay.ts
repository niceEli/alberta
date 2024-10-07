import kaplay, { KAPLAYCtx } from "kaplay";
import "kaplay/global";

export const k: KAPLAYCtx = kaplay({
  width: 1280,
  height: 720,
  background: [0, 0, 0],
  letterbox: true,
  crisp: true,
  scale: 1,
  buttons: {
    ui_up: {
      keyboard: ["up"],
      gamepad: ["dpad-up"],
    },
    ui_down: {
      keyboard: ["down"],
      gamepad: ["dpad-down"],
    },
    ui_left: {
      keyboard: ["left"],
      gamepad: ["dpad-left"],
    },
    ui_right: {
      keyboard: ["right"],
      gamepad: ["dpad-right"],
    },
  },
});

export default k;
