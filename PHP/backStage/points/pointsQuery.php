<?php

    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $sqlMember = "SELECT MEMBER_ID, `MEMBER_ACCOUNT`, `MEMBER_NAME`, MEMBER_PHONE, MEMBER_POINTS FROM `MEMBER` WHERE MEMBER_CLASS = 1 and MEMBER_ID like ? and MEMBER_ACCOUNT like ? and `MEMBER_NAME` like ? and MEMBER_PHONE like ?";
    $sqlTotalIssuance = "SELECT MEMBER_ID_for_PI, sum(POINTS_ISSUANCE_NUM) as TOTAL_ISSUANCE FROM POINTS_ISSUANCE PI JOIN `MEMBER` MB ON PI.MEMBER_ID_for_PI = MB.MEMBER_ID WHERE MEMBER_ID_for_PI like ? && PI.POINTS_ISSUANCE_DATE >= MB.MEMBER_REG_DATE && PI.POINTS_ISSUANCE_DATE <= ? GROUP BY MEMBER_ID";
    $sqlTotalDiscount = "SELECT MEMBER_ID_for_OD, sum(ifnull(ORDER_DISCOUNT, 0)) as TOTAL_DISCOUNT FROM `ORDER` WHERE MEMBER_ID_for_OD like ? && ORDER_DATE >= ? && ORDER_DATE <= ? GROUP BY MEMBER_ID_for_OD";

    $statesmentMember = $Util->getPDO()->prepare($sqlMember);
    $statesmentTotalIssuance = $Util->getPDO()->prepare($sqlTotalIssuance);
    $statesmentTotalDiscount = $Util->getPDO()->prepare($sqlTotalDiscount);

    // 搜尋功能
    if(is_Date($_POST["dateStart"]) && is_Date($_POST["dateEnd"])){

        $statesmentTotalIssuance->bindValue(1,'%'.@$_POST["id"].'%');
        $statesmentTotalIssuance->bindValue(2,$_POST["dateEnd"]);

        $statesmentTotalIssuance->execute();
        $dataIS = $statesmentTotalIssuance->fetchAll(PDO::FETCH_ASSOC);

        $statesmentTotalDiscount->bindValue(1,'%'.@$_POST["id"].'%');
        $statesmentTotalDiscount->bindValue(2,$_POST["dateStart"]);
        $statesmentTotalDiscount->bindValue(3,$_POST["dateEnd"]);

        $statesmentTotalDiscount->execute();
        $dataDS = $statesmentTotalDiscount->fetchAll(PDO::FETCH_ASSOC);

        $statesmentMember->bindValue(1,'%'.@$_POST["id"].'%');
        $statesmentMember->bindValue(2,'%'.@$_POST["account"].'%');
        $statesmentMember->bindValue(3,'%'.@$_POST["name"].'%');
        $statesmentMember->bindValue(4,'%'.@$_POST["phone"].'%');
        
        $statesmentMember->execute();
        $dataMB = $statesmentMember->fetchAll(PDO::FETCH_ASSOC); 

        $pointsQueryWithDate = array('pointsOfMember' => $dataMB,'pointsIssuance' =>$dataIS, 'pointsDiscount' =>$dataDS);
        print json_encode($pointsQueryWithDate);
        
    }else{

        $statesmentMember->bindValue(1,'%'.@$_POST["id"].'%');
        $statesmentMember->bindValue(2,'%'.@$_POST["account"].'%');
        $statesmentMember->bindValue(3,'%'.@$_POST["name"].'%');
        $statesmentMember->bindValue(4,'%'.@$_POST["phone"].'%');

        $statesmentMember->execute();
        $dataMB = $statesmentMember->fetchAll(PDO::FETCH_ASSOC);

        foreach($dataMB as $row => $data){
            echo $data;
        }
    }

    function is_Date($string){
        $arr = explode('-',$string);
        return (isset($arr[0])) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1],$arr[2],$arr[0])? true : false;
    }

?>