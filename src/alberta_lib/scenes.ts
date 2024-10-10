import { SceneDef } from "kaplay";
import k from "../kaplay";
import runtimeID from "./runtimeID";
import a from "./alberta";
import gameInfo from "./gameInfo";

export function loadScene(
  name: string,
  scene: SceneDef,
  global: boolean = false
) {
  if (global) {
    k.scene(
      `${runtimeID}_${gameInfo["alberta_engine_prefix"]}_global_${name}`,
      scene
    );
  } else {
    k.scene(
      `${runtimeID}_${gameInfo["alberta_engine_prefix"]}_${a.g}_${name}`,
      scene
    );
  }
}

export function setScene(name: string, global: boolean = false) {
  if (global) {
    k.go(`${runtimeID}_${gameInfo["alberta_engine_prefix"]}_global_${name}`);
  } else {
    k.go(`${runtimeID}_${gameInfo["alberta_engine_prefix"]}_${a.g}_${name}`);
  }
}

export default this;
