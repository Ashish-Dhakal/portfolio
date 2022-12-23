<<<<<<< HEAD
<?php
 $name = $_POST['name'];
 $sender_email= $_POST['email'];
 $project =$_POST['project'];
 $message =$_POST['message'];

 $email_from ='laxmandnakal@gmail.com';
$email_subject="New client message";

$email_body="User Name:$name.\n";
             "User Email:$visitor_email";
               "User Message:$message.\n";

    $to="ashishdhakal433@gmail.com";
    $headers="From:$email_from\r\n:";
    $headers="Reply-TO: $$visitor_email\r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
=======
<?php
 $name = $_POST['name'];
 $sender_email= $_POST['email'];
 $project =$_POST['project'];
 $message =$_POST['message'];

 $email_from ='laxmandnakal@gmail.com';
$email_subject="New client message";

$email_body="User Name:$name.\n";
             "User Email:$visitor_email";
               "User Message:$message.\n";

    $to="ashishdhakal433@gmail.com";
    $headers="From:$email_from\r\n:";
    $headers="Reply-TO: $$visitor_email\r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
>>>>>>> 1d3062740be82452f85b206ab7b5ffd0d7af6c8b
?>