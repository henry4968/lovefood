<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/UtilClass.php");

    $Util = new UtilClass();
      
    //先令get變數
    
    // PD0000010

    
    // $sql = "SELECT * FROM `PRODUCT` WHERE PRODUCT_ID between ? and ?;
    $sql = "SELECT * FROM LoveFood.PRODUCT 
    WHERE PRODUCT_ID between ? and ?";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1,$page1);
    $statement->bindValue(2,$page2);
    $statement->execute();
    $data1 = $statement->fetchAll(PDO::FETCH_ASSOC);

    $page1 = $data1['PRODUCT_ID'][0];

    echo $page1;
    // $pageNew = substr($pageNow,3)+10
    // $page2 = "";
    // if($pageNew > 100 && $pageNew < 1000){
    //     $page2 = 'PD0000'.$pageNew
    // }elseif($pageNew > 1000 && $pageNew < 10000){
    //     $page2 = 'PD000'.$pageNew
    // }elseif($pageNew > 10000 && $pageNew < 100000){
    //     $page2 = 'PD00'.$pageNew
    // }
?>