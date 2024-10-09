import cl_albertaScene from "./alberta_lib/cl_albertaScene";
import gameInfo from "./alberta_lib/gameInfo";
import k from "./kaplay";
import { swapGame } from "./setupScn";

let lInfo = {
  info: [],
};

export default class cl_initscene extends cl_albertaScene {
  async scene() {
    super.scene();

    k.add([
      k.text("", {
        width: k.width(),
      }),
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
    await loadAssets();
    await k.wait(0.1);
    swapGame(gameInfo["starting_game"]);
  }
}

async function gameLoad() {
  for (let i in gameInfo["games"]) {
    let scn = await import(`./games/${gameInfo["games"][i]}/cl_init.ts`);
    // @ts-expect-error TS2345
    lInfo.info.push("Loading " + gameInfo["games"][i]);
    await k.wait(0.01);
    k.scene(
      "cl_init_albertagame_" + gameInfo["games"][i],
      new scn.default().scene
    );
    // @ts-expect-error TS2345
    lInfo.info.push("Loaded " + gameInfo["games"][i]);
    await k.wait(0.01);
  }
}

async function loadAssets() {
  const assets = gameInfo.alberta_engine_assets;

  if (assets) {
    if (assets.alberta_sprites) {
      for (let name in assets.alberta_sprites) {
        let path = assets.alberta_sprites[name];
        // @ts-expect-error TS2345
        lInfo.info.push("Loading sprite " + name + " from " + path);
        await k.wait(0.01);
        k.loadSprite(name, path);
        await k.wait(0.01);
        // @ts-expect-error TS2345
        lInfo.info.push("Loaded sprite " + name);
      }
    }

    if (assets.alberta_sounds) {
      for (let name in assets.alberta_sounds) {
        let path = assets.alberta_sounds[name];
        // @ts-expect-error TS2345
        lInfo.info.push("Loading sound " + name + " from " + path);
        await k.wait(0.01);
        k.loadSound(name, path);
        await k.wait(0.01);
        // @ts-expect-error TS2345
        lInfo.info.push("Loaded sound " + name);
      }
    }

    if (assets.alberta_music) {
      for (let name in assets.alberta_music) {
        let path = assets.alberta_music[name];
        // @ts-expect-error TS2345
        lInfo.info.push("Loading music " + name + " from " + path);
        await k.wait(0.01);
        k.loadMusic(name, path);
        await k.wait(0.01);
        // @ts-expect-error TS2345
        lInfo.info.push("Loaded music " + name);
      }
    }
  }
}
