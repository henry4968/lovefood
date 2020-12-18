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
    $pdNum = $_POST["pdNum"];
    $exp = $expDate." ".$expTime;

    //下架
    $validation = $_POST["validation"];
    
    //sql語法

    //上架: 1  下架: 2
    if($validation == 1){
        
        //下架
        $off = $_POST["off"];
        $sql = "UPDATE PRODUCT
        SET PRODUCT_STATUS = 2
        WHERE PRODUCT_ID = ?
        ";
        $statement = $Util->getPDO()->prepare($sql);
        $statement->bindValue(1,$off);
        $statement->execute();
        
    }else{
        $sql = "UPDATE PRODUCT 
        SET PRODUCT_CATEGORY_ID_for_PD = ?, `NAME` = ?, `DESCRIPTION` = ?, ORIGINAL_PRICE = ?,
        SELLING_PRICE = ?, STOCK = ?, UPLOAD_DATE = NOW(),
        EXP_DATE = ?, PRODUCT_IMG = ? 
        WHERE PRODUCT_ID = ?
        ";
        $statement = $Util->getPDO()->prepare($sql);

        $statement->bindValue(1,$categories);
        $statement->bindValue(2,$productName);
        $statement->bindValue(3,$description);
        $statement->bindValue(4,$oriPrice);
        $statement->bindValue(5,$spePrice);
        $statement->bindValue(6,$quantity);
        $statement->bindValue(7,$exp);;
        $statement->bindValue(8,$fileUpload);
        $statement->bindValue(9,$pdNum);
        
        $statement->execute();
    }
    
    // $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    // print json_encode($data);
    echo 123;

    
?>