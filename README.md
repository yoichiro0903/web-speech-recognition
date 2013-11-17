Node Dengana
=======

## What's this

東京の標準語を関西弁に自動翻訳するアプリケーションです。


## Installation

まず、Node.jsをインストールしていることが前提です。

```
git clone git@github.com:ryooopan/node-dengana.git
cd node-dengana
npm install
```

インストールが終わったら、次のコマンドでサーバーを起動できます。

```
node app.js
```

## Translate with MeCab

MeCabを使っているので、MeCabを使えるようにしておくといいです。

```
brew install mecab 
brew install mecab-ipadic
```


## Examples

```
やられたらやり返す。 倍返しだ！
> やられたらやり返す。倍返しや！

さぁ、きみの誠意を見せてもらおうじゃないか。
> さぁ、あんさんの誠意を見せてもらおうやないか。

いや、違うんです。 私はわるくないんです。 半沢君が勝手に。。
> いや、ちゃうねん。 うちはわるくないねん。 半沢はんが勝手に。。
```


=======
web-speech-recognition
======================

modified node-dengana 

