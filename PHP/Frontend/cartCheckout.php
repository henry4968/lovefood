<?php

include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

$orders = $_POST["orders"];
$productQuantity = $_POST["productQuantity"];

$sqlSelectOrderMaxId = "SELECT max(ORDER_ID) FROM `ORDER`";

$sqlSelectDetailMaxId = "SELECT max(ORDER_DETAIL_ID) FROM ORDER_DETAIL";

$sqlUpdatePoints = "UPDATE MEMBER SET MEMBER_POINTS = MEMBER_POINTS - ? WHERE MEMBER_ID = ?";

$sqlInsertOrder = "INSERT INTO `ORDER` (ORDER_ID, ORDER_DATE, MEMBER_ID_for_OD, ORDER_STATUS, ORDER_PICKUP_DATE, ORDER_DISCOUNT, ORDER_PICKUP_METHOD, MRT_PICKUP_SITE_ID_for_OD)
VALUES (?, NOW(), ?, 1, '2020-12-31 00:00:00', ?, ?, ?)";

$sqlInsertOrderDetails = "INSERT INTO ORDER_DETAIL VALUES (?, ?, ?, ?)";

$statementUpdatePoints = $Util->getPDO()->prepare($sqlUpdatePoints);

$statementUpdatePoints->bindValue(1, $_POST["totalDiscount"]);
$statementUpdatePoints->bindValue(2, $_POST["memberId"]);
$statementUpdatePoints->execute();

if(count($orders) > 1){

    $statementSelectOrderMaxId = $Util->getPDO()->prepare($sqlSelectOrderMaxId);
    $statementSelectOrderMaxId->execute();
    $orderMaxId = $statementSelectOrderMaxId->fetch();
    
    $orderMaxNumber = substr($orderMaxId[0], 2, 7) + 1;
    
    $insertOrderId = "";
    
    if($orderMaxNumber < 10){
        $insertOrderId = "OD000000".$orderMaxNumber;
    }else if($orderMaxNumber < 100 && $orderMaxNumber >= 10){
        $insertOrderId = "OD00000".$orderMaxNumber;
    }else if($orderMaxNumber < 1000 && $orderMaxNumber>=100){
        $insertOrderId = "OD0000".$maxNumber;
    }else if($orderMaxNumber < 10000 && $orderMaxNumber>=1000){
        $insertOrderId = "OD000".$maxNumber;
    }else if($orderMaxNumber < 100000 && $maxNumber>=10000){
        $insertOrderId = "OD00".$orderMaxNumber;
    }
    
    $statementInsertOrder = $Util->getPDO()->prepare($sqlInsertOrder);
    
    $statementInsertOrder->bindValue(1, $insertOrderId);
    $statementInsertOrder->bindValue(2, $_POST["memberId"]);
    $statementInsertOrder->bindValue(3, $_POST["totalDiscount"]);
    $statementInsertOrder->bindValue(4, 1);
    $statementInsertOrder->bindValue(5, null);
    $statementInsertOrder->execute();

    $statementSelectDetailMaxId = $Util->getPDO()->prepare($sqlSelectDetailMaxId);
    $statementSelectDetailMaxId->execute();
    $maxDetailId = $statementSelectDetailMaxId->fetch();
    
    $maxDetailNumber = substr($maxDetailId[0], 3, 10) + 1;
    
    $insertDetailId = "";
    
    if($maxDetailNumber < 10){
        $insertDetailId = "ODD000000000".$maxDetailNumber;
    }else if($maxDetailNumber < 100 && $maxDetailNumber >= 10){
        $insertDetailId = "ODD00000000".$maxDetailNumber;
    }else if($maxDetailNumber < 1000 && $maxDetailNumber>=100){
        $insertDetailId = "ODD0000000".$maxDetailNumber;
    }else if($maxDetailNumber < 10000 && $maxDetailNumber>=1000){
        $insertDetailId = "ODD000000".$maxDetailNumber;
     }else if($maxDetailNumber < 100000 && $maxDetailNumber>=10000){
        $insertDetailId = "ODD00000".$maxDetailNumber;
    }
    
    for($i = 0; $i < count($orders[0]); $i++){

        $statementInsertOrderDetails = $Util->getPDO()->prepare($sqlInsertOrderDetails);
    
        $statementInsertOrderDetails->bindValue(1, $insertDetailId);
        $statementInsertOrderDetails->bindValue(2, $orders[0][$i][0]);
        $statementInsertOrderDetails->bindValue(3, $orders[0][$i][1]);
        $statementInsertOrderDetails->bindValue(4, $insertOrderId);
        $statementInsertOrderDetails->execute();

    }

    for($i = 1; $i < count($orders); $i++){
    
        $statementSelectOrderMaxId  = $Util->getPDO()->prepare($sqlSelectOrderMaxId);
        $statementSelectOrderMaxId->execute();
        $orderMaxId = $statementSelectOrderMaxId->fetch();
    
        $orderMaxNumber = substr($orderMaxId[0], 3, 10) + 1;
    
        $insertOrderId = "";
    
        if($orderMaxNumber < 10){
            $insertOrderId = "OD000000".$orderMaxNumber;
        }else if($orderMaxNumber < 100 && $orderMaxNumber >= 10){
            $insertOrderId = "OD00000".$orderMaxNumber;
        }else if($orderMaxNumber < 1000 && $orderMaxNumber>=100){
            $insertOrderId = "OD0000".$maxNumber;
        }else if($orderMaxNumber < 10000 && $orderMaxNumber>=1000){
            $insertOrderId = "OD000".$maxNumber;
        }else if($orderMaxNumber < 100000 && $maxNumber>=10000){
            $insertOrderId = "OD00".$orderMaxNumber;
        }
    
        $statementInsertOrder = $Util->getPDO()->prepare($sqlInsertOrder);
    
        $statementInsertOrder->bindValue(1, $insertOrderId);
        $statementInsertOrder->bindValue(2, $_POST["memberId"]);
        $statementInsertOrder->bindValue(3, 0);
        $statementInsertOrder->bindValue(4, 1);
        $statementInsertOrder->bindValue(5, null);
        $statementInsertOrder->execute();
        
        for($j = 0; $j < count($orders[$i]); $j++){
    
            $statementSelectDetailMaxId  = $Util->getPDO()->prepare($sqlSelectDetailMaxId);
            $statementSelectDetailMaxId->execute();
            $maxDetailId = $statementSelectDetailMaxId->fetch();
        
            $maxDetailNumber = substr($maxDetailId[0], 3, 10) + 1;
        
            $insertDetailId = "";
        
            if($maxDetailNumber < 10){
                $insertDetailId = "ODD000000000".$maxDetailNumber;
            }else if($maxDetailNumber < 100 && $maxDetailNumber >= 10){
                $insertDetailId = "ODD00000000".$maxDetailNumber;
            }else if($maxDetailNumber < 1000 && $maxDetailNumber>=100){
                $insertDetailId = "ODD0000000".$maxDetailNumber;
            }else if($maxDetailNumber < 10000 && $maxDetailNumber>=1000){
                $insertDetailId = "ODD000000".$maxDetailNumber;
            }else if($maxDetailNumber < 100000 && $maxDetailNumber>=10000){
                $insertDetailId = "ODD00000".$maxDetailNumber;
            }
        
            for($k = 0; $k < count($orders[$i]); $k++){
    
                $statementInsertOrderDetails = $Util->getPDO()->prepare($sqlInsertOrderDetails);
        
                $statementInsertOrderDetails->bindValue(1, $insertDetailId);
                $statementInsertOrderDetails->bindValue(2, $orders[$i][$j][0]);
                $statementInsertOrderDetails->bindValue(3, $orders[$i][$j][1]);
                $statementInsertOrderDetails->bindValue(4, $insertOrderId);
                $statementInsertOrderDetails->execute();
    
            }

        }
    
    }

}else{

    $statementSelectOrderMaxId  = $Util->getPDO()->prepare($sqlSelectOrderMaxId);
    $statementSelectOrderMaxId->execute();
    $orderMaxId = $statementSelectOrderMaxId->fetch();
    
    $orderMaxNumber = substr( $orderMaxId[0], 2, 7) + 1;
    
    $insertOrderId = "";
    
    if($orderMaxNumber < 10){
        $insertOrderId = "OD000000".$orderMaxNumber;
    }else if($orderMaxNumber < 100 && $orderMaxNumber >= 10){
        $insertOrderId = "OD00000".$orderMaxNumber;
    }else if($orderMaxNumber < 1000 && $orderMaxNumber>=100){
        $insertOrderId = "OD0000".$maxNumber;
    }else if($orderMaxNumber < 10000 && $orderMaxNumber>=1000){
        $insertOrderId = "OD000".$maxNumber;
    }else if($orderMaxNumber < 100000 && $maxNumber>=10000){
        $insertOrderId = "OD00".$orderMaxNumber;
    }
    
    $statementInsertOrder = $Util->getPDO()->prepare($sqlInsertOrder);
    
    $statementInsertOrder->bindValue(1, $insertOrderId);
    $statementInsertOrder->bindValue(2, $_POST["memberId"]);
    $statementInsertOrder->bindValue(3, $_POST["totalDiscount"]);
    $statementInsertOrder->bindValue(4, 1);
    $statementInsertOrder->bindValue(5, null);
    $statementInsertOrder->execute();

    for($i = 0; $i < count($orders); $i++){
    
        $statementSelectDetailMaxId  = $Util->getPDO()->prepare($sqlSelectDetailMaxId);
        $statementSelectDetailMaxId->execute();
        $maxDetailId = $statementSelectDetailMaxId->fetch();
    
        $maxDetailNumber = substr($maxDetailId[0], 3, 10) + 1;
    
        $insertDetailId = "";
    
        if($maxDetailNumber < 10){
            $insertDetailId = "ODD000000000".$maxDetailNumber;
        }else if($maxDetailNumber < 100 && $maxDetailNumber >= 10){
            $insertDetailId = "ODD00000000".$maxDetailNumber;
        }else if($maxDetailNumber < 1000 && $maxDetailNumber>=100){
            $insertDetailId = "ODD0000000".$maxDetailNumber;
        }else if($maxDetailNumber < 10000 && $maxDetailNumber>=1000){
            $insertDetailId = "ODD000000".$maxDetailNumber;
        }else if($maxDetailNumber < 100000 && $maxDetailNumber>=10000){
            $insertDetailId = "ODD00000".$maxDetailNumber;
        }
    
        for($j = 0; $j < count($orders[$i]); $j++){

            $statementInsertOrderDetails = $Util->getPDO()->prepare($sqlInsertOrderDetails);
    
            $statementInsertOrderDetails->bindValue(1, $insertDetailId);
            $statementInsertOrderDetails->bindValue(2, $orders[$i][$j][0]);
            $statementInsertOrderDetails->bindValue(3, $orders[$i][$j][1]);
            $statementInsertOrderDetails->bindValue(4, $insertOrderId);
            $statementInsertOrderDetails->execute();

        }
        
    
    }


}

?>