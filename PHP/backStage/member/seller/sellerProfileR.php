<?php 
    include("../../Lib/backendUtilClass.php");
    $Util = new UtilClass();
    $sql = "SELECT * FROM Lovefood.SUPPLIER WHERE SUPPLIER_ID = ?";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1,$_GET['id']);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_NUM);
    print json_encode($data);
?>