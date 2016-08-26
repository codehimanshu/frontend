<?php
	session_start();
	require_once 'db_connect.php';
	if(isset($_POST["id"]))
	{
		$result=mysql_query("SELECT * FROM data",$link) or die(mysql_error());
		while($row=mysql_fetch_assoc($result))
		{
			echo $row["msg"];
		}
	}
?>