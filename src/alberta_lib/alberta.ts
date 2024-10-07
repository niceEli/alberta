import { GameObj, KAPLAYCtx } from "kaplay";
import k from "../kaplay";

export type Alberta = {
  k: KAPLAYCtx;
  r: GameObj<any>;
  g: string;
};

export const a: Alberta = {
  k: k,
  r: k.getTreeRoot(),
  g: "Init",
};
export default a;
