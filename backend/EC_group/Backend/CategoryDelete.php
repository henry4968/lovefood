<?php
    include("LoginCheck.php");

    //取得GET過來的值
    $CID = $_GET["CID"]; //PK

    //建立SQL
    $sql = "UPDATE ec_category set Status = 0 WHERE ID = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1 , $CID); 
    $statement->execute();

    //導頁
    //header("Location: Index.php");
    echo "<script>alert('分類已刪除!'); location.href = 'Category.php';</script>";  
?>