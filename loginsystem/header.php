<?php 
session_start();
?>
<html>
<head>
<title>
index</title>
<link rel = "stylesheet" href = "style.css">
</head>
<body>
<header>
<nav>
<div class = "main-wrapper">
    <ul>
        <li><a href = "index.php">HOME</a></li>
</ul>
<div class ="nav-login">
    <?php
    if(isset($_SESSION['u_id'])){
            echo ' <form method="POST" action="includes/logout.inc.php">
            <button type = "submit" name = "submit">Logout</button>
    </form>';
    }
    else
    {
            echo ' <form method = "POST" action  ="includes/login.inc.php">
            <input type = "text" name = "uid" placeholder = "username">
            <input type = "password" name = "pwd" placeholder = "password">
            <button type="submit" name = "submit">Login</button>
            </form>
            <a href = "signup.php">Signup</a>';
    }
    
    ?>
</div>

</div>
</nav>
</header>