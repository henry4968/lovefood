<?php
// 資料庫連線
include("Lib/UtilClass.php");
$Util = new UtilClass();

// 針對該ID找出名稱
include("Lib/MemberClass.php");
$Member = new MemberClass();
$MemberId = $Member->getMemberID();

//======================================================== 
//建立SQL 訂單
$sql = "select * 
	from lovefood.member aa 
    join lovefood.points_issuance bb 
    on aa.MEMBER_ID = bb.MEMBER_ID_for_PI 
    where MEMBER_ID = ?";

// 執行
$point = $Util->getPDO()->prepare($sql);

// 取值
$point->bindValue(1, $MemberId);
$point->execute();
$datapoint = $point->fetchAll();

print_r(json_encode($datapoint));
