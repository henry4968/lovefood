<?php

include("Lib/UtilClass.php");
$Util = new UtilClass();

$loggnedInId = $_POST["loggnedInId"];
$discount = $_POST["discount"];

$sqlQueryPoints = "SELECT MEMBER_ID, MEMBER_POINTS FROM MEMBER WHERE MEMBER_ID = ?";

$statementQueryPoints = $Util->getPDO()->prepare($sqlQueryPoints);

$statementQueryPoints->bindValue(1, $loggnedInId);
$statementQueryPoints->execute();
$dataQP = $statementQueryPoints->fetchAll(PDO::FETCH_ASSOC);

print json_encode($dataQP);

?>