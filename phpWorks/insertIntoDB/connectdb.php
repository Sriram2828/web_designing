<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$db_name = "studentsdb";
$connect = new mysqli($servername, $username, $password, $db_name);

// connection checking
if($connect->connect_error){
    die("Connection failed".$connect->connect_error);
}
?>