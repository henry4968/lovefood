<?php
    class UtilClass {    

        //取得欲放置的檔案路徑
        function getFilePath(){
            //Web根目錄真實路徑
            $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
            return $ServerRoot."/EC/Upload/";
        }

        //取得PDO物件
        function getPDO(){
            $db_host = "localhost";
            $db_user = "root";
            $db_pass = "jeff5076";
            $db_select = "php";
       
            //建立資料庫連線物件
            $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
       
            //建立PDO物件，並放入指定的相關資料
            $pdo = new PDO($dsn, $db_user, $db_pass);
    
            return $pdo;
        }

    }
?>