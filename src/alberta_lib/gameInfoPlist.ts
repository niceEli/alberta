import { parse } from "plist";

export const gameInfo: any = parse(
  await (await fetch("gameInfo.plist")).text()
);

export default gameInfo;
