<?php 
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
      
    //先令變數
    $orderNum = @$_GET["orderNum"];
    echo $orderNum;
    //0--待出貨
    //1--待取貨
    //2--取貨完成

    $sql = "UPDATE `ORDER` SET ORDER_STATUS = 1 WHERE ORDER_ID = ?";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1,$orderNum);
    $statement->execute();
    echo 123;
?>