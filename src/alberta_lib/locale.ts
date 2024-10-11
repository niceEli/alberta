import { has, get } from "lodash";
import locale from "./localejsonfile";

export enum Locales { // w3org language tags
  en = "en",
  es = "es",
  it = "it",
}

// TODO: Make this not en specific when alberta:postcard (save system) is done

export let localeInfo = {
  get lang() {
    return "en";
  },
  set lang(value: string) {
    throw new Error(
      `Nuh Uh, Im Lazy And Sleepy so it aint being set to ${value}`
    );
  },
};

export function getString(name: string): string {
  return get(locale, `${name}.${localeInfo.lang}`, name);
}
