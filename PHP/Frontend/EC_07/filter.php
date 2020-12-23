<?php
include("../Lib/UtilClass.php");
// include("../Lib/UtilClass07.php");

    $start = new UtilClass();
      
    //先令g變數
    if(isset($_POST["arrCate"])){
        $arrCate = $_POST["arrCate"];//接ajax的data
        $cate = "'".implode("','",$arrCate)."'";
    }else{
        $cate = 'PC0006';
    }
    if(isset($_POST['arrSeller'])){
        $arrSeller = $_POST['arrSeller'];
        $seller = "'".implode("','",$arrSeller)."'";
    }else{
        $seller = null;
    }
    //商家
    // $sellers = @$_POST["sellers"];
    // $SELLERS = "'".implode("','",$sellers)."'";
    // //種類
    // $arrspecies = @$_POST["arrspecies"];
    // $species = "'".implode("','",$arrspecies)."'";

    //判斷日期輸入格式有效
    // 
    $sqlAll = "SELECT * FROM PRODUCT as aa 
    JOIN PRODUCT_CATEGORY as bb 
    on aa.PRODUCT_CATEGORY_ID_for_PD = bb.PRODUCT_CATEGORY_ID 
    JOIN SUPPLIER as cc 
    on aa.SUPPLIER_ID_for_PD = cc.SUPPLIER_ID
    WHERE aa.PRODUCT_CATEGORY_ID_for_PD in (".$cate.")
    AND cc.ORGANIZATION_ID_for_SP in (".$seller.")";
     //第一步 SQL語法
    $state = $start->getPDO()->prepare($sqlAll);//第二步 連線資料庫
 //第三步 綁定問號值
    $state->execute(); //第四步 執行sql
    $dataAll = $state->fetchAll(PDO::FETCH_ASSOC); //第五步 將資料封裝成$data
    for($i=0;$i<count($dataAll);$i++){
        $dataAll[$i]['PRODUCT_IMG'] = base64_encode($dataAll[$i]['PRODUCT_IMG']);
    }
    print json_encode($dataAll);
    //第六步印出來JSON格式讓ajax呼叫


?>

// print_r($dataAll);
// print json_encode($dataAll);
//第六步印出來JSON格式讓ajax呼叫
echo 123;
