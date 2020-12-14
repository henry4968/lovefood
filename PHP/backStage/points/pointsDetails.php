<?php

include("../Lib/UtilClass2.php");
$Util = new UtilClass();

$sqlMember = "SELECT MEMBER_ID, `ACCOUNT`, `NAME`, PHONE, POINTS FROM `MEMBER` WHERE POINTS >= 0 and MEMBER_ID like ? and ACCOUNT like ? and `NAME` like ? and PHONE like ?";
$sqlIssanceLog = "SELECT POINTS_ISSANCER_ID, ISSANCE_NUM, ISSANCE_DATE FROM Lovefood.POINTS_ISSANCE WHERE MEMBER_ID_for_PI like ? and ISSANCE_DATE between ? and ?";
$sqlDiscountLog = "SELECT ORDER_ID, DISCOUNT, ORDER_DATE FROM Lovefood.ORDER WHERE MEMBER_ID_for_OD like ? and PICKUP_DATE between ? and ?";

$statesmentMember = $Util->getPDO()->prepare($sqlMember);
$statesmentIssanceLog = $Util->getPDO()->prepare($sqlIssanceLog);
$statesmentDiscountLog = $Util->getPDO()->prepare($sqlDiscountLog);

// 會員詳情
    if(isset($_POST["dataId"])){

        // 會員資訊
        $statesmentMember->bindValue(1,'%'.@$_POST["dataId"].'%');
        $statesmentMember->bindValue(2,'%%');
        $statesmentMember->bindValue(3,'%%');
        $statesmentMember->bindValue(4,'%%');
        $statesmentMember->execute();
        $dataMB = $statesmentMember->fetchAll(PDO::FETCH_ASSOC);

        // 發放點數
        $statesmentIssanceLog->bindValue(1,$_POST["dataId"]);
        $statesmentIssanceLog->bindValue(2,$_POST["dateStart"]);
        $statesmentIssanceLog->bindValue(3,$_POST["dateEnd"]);
        $statesmentIssanceLog->execute();
        $dataIL = $statesmentIssanceLog->fetchAll(PDO::FETCH_ASSOC);

        // 消費點數
        $statesmentDiscountLog->bindValue(1,$_POST["dataId"]);
        $statesmentDiscountLog->bindValue(2,$_POST["dateStart"]);
        $statesmentDiscountLog->bindValue(3,$_POST["dateEnd"]);
        $statesmentDiscountLog->execute();
        $dataDL = $statesmentDiscountLog->fetchAll(PDO::FETCH_ASSOC);

        // 統一丟進一個陣列
        $pointsQueryDetails = array('pointsOfMember' => $dataMB,'issanceLog' =>$dataIL, 'discountLog'=>$dataDL);
        print json_encode($pointsQueryDetails);

    }

?>