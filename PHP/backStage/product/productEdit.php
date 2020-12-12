<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
    $sql = "";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1,$pdNum);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    // print json_encode($data);

?>