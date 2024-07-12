 <?php
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;

 require 'phpmailer/src/Exception.php';
 require 'phpmailer/src/PHPMailer.php';

 $mail = new PHPMailer(true);
 $mail->Charset = 'UTF-8';
//  $mail->setLanguage('ru', 'phpmailer/language/');
//  $mail->IsHTML(true);

 $name = $_POST["name"];
 $email = $_POST["email"];

//  $mail->setFrom('soboldasa011@gmail.com');
 

//  $mail->Subject = 'Hello!';

 $body = .$name;
 $theme = "DDD";
 $mail->addAddress('kukubybka@gmail.com');
//  $body .='<p><strong>Hello</strong></p>';
 $mail->sybject = $theme;
$mail->Body=$body;
$mail->send();
 
//  if(!$mail->send()){
//      $message = 'Error2';
//  } else {
//      $message = 'All right';
//  }
//  $response = ['message' => $message];

//  header('Content-type: applicatiaon/json');
//  echo json_encode($response);

 ?>
