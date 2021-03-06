<!DOCTYPE html>
<html lang="ja">
  <?php get_header(); ?>
  <body>
    <?php get_template_part( "header-nav" ); ?>
    <div id="Page">
      <div class="cf" id="Content">
        <div id="Main">
          <div class="post error404 not-found" id="post-0">
            <h2 class="entry-title">
              <?php _e( 'Not Found', '' ); ?>
            </h2>
            <div class="entry-content">
              <p>
                <?php _e( 'お探しの記事は見つかりません。', '' ); ?>
              </p>
            </div>
          </div>
        </div>
      </div>
      <?php get_template_part( "side" ); ?>
    </div>
    <?php get_footer(); ?>
  </body>
</html>
