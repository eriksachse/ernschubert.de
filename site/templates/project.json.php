<?php

$json = [];

$items = $page->gallery()->toStructure();
foreach ($items as $item):
  if ($image = $item->image()->toFile()):
    $json[] = [
      'image' => $image->crop(1200)->url()
    ];
  endif;
endforeach;

$data = [
  'title'     => $page->title()->value(),
  'text'      => $page->text()->kirbytextinline()->value(),
  'elements'  => $json
];

echo json_encode($data);
