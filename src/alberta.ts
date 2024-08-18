import { GameObj, KAPLAYCtx } from "kaplay";
import k from "./kaplay";

type Alberta = {
  k: KAPLAYCtx,
  r: GameObj<any>
}

export const a: Alberta = {
  "k": k,
  "r": k.getTreeRoot()
};
export default a;


