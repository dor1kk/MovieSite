<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="signin.css"> <!-- Add your stylesheets here -->
    
</head>

<body>
 
    <form action="login.php" method="post">
        <div class="container">
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required>

            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required>

            <button type="submit">Login</button>
        </div>

        <div class="container">
            <span class="psw">Forgot <a href="#">password?</a></span>
            <span class="register">Don't have an account? <a href="register.php">Register</a></span>
        </div>
    </form>
</body>
</html>
