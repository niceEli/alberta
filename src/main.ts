import cl_initscene from "./initscene";
import a from "./alberta_lib/alberta";
import "console.history";

// init alberta and errors //
a.k.load(
  new Promise(async (resolve) => {
    a.k.scene("init", new cl_initscene().scene);
    resolve("ok");
  })
);

onLoading((p: number) => {
  a.k.drawText({
    text: "Alberta",
    size: 50,
    color: new a.k.Color(190, 190, 190),
    pos: a.k.vec2(10, 10),
  });
  a.k.drawRect({
    width: a.k.width() * p,
    height: 20,
    color: new a.k.Color(255, 255, 255),
    pos: a.k.vec2(0, a.k.height() - 20),
  });
});

a.k.onLoad(() => {
  a.k.go("init");
});
