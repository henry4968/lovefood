<?php
    // include("../Lib/UtilClass.php");
    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $sql = "SELECT * FROM PRODUCT_CATEGORY;";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data);
    
?>