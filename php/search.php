
<?php
header('Content-Type: application/json');
require_once "connect.php";
$connect = @new mysqli($host,$db_user,$dbpassword,$db_name);
$zapytanie = $_POST['zapytanie'];
 if($connect->connect_errno!=0){
    echo $connect->connect_errno;
 }else{
     $querry = "SELECT * FROM `test` WHERE type='$zapytanie'";
     $result = $connect->query($querry);
     $preJSON = array();
     foreach($result as $key=>$data){
        $preJSON[$key] = $data;
    }
     $myJSON = json_encode($preJSON);
     echo  $myJSON;
     
     $connect->close();
 }


?>