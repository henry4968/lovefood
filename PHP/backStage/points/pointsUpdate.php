<?php 
    include("../Lib/UtilClass2.php");

    $Util = new UtilClass();
    $sql = "UPDATE Lovefood.MEMBER SET POINTS = ? WHERE MEMBER_ID = ?";

    $statement = $Util->getPDO()->prepare($sql);

    $statement->bindValue(1,$_POST['points']);
    $statement->bindValue(2,$_POST['number']);

    $statement->execute();
?>