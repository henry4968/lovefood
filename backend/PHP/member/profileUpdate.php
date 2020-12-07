<?php 
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
    $sql = "UPDATE LoveFood.MEMBER SET ADDRESS = ?, PHONE = ? WHERE MEMBER_ID= ?";
    $statement = $Util->getPDO()->prepare($sql);
    
    $statement->bindValue(1,$_POST['address']);
    $statement->bindValue(2,$_POST['phone']);
    $statement->bindValue(3,$_POST['id']);
    $statement->execute();
?>