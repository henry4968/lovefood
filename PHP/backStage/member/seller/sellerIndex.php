<?php
     include("../../Lib/UtilClass.php");
     $Util = new UtilClass();
     $sql = "SELECT * FROM Lovefood.SUPPLIER WHERE SUPPLIER_ID = 'SP0001'";
     $statement = $Util->getPDO()->prepare($sql);
    //  $statement->bindValue(1,$_POST['sellerNum']);
     $statement->execute();
     $data = $statement->fetchAll(PDO::FETCH_ASSOC);
     print json_encode($data);
?>