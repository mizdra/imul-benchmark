# imul-benchmark
ES2015で導入された``Math.imul``関数と、そのPolyfillのベンチマークを取る。

## ディレクトリ構造
- ``index.html``  : scriptの読み込み, ベンチマークの実行
- ``imul1.test.js``: Polyfillを用いたベンチマーク
- ``imul2.test.js``: ``Math.imul``を用いたベンチマーク
- ``polyfill.js`` : Polyfillの実装