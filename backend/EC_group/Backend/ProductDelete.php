<?php
    include("LoginCheck.php");

    //取得GET過來的值
    $PID = $_GET["PID"]; //PK

    //建立SQL
    $sql = "UPDATE ec_products set Status = 0 WHERE ID = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1 , $PID); 
    $statement->execute();

    //導頁
    //header("Location: Index.php");
    echo "<script>alert('商品已刪除!'); location.href = 'Product.php';</script>";  
?>