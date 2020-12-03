<?php
    include("../Lib/MemberClass.php");
	$Member = new MemberClass();
    
    //登入檢查
    if($Member->getMemberID() == ""){
        //交回給Product.php裡的AJAX(addToCar)處理轉頁至Login.php
        echo "";
    }else{

        include("../Lib/UtilClass.php");
        $Util = new UtilClass();

        //建立SQL
        $sql = "UPDATE ec_car set Status = 0, UpdateDate = Now() where ID= ?";
        
        //執行
        $statement = $Util->getPDO()->prepare($sql);

        //給值        
        $statement->bindValue(1 , $_POST["CID"]); 
        $statement->execute();
  
        echo "商品已移除!";
    }
    
?>