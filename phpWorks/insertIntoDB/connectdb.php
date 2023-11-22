<?php
//  run the php code and access the mysql database(phpmyadmin) using the xampp software 
$servername = "localhost:3306"; 
$username = "root"; // default username
$password = ""; // in default there is no password available for the database
$db_name = "studentsdb"; //use the database name
$connect = new mysqli($servername, $username, $password, $db_name); //give the field names of the table

// connection checking
if($connect->connect_error){
    die("Connection failed".$connect->connect_error);
}
?>