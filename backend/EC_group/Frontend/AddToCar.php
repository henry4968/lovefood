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

        $PID = $_POST["PID"];
        $QTY = $_POST["QTY"];
        //echo $PID."/".$QTY;

        //先檢查是否有[相同商品]已加入購物車
        $data = getCar($PID, $Util->getPDO(), $Member->getMemberID());
        if (count($data) > 0){
            //有->更新商品數量
            $CID = "";
            $QTY_current = "";  //原本購物車裡的數量
            foreach($data as $index => $row){        
                $CID = $row["ID"];
                $QTY_current = $row["QTY"];
            }
            //新的商品數量
            $QTY_new = $QTY + $QTY_current;

            updateCar($CID, $QTY_new, $Util->getPDO());
        }else{
            //無->單純新增
            insertCar($PID, $QTY, $Util->getPDO(), $Member->getMemberID());
        }

        echo "加入成功!";
    }

    //---------------------------以 下 是 自 定 義 Function-------------------------

    function getCar($PID, $PDO, $memberID){
        //建立SQL
        $sql = "SELECT * from ec_car where Status = '1' and PID = ? and MID= ?";

        //執行
        $statement = $PDO->prepare($sql);

        //給值
        $statement->bindValue(1 , $PID); 
        $statement->bindValue(2 , $memberID); 
        $statement->execute();
        $data = $statement->fetchAll();

        return $data;
    }

    function updateCar($CID, $QTY, $PDO){
        //建立SQL
        $sql = "UPDATE ec_car set QTY = ?, UpdateDate = Now() where ID= ?";
        
        //執行
        $statement = $PDO->prepare($sql);

        //給值
        $statement->bindValue(1 , $QTY); 
        $statement->bindValue(2 , $CID); 
        $statement->execute();
    }

    function insertCar($PID, $QTY, $PDO, $memberID){
        //建立SQL
        $sql = "INSERT INTO ec_car (PID, MID, QTY, CreateDate) values (?,?,?, Now())";
        
        //執行
        $statement = $PDO->prepare($sql);

        //給值
        $statement->bindValue(1 , $PID); 
        $statement->bindValue(2 , $memberID); 
        $statement->bindValue(3 , $QTY);
        $statement->execute();
    }
    
?>