<?php


$json = [];

// $items = $page->gallery()->toStructure();
// foreach ($items as $item):
//   if ($image = $item->image()->toFile()):
//     $json[] = [
//       'image' => $image->crop(400)->url()
//     ];
//   endif;
// endforeach;


$data = [
  'text'      => $page->text()->kirbytextinline()->value(),
  'elements'  => $json
];

echo json_encode($data);
