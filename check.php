<?php
	session_start();
	require_once 'db_connect.php';
	$username=$_POST['username'];
	$pass=$_POST['password'];
	$result=mysql_query("SELECT * FROM user WHERE username='$username' AND password='$pass'",$link) or die("not a valid user");
	$res=mysql_fetch_row($result);
	   if($res)
	   {
	   	$_SESSION["user"]=$username;
	    $result=mysql_query("UPDATE user SET last=now() WHERE username='$username'",$link) or die(mysql_error());
	    header("Location: dashboard.php");
	   }
	   else
	   {
	    header("Location: ajax.php");
	   }
?>