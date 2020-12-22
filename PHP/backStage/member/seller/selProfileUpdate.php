<?php 
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
    $sql = "UPDATE LoveFood.SUPPLIER SET SUPPLIER_ADDRESS = ?, SUPPLIER_PHONE = ? WHERE SUPPLIER_ID= ?";
    $statement = $Util->getPDO()->prepare($sql);
    
    $statement->bindValue(1,$_POST['address']);
    $statement->bindValue(2,$_POST['phone1']);
    $statement->bindValue(3,$_POST['id']);
    $statement->execute();
?>