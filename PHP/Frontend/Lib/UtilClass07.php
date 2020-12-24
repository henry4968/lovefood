<?php
class UtilClass
{

    //取得欲放置的檔案路徑
    // function getFilePath(){
    //     //Web根目錄真實路徑
    //     $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    //     return $ServerRoot."/EC/Upload/";
    // }

    //取得PDO物件
    function getPDO()
    {
        // $db_host = "localhost:3306";
        // $db_user = "root";
        // $db_pass = "";
        // $db_select = "loveFood";

        // ======強哥======
        $db_host = "localhost";
        $db_user = "root";
        $db_pass = "SQL1933";
        $db_select = "Lovefood";

        // ========廷翰=========
        // $db_host = "localhost:3306";
        // $db_user = "test";
        // $db_pass = "password";
        // $db_select = "Lovefood";

        // ======怡欣======
        // $db_host = "localhost";
        // $db_user = "root";
        // $db_pass = "";
        // $db_select = "LoveFood";



        //建立資料庫連線物件
        $dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);

        return $pdo;
    }
}
