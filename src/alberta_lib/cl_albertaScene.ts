import a from "./alberta";
import errorF from "./errorF";

export default class cl_albertaScene {
  constructor() {}

  public scene() {
    a.k.onError((e: Error) => errorF(e));
  }
}
