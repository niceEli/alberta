import cl_albertaScene from "../../alberta_lib/cl_albertaScene";
import k from "../../kaplay";
import getAsset from "../../alberta_lib/getAsset";
import gameInfo from "../../alberta_lib/gameInfo";
import reloadAlberta from "../../alberta_lib/reloadAlberta";
import { getString } from "../../alberta_lib/locale";

export default class cl_menuScene extends cl_albertaScene {
  scene(): void {
    super.scene();
    k.add([k.rect(k.width(), k.height())]);
    k.add([
      k.text("TODO, Press ESC to generate a generic save file"),
      k.color(k.BLACK),
    ]);

    let bgmsong = k.play(getAsset("yyc_bgl_yycLoop", true), { loop: true });

    let defaultSave: any = {};

    let games: Array<string> = [];

    gameInfo["games"].forEach((game: string) => {
      if (gameInfo["games_meta"] && gameInfo["games_meta"][game]) {
        games.push(game);
      }
    });

    games.forEach((game: string, index: number) => {
      defaultSave[`${gameInfo["alberta_engine_prefix"]}_${game}`] = {};
    });

    k.onUpdate(() => {
      if (k.isKeyDown("escape")) {
        bgmsong.stop();
        localStorage.setItem(
          `${gameInfo["alberta_engine_prefix"]}-alberta_saveGame`,
          JSON.stringify(defaultSave)
        );
        localStorage.setItem(
          `${gameInfo["alberta_engine_prefix"]}-alberta_options`,
          "{}"
        );
        reloadAlberta();
      }
    });
  }
}
