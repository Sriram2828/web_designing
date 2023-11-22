<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>validation</title>
  </head>
  <body>
    <!-- frontend -->
    <form action="index.php" method="post">
      <div class="Details">
        <h1>Student details</h1>

        <label for="stdname">Student name:</label>
        <input type="text" placeholder="your name" name="stdname" required />
        <br />

        <label for="regno">Register number:</label>
        <input
          type="text"
          placeholder="12-digit register number"
          name="regno"
          required
        />
        <br />

        <label for="phno">phone number:</label>
        <input
          type="text"
          placeholder="10-digit mobile number"
          name="phno"
          required
        />
        <br />

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

        <label for="confpwd">Confirm Password:</label>
        <input
          type="password"
          placeholder="Retype your password"
          name="confpwd"
          required
        />
        <br />

        <div class="btn">
          <input type="submit" name="submit" value="Insert details" />
        </div>
      </div>
    </form>
  </body>
</html>
<!-- backend -->
<?php
include("connectdb.php");
if(isset($_POST['submit'])){
    $studentName = $_POST['stdname'];
    $studentRegno = $_POST['regno'];
    $phoneNumber = $_POST['phno'];
    $emailId = $_POST['email'];
    $password = $_POST['pwd'];
    $confirmPassword = $_POST['confpwd'];
    if ($password === $confirmPassword) {
        $sql = "INSERT INTO studentsdata VALUES('$studentRegno', '$studentName', '$phoneNumber', '$emailId', '$password')";
        $result = mysqli_query($connect, $sql); 
        if($result){
            echo '<script>alert("Values are inserted into database successfully");</script>';
        }else{
            echo '<script>alert("Values cannot inserted");</script>';
        }
    }else{
        echo '<script>alert("Password did not match");</script>';
    }
}
?>
