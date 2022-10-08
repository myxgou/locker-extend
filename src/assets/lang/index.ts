import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";
import hk from "./hk";
import util from "@util";
const i18n = createI18n({
  locale: "en", // 定义默认语言
  legacy: false,
  globalInjection: true,
  // eslint-disable-next-line no-dupe-keys
  locale: util.lang,
  messages: {
    zh,
    en,
    hk,
  },
});

export default i18n;