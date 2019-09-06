<?php
include_once 'header.php';
?>
<section class = "main-container">

<div class = "main-wrapper">

<h2>SIGNUP</h2>

<form method = "POST" action = "includes/signup.inc.php" class = "signup-form">
<input type = "text" name = "first" placeholder = "firstname">
<input type = "text" name = "last" placeholder = "lastname">
<input type = "text" name = "email" placeholder = "email">
<input type = "text" name = "uid" placeholder = "username">
<input type = "password" name = "pwd" placeholder = "password">
<!-- <input type = "password" name = "first" placeholder = "firstname"> -->
<button type = "submit" name = "submit">Signup</button>
</form>
</div>
</section>

<?php
include_once 'footer.php';
?>
