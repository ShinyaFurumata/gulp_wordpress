<!DOCTYPE html>
<html lang="ja">
  <?php get_header(); ?>
  <body>
    <?php get_template_part( "header-nav" ); ?><?php if(have_posts()) while(have_posts()): the_post(); ?><?php the_content(); ?><?php endwhile; ?><?php get_template_part( "side" ); ?><?php get_footer(); ?>
  </body>
</html>
