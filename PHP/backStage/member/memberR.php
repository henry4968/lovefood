<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/backendUtilClass.php");

    $Util = new UtilClass();
    $sql = "SELECT * FROM member";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();
    print json_encode($data);
?>