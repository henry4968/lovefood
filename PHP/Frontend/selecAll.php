<?php

// 資料庫連線
include("Lib/UtilClass.php");
$Util = new UtilClass();

// 找出ID
include("Lib/MemberClass.php");
$Member = new MemberClass();
$Member = $Member->getMemberID();

//======================================================== 
//建立SQL 訂單ID
$sqlodid = "SELECT ORDER_ID,ORDER_DATE,ORDER_STATUS,PICKUP_DATE,DISCOUNT,PICKUP_METHOD from `lovefood`.`order` where MEMBER_ID_for_OD = ?";

// 執行
$orderid = $Util->getPDO()->prepare($sqlodid);

// 給值
$orderid->bindValue(1, $Member);
$orderid->execute();
$dataorderid = $orderid->fetchAll(PDO::FETCH_ASSOC);

// 對變量進行JSON編碼，不能只用print_r是因為它是把裡面的內容轉字串
print_r(json_encode($dataorderid));
