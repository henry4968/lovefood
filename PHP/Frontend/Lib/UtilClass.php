<?php
class UtilClass
{

    }

    //取得PDO物件
    function getPDO()
    {
        // $db_host = "localhost";
        // $db_user = "root";
        // // $db_pass = "jeff5076";
        // $db_pass = "SQL1933";
        // $db_select = "php";
        // $db_select = "lovefood";
        //廷翰
        // $db_host = "localhost";
        // $db_user = "test";
        // $db_pass = "password";
        // $db_select = "Lovefood";
        //廷翰

        //怡欣
        $db_host = "localhost";
        $db_user = "root";
        $db_pass = "";
        $db_select = "Lovefood";
        //建立資料庫連線物件
        $dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select;

        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);

        return $pdo;
    }
}

    //取得欲放置的檔案路徑
    // function getFilePath()
    // {
        //Web根目錄真實路徑
    //     $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    //     return $ServerRoot . "/lovefood/img/upload";
    // }

    //取得PDO物件
    // function getPDO()
    // {
        // $db_host = "localhost";
        // $db_user = "root";
        // $db_pass = "jeff5076";
        // $db_select = "lovefood";

//         //取得欲放置的檔案路徑
//         function getFilePath(){
//             //Web根目錄真實路徑
//             $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
//             return $ServerRoot."/lovefood/img/upload";
//         }

//         //取得PDO物件
//         function getPDO(){
//             $db_host = "localhost";
//             $db_user = "root";
//             // $db_pass = "jeff5076";
//             $db_pass = "SQL1933";
//             // $db_select = "php";
//             // $db_select = "lovefood";
//             //廷翰
//             // $db_host = "localhost:3306"; 
//             // $db_user = "test";
//             // $db_pass = "password";
//             $db_select = "Lovefood";
//             //廷翰
//             //建立資料庫連線物件
//             $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
       
//             //建立PDO物件，並放入指定的相關資料
//             $pdo = new PDO($dsn, $db_user, $db_pass);
    
//             return $pdo;
//         }

<<<<<<< HEAD
        // 強哥
        // $db_host = "localhost";
        // $db_user = "root";
        // $db_pass = "SQL1933";
        // $db_select = "Lovefood";
        // 強哥
=======
//     //取得欲放置的檔案路徑
//     function getFilePath()
//     {
//         //Web根目錄真實路徑
//         $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
//         return $ServerRoot . "/lovefood/img/upload";
//     }
>>>>>>> bf3e42c0bb3552e5d1ea24abe85bf1d34f3d9023

//     //取得PDO物件
//     function getPDO()
//     {
//         // $db_host = "localhost";
//         // $db_user = "root";
//         // $db_pass = "jeff5076";
//         // $db_select = "lovefood";

<<<<<<< HEAD
        //建立資料庫連線物件
        // $dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select;

        //建立PDO物件，並放入指定的相關資料
        // $pdo = new PDO($dsn, $db_user, $db_pass);

        // return $pdo;
    // }
=======

//         // $db_pass = "SQL1933";
//         // $db_select = "php";
//         //廷翰
//         // $db_host = "localhost:3306"; 
//         // $db_user = "test";
//         // $db_pass = "password";
//         // $db_select = "LoveFood";
//         //廷翰

//         // 強哥
//         $db_host = "localhost";
//         $db_user = "root";
//         $db_pass = "SQL1933";
//         $db_select = "Lovefood";
//         // 強哥


//         //建立資料庫連線物件
//         $dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select;

//         //建立PDO物件，並放入指定的相關資料
//         $pdo = new PDO($dsn, $db_user, $db_pass);

//         return $pdo;
//     }
// }

?>
>>>>>>> bf3e42c0bb3552e5d1ea24abe85bf1d34f3d9023
