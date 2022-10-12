import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";
import hk from "./hk";
import app from "@/util/app";
const i18n = createI18n({
  locale: app.lang, // 定义默认语言
  legacy: false,
  globalInjection: true,
  messages: {
    zh,
    en,
    hk,
  },
});

export default i18n;
