
<?php
header('Content-Type: application/json');
require_once "connect.php";
$connect = @new mysqli($host,$db_user,$dbpassword,$db_name);
$queryType = $_POST['queryType'];
 if($connect->connect_errno!=0){
    echo $connect->connect_errno;
 }else{
     $querry = "SELECT * FROM `zgloszenia` WHERE phone_number='$queryType'";
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