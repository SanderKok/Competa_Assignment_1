<?php 
	session_start();
	require("./db/dbconfig.php");
	if (!isset($_SESSION['logged'])){
		header('Location: PHP_Assignment_2_Form_Validation.php');
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
	<link href="css/PHP_Assignment_2_Form_Validation.css?v=0.12" rel="stylesheet" type="text/css" />
	<title>PHP Assignment 2</title>
</head>
<body>
	<header class="header">
		<nav class="nav">
			<ul class="nav__list">
				<li class="list__item" onClick="dashboard()">Dashboard</li>
				<li class="list__item" onClick="users()">Users</li>
				<li class="list__item" onClick="logout()">Logout</li>
				<li class="list__item--right" id="welcome"><i class="fas fa-user"></i> 
				<?php
					$sQuery = "SELECT FIRST_NAME, LAST_NAME FROM user WHERE EMAIL = '".$_SESSION['logged']."';";
					$oStmt = $db->prepare($sQuery);
					$oStmt->execute();

					if ($oStmt->rowCount()>0){
						while ($aRow = $oStmt->fetch(PDO::FETCH_ASSOC)){
							echo $aRow['FIRST_NAME'];
							echo " ";
							echo $aRow['LAST_NAME'];
						}
					}
				?>
				</li>
			</ul>
		</nav>
	</header>
	<main class="main">
		<br />
		<h1 class="title">Assignment 2 | Dashboard</h1>
		<hr class="hr" />
		<div id="dashboardContent" class>
			<p class="description">This is your dashboard. This is useless, everyone knows what this is.</p>
			<p class="description">But still, noticing is important.</p>
		</div>
		<div id="logoutContent" class="hidden">
			<h3 class="subtitle">Are you sure?</h3>
			<p class="description">If no, click dashboard in the nav.</p>
			<br />
			<form action="php/logout.php" method="post">
				<button type="submit" class="submit" name="logout">Logout</button>
			</form>
		</div>
		<div id="userContent" class="hidden">
		<h2 class="subtitle">User list</h2>
		<?php
			try {
				$userQuery = "SELECT USER_ID AS 'ID', FIRST_NAME AS 'First name', LAST_NAME AS 'Last name', EMAIL AS 'Email' FROM user";
				$userStmt = $db->prepare($userQuery);
				$userStmt->execute();
				if ($userStmt->rowCount()>0){
					echo "<table id='table'>";
					echo "<thead>";
					echo "<tr>";
					echo "<th>ID:</th>";
					echo "<th>First name:</th>";
					echo "<th>Last name:</th>";
					echo "<th>Email:</th>";
					echo "</tr>";
					echo "</thead>";
					while ($userRow = $userStmt->fetch(PDO::FETCH_ASSOC)) {
						echo "<tr>";
						echo "<td class='td'>".$userRow['ID']."</td>";
						echo "<td class='td'>".$userRow['First name']."</td>";
						echo "<td class='td'>".$userRow['Last name']."</td>";
						echo "<td class='td'>".$userRow['Email']."</td>";
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
	<script src="js/PHP_Assignment_2_Form_Validation.js?v=0.15"></script>
</body>
</html>