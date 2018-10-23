<?php
	require("./db/dbconfig.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="css/PHP_Assignment_2_Form_Validation.css?v=0.11" rel="stylesheet" type="text/css" />
	<title>PHP Assignment 2</title>
</head>
<body>
	<header class="header">
		<nav class="nav">
			<ul class="nav__list">
				<li class="list__item" onClick="home()">Home</li>
				<li class="list__item" onClick="register()">Register</li>
				<li class="list__item" onClick="login()">Login</li>
				<li class="list__item--right" id="welcome"></li>
			</ul>
		</nav>
	</header>
	<main class="main">
		<br />
		<h1 class="title">PHP Assignment 2 | Form Validation</h1>
		<hr class="hr" />
		<div id="homeContent" class>
			<p class="description">This site will contain a <b>Form Validation</b> process.</p>
			<p class="description">Click the <b>navigation</b> to continue.</p>
		</div>
		<div id="loginContent" class="hidden">
			<h1 class="subtitle">Login</h1>
			<form method="post" action="php/login.php">
				<label class="label">Email:</label>
				<br />
				<input type="email" placeholder="Email" class="input" name="login-email" required />
				<br />
				<br />
				<label class="label">Password:</label>
				<br />
				<input type="password" placeholder="Password" class="input" name="login-password" required />
				<br />
				<br />
				<button class="submit" name="login" type="submit">Submit</button>
			</form>
			
		</div>
		<div id="registerContent" class="hidden">
			<h1 class="subtitle">Register</h1>
			<form method="post" action="php/register.php">
				<label class="label">First name:</label>
				<br />
				<input type="text" placeholder="First name" class="input" name="firstName" required />
				<br />
				<br />
				<label class="label">Last name:</label>
				<br />
				<input type="text" placeholder="Last name" class="input" name="lastName" required />
				<br />
				<br />
				<label class="label">Email:</label>
				<br />
				<input type="email" placeholder="Email" class="input" name="email" required />
				<br />
				<br />
				<label class="label">Password:</label>
				<br />
				<input type="password" placeholder="Password" class="input" name="password1" required />
				<br />
				<br />
				<label class="label">Retype password:</label>
				<br />
				<input type="password" placeholder="Retype password" class="input" name="password2" required />
				<br />
				<br />
				<button class="submit" name="submit" type="submit">Submit</button>
			</form>
		</div>
		<br />
	</main>
<script src="js/PHP_Assignment_2_Form_Validation.js?v=0.15"></script>
</body>
</html>