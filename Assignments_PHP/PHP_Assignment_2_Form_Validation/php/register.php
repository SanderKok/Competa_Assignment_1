<?php
	require("../db/dbconfig.php");

	if (isset($_POST['submit'])) {
		if ($_POST['password1'] === $_POST['password2']) {
			$pass = password_hash($_POST['password1'], PASSWORD_DEFAULT);
			$sQuery = "INSERT INTO user (USER_ID, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD)
			VALUES (NULL, '".$_POST['firstName']."', '".$_POST['lastName']."', '".$_POST['email']."', '".$pass."');";
			$oStmt = $db->prepare($sQuery);
			$oStmt->execute();
			echo '<script type="text/javascript">';
			echo 'alert("Success!");';
			echo 'window.location.href = "../PHP_Assignment_2_Form_Validation.php";';
			echo '</script>';
		} else {
			// Passwords are not matching
		}
	} else {
		// Submit isn't pressed yet
	}
?>