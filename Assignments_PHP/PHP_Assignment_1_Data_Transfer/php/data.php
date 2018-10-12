<?php
require('../db/dbconfig.php');

if (isset($_POST['submit'])) {
	if (isset($_POST['weekly-yes'])) {
		try {
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$sQuery = "INSERT INTO user (USER_ID, FIRST_NAME, LAST_NAME, EMAIL, GENDER, WEEKLY_UPDATES)
			VALUES (NULL, '".$_POST['firstName']."', '".$_POST['lastName']."', '".$_POST['email']."', '".$_POST['gender']."','".$_POST['weekly-yes']."');";
			$oStmt = $db->prepare($sQuery);
			$oStmt->execute();
			header('Location: ../PHP_Assignment_1_Data_Transfer.php');
		}
		catch(PDOException $e) {
			echo $sQuery . "<br>" . $e->getMessage();
		};
	} else if (isset($_POST['weekly-no'])) {
		try {
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$sQuery = "INSERT INTO user (USER_ID, FIRST_NAME, LAST_NAME, EMAIL, GENDER, WEEKLY_UPDATES)
			VALUES (NULL, '".$_POST['firstName']."', '".$_POST['lastName']."', '".$_POST['email']."', '".$_POST['gender']."','".$_POST['weekly-no']."');";
			$oStmt = $db->prepare($sQuery);
			$oStmt->execute();
			header('Location: ../PHP_Assignment_1_Data_Transfer.php');
		}
		catch(PDOException $e) {
			echo $sQuery . "<br>" . $e->getMessage();
		};
	} else {
		echo "<p>Fill in every field please.</p>";
		echo "<a href='../PHP_Assignment_1_Data_Transfer.php'>Click me to go back</a>";
	};
};
?>