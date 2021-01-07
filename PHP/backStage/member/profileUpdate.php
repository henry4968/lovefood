<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/backendUtilClass.php");

    $Util = new UtilClass();
    $sql = "UPDATE MEMBER SET MEMBER_STATUS = ?, MEMBER_PHONE = ?, MEMBER_NAME = ? WHERE MEMBER_ID= ?";
    $statement = $Util->getPDO()->prepare($sql);
    
    $statement->bindValue(1,$_POST['status']);
    $statement->bindValue(2,$_POST['phone1']);
    $statement->bindValue(3,$_POST['name']);
    $statement->bindValue(4,$_POST['id']);
    $statement->execute();
?>