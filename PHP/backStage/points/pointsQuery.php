<?php

    include("../Lib/UtilClass2.php");
    $Util = new UtilClass();

    $dateStart = $_POST["dateStart"];
    $dateEnd = $_POST["dateEnd"];
    $number = '%'.@$_POST["number"].'%';
    $account = '%'.@$_POST["account"].'%';
    $name = '%'.@$_POST["name"].'%';
    $phone = '%'.@$_POST["phone"].'%';

    $sqlMember = "SELECT MEMBER_ID, `ACCOUNT`, `NAME`, PHONE, POINTS FROM `MEMBER` WHERE POINTS >= 0 like ? and ACCOUNT like ? and `NAME` like ? and PHONE like ?";
    $sqlTotalIssance = "SELECT MEMBER_ID_for_PI, sum(ISSANCE_NUM) as TOTAL_ISSANCE FROM Lovefood.POINTS_ISSANCE PI JOIN `MEMBER` MB ON PI.MEMBER_ID_for_PI = MB.MEMBER_ID WHERE MEMBER_ID_for_PI like ? && PI.ISSANCE_DATE >= MB.REG_DATE && PI.ISSANCE_DATE <= ? GROUP BY MEMBER_ID";
    $sqlTotalDiscount = "SELECT MEMBER_ID_for_OD, sum(ifnull(DISCOUNT, 0)) as TOTAL_DISCOUNT FROM Lovefood.ORDER WHERE MEMBER_ID_for_OD like ? && ORDER_DATE >= ? && ORDER_DATE <= ? GROUP BY MEMBER_ID_for_OD";
    $sqlIssanceLog = "SELECT POINTS_ISSANCER_ID, ISSANCE_NUM, ISSANCE_DATE FROM Lovefood.POINTS_ISSANCE WHERE MEMBER_ID_for_PI like ?";
    $sqlDiscountLog = "SELECT ORDER_ID, DISCOUNT, ORDER_DATE FROM Lovefood.ORDER WHERE MEMBER_ID_for_OD like ?";

    $statesmentMember = $Util->getPDO()->prepare($sqlMember);
    $statesmentTotalIssance = $Util->getPDO()->prepare($sqlTotalIssance);
    $statesmentTotalDiscount = $Util->getPDO()->prepare($sqlTotalDiscount);
    $statesmentIssanceLog = $Util->getPDO()->prepare($sqlIssanceLog);
    $statesmentDiscountLog = $Util->getPDO()->prepare($sqlDiscountLog);

    $statesmentIssanceLog->bindValue(1,$number);
    $statesmentIssanceLog->execute();
    $dataIL = $statesmentIssanceLog->fetchAll(PDO::FETCH_ASSOC);

    $statesmentDiscountLog->bindValue(1,$number);
    $statesmentDiscountLog->execute();
    $dataDL = $statesmentDiscountLog->fetchAll(PDO::FETCH_ASSOC);

    if(is_Date($_POST["dateStart"]) && is_Date($_POST["dateEnd"])){

        $statesmentTotalIssance->bindValue(1,$number);
        $statesmentTotalIssance->bindValue(2,$dateEnd);

        $statesmentTotalIssance->execute();
        $dataIS = $statesmentTotalIssance->fetchAll(PDO::FETCH_ASSOC);

        $statesmentTotalDiscount->bindValue(1,$number);
        $statesmentTotalDiscount->bindValue(2,$dateStart);
        $statesmentTotalDiscount->bindValue(3,$dateEnd);

        $statesmentTotalDiscount->execute();
        $dataDS = $statesmentTotalDiscount->fetchAll(PDO::FETCH_ASSOC);

        $statesmentMember->bindValue(1,$number);
        $statesmentMember->bindValue(2,$account);
        $statesmentMember->bindValue(3,$name);
        $statesmentMember->bindValue(4,$phone);
        
        $statesmentMember->execute();
        $dataMB = $statesmentMember->fetchAll(PDO::FETCH_ASSOC); 

        $pointsQueryWithDate = array('pointsOfMember' => $dataMB,'pointsIssance' =>$dataIS, 'pointsDiscount' =>$dataDS, 'issanceLog' =>$dataIL, 'discountLog'=>$dataDL);
        print json_encode($pointsQueryWithDate);
        
    }else{

        $statesmentMember->bindValue(1,$number);
        $statesmentMember->bindValue(2,$account);
        $statesmentMember->bindValue(3,$name);
        $statesmentMember->bindValue(4,$phone);

        $statesmentMember->execute();
        $dataMB = $statesmentMember->fetchAll(PDO::FETCH_ASSOC);
        
        $pointsQueryWithoutDate = array('pointsOfMember' => $dataMB, 'issanceLog' =>$dataIL, 'discountLog'=>$dataDL);
        print json_encode($pointsQueryWithoutDate);
    }

    function is_Date($string){
        $arr = explode('-',$string);
        return (isset($arr[0])) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1],$arr[2],$arr[0])? true : false;
    }

?>