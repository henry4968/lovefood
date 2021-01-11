<?php

include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

// 針對該ID找出名稱
include("Lib/MemberClass.php");

$Member = new MemberClass();

// 測試印出MEMBERID
$MemberId = $Member->getMemberID();

$sqlQueryPoints = "SELECT MEMBER_POINTS FROM member WHERE MEMBER_ID = ?";

$statementQueryPoints = $Util->getPDO()->prepare($sqlQueryPoints);

$statementQueryPoints->bindValue(1, $MemberId);
$statementQueryPoints->execute();
$dataQP = $statementQueryPoints->fetchAll(PDO::FETCH_ASSOC);

print json_encode($dataQP);
