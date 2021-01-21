<?php



$json = [];

$items = $page->children()->listed();
foreach ($items as $item):
  $json[] = [
    'href' => $item->url(),
    'title'=> $item->title()->value()
  ];
endforeach;

$data = [
  'title'   => $page->title()->value(),
  'text'    => $page->text()->kirbyTextInline()->value(),
  'elements' => $json
];

echo json_encode($data);
