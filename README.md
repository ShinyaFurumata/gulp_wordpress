#gulp_wordpress
gulp + slim + sassで開発できるWordpressのローカル開発環境です。  
VCCW(Vagrant + Chef + Wordpress)を使ってWordpress環境を構築し、slim , sassのコンパイル等はgulpで処理しています。  

# ディレクトリ
```
・app	開発用のディレクトリ
　├・images	圧縮後、/www/wordpress/wp-content/themes/sample_theme/imgへ
　│　├ _common 共通で使用するimgファイル
　│　├ _top トップで使用するimgファイル
　│　└ _under 下層のあるページで使うimgファイル
　│
　├・javascripts　jsファイル→ 圧縮後、/www/wordpress/wp-content/themes/sample_theme/jsへ
　│　├・_bundle.js bower_components
　｜　├・common.js 共通で使うjs
　│
　├・stylesheets	sassファイル→ コンパイル後、/www/wordpress/wp-content/themes/sample_theme/style.css
　│　├・shared 共通で読み込まれるsassまとめ
　│　├・top.scss topで使うsass
　│　└・under.scss 下層用（自動生成に使うから、消さない）
　│
　└・views　slimファイル→ コンパイル後、/www/wordpress/wp-content/themes/sample_theme/へ
　　　├・partial	インクルードするslim
　　　├・404.slim
　　　├・category.slim
　　　├・footer.slim
　　　├・functions.slim
　　　├・header-nav.slim
　　　├・header.slim
　　　├・home.slim
　　　├・index.slim
　　　├・page.slim
　　　├・side.slim
　　　└・single.slim
・www	wordpressファイル
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
「Ctrl + c」でgulpから抜けて、  
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

## 複数のサイトを同時に作業する場合（同じboxファイルで）
`site.yml`のhostnameとipを変える。
※まだ試してみてない

# 公式サイト・参考サイト
## VCCW ( Vagrant + Chef + Wordpress )
<http://vccw.cc/>

## Wordmove
ステージング・本番環境とローカル開発環境を同期する。  
<http://2inc.org/blog/2014/12/09/4512/>  
