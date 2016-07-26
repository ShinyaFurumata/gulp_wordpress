<div id="Footer"></div>
<?php wp_footer(); ?>
<!DOCTYPE html>
<html lang="ja">
  <?php get_header(); ?>
  <body>
    <?php get_template_part( "header-nav" ); ?>
    <div id="Cotegory">
      <?php get_template_part( "side" ); ?>
    </div>
    <?php get_footer(); ?>
  </body>
</html>
