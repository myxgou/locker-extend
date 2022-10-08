const USER_SELECTED_LANGUAGE_KEY: string = "USER_SELECTED_LANGUAGE";
export default {
  set lang(lang) {
    localStorage.setItem(USER_SELECTED_LANGUAGE_KEY, lang);
  },
  get lang() {
    const lang =
      localStorage.getItem(USER_SELECTED_LANGUAGE_KEY) ??
      window.navigator.language;
    if (/(tw|hk)/i.test(lang)) {
      return "hk";
    } else if (/(cn|zh)/i.test(lang)) {
      return "zh";
    } else {
      return "en";
    }
  },
};
