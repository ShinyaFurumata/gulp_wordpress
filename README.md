#gulp_wordpress
gulp + slim + sassで開発できるWordpressのローカル開発環境を作る。  
VMには、VCCW(Vagrant + Chef + Wordpress)を使い、ローカル開発環境を一通り用意する。  

#Getting started
1. Vagrantを立ち上げる
```
vagrant up
```
1. npmパッケージをインストール
```
npm instal
```
1. 開発環境が立ち上がる
```
gulp
```

## 複数人でwordpress環境共有する(データベースの部分)
データベースの変更があった場合は、エクスポートしてからpushする。  
##export
```
wp --path=/var/www/wordpress db export /vagrant/import.sql
```

pullして、データベースの変更があった場合は、インポートする
## import
```
wp --path=/var/www/wordpress db import /vagrant/import.sql
```
複数人でデータベースをいじると、うまく反映されないかも。  

## 複数個のサイト運用
`site.yml`のhostnameとipを変える。

# VCCW ( Vagrant + Chef + Wordpress )
<http://vccw.cc/>

## Configuration
1. Copy `provision/default.yml` to `site.yml`.
1. Edit the `site.yml`.  
※最初にインストールするプラグインなどを設定できる
1. Run `vagrant up`.

#Wordmove
ステージング・本番環境とローカル開発環境を同期する。  
<http://2inc.org/blog/2014/12/09/4512/>  
