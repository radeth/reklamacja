
<?php
header('Content-Type: application/json');
require_once "connect.php";
$connect = @new mysqli($host,$db_user,$dbpassword,$db_name);
$id = $_POST['id'];
$email = $_POST['email'];
$card_number = $_POST['card_number'];
$phone_number = $_POST['phone_number'];
$content = $_POST['content'];
$description = $_POST['description'];

 if($connect->connect_errno!=0){
    echo $connect->connect_errno;
 }else{
     $querry = "UPDATE zgloszenia SET card_number='$card_number',phone_number='$phone_number',description='$description',content='$content',email='$email' WHERE id='$id'";
     $result = $connect->query($querry);
     echo 'dokonano edycji';
     
     $connect->close();
 }


?>