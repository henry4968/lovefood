<?php
class UtilClass
{ //取得PDO物件
    function getPDO()
    {
        $db_host = "localhost";
        $db_user = "root";
        // $db_pass = "jeff5076";
        $db_pass = "SQL1933";
        $db_select = "php";
        $db_select = "lovefood";
        //廷翰
        // $db_host = "localhost";
        // $db_user = "test";
        // $db_pass = "password";
        // $db_select = "Lovefood";
        //廷翰

        //怡欣
        // $db_host = "localhost";
        // $db_user = "root";
        // $db_pass = "";
        // $db_select = "Lovefood";
        //建立資料庫連線物件
        $dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);

        return $pdo;
    }
}
