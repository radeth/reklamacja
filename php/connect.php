<?php
$host = "sql.radeth.nazwa.pl";
$db_user ="radeth_admin";
$db_password = "Megadave123";
$db_name = "radeth_reklamacja";
$connect = @new mysqli($host,$db_user,$dbpassword,$db_name);
 if($connect->connect_errno!=0){
    echo $connect->connect_errno;
 }else{
     
     $connect->close();
 }
?>
