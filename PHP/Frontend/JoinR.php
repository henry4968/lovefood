<?php
    include("Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    // $sql = "INSERT INTO ec_members (Account , PWD , Type , CreateDate ) VALUES (?,?,1,NOW())";

    $sql = "INSERT INTO member (MEMBER_ID,CLASS,ACCOUNT,PASSWORD,REG_DATE,MEMBER_STATUS) VALUES ('MB0000008',1,?,?, NOW() ,1)";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["pwd"]);
    $statement->execute();

    // echo "<script>alert('加入成功，請重新登入!'); location.href = 'Login.php';</script>"; 
?>