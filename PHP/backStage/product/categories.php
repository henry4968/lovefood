<?php
    // include("../Lib/UtilClass.php");
    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $sql = "SELECT * FROM product_category;";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);

    print json_encode($data);
    
?>