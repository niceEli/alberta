import a from "../../alberta_lib/alberta";
import cl_albertaScene from "../../alberta_lib/cl_albertaScene";
import k from "../../kaplay";
import cl_menuScene from "./cl_menuScene";

export default class cl_init extends cl_albertaScene {
  scene(): void {
    super.scene();

    k.scene(a.g + "_menuSCN", new cl_menuScene().scene);

    k.go(a.g + "_menuSCN")
  }
}
