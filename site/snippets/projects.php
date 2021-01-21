<div class="go___flex"><p id="reset"><?= $site->title()->html() ?></p>
  <?php foreach($pages->listed() as $item): ?>
    <p class="aaa" href="<?= $item->url() ?>"><?= html($item->title()) ?></p>
  <?php endforeach ?>
</div>
