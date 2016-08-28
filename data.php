<?php
	session_start();
	require_once 'db_connect.php';

	//updating timestamp of user
	if(isset($_POST["update"]))
	{
		$username=$_SESSION["user"];
		$result=mysql_query("UPDATE user SET last=now() WHERE username='$username'",$link) or die(mysql_error());
	}
	//getting users and their status
	if(isset($_POST["users"]))
	{
		$result=mysql_query("SELECT * FROM user",$link) or die(mysql_error());
		$time=mysql_query("SELECT NOW()") or die(mysql_error());
		$time=mysql_fetch_assoc($time);
		$time=$time["NOW()"];
		$yr=substr($time,0,4);
		$mon=substr($time,5,2);
		$day=substr($time,8,2);
		$hr=substr($time,11,2);
		$min=substr($time,14,2);
		$sec=substr($time,17,2);
		while($row=mysql_fetch_assoc($result))
		{

			$time1=$row["last"];
			$yr1=substr($time1,0,4);
			$mon1=substr($time1,5,2);
			$day1=substr($time1,8,2);
			$hr1=substr($time1,11,2);
			$min1=substr($time1,14,2);
			$sec1=substr($time1,17,2);
			echo "<br>".$row["username"];
			if($yr==$yr1&&$mon==$mon1&&$day==$day1&&$hr==$hr1&&($min*60+$sec<=10+$sec1+$min1*60))
			{
				echo "@";
			}
			else
				echo "$";
		}
	}

	//practice ajax getdata
	if(isset($_POST["id"]))
	{
		$result=mysql_query("SELECT * FROM data",$link) or die(mysql_error());
		while($row=mysql_fetch_assoc($result))
		{
			echo $row["msg"];
		}
	}
?>