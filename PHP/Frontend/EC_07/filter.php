<?php
// include("../Lib/UtilClass.php");
include("../Lib/UtilClass07.php");

    $start = new UtilClass();
      
    //查詢陣列轉字串

    //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為全選搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝
    if(isset($_POST["arrCate"])){
        $arrCate = $_POST["arrCate"];//接ajax的data
        $cate = "'".implode("','",$arrCate)."'";//sql語句
    }else{
        $cate = "";//sql語句
    }
    if(isset($_POST['arrSeller'])){
        $arrSeller = $_POST['arrSeller'];
        $seller = "'".implode("','",$arrSeller)."'";//sql語句
    }else{
        $seller = "";//sql語句
    }

    //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為區域搜尋 ＝＝＝＝＝＝＝＝＝＝＝＝＝
    //button id="btn2"



    //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為商家搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝
    //button id="btn3"
    if(isset($_POST['onlySellersArr'])){
        $onlySellersArr = @$_POST["onlySellersArr"];
        $onlySeller = "'".implode("','",$onlySellersArr)."'";//sql語句
    }else{
        $onlySeller= "";//sql語句
    }
    //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為種類搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝
    //button id="btn4"
    if(isset($_POST['onlyCateArr'])){
        $onlyCateArr = @$_POST["onlyCateArr"];
        $onlyCate = "'".implode("','",$onlyCateArr)."'";//sql語句
    }else{
        $onlyCate= "";//sql語句
    }
    //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為RWD地圖搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝
    //button id="btn5"
    if(isset($_POST['onlyRWDMapArr'])){
        $onlyRWDMapArr = @$_POST["onlyRWDMapArr"];
        $onlyRWDMap = "'".implode("','",$onlyRWDMapArr)."'";//sql語句
    }else{
        $onlyRWDMap= "";//sql語句
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
    WHERE 1 = 1 ";
   
   //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為全選搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝

    if ($cate != null && $cate != "") {
        $sqlAll = $sqlAll."AND aa.PRODUCT_CATEGORY_ID_for_PD in (".$cate.")";
    }

    if ($seller != null && $seller != "") {
        $sqlAll = $sqlAll."AND cc.ORGANIZATION_ID_for_SP in (".$seller.")";
    }
   //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為區域搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝
   //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為商家搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝
    if ($onlySeller != null && $onlySeller != "") {
    $sqlAll = $sqlAll."AND cc.ORGANIZATION_ID_for_SP in (".$onlySeller.")";
    }
   //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為種類搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝
   if ($onlyCate != null && $onlyCate != "") {
    $sqlAll = $sqlAll."AND aa.PRODUCT_CATEGORY_ID_for_PD in (".$onlyCate.")";
   }

   //＝＝＝＝＝＝＝＝＝＝＝＝＝以下為RWD地圖搜尋＝＝＝＝＝＝＝＝＝＝＝＝＝
   if ($onlyRWDMap != null && $onlyRWDMap != "") {
    $sqlAll = $sqlAll."AND cc.SUPPLIER_DISTRICT in (".$onlyRWDMap.")";
   }


     //第一步 SQL語法
    $state = $start->getPDO()->prepare($sqlAll);//第二步 連線資料庫
    //第三步 綁定問號值
    $state->execute(); //第四步 執行sql
    $dataAll = $state->fetchAll(PDO::FETCH_ASSOC); //第五步 將資料封裝成$data
    for($i=0;$i<count($dataAll);$i++){
        $dataAll[$i]['PRODUCT_IMG'] = base64_encode($dataAll[$i]['PRODUCT_IMG']);
    }

    // throw new \Exception('@@@'.$sqlAll);
    
    print json_encode($dataAll);
    // print_r($dataAll);
    //第六步印出來JSON格式讓ajax呼叫
?>
