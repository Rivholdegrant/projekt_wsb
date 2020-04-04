<?php
// using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
//require 'vendor/autoload.php'; // If you're using Composer (recommended)
// Comment out the above line if not using Composer
 require("./sendgrid/sendgrid-php.php");
// If not using Composer, uncomment the above line
$email = new \SendGrid\Mail\Mail();
$email->setFrom("test@example.com", "RSS WSB proj");
$email->setSubject("Your requested feed");
$email->addTo($_GET['email'], "You");
$email->addContent(
    "text/plain", "test".$_GET['debug']
);
$email->addContent(
    "text/html", "".$_GET['debug']
);
$sendgridkey = file_get_contents("sendgridkey.txt");

$sendgrid = new \SendGrid($sendgridkey);
try {
    $response = $sendgrid->send($email);
    /*
	print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";*/
	echo "Sent";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

?>




