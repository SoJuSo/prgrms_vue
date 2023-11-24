export default {
  install(app, options) {
    // app.config.globalProperties.$fetch = (url, opts) => {
    app.config.globalProperties[options.pluginName || "$fetch"] = (url, opts) => {
      return fetch(url, opts).then((res) => res.json());
    };
    // fetch().then(res => res.json()).then(res => console.log(res))
  },
};
