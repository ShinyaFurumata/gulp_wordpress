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
## import
```
wp --path=/var/www/wordpress db import /vagrant/import.sql
```
##export
```
wp --path=/var/www/wordpress db export /vagrant/import.sql
```
