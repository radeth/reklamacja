<?php
require_once "connect.php";
$type = $_POST['type'];
$email = $_POST['email'];
$card_number = $_POST['card_number'];
$phone_number = $_POST['phone_number'];
$user = $_POST['user'];
$content = $_POST['content'];
$description = $_POST['description'];
$date = $_POST['date'];

$connect = @new mysqli($host,$db_user,$dbpassword,$db_name);
 if($connect->connect_errno!=0){
    echo $connect->connect_errno;
 }else{
     $querry = "INSERT INTO `zgloszenia` (`id`, `type`, `email`, `card_number`, `phone_number`, `user`, `content`, `description`, `date`) VALUES (NULL, '$type','$email','$card_number','$phone_number','$user','$content','$description','$date');";
     $connect->query($querry);
     $connect->close();
     echo "data send";
 }


?>
