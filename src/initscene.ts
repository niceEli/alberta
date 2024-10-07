import cl_albertaScene from "./alberta_lib/cl_albertaScene";
import gameInfo from "./alberta_lib/gameInfoPlist";
import { gameLoad, swapGame } from "./setupScn";

export default class cl_initscene extends cl_albertaScene {
  async scene() {
    super.scene();

    await gameLoad();
    swapGame(gameInfo["starting_game"]);
  }
}
