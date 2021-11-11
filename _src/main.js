import { createApp } from "vue";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import App from "./App.vue";
import router from "./router";
// HTML加rules="email|required"即可運行
defineRule("email", email);
defineRule("required", required);
defineRule("min", min);
// 加入多國語系
configure("./zh_TW.json");
// 設定 Activate the locale
configure({
  generateMessage: localize({ zh_TW }), // 切換中文
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});
// 擔心沒辦法使用它,就設定強制zh_TW語系,跟一般引入方式稍有不同
setLocale("zh_TW");
const app = createApp(App).use(router);

// （全域）模版
app.component("Field", Field);
app.component("Form", Form);
app.component("ErrorMessage", ErrorMessage);

// （全域）模版
app.mount("#app");
