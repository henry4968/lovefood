<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

        
        
        $pdNum1 = $_POST["pdNum1"];
        $pdNum2 = $_POST["pdNum2"];
        $pdNum1Sql = "";//商品編號搜尋起始值
        $pdNum2Sql = "";//商品編號搜尋終值

        if($pdNum1 < 10){ //商品編號搜尋起始值
            $pdNum1Sql = 'PD000000'.$pdNum1;
        }elseif($pdNum1 < 100 && $pdNum1 >= 10){
            $pdNum1Sql = 'PD00000'.$pdNum1;
        }elseif($pdNum1 < 1000 && $pdNum1 >= 100){
            $pdNum1Sql = 'PD0000'.$pdNum1;
        }

        if($pdNum2 < 10){ //商品編號搜尋終值
            $pdNum2Sql = 'PD000000'.$pdNum2;
        }elseif($pdNum2 < 100 && $pdNum2 >= 10){
            $pdNum2Sql = 'PD00000'.$pdNum2;
        }elseif($pdNum2 < 1000 && $pdNum2 >= 100){
            $pdNum2Sql = 'PD0000'.$pdNum2;
        }
        $sql = "SELECT * FROM LoveFood.PRODUCT 
        WHERE PRODUCT_ID between ? and ?
        ";
        $statement = $Util->getPDO()->prepare($sql);
        $statement->bindValue(1,$pdNum1Sql);
        $statement->bindValue(2,$pdNum2Sql);
        $statement->execute();
        $data1 = $statement->fetchAll(PDO::FETCH_ASSOC);

        
        // ==============商品種類==================

        $sql = "SELECT * FROM PRODUCT_CATEGORY";
        $statement = $Util->getPDO()->prepare($sql);
        $statement->execute();
        $data2 = $statement->fetchAll(PDO::FETCH_ASSOC);
        $dataAll = array('query' => $data1, 'categories' => $data2);
        print json_encode($dataAll);


    
    





?>