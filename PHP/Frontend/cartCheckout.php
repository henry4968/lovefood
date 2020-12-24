<?php

include("Lib/UtilClass.php");
$Util = new UtilClass();

$discount = $_POST["discount"];

$sqlUpdatePoints = "UPDATE MEMBER SET MEMBER_POINTS = MEMBER_POINTS - ? WHERE MEMBER_ID = ?";

// $sqlInsertOrder = "";

// $sqlInsertOrderDetails = "";

$statementUpdatePoints = $Util->getPDO()->prepare($sqlUpdatePoints);

$statementUpdatePoints->bindValue(1, $discount);
$statementUpdatePoints->bindValue(2, $loggnedInId);
$statementUpdatePoints->execute();
$dataUP = $statementUpdatePoints->fetchAll(PDO::FETCH_ASSOC);

echo $dataUP;

?>