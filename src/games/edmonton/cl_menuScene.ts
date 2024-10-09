import cl_albertaScene from "../../alberta_lib/cl_albertaScene";
import k from "../../kaplay";

export default class cl_menuScene extends cl_albertaScene {
  scene(): void {
    super.scene();
    k.add([k.rect(k.width(), k.height())]);
    k.add([k.text("TODO"), k.color(k.BLACK)]);
  }
}

