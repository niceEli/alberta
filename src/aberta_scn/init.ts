import a from "../alberta";
import errorF from "../errorF";

export default function init() {
  a.r.add([
    text("Hello, world!"),
  ]);
  a.k.onError((e: Error) => errorF(e));
  let e = new Error("if this screen is blue doesnt work")
  throw e;
}