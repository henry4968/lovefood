<?php 
    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $sqlSelectOrderMaxId = "SELECT max(ORDER_ID) FROM `ORDER`";

    $statementSelectOrderMaxId = $Util->getPDO()->prepare($sqlSelectOrderMaxId);
    $statementSelectOrderMaxId->execute();
    $orderMaxId = $statementSelectOrderMaxId->fetch();
    
    $orderMaxNumber = substr($orderMaxId[0], 2, 7) + 1;
    
    $insertOrderId = "";

    if($orderMaxNumber < 10){
        $insertOrderId = "SC000000".$orderMaxNumber;
    }else if($orderMaxNumber < 100 && $orderMaxNumber >= 10){
        $insertOrderId = "SC00000".$orderMaxNumber;
    }else if($orderMaxNumber < 1000 && $orderMaxNumber>=100){
        $insertOrderId = "SC0000".$maxNumber;
    }else if($orderMaxNumber < 10000 && $orderMaxNumber>=1000){
        $insertOrderId = "SC000".$maxNumber;
    }else if($orderMaxNumber < 100000 && $maxNumber>=10000){
        $insertOrderId = "SC00".$orderMaxNumber;
    }

    $sqlInsertOrder = "INSERT INTO `ORDER` (ORDER_ID, ORDER_DATE, MEMBER_ID_for_OD, ORDER_STATUS, ORDER_PICKUP_DATE, ORDER_DISCOUNT, ORDER_PICKUP_METHOD, MRT_PICKUP_SITE_ID_for_OD)
    VALUES (?, NOW(), ?, 9, NOW(), ?, 0, null)";

    $statementInsertOrder = $Util->getPDO()->prepare($sqlInsertOrder);

    if(!$_POST['points03'] == ""){

        $statementInsertOrder->bindValue(1, $insertOrderId);
        $statementInsertOrder->bindValue(2, $_POST["selectedId"]);
        $statementInsertOrder->bindValue(3, $_POST["points03"]);
        $statementInsertOrder->execute();

    }else if(!$_POST['points04'] == ""){

        $statementInsertOrder->bindValue(1, $insertOrderId);
        $statementInsertOrder->bindValue(2, $_POST["selectedId"]);
        $statementInsertOrder->bindValue(3, $_POST["points04"]);
        $statementInsertOrder->execute();

    }

    $sqlPointsUpdate = "UPDATE MEMBER SET MEMBER_POINTS = MEMBER_POINTS - ? WHERE MEMBER_ID = ?";
    $statesmentsqlPointsUpdate = $Util->getPDO()->prepare($sqlPointsUpdate);

    if(!$_POST['points03'] == ""){

        $statesmentsqlPointsUpdate->bindValue(1,$_POST['points03']);
        $statesmentsqlPointsUpdate->bindValue(2,$_POST["selectedId"]);

    }else if(!$_POST['points04'] == ""){

        $statesmentsqlPointsUpdate->bindValue(1,$_POST['points04']);
        $statesmentsqlPointsUpdate->bindValue(2,$_POST["selectedId"]);

    }

    $statesmentsqlPointsUpdate->execute();

    echo "刪減點數的工作執行了！";
?>