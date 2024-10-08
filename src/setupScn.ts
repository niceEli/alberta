import a from "./alberta_lib/alberta";
import k from "./kaplay";

export function swapGame(game: string) {
  a.g = game;
  k.go("cl_init_albertagame_" + game);
}