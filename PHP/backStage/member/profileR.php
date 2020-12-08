<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/UtilClass2.php");

    $Util = new UtilClass();
    $sql = "SELECT * FROM LoveFood.MEMBER WHERE MEMBER_ID = ?";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1,$_GET['id']);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_NUM);
    print json_encode($data);
?>