<?php
session_start();
include "db-conn.php";

function validate($data) {
    $data = trim($data); 
    $data = stripslashes($data); 
    $data = htmlspecialchars($data); 
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    $sql = $conn->prepare("INSERT INTO users (email, username, password) VALUES (?, ?, ?)");
    $sql->bind_param("sss", $email, $username, $password);

    if ($sql->execute()) {
        $_SESSION['username'] = $username;
        header("Location: movieapp.php"); 
        
        exit();
    } else {
        header("Location: error.php"); 
        exit();
    }

    $sql->close();
    $conn->close();
}
?>
