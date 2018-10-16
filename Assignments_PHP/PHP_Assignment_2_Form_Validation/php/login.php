<?php
	session_start();
	require("../db/dbconfig.php");

	if (isset($_POST['login'])) {
		$password = $_POST['login-password'];
		$email = $_POST['login-email'];

		$sQuery = "SELECT EMAIL, PASSWORD FROM user WHERE EMAIL = '".$email."';";
		$oStmt = $db->prepare($sQuery);
		$oStmt->execute();

		if ($oStmt->rowCount() == 1) {
			while ($row = $oStmt->fetch(PDO::FETCH_ASSOC)) {
				if (password_verify($password, $row['PASSWORD'])) {
					echo '<script type="text/javascript">';
					echo 'alert("Success!");';
					echo 'window.location.href = "../PHP_Assignment_2_Form_Validation_Dashboard.php";';
					echo '</script>';
					$_SESSION['logged'] = $email;
				} else {
					echo '<script type="text/javascript">';
					echo 'alert("Failed!");';
					echo 'window.location.href = "../PHP_Assignment_2_Form_Validation.php";';
					echo '</script>';
				}
			}
		}
	} else {
		// Submit not pressed yet
	}
?>