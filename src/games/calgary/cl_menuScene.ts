import cl_albertaScene from "../../alberta_lib/cl_albertaScene";
import k from "../../kaplay";
import getAsset from "../../alberta_lib/getAsset";
import gameInfo from "../../alberta_lib/gameInfo";
import { getString } from "../../alberta_lib/locale";

export default class cl_menuScene extends cl_albertaScene {
  scene(): void {
    super.scene();
    k.add([k.rect(k.width(), k.height())]);
    k.add([k.text("TODO"), k.color(k.BLACK)]);

    let bgmsong = k.play(getAsset("calgary_bgm_calgaryLoop", true), {
      loop: true,
    });

    let games: any = {};

    gameInfo["games"].forEach((game: string) => {
      if (gameInfo["games_meta"] && gameInfo["games_meta"][game]) {
        let richGame = gameInfo["games_meta"][game] as any;
        if (richGame["menu_hidden"]) return;
        games[game] = {
          name: getString(richGame["rich_name"] ?? ""),
          description: getString(richGame["description"] ?? ""),
          icon: getAsset(
            richGame["favicon"] ?? "calgary_icons_edmontonLauncher"
          ),
          game: game,
        };
      }
    });

    console.log(games);
  }
}
