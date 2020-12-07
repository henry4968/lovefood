<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "INSERT INTO ec_members(Account, PWD, Type, CreateDate) VALUES (?,?,1,NOW())";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["pwd"]);
    $statement->execute();

    echo "<script>alert('加入成功，請重新登入!'); location.href = 'Login.php';</script>"; 
?>