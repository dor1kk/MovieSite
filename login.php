



<?php
session_start();
include "db-conn.php";

function validate($data) {
    $data = trim($data);
    $data = stripslashes($data); 
    $data = htmlspecialchars($data); 
 }
 
$_SESSION['modal_displayed'] = true;



if (isset($_POST["username"]) && isset ($_POST["password"])) {
    $username = validate($_POST["username"]);
    $password = validate($_POST["password"]);
    $email = validate($_POST["email"]);

    $servername = "localhost"; 
    $username1 = "root"; 
    $password1 = ""; 
    $dbname = "movieapp"; 

    $conn = new mysqli($servername, $username1, $password1, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM users WHERE email='$email' AND username='$username' AND password='$password'";
    $result = $conn->query($sql);

 


    

    if ($result->num_rows == 1) {
        $_SESSION['username'] = $username;
        header("Location: movieapp.php");
        exit();
    } else {
        header("Location: error.php");
        exit();
    }

    $conn->close();
}
?>

