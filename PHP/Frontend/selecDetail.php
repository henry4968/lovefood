<?php

// 資料庫連線
include("Lib/UtilClass.php");
$Util = new UtilClass();

// 找出ID
include("Lib/MemberClass.php");
$Member = new MemberClass();
$Member = $Member->getMemberID();

//======================================================== 
//建立SQL 訂單賣家名字
$sqlodadd = "SELECT d.MRT_PICKUP_SITE_NAME FROM `order` e left join mrt_pickup_site d on e.MRT_PICKUP_SITE_ID_for_OD = d.MRT_PICKUP_SITE_ID where e.MEMBER_ID_for_OD = ?";

// 執行
$orderadd = $Util->getPDO()->prepare($sqlodadd);

// 給值
$orderadd->bindValue(1, $Member);
$orderadd->execute();
$dataorderadd = $orderadd->fetchAll(PDO::FETCH_ASSOC);

//建立SQL 訂單取貨地點
$sqlodadd = "SELECT d.MRT_PICKUP_SITE_NAME FROM `order` e left join mrt_pickup_site d on e.MRT_PICKUP_SITE_ID_for_OD = d.MRT_PICKUP_SITE_ID where e.MEMBER_ID_for_OD = ?";

// 執行
$orderadd = $Util->getPDO()->prepare($sqlodadd);

// 給值
$orderadd->bindValue(1, $Member);
$orderadd->execute();
$dataorderadd = $orderadd->fetchAll(PDO::FETCH_ASSOC);

// 對變量進行JSON編碼，不能只用print_r是因為它是把裡面的內容轉字串
print_r(json_encode($dataorderadd));
