export const locale: object = JSON.parse(
  await (await fetch("./game_properties/locale.json")).text()
);

export default locale;
