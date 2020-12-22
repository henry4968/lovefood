<?php 
    include("../../Lib/UtilClass.php");
    $Util = new UtilClass();
    
    $arr = $_POST['tableDataSave'];
    $fileName = $_POST['fileName'];
    $sql = "UPDATE LoveFood.SUPPLIER SET SUPPLIER_NAME = ?, SUPPLIER_ADDRESS = ?, SUPPLIER_PHONE = ?,
    SUPPLIER_DOCUMENTS = ?
    WHERE SUPPLIER_ID= ?";
    $statement = $Util->getPDO()->prepare($sql);
    
    $statement->bindValue(1,$arr[0]['SUPPLIER_NAME']);
    $statement->bindValue(2,$arr[0]['SUPPLIER_ADDRESS']);
    $statement->bindValue(3,$arr[0]['SUPPLIER_PHONE']);
    $statement->bindValue(4,$fileName);
    $statement->bindValue(5,$arr[0]['SUPPLIER_ID']);
    $statement->execute();
?>