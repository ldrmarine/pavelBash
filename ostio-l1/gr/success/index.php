<?php

require "/var/www/promo-2018.ru/data/www/promo-2018.ru/leaddrive/leadtrade.php";

$offer_id  = 1614;
$land = new \lt\Landing($offer_id, 'us');

$land->success();