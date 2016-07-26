#gulp_wordpress
gulp + slim + sassで開発できるWordpressのローカル開発環境です。  
VCCW(Vagrant + Chef + Wordpress)を使ってWordpress環境を構築し、slim , sassのコンパイル等はgulpで処理しています。  

# ディレクトリ
```
・app	開発用のディレクトリ
　├・images	imgファイル→圧縮されてpublic/imgへ
　│　├ _common 共通で使用するimgファイル
　│　├ _top トップで使用するimgファイル
　│　└ _under 下層のあるページで使うimgファイル（自動生成に使うから、消さない）
　│
　├・javascripts　jsファイル→ 圧縮されてpublic/jsへ
　│　├・_bundle.js bowerに入ってるコンポーネントをまとめてある
　｜　├・common.js 共通で使うjsを書くところ
　│
　├・stylesheets	sassファイル→ コンパイルされてpublic/cssへ
　│　├・shared 共通で読み込まれるsassまとめ
　│　├・top.scss topで使うsass
　│　└・under.scss 下層用（自動生成に使うから、消さない）
　│
　└・views　slimファイル→ コンパイルされてpublicへ
　　　├・partial	インクルードするslim
　　　│　├・header.slim ヘッダー
　　　│　├・head.slim メタタグ
　　　│　├・footer.slim フッター
　　　│　└・side.slim サイド
　　　├・under 下層ページ用のslimを入れるディレクトリ（自動生成に使うから、消さない）
　　　└・index.slim top用のslim
・www	wordpress一式（appで実装されたものは、/www/wordpress/wp-content/themes/sample_theme にある）
・provision　Wordpressの環境構築用(cookbook)  
・gitignore  
・import.sql　データベースをエクスポートしたもの  
・site.yml　Vagrant, Wordpressの設定ファイル  
・Vagrantfile  
・gulpfile.js  
・package.json  
・bower.json  

```

#Getting started
1. Vagrantの準備
```
vagrant up
```
2. npmパッケージをインストール
```
npm instal
```
3. bowerパッケージをインストール
```
bower instal
```
4. 開発環境立ち上げ
```
gulp
```

※開発を終了する場合は、  
「Ctrl + c」でgulpを終了し、  
`vagrant halt`でVMを終了させる。

# gulpのwatchタスク
- browser-sync(Live reload)  
- slim  
- sass  
- js圧縮  
- img圧縮  

# メモ
## 複数人でwordpress環境を共有する場合のGit運用(データベースを含めて)
### export
データベースの変更があった場合は、下記のコードでデータベースをエクスポートしてから`git push`する。  
```
wp --path=/var/www/wordpress db export /vagrant/import.sql
```

### import
`git pull`して、データベースの変更があった場合は、下記コードでデータベースをインポートする
```
wp --path=/var/www/wordpress db import /vagrant/import.sql
```
たぶん差分をうまく反映できないので、複数人でデータベースをいじると、タイミングによってうまく運用できなさそう。現段階では、データベースを触る人を一人決めちゃったほうがいいかも。

## 複数個のサイトを運用する場合
`site.yml`のhostnameとipを変える。

# 公式サイト・参考サイト
## VCCW ( Vagrant + Chef + Wordpress )
<http://vccw.cc/>

## Wordmove
ステージング・本番環境とローカル開発環境を同期する。  
<http://2inc.org/blog/2014/12/09/4512/>  
