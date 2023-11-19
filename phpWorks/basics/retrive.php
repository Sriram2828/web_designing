<?php
// Variable declaration
$name = $email = $gender = $comment = $website = "";

// initialising the value to the variable
if (isset($_POST['submit'])) {
$firstname = $_POST["fname"];
$lastname = $_POST["lname"];
$gender = $_POST["gender"];
$email = $_POST["email"];
$pwd = $_POST["pwd"];
$cpwd = $_POST["confpwd"];
}

//Display the user input using echo 
if ($pwd == $cpwd) {
  echo "<h2>Your Input:</h2>";
  echo "First name: ".$firstname;
  echo "<br>";
  echo "Last name: ".$lastname;
  echo "<br>";
  echo "Gender: ".$gender;
  echo "<br>";
  echo "Email: ".$email;
  echo "<br>";
  echo "Password: ".$pwd;
}else {
  echo '<script>alert("password is not matched")</script>';
}
?>