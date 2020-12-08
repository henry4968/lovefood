<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/UtilClass2.php");

    $Util = new UtilClass();
    $sql = "SELECT * FROM LoveFood.MEMBER";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_NUM);
    print json_encode($data);
?>