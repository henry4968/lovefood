<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/backendUtilClass.php");

    $Util = new UtilClass();
    $sql = "SELECT * FROM Lovefood.MEMBER";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_NUM);
    print json_encode($data);
?>