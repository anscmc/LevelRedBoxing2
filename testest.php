<!DOCTYPE html>
<html>
<body>

<?php

// phpinfo();

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

echo "My first PHP script!";

$request = new HttpRequest();
$request->setUrl('https://api.mindbodyonline.com/public/v6/usertoken/issue');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'Content-Type' => 'application/json',
  'SiteId' => '-99',
  'Api-Key' => '2d0c3bf72d2a4730a0ffa1442e7ed293'
));

$request->setBody('{
    "Username": "IronOxygenFitness",
    "Password": "Zog0dcHkd5XmqSGdD7izMLMjQYE="
}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}

?>

</body>
</html>