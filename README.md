## 処理内容

- es6の記述をbabelでes5に変換
- sassファイルをcssに変換
- postcssのautoprefixでprefixを作成
- eslint導入
- devServerでlocal作業
- jQueryを一応入れてます

## ディレクトリ構成

```
┌ dist　(compileしたものを管理)
├　　src (作業場)
│　　　├　　js
│　　　│　　　　└　　app.js
│　　　└　　sass
│　　　　　　　　　└　　style.scss
├　　.eslintrc.js
├　　.gitignore
├　　package.json
├　　webpack.config.js
└　　yarn.lock
```

## バージョン

- webpack ^4.17.2
- yarn 1.5.1
- node 10.5.0
