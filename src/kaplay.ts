import kaplay, { KAPLAYCtx } from "kaplay";
import "kaplay/global"

export const k: KAPLAYCtx = kaplay({
  "width": 1280,
  "height": 720,
  "background": [0,0,0],
  "letterbox": true,
  "crisp": true,
  "scale": 1,
});

export default k;
