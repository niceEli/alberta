import a from "./alberta";
import gameInfo from "./gameInfo";
import runtimeID from "./runtimeID";

export default function getAsset(
  name: string,
  global: boolean = false,
  sceneOverride?: string
): string {
  let asset: string = name;
  if (global) {
    asset = `${runtimeID}_${gameInfo["alberta_engine_prefix"]}_global_${name}`;
  } else if (sceneOverride) {
    asset = `${runtimeID}_${gameInfo["alberta_engine_prefix"]}_${sceneOverride}_${name}`;
  } else {
    asset = `${runtimeID}_${gameInfo["alberta_engine_prefix"]}_${a.g}_${name}`;
  }

  return asset;
}
