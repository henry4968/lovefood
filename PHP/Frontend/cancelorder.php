<?php
// 資料庫連線
include("Lib/UtilClass.php");
$Util = new UtilClass();

// 找出ID
include("Lib/MemberClass.php");
$Member = new MemberClass();
$Member = $Member->getMemberID();

// =========================================

// 建立SQL
$sql = "update `order` set  ORDER_STATUS = 0 where MEMBER_ID_for_OD = ?";

// 執行
$ordercancel = $Util->getPDO()->prepare($sql);

// 給值
$ordercancel->bindValue(1, $Member);
$ordercancel->execute();
$ordercancelAll = $ordercancel->fetchAll();
