<?php

    include("../Lib/UtilClass2.php");
    $Util = new UtilClass();

    $pick01 = $_POST["pick01"];
    $pick02 = $_POST["pick02"];
    $number = '%'.@$_POST["number"].'%';
    $account = '%'.@$_POST["account"].'%';
    $name = '%'.@$_POST["name"].'%';
    $phone = '%'.@$_POST["phone"].'%';

    

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

    if(is_Date($_POST["pick01"]) && is_Date($_POST["pick02"])){

        $statesmentTotalIssance->bindValue(1,$number);
        $statesmentTotalIssance->bindValue(2,$pick02);

        $statesmentTotalIssance->execute();
        $dataIS = $statesmentTotalIssance->fetchAll(PDO::FETCH_ASSOC);

        $statesmentTotalDiscount->bindValue(1,$number);
        $statesmentTotalDiscount->bindValue(2,$pick01);
        $statesmentTotalDiscount->bindValue(3,$pick02);

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