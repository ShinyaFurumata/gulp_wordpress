<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <title></title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="telephone=no,address=no,email=no" name="format-detection" />
    <!--CSSの読み込み-->
    <link href="<?php bloginfo("template_url"); ?>/shared/css/global.css" rel="stylesheet" />
    <link href="<?php bloginfo("template_url"); ?>/shared/css/general.css" rel="stylesheet" />
    <link href="<?php bloginfo("template_url"); ?>/shared/css/common.css" rel="stylesheet" />
    <!--JS読み込み-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="<?php bloginfo("template_url"); ?>/shared/js/common.js" type="text/javascript"></script>
    <!--ページ毎のcss振り分け--><?php if(is_home()): ?>
    <link href="<?php bloginfo("stylesheet_url"); ?>" media="all" rel="stylesheet" type="text/css" />
    <?php elseif(is_page( 'service' ) ): ?>
    <link href="<?php bloginfo("template_url"); ?>/css/service.css" media="all" rel="stylesheet" type="text/css" />
    <?php elseif(is_page( 'point' ) ): ?>
    <link href="<?php bloginfo("template_url"); ?>/css/point.css" media="all" rel="stylesheet" type="text/css" />
    <?php elseif(is_page( 'contact' ) ): ?>
    <link href="<?php bloginfo("template_url"); ?>/css/contact.css" media="all" rel="stylesheet" type="text/css" />
    <?php else: ?>
    <link href="<?php bloginfo("stylesheet_url"); ?>" media="all" rel="stylesheet" type="text/css" />
    <?php endif; ?><!--[if lt IE 9]
    <script type="text/javascript" src="shared/js/html5shiv.js"></script--><?php wp_head(); ?>
  </head>
  <body>
    <div id="Header">
      <div class="hoge">
        <a href="<?php echo home_url(); ?>/"></a>hoge
      </div>
    </div>
    <!--// #Header-->
  </body>
</html>
