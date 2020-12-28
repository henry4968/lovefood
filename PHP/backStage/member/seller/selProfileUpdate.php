<?php 
    include("../../Lib/backendUtilClass.php");
    $Util = new UtilClass();
    $sql = "UPDATE SUPPLIER SET SUPPLIER_ADDRESS = ?, SUPPLIER_PHONE = ? WHERE SUPPLIER_ID= ?";
    $statement = $Util->getPDO()->prepare($sql);
    
    $save = $_POST['save'];
    // echo $save['SUPPLIER_ADDRESS'];
    $statement->bindValue(1,$save['SUPPLIER_ADDRESS']);
    $statement->bindValue(2,$save['SUPPLIER_PHONE']);
    $statement->bindValue(3,$save['SUPPLIER_ID']);
    $statement->execute();
?>