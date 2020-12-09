<?php

    include("../Lib/UtilClass2.php");
    $Util = new UtilClass();

    $pick01 = $_POST["pick01"];
    $pick02 = $_POST["pick02"];
    $number = '%'.@$_POST["number"].'%';
    $account = '%'.@$_POST["account"].'%';
    $name = '%'.@$_POST["name"].'%';
    $phone = '%'.@$_POST["phone"].'%';

    $sqlMember = "SELECT MEMBER_ID, `ACCOUNT`, `NAME`, PHONE, POINTS FROM `MEMBER` WHERE POINTS >= 0 like ? and ACCOUNT like ? and `NAME` like ? and PHONE like ?";
    $sqlTotalIssance = "SELECT MEMBER_ID_for_PI, sum(ISSANCE_NUM) as TOTAL_ISSANCE FROM Lovefood.POINTS_ISSANCE PI JOIN `MEMBER` MB ON PI.MEMBER_ID_for_PI = MB.MEMBER_ID WHERE MEMBER_ID_for_PI like ? && PI.ISSANCE_DATE >= MB.REG_DATE && PI.ISSANCE_DATE <= ? GROUP BY MEMBER_ID";
    $sqlTotalDiscount = "SELECT MEMBER_ID_for_OD, sum(ifnull(DISCOUNT, 0)) as TOTAL_DISCOUNT FROM Lovefood.ORDER WHERE MEMBER_ID_for_OD like ? && ORDER_DATE >= ? && ORDER_DATE <= ? GROUP BY MEMBER_ID_for_OD";

    $statesmentMember = $Util->getPDO()->prepare($sqlMember);
    $statesmentIssance = $Util->getPDO()->prepare($sqlTotalIssance);
    $statesmentDiscount = $Util->getPDO()->prepare($sqlTotalDiscount);

    if(is_Date($_POST["pick01"]) && is_Date($_POST["pick02"])){

        $statesmentIssance->bindValue(1,$number);
        $statesmentIssance->bindValue(2,$pick02);
        $statesmentIssance->execute();
        $dataIS = $statesmentIssance->fetchAll(PDO::FETCH_ASSOC);

        $statesmentDiscount->bindValue(1,$number);
        $statesmentDiscount->bindValue(2,$pick01);
        $statesmentDiscount->bindValue(3,$pick02);
        $statesmentDiscount->execute();
        $dataDS = $statesmentDiscount->fetchAll(PDO::FETCH_ASSOC);

        $statesmentMember->bindValue(1,$number);
        $statesmentMember->bindValue(2,$account);
        $statesmentMember->bindValue(3,$name);
        $statesmentMember->bindValue(4,$phone);
        
        $statesmentMember->execute();
        $dataMB = $statesmentMember->fetchAll(PDO::FETCH_ASSOC); 

        $pointsQuery = array('pointsOfMember' => $dataMB,'pointsIssance' =>$dataIS, 'pointsDiscount' =>$dataDS);
        print json_encode($pointsQuery);
        
    }else{

        $statesmentMember->bindValue(1,$number);
        $statesmentMember->bindValue(2,$account);
        $statesmentMember->bindValue(3,$name);
        $statesmentMember->bindValue(4,$phone);

        $statesmentMember->execute();
        $dataMB = $statesmentMember->fetchAll(PDO::FETCH_ASSOC);
        
        print json_encode($dataMB);
    }

    function is_Date($string){
        $arr = explode('-',$string);
        return (isset($arr[0])) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1],$arr[2],$arr[0])? true : false;
    }

    // if(is_Date($_POST["pick01"]) && is_Date($_POST["pick02"])){
    //     $sql = "";
                    
    //     $statesment = $Util->getPDO()->prepare($sql);

    //     $statesment->bindValue(1,$pick01);
    //     $statesment->bindValue(2,$pick02);
    //     $statesment->bindValue(3,$pick01);
    //     $statesment->bindValue(4,$pick02);
    //     $statesment->bindValue(5,$number);
    //     $statesment->bindValue(6,$account);
    //     $statesment->bindValue(7,$name);
    //     $statesment->bindValue(8,$phone);

    //     $statesment->execute();
    //     $data01 = $statesment->fetchAll();

    // }else{
                    
    //     $statesment = $Util->getPDO()->prepare($sql);

    //     $statesment->bindValue(1,$number);
    //     $statesment->bindValue(2,$account);
    //     $statesment->bindValue(3,$name);
    //     $statesment->bindValue(4,$phone);

    //     $statesment->execute();
    //     $data01 = $statesment->fetchAll();
    // }

    // $sql = "SELECT ORDER_ID, DISCOUNT, ORDER_DATE FROM Lovefood.ORDER WHERE DISCOUNT > 0 and MEMBER_ID_for_OD like ?";
    // $statesment = $Util->getPDO()->prepare($sql);
    // $statesment->bindValue(1,$number);

    // $statesment->execute();
    // $data02 = $statesment->fetchAll();

    // $sql = "SELECT POINTS_ISSANCER_ID, ISSANCE_NUM, ISSANCE_DATE FROM Lovefood.POINTS_ISSANCE WHERE MEMBER_ID_for_PI like ?";
    // $statesment = $Util->getPDO()->prepare($sql);
    // $statesment->bindValue(1,$number);

    // $statesment->execute();
    // $data03 = $statesment->fetchAll();

    // $pointsQuery = array('pointsOfMember' => $data01,'pointsUsing' =>$data02, 'pointsIssance' =>$data03);
    // print json_encode($pointsQuery);

?>