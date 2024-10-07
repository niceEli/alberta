import { exit } from "@tauri-apps/plugin-process";
import a from "./alberta";

export default async function errorF(e: Error) {
  let gaa = globalThis as any;

  // error info
  a.k.drawRect({
    width: a.k.width(),
    height: a.k.height(),
    color: new a.k.Color(10, 10, 10),
  });

  a.k.drawText({
    text: `An Fatal ${e.name} Occured, Please Relaunch\nAlberta Cannot Continue Functioning Properly`,
    size: 40,
    color: new a.k.Color(255, 100, 100),
    pos: a.k.vec2(10, 10),
  });

  a.k.drawText({
    text: e.stack as string,
    size: 20,
    color: new a.k.Color(255, 255, 255),
    pos: a.k.vec2(10, 90),
  });

  // report to telemetry
  if (gaa.telemetryTrue != true) {
    if (
      a.k.mousePos().x > 20 &&
      a.k.mousePos().x < 220 &&
      a.k.mousePos().y > a.k.height() - 70 &&
      a.k.mousePos().y < a.k.height() - 20
    ) {
      a.k.drawRect({
        width: 200,
        height: 50,
        color: new a.k.Color(255, 255, 255),
        pos: a.k.vec2(20, a.k.height() - 70),
      });
    } else {
      a.k.drawRect({
        width: 200,
        height: 50,
        color: new a.k.Color(200, 200, 200),
        pos: a.k.vec2(20, a.k.height() - 70),
      });
    }

    a.k.drawText({
      text: "Report To\nTelemetry",
      size: 20,
      color: new a.k.Color(0, 0, 0),
      pos: a.k.vec2(70, a.k.height() - 65),
    });

    if (
      a.k.isMousePressed("left") &&
      a.k.mousePos().x > 20 &&
      a.k.mousePos().x < 220 &&
      a.k.mousePos().y > a.k.height() - 70 &&
      a.k.mousePos().y < a.k.height() - 20
    ) {
      let telData = JSON.parse(JSON.stringify(await (console as any).history));
      console.info("Reported to telemetry:", telData);
      gaa.telemetryTrue = true;
    }
  }

  // quit (in bottom right)
  if ("__TAURI__" in window) {
    if (
      a.k.mousePos().x > a.k.width() - 220 &&
      a.k.mousePos().x < a.k.width() - 20 &&
      a.k.mousePos().y > a.k.height() - 70 &&
      a.k.mousePos().y < a.k.height() - 20
    ) {
      a.k.drawRect({
        width: 200,
        height: 50,
        color: new a.k.Color(255, 255, 255),
        pos: a.k.vec2(a.k.width() - 220, a.k.height() - 70),
      });
    } else {
      a.k.drawRect({
        width: 200,
        height: 50,
        color: new a.k.Color(200, 200, 200),
        pos: a.k.vec2(a.k.width() - 220, a.k.height() - 70),
      });
    }

    a.k.drawText({
      text: "Quit",
      size: 30,
      color: new a.k.Color(0, 0, 0),
      pos: a.k.vec2(a.k.width() - 155, a.k.height() - 60),
    });

    if (
      a.k.isMousePressed("left") &&
      a.k.mousePos().x > a.k.width() - 220 &&
      a.k.mousePos().x < a.k.width() - 20 &&
      a.k.mousePos().y > a.k.height() - 70 &&
      a.k.mousePos().y < a.k.height() - 20
    ) {
      console.info("Exiting Alberta...");
      await exit();
    }
  }

  // first time?
  if (gaa.errored != true) {
    gaa.errored = true;
  }
}
