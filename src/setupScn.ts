import a from "./alberta_lib/alberta";
import runtimeID from "./alberta_lib/runtimeID";
import k from "./kaplay";

export function swapGame(game: string) {
  a.g = game;
  k.go(runtimeID + "_cl_init_albertagame_" + game);
}
