#gulp_wordpress
gulp + slim + sassで開発できるWordpressのローカル開発環境です。

# VCCW ( Vagrant + Chef + Wordpress )
<http://vccw.cc/>

## Configuration
1. Copy `provision/default.yml` to `site.yml`.
1. Edit the `site.yml`.  
※最初にインストールするプラグインなどを設定できる
1. Run `vagrant up`.

## データベースのimport・export
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

#Wordmove
ステージング・本番環境とローカル開発環境を同期する。
<http://2inc.org/blog/2014/12/09/4512/>  
