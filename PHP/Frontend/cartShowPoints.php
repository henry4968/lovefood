<?php

include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

$loggnedInId = $_POST["loggnedInId"];

$sqlQueryPoints = "SELECT MEMBER_ID, MEMBER_POINTS FROM member WHERE MEMBER_ID = ?";

$statementQueryPoints = $Util->getPDO()->prepare($sqlQueryPoints);

$statementQueryPoints->bindValue(1, $loggnedInId);
$statementQueryPoints->execute();
$dataQP = $statementQueryPoints->fetchAll(PDO::FETCH_ASSOC);

print json_encode($dataQP);
