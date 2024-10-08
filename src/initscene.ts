import cl_albertaScene from "./alberta_lib/cl_albertaScene";
import gameInfo from "./alberta_lib/gameInfoPlist";
import k from "./kaplay";
import { swapGame } from "./setupScn";

let lInfo = {
  info: [],
};

export default class cl_initscene extends cl_albertaScene {
  async scene() {
    super.scene();

    k.add([
      k.text(""),
      {
        update() {
          (this as any).text = lInfo.info.reverse().join("\n");
          lInfo.info.reverse();
        },
      },
    ]);

    await gameLoad();
    // @ts-expect-error TS2345
    lInfo.info.push("Loaded all games, starting " + gameInfo["starting_game"]);
    await k.wait(0.1);
    swapGame(gameInfo["starting_game"]);
  }
}

async function gameLoad() {
  for (let i in gameInfo["games"]) {
    let scn = await import(`./games/${gameInfo["games"][i]}/cl_init.ts`);
    // @ts-expect-error TS2345
    lInfo.info.push("Loading " + gameInfo["games"][i]);
    await k.wait(0.05);
    k.scene(
      "cl_init_albertagame_" + gameInfo["games"][i],
      new scn.default().scene
    );
    // @ts-expect-error TS2345
    lInfo.info.push("Loaded " + gameInfo["games"][i]);
    await k.wait(0.05);
  }
}
