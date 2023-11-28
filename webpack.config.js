const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  //   mode: "development", // << 개발용, 'production'이 배포용
  resolve: {
    extensions: [".vue", ".js"], // 생략하고 싶은 확장자를 명시
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@": path.resolve(__dirname, "src"), // 보통 요런것들을
      src: path.resolve(__dirname, "src"), // 사용한다.
    },
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"), // 혹은 'build' 혹은 'public'이지만 dist가 제일 무난
    publicPath: "/", // 기본적인 절대 경로 명시
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?css$/, //css를 찾고
        use: ["vue-style-loader", "css-loader", "sass-loader"], // 순서가 중요하다. 역순으로 해석되기 때문이다.
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      // template: path.resolve(__dirname, "src/index.html"), //웹팩이 해석해야하는 index.html파일이 어디있는 지 명시
      // 위처럼 입력해도 되지만 template에는 이미 내장 기능으로 경로를 설정하는 로직이 있기에 아래와 같이 설정해도 된다.
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "static" }, // 어디에서 어디로..?
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  //   devServer: {
  //     port: 1234, // 디폴트는 8080
  //   },
};
