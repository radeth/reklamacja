
<?php
header('Content-Type: application/json');
require_once "connect.php";
$connect = @new mysqli($host,$db_user,$dbpassword,$db_name);
$id = $_POST['id'];
$text = $_POST['text'];
 if($connect->connect_errno!=0){
    echo $connect->connect_errno;
 }else{
     $querry = "UPDATE test SET text='$text' WHERE id='$id'";
     $result = $connect->query($querry);
     
     $connect->close();
 }


?>