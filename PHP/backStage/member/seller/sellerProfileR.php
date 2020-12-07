<?php 
    include("../../Lib/UtilClass.php");
    $Util = new UtilClass();
    $sql = "SELECT * FROM LoveFood.SUPPLIER WHERE SUPPLIER_ID = ?";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1,$_GET['id']);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_NUM);
    print json_encode($data);
?>