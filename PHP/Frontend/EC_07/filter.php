<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/UtilClass07.php");

    $Util = new UtilClass();
    // $cate = new Array();  
    //先令g變數
    $arrCate = @$_POST["arrCate"];
    $cate = "'".implode("','",$arrCate)."'";
    // $cate = ",".implode(",",$arrCate).",";

    // print_r($cate);
    //判斷日期輸入格式有效
    $sql = "SELECT * FROM `PRODUCT` as aa 
    JOIN PRODUCT_CATEGORY as bb 
    on aa.PRODUCT_CATEGORY_ID_for_PD = bb.PRODUCT_CATEGORY_ID
    WHERE aa.PRODUCT_CATEGORY_ID_for_PD in (".$cate.")"; //第一步 SQL語法
    $statement = $Util->getPDO()->prepare($sql);//第二步 連線資料庫
    // $statement->bindValue(1,"('".$cate."')"); //第三步 綁定問號值
    $statement->execute(); //第四步 執行sql
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); //第五步 將資料封裝成$data
    print json_encode($data);
    // print json_encode($data);
    //第六步印出來JSON格式讓ajax呼叫



?>