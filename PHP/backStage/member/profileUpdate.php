<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/UtilClass2.php");

    $Util = new UtilClass();
    $sql = "UPDATE LoveFood.MEMBER SET ADDRESS = ?, PHONE = ? WHERE MEMBER_ID= ?";
    $statement = $Util->getPDO()->prepare($sql);
    
    $statement->bindValue(1,$_POST['address']);
    $statement->bindValue(2,$_POST['phone1']);
    $statement->bindValue(3,$_POST['id']);
    $statement->execute();
?>