<?php 
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
      
    //先令變數
    $sellerNum = $_POST["sellerNum"];
    $categories = $_POST["categories"];
    $productName = @$_POST["productName"];
    $expDate = $_POST["expDate"];
    $expTime = $_POST["expTime"];
    $quantity = @$_POST["quantity"];
    $pickupSite = $_POST["pickupSite"];
    $fileUpload = $_POST["fileUpload"];
    $description = $_POST["description"];
    $oriPrice = $_POST["oriPrice"];
    $spePrice = $_POST["spePrice"];


    $exp = $expDate." ".$expTime;

    print_r($fileUpload);
    
    //判斷日期輸入格式有效
    function is_Date($string) {
            $arr = explode('-', $string);
            return (isset($arr[0]) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1], $arr[2], $arr[0])) ? true : false;
    }
    //找最大值
    $sql = "SELECT max(PRODUCT_ID) FROM PRODUCT";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->execute();
    // $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    $maxId = $statement->fetch();
    //切割字串
    $subMaxId = substr($maxId[0],3)+1;

    $pdNum = "";
    if($subMaxId<10){
        $pdNum = "PD"."000000".$subMaxId;
    }elseif($subMaxId>=10 && $subMaxId<100){
        $pdNum = "PD"."00000".$subMaxId;
    }elseif($subMaxId>=100 && $subMaxId<1000){
        $pdNum = "PD"."0000".$subMaxId;
    }elseif($subMaxId>=1000 && $subMaxId<10000){
        $pdNum = "PD"."000".$subMaxId;
    }
    //最終寫入PRODUCT_ID為 $pdNum;
    $sql = "INSERT INTO PRODUCT (PRODUCT_ID, PRODUCT_CATEGORY_ID_for_PD, SUPPLIER_ID_for_PD, `NAME`, `DESCRIPTION`, ORIGINAL_PRICE,SELLING_PRICE ,STOCK, UPLOAD_DATE, EXP_DATE, PRODUCT_STATUS, PRODUCT_IMG)
    VALUES (?,?,?,?,?,?,?,?,NOW(),?,?,?);";
    $statement = $Util->getPDO()->prepare($sql);


    $statement->bindValue(1,$pdNum);
    $statement->bindValue(2,$categories);
    $statement->bindValue(3,$sellerNum);
    $statement->bindValue(4,$productName);
    $statement->bindValue(5,$description);
    $statement->bindValue(6,$oriPrice);
    $statement->bindValue(7,$spePrice);
    $statement->bindValue(8,$quantity);
    $statement->bindValue(9,$exp);
    $statement->bindValue(10,1);//商品狀態 上架為1
    $statement->bindValue(11,$fileUpload);

    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    // print json_encode($data);
    // echo $pdNum."\n";
    // echo $categories."\n";
    // echo $sellerNum."\n";
    // echo $productName."\n";
    // echo $oriPrice."\n";
    // echo $spePrice."\n";
    // echo $description."\n";
    // echo $quantity."\n";
    // echo $exp."\n";
    // echo $fileUpload."\n";
    


?>