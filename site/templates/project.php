<?php
// using the `toStructure()` method, we create a structure collection
$items = $page->gallery()->toStructure();
// we can then loop through the entries and render the individual fields
foreach ($items as $item): ?>
  <?php if ($image = $item->image()->toFile()): ?>
    <img src="<?= $image->url() ?>" alt="<?= $image->alt() ?>">
  <?php endif ?>
<?php endforeach ?>
<?= $page->title() ?>
