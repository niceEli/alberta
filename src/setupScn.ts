import a from "./alberta_lib/alberta";
import gameInfo from "./alberta_lib/gameInfoPlist";
import k from "./kaplay";

export async function gameLoad() {
  for (let i in gameInfo["games"]) {
    let scn = await import(`./games/${gameInfo["games"][i]}/cl_init.ts`);
    k.scene(
      "cl_init_albertagame_" + gameInfo["games"][i],
      new scn.default().scene
    );
  }
}

export function swapGame(game: string) {
  a.g = game;
  k.go("cl_init_albertagame_" + game);
}
