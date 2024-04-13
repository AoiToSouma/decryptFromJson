# decryptFromJson
[English](./README.md)<br>
Plugin Nodeでは、Node AddressがJSONファイルで保存されています。<br>
PrivateKeyを知るためにはXDCPayにJSONファイルをインポートする必要がありました。<br>
この機能では、VPS上でJSONファイルからPrivateKeyを取得できます。

# 手順
## 1. リポジトリをコピー
```
git clone https://github.com/AoiToSouma/decryptFromJson.git
cd decryptFromJson
```

## 2. npmパッケージのインストール
```
npm install
```

## 3. 実行
PrivateKeyを得るには<br>
Address情報が定義されたJSONファイル<br>
Keystore(パスワード)<br>
が必要です。<br>
pluginV2の場合、下記のコマンドで取得可能です。

### JSONファイル
```
cd ~/pluginV2Install
./pli_node_scripts.sh keys
```

<img src="img/01.png">
homeディレクトリにJSONファイルが作成されています。<br>
このパスをコピーしてください。

### Keystore
```
cat ~/pluginV2/secrets.toml | grep "^s*Keystore"
```
クオーテーション(')で区切られた中の文字列をコピーしてください。

### 実行
```
node decryptFromJson.js
```
```Enter full path of wallet json file:```にはJSONファイルの絶対パスを入力します。<br>
```Enter Keystore: ```にはKeystoreの値を入力します。<br>
組み合わせが正しい場合```Press any key to display: ```が表示されます。<br>
Enterキーを含む任意の入力でAddress情報が表示されます。<br>
誰にも画面を見られないように注意してください。<br>
確認が終わったらすぐに下記コマンドで画面をクリアしてください。
```
clear
```

VPS上には上記の情報はどこにも保存されません。表示だけとなります。
