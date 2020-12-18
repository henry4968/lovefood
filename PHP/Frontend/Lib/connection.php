<?php

$db_host = "localhost";
$db_user = "root";
$db_pass = "password";
// $db_pass = "SQL1933";
$db_select = "Lovefood";
       
$dsn = "mysql:host=".$db_host.";dbname=".$db_select;
       
$pdo = new PDO($dsn, $db_user, $db_pass);

?>