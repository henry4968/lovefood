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

        //結算購物車金額
        $orderAmount = getTotalAmount($Util->getPDO(), $Member->getMemberID());
        //新增一張訂單且取得資料ID(PK)
        $orderID = insertOrder($Util->getPDO(), $Member->getMemberID(), $orderAmount);
        
        //清空原本購物車內的商品紀錄->更新Status=2(已結帳)
        updateCar($Util->getPDO(), $Member->getMemberID(), $orderID);
                    
        echo "購買完成!";
    }

    //---------------------------以 下 是 自 定 義 Function-------------------------

    function getTotalAmount($PDO, $memberID){
        //建立SQL
        $sql = "SELECT ec_car.QTY, ec_products.Price FROM ec_car INNER JOIN ec_products ON ec_car.PID = ec_products.ID where ec_products.Status = 2 and ec_car.Status = 1 and ec_car.MID = ?";

        //執行
        $statement = $PDO->prepare($sql);

        //給值
        $statement->bindValue(1 , $memberID); 
        $statement->execute();
        $data = $statement->fetchAll();

        $total = 0;    
        foreach($data as $index => $row){    
            $price = $row["Price"];
            $QTY = $row["QTY"];
            $amount = $price * $QTY;
            $total += $amount;    
        }

        return $total;
    }

    function updateCar($PDO, $memberID, $orderID){
        //先更新OID
        $sql = "UPDATE ec_car set OID = ?, UpdateDate = Now() where MID= ? and Status = '1'";
        
        //執行
        $statement = $PDO->prepare($sql);

        //給值
        $statement->bindValue(1 , $orderID); 
        $statement->bindValue(2 , $memberID);         
        $statement->execute();

        //------------------------------------------------------------------

        //再更新Status
        $sql = "UPDATE ec_car set Status = '2', UpdateDate = Now() where MID= ? and OID !='' ";
        
        //執行
        $statement = $PDO->prepare($sql);

        //給值
        $statement->bindValue(1 , $memberID);         
        $statement->execute();
    }

    function insertOrder($PDO, $memberID, $amount){
        //依年日月時分秒定義為訂單編號
        $orderNumber = date("YmdHis");

        //建立SQL                
        $sql = "INSERT INTO ec_orders(OrderNumber, MID, Amount, CreateDate) VALUES (?,?,?, Now())";
        
        //執行
        $statement = $PDO->prepare($sql);

        //給值
        $statement->bindValue(1 , $orderNumber);  
        $statement->bindValue(2 , $memberID); 
        $statement->bindValue(3 , $amount); 
        $statement->execute();

        //回傳該筆資料的ID(PK)
        return $PDO->lastInsertId();
    }    
    
?>