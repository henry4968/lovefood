<?php

include("Lib/UtilClass.php");
$Util = new UtilClass();

$loggnedInId = $_POST["loggnedInId"];

$sqlQueryPoints = "SELECT MEMBER_ID, MEMBER_POINTS FROM MEMBER WHERE MEMBER_ID = ?";

// $sqlUpdatePoints = "UPDATE MEMBER SET MEMBER_POINTS = MEMBER_POINTS - ? WHERE MEMBER_ID = ?";

// $sqlInsertOrder = "";

// $sqlInsertOrderDetails = "";

$statementQueryPoints = $Util->getPDO()->prepare($sqlQueryPoints);

$statementQueryPoints->bindValue(1, $loggnedInId);
$statementQueryPoints->execute();
$dataQP = $statementQueryPoints->fetchAll(PDO::FETCH_ASSOC);

print_r($dataQP);

?>