<?php 
    // include("../Lib/UtilClass.php");
    include("../Lib/UtilClass.php");

    $Util = new UtilClass();
      
    //先令get變數
    $pick1 = $_POST["pick1"];
    $pick2 = $_POST["pick2"];
    $number = '%'.@$_POST["number"].'%';
    $phone = '%'.@$_POST["phone"].'%';  
    $account = '%'.@$_POST["account"].'%';
    $memberType = '%'.@$_POST["memberType"].'%';

    //判斷日期輸入格式有效
    function is_Date($string) {
            $arr = explode('-', $string);
            return (isset($arr[0]) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1], $arr[2], $arr[0])) ? true : false;
        }
    
    if(is_Date($_POST["pick1"]) && is_Date($_POST["pick2"]) ){
        $sql = "SELECT * FROM Lovefood.MEMBER WHERE MEMBER_ID like ? and MEMBER_CLASS like ? and MEMBER_ACCOUNT like ? and (MEMBER_PHONE like ? or MEMBER_PHONE is null) and (MEMBER_REG_DATE between ? and ?)";
        $statement = $Util->getPDO()->prepare($sql);

        $statement->bindValue(1,$number);
        $statement->bindValue(2,$memberType);
        $statement->bindValue(3,$account);
        $statement->bindValue(4,$phone);
        $statement->bindValue(5,$pick1);
        $statement->bindValue(6,$pick2);
        $statement->execute();
        $data = $statement->fetchAll();
    }else{
        $sql = "SELECT * FROM Lovefood.MEMBER WHERE MEMBER_ID like ? and MEMBER_CLASS like ? and MEMBER_ACCOUNT like ? and (MEMBER_PHONE like ? or MEMBER_PHONE is null)";
        $statement = $Util->getPDO()->prepare($sql);

        $statement->bindValue(1,$number);
        $statement->bindValue(2,$memberType);
        $statement->bindValue(3,$account);
        $statement->bindValue(4,$phone);
        $statement->execute();
        $data = $statement->fetchAll();
    }
    print json_encode($data);

?>