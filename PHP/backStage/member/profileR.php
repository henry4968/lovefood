<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/backendUtilClass.php");

    $Util = new UtilClass();
    $sql = "SELECT * FROM Lovefood.MEMBER WHERE MEMBER_ID = ?";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1,$_GET['id']);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_NUM);
    print json_encode($data);
?>