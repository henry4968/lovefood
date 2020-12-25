<?php

include("../Lib/backendUtilClass.php");
$Util = new UtilClass();

$sqlMember = "SELECT MEMBER_ID, MEMBER_ACCOUNT, MEMBER_NAME, MEMBER_PHONE, MEMBER_POINTS FROM `MEMBER` WHERE MEMBER_CLASS = 1 and MEMBER_ID like ? and MEMBER_ACCOUNT like ? and MEMBER_NAME like ? and MEMBER_PHONE like ?";
$sqlIssuanceLog = "SELECT POINTS_ISSUANCE_ID, POINTS_ISSUANCE_NUM, POINTS_ISSUANCE_DATE FROM Lovefood.POINTS_ISSUANCE WHERE MEMBER_ID_for_PI like ? and POINTS_ISSUANCE_DATE between ? and ?";
$sqlDiscountLog = "SELECT ORDER_ID, ORDER_DISCOUNT, ORDER_DATE FROM Lovefood.ORDER WHERE MEMBER_ID_for_OD like ? and ORDER_PICKUP_DATE between ? and ?";

$statesmentMember = $Util->getPDO()->prepare($sqlMember);
$statesmentIssuanceLog = $Util->getPDO()->prepare($sqlIssuanceLog);
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
        $statesmentIssuanceLog->bindValue(1,$_POST["dataId"]);
        $statesmentIssuanceLog->bindValue(2,$_POST["dateStart"]);
        $statesmentIssuanceLog->bindValue(3,$_POST["dateEnd"]);
        $statesmentIssuanceLog->execute();
        $dataIL = $statesmentIssuanceLog->fetchAll(PDO::FETCH_ASSOC);

        // 消費點數
        $statesmentDiscountLog->bindValue(1,$_POST["dataId"]);
        $statesmentDiscountLog->bindValue(2,$_POST["dateStart"]);
        $statesmentDiscountLog->bindValue(3,$_POST["dateEnd"]);
        $statesmentDiscountLog->execute();
        $dataDL = $statesmentDiscountLog->fetchAll(PDO::FETCH_ASSOC);

        // 統一丟進一個陣列
        $pointsQueryDetails = array('pointsOfMember' => $dataMB,'issuanceLog' =>$dataIL, 'discountLog'=>$dataDL);
        print json_encode($pointsQueryDetails);

    }

?>