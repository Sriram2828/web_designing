<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>login</title>
  </head>
  <body>
    <!-- frontend -->
    <form action="login.php" method="post">
      <div class="Details">
        <h1>Login details</h1>

        <label for="email">Email:</label>
        <input
          type="email"
          placeholder="xxx...@gmail.com"
          name="email"
          required
        />
        <br />

        <label for="pwd">Password:</label>
        <input
          type="password"
          placeholder="enter your password"
          name="pwd"
          required
        />
        <br />

        <div class="btn">
          <input type="submit" name="submit" value="Insert details" />
        </div>
        <div>
            <a href="signup.php">new account</a>
        </div>
      </div>
    </form>
  </body>
</html>
<!-- backend -->
<?php
include("connectdb.php");
if(isset($_POST['submit'])){
    $emailId = $_POST['email'];
    $password = $_POST['pwd'];
    $sql = "SELECT * FROM `studentsdata` WHERE EmailID = '$emailId' AND Password = '$password'";
    $result = mysqli_query($connect, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
    $count = mysqli_num_rows($result); 
    if ($count==1){
        echo '<script>alert("login successfully");</script>';
    }else{
        echo '<script>alert("login failed");</script>';
    }
}
?>
