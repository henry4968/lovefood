<?php
    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    //先令變數
    

    $validation = $_POST["validation"];
    //上架: 2  下架: 1
    if($validation == 1){ //下架
        $off = $_POST["off"];
        //sql語法
        $sql = "UPDATE PRODUCT
        SET PRODUCT_STATUS = 1
        WHERE PRODUCT_ID = ?
        ";
        $statement = $Util->getPDO()->prepare($sql);
        $statement->bindValue(1,$off);
        $statement->execute();
        
    }else{ //更新商品資訊
        $sellerNum = $_POST["sellerNum"];
        $categories = $_POST["categories"];
        $productName = @$_POST["productName"];
        $expDate = $_POST["expDate"];
        $expTime = $_POST["expTime"];
        $quantity = @$_POST["quantity"];
        $fileUpload = $_POST["fileUpload"];
        $description = $_POST["description"];
        $oriPrice = $_POST["oriPrice"];
        $spePrice = $_POST["spePrice"];
        $pdNum = $_POST["pdNum"];
        $exp = $expDate." ".$expTime;

        $sql = "UPDATE PRODUCT 
        SET PRODUCT_CATEGORY_ID_for_PD = ?, PRODUCT_NAME = ?, PRODUCT_DESCRIPTION = ?, PRODUCT_ORIGINAL_PRICE = ?,
        PRODUCT_SELLING_PRICE = ?, PRODUCT_STOCK = ?, PRODUCT_UPLOAD_DATE = NOW(),
        PRODUCT_EXP_DATE = ?, PRODUCT_IMG= ? 
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

    
?>