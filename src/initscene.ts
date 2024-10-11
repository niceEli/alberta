import cl_albertaScene from "./alberta_lib/cl_albertaScene";
import gameInfo from "./alberta_lib/gameInfo";
import runtimeID from "./alberta_lib/runtimeID";
import k from "./kaplay";
import { swapGame } from "./setupScn";
import getAsset from "./alberta_lib/getAsset";

let lInfo = {
  info: [
    gameInfo["alberta_engine_prefix"] + " init",
    "Runtime Security ID: " + runtimeID,
    "Bootstrapped Alberta Engine Success (Were In The Loader)",
    "Loading Data...",
  ],
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
      k.layer("a-ui"),
    ]);

    k.add([
      k.layer("a-frutiger"),
      k.sprite("alberta-engine_logo"),
      k.anchor("center"),
      k.pos(150, k.height() - 150),
      k.scale(2),
      k.opacity(0.2),
      k.rotate(k.rand() * 360),
      {
        update() {
          (this as any).angle += 10 * k.dt();
        },
      },
    ]);

    lInfo.info.push("Loading Games");
    await gameLoad();
    lInfo.info.push("Loaded All Games");
    await k.wait(0.1);
    lInfo.info.push("Loading Assets");
    await loadAssets();
    lInfo.info.push("Loaded All Assets");
    await k.wait(0.1);
    if (
      localStorage.getItem(
        `${gameInfo["alberta_engine_prefix"]}-alberta_saveGame`
      ) === null ||
      localStorage.getItem(
        `${gameInfo["alberta_engine_prefix"]}-alberta_options`
      ) === null
    ) {
      lInfo.info.push(
        "Loaded All Data, Starting " +
          gameInfo["alberta_engine_prefix"] +
          "_" +
          gameInfo["user_creation_game"]
      );
      await k.wait(0.2);
      swapGame(gameInfo["user_creation_game"]);
    } else {
      lInfo.info.push(
        "Loaded All Data, Starting " +
          gameInfo["alberta_engine_prefix"] +
          "_" +
          gameInfo["starting_game"]
      );
      await k.wait(0.2);
      swapGame(gameInfo["starting_game"]);
    }
  }
}

async function gameLoad() {
  for (let i in gameInfo["games"]) {
    let scn = await import(`./games/${gameInfo["games"][i]}/cl_init.ts`);
    lInfo.info.push("Loading " + gameInfo["games"][i]);
    await k.wait(0.01);
    k.scene(
      runtimeID + "_cl_init_albertagame_" + gameInfo["games"][i],
      new scn.default().scene
    );
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
        lInfo.info.push("Loading Sprite " + name + " from " + path);
        await k.wait(0.01);
        k.loadSprite(getAsset(name, true), path);
        await k.wait(0.01);
        lInfo.info.push("Loaded Sprite " + name);
      }
    }

    if (assets.alberta_sounds) {
      for (let name in assets.alberta_sounds) {
        let path = assets.alberta_sounds[name];
        lInfo.info.push("Loading Sound " + name + " from " + path);
        await k.wait(0.01);
        k.loadSound(getAsset(name, true), path);
        await k.wait(0.01);
        lInfo.info.push("Loaded Sound " + name);
      }
    }

    if (assets.alberta_music) {
      for (let name in assets.alberta_music) {
        let path = assets.alberta_music[name];
        lInfo.info.push("Loading Music " + name + " from " + path);
        await k.wait(0.01);
        k.loadMusic(getAsset(name, true), path);
        await k.wait(0.01);
        lInfo.info.push("Loaded Music " + name);
      }
    }
  }
}
