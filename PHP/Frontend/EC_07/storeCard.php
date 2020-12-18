<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/UtilClass07.php");

    $Util = new UtilClass();
      
    //先令g變數
    $arrCate = @$_POST["arrCate"];
    $cate = "'".implode("','",$arrCate)."'";
    //判斷日期輸入格式有效
    
    $sql = "SELECT * FROM `PRODUCT` as aa 
    JOIN PRODUCT_CATEGORY as bb 
    on aa.PRODUCT_CATEGORY_ID_for_PD = bb.PRODUCT_CATEGORY_ID 
    JOIN SUPPLIER as cc 
    on aa.SUPPLIER_ID_for_PD = cc.SUPPLIER_ID
    "; //第一步 SQL語法
    $statement = $Util->getPDO()->prepare($sql);//第二步 連線資料庫
    // $statement->bindValue(1,"('".$cate."')"); //第三步 綁定問號值
    $statement->execute(); //第四步 執行sql
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); //第五步 將資料封裝成$data

   



?>