<?php
try 
{
	$db = new PDO('mysql:host=localhost;dbname=php_assignment_2_form_validation', 'root', '');
}
catch(PDOException $e)
{
	$sMsg = '<p>
			Line: '.$e->getLine().'<br />
			File: '.$e->getFile().'<br />
			Error: '.$e->getMessage().'
		</p>';
		
		trigger_error($sMsg);
}
?>