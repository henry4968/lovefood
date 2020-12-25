<?php
// 資料庫連線
include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

// 針對該ID找出名稱
include("Lib/MemberClass.php");
$Member = new MemberClass();
$MemberId = $Member->getMemberID();

//========================================================  
//建立SQL 花費點數
$sqlspan = 'SELECT * FROM `order` where (ORDER_DISCOUNT != "" and MEMBER_ID_for_OD = ?)';

// 執行
$pointspan = $Util->getPDO()->prepare($sqlspan);

// 取值
$pointspan->bindValue(1, $MemberId);
$pointspan->execute();
$datapointspan = $pointspan->fetchAll();

//========================================================  
//建立SQL 發放點數
$sqlgetpoint = "SELECT * FROM points_issuance where MEMBER_ID_for_PI = ?";

// 執行
$getpoint = $Util->getPDO()->prepare($sqlgetpoint);

// 取值
$getpoint->bindValue(1, $MemberId);
$getpoint->execute();
$datagetpoint = $getpoint->fetchAll();

$data = array('span' => $datapointspan, 'get' => $datagetpoint);
print_r(json_encode($data));
