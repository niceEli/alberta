import { parse } from "plist";

export const gameInfo: any = parse(
  await (await fetch("./game_properties/gameInfo.plist")).text()
);

export default gameInfo;
