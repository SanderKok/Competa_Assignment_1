<?php
require('db/dbconfig.php');
// phpinfo();
// exit;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="css/PHP_Assignment_1_Data_Transfer.css" rel="stylesheet" type="text/css">
	<title>Data Transfer PHP</title>
</head>
<body>
	<header class="header">
		<nav class="nav">
			<ul class="nav__list">
				<li class="list__item" onClick="home()">Home</li>
				<li class="list__item" onClick="create()">Create user</li>
				<li class="list__item" onClick="view()">View users</li>
			</ul>
		</nav>
	</header>
	<main class="main">
		<br />
		<h1 class="title">Assignment 1 | Data Transfer</h1>
		<hr class="hr" />
		<div id="homeContent" class>
			<p class="description">This page will send data en get data from the MySQL Database.</p>
			<h4 class="subtitle">Go to the pages in the navigation bar to create an user and view all users.</h4>
		</div>
		<div id="createUserContent" class="hidden">
			<br />
			<form method="post" action="php/data.php">
				<h2 class="title">Create user</h2>
				<hr class="hr" />
				<label class="label">First name:</label>
				<br />
				<input class="input" type="text" placeholder="First name" name="firstName" required />
				<br />
				<br />
				<label class="label">Last name:</label>
				<br />
				<input class="input" type="text" placeholder="Last name" name="lastName" required />
				<br />
				<br />
				<label class="label">Email:</label>
				<br />
				<input class="input" type="email" placeholder="Email" name="email" required />
				<br />
				<br />
				<label class="label">Gender:</label>
				<br />
				<select class="select" name="gender" required>
					<option value="" selected>Select a gender</option>
					<option value="" disabled>== Genders ==</option>
					<option value="Male" name="male">Male</option>
					<option value="Female" name="female">Female</option>
					<option value="Other" name="other">Other</option>
				</select>
				<br />
				<br />
				<label class="label">Weekly emails:</label>
				<br />
				<label class="label">Yes</label>
				<label class="label">No</label>
				<br />
				<input class="radio" type="radio" name="weekly-yes" value="Yes" />
				<input class="radio" type="radio" name="weekly-no" value="No" />
				<br />
				<br />
				<button type="submit" class="submit-button" name="submit">New user!</button>
			</form>
		</div>
		<div id="viewUsersContent" class="hidden">
			<h1 class="title">Users:</h1>
			<?php
				try {
					$sQuery = "SELECT USER_ID AS 'ID', FIRST_NAME AS 'First name', LAST_NAME AS 'Last name', EMAIL AS 'Email', GENDER AS 'Gender' FROM user";
					$oStmt = $db->prepare($sQuery);
					$oStmt->execute();
					if ($oStmt->rowCount()>0){
						echo "<table id='table'>";
						echo "<thead>";
						echo "<tr>";
						echo "<th>ID:</th>";
						echo "<th>First name:</th>";
						echo "<th>Last name:</th>";
						echo "<th>Email:</th>";
						echo "<th>Gender:</th>";
						echo "</tr>";
						echo "</thead>";
						while ($aRow = $oStmt->fetch(PDO::FETCH_ASSOC)) {
							echo "<tr>";
							echo "<td class='td'>".$aRow['ID']."</td>";
							echo "<td class='td'>".$aRow['First name']."</td>";
							echo "<td class='td'>".$aRow['Last name']."</td>";
							echo "<td class='td'>".$aRow['Email']."</td>";
							echo "<td class='td'>".$aRow['Gender']."</td>";
							echo "</tr>";
						}
						echo "</table>";
					} else {
						echo "No data to collect";
					}
				}
				catch(PDOException $e) {
					echo $sQuery . "<br>" . $e->getMessage();
				};
			?>
		</div>
		<br />
	</main>
<script src="js/PHP_Assignment_1_Data_Transfer.js"></script>
</body>
</html>