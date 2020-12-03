<?php
    include("LoginCheck.php");

    //取得POST過來的值
    $PID = $_POST["PID"]; //PK
    $CateID = $_POST["Category"]; //分類ID
    $ProductName = $_POST["ProductName"]; //商品名稱
    $Price = $_POST["Price"];   //售價
    $Status = $_POST["Status"];   //狀態 0:刪除, 1:下架, 2:上架
    $PictureName = $_POST["PictureName"];   //原本的商品圖片名稱
    
    //返回訊息文字
    $message = "修改成功!";

    //先判斷是否更新(上傳)商品圖?
    if($_FILES["ProductImage"]["size"] > 0){

        //判斷圖片是否上傳成功?
        if($_FILES["ProductImage"]["error"] > 0){
            //返回訊息文字
            $message = "上傳失敗: 錯誤代碼".$_FILES["ProductImage"]["error"];
        }else{
            //Server上的暫存檔路徑含檔名
            $filePath_Temp = $_FILES["ProductImage"]["tmp_name"];

            //欲放置的檔案路徑
            $filePath = $Util->getFilePath().$_FILES["ProductImage"]["name"];

            //將暫存檔搬移到正確位置
            if(copy($filePath_Temp, $filePath)){
                //修改後的商品圖片名稱
                $PictureName = $_FILES["ProductImage"]["name"];
            }else{
                $message = "拷貝/移動上傳圖片失敗";
            }
        }
    }    

    //建立SQL
    $sql = "UPDATE ec_products set CateID = ?, ProductName = ?, Price = ?, Status = ?, PictureName = ?, UpdateDate = NOW() WHERE ID = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值    
    $statement->bindValue(1 , $CateID);     
    $statement->bindValue(2 , $ProductName);
    $statement->bindValue(3 , $Price);
    $statement->bindValue(4 , $Status);
    $statement->bindValue(5 , $PictureName);
    $statement->bindValue(6 , $PID);
    $statement->execute();
    
    //導頁
    //header("Location: Index.php");    
    echo "<script>alert('".$message."'); location.href = 'Product.php';</script>";
?>