<?php 
    include("../../Lib/UtilClass.php");
    $Util = new UtilClass();
      
    //先令get變數
    $pick1 = @$_POST["pick1"];
    $pick2 = @$_POST["pick2"];
    $number = '%'.@$_POST["number"].'%';
    $phone = '%'.@$_POST["phone"].'%';  
    $account = '%'.@$_POST["account"].'%';

    //判斷日期輸入格式有效
    function is_Date($string) {
            $arr = explode('-', $string);
            return (isset($arr[0]) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1], $arr[2], $arr[0])) ? true : false;
        }
    
    if(is_Date($pick1) && is_Date($pick2) ){
        $sql = "SELECT * FROM Lovefood.SUPPLIER WHERE SUPPLIER_ID like ? and SUPPLIER_ACCOUNT like ? and SUPPLIER_PHONE like ?  and (SUPPLIER_REG_DATE  between ? and ?)";
        $statement = $Util->getPDO()->prepare($sql);

        
        $statement->bindValue(1,$number);
        $statement->bindValue(2,$account);
        $statement->bindValue(3,$phone);
        $statement->bindValue(4,$pick1);
        $statement->bindValue(5,$pick2);
        $statement->execute();
        $data = $statement->fetchAll();
        // echo 456;
    }else{
        $sql = "SELECT * FROM Lovefood.SUPPLIER WHERE SUPPLIER_ID like ? and SUPPLIER_ACCOUNT like ? and SUPPLIER_PHONE like ?";
        $statement = $Util->getPDO()->prepare($sql);

        $statement->bindValue(1,$number);
        $statement->bindValue(2,$account);
        $statement->bindValue(3,$phone);
        $statement->execute();
        $data = $statement->fetchAll();
        // echo $number;
        // echo 123;
    }
    print json_encode($data);

    
   
    
?>