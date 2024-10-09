import { GameInfoSchema } from "./gameInfoSchema";

export const gameInfo: GameInfoSchema = JSON.parse(
  await (await fetch("./game_properties/gameInfo.json")).text()
);

export default gameInfo;
