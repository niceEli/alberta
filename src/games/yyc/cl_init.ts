import a from "../../alberta_lib/alberta";
import cl_albertaScene from "../../alberta_lib/cl_albertaScene";
import cl_menuScene from "./cl_menuScene";
import { loadScene, setScene } from '../../alberta_lib/scenes';

export default class cl_init extends cl_albertaScene {
  scene(): void {
    super.scene();

    loadScene("menuSCN", new cl_menuScene().scene);

    setScene("menuSCN")
  }
}
