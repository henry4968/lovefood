<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/frontendUtilClass.php");
    $start = new UtilClass();
    
    $pdNum = $_POST['pdNum'];
    
    // echo $pdNum->getPd();
    //判斷日期輸入格式有效
    $sqlAll = "SELECT * FROM PRODUCT as aa
    JOIN product_category as bb
    ON aa.PRODUCT_CATEGORY_ID_for_PD= bb.PRODUCT_CATEGORY_ID
    JOIN SUPPLIER as cc
    ON aa.SUPPLIER_ID_for_PD = cc.SUPPLIER_ID
    WHERE PRODUCT_ID = ?
    "; //第一步 SQL語法
    $state = $start->getPDO()->prepare($sqlAll);//第二步 連線資料庫
    $state->bindValue(1,$pdNum);
    // $statement->bindValue(1,"('".$cate."')"); //第三步 綁定問號值
    $state->execute(); //第四步 執行sql
    $dataAll = $state->fetchAll(PDO::FETCH_ASSOC); //第五步 將資料封裝成$data
    print json_encode($dataAll);
    //第六步印出來JSON格式讓ajax呼叫



?>

