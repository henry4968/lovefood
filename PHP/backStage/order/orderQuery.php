<?php 
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
      
    //先令變數
    // $orderDetail = 
    $orderNum = '%'.$_POST["orderNum"].'%';
    $memberNum = '%'.$_POST["memberNum"].'%';
    $phone = '%'.@$_POST["phone"].'%';  
    $memberAccount = '%'.@$_POST["memberAccount"].'%';
    $pick1 = $_POST["pick1"];
    $pick2 = $_POST["pick2"];
    $orderStatus = '%'.@$_POST["orderStatus"].'%';

    //判斷日期輸入格式有效
    function is_Date($string) {
            $arr = explode('-', $string);
            return (isset($arr[0]) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1], $arr[2], $arr[0])) ? true : false;
        }
    
    if(is_Date($_POST["pick1"]) && is_Date($_POST["pick2"]) ){
        $sql =
        "SELECT ORDER_ID, ORDER_DATE, bb.PHONE, DISCOUNT, REG_DATE, ORDER_STATUS
        FROM LoveFood.`ORDER` as aa
        join LoveFood.MEMBER as bb
        on aa.MEMBER_ID_for_OD = bb.MEMBER_ID
        where ORDER_ID like ? and bb.MEMBER_ID like ? and bb.ACCOUNT like ? and PHONE like ? and ORDER_STATUS like ? and (ORDER_DATE between ? and ?)";
        $statement = $Util->getPDO()->prepare($sql);

        
        $statement->bindValue(1,$orderNum);
        $statement->bindValue(2,$memberNum);
        $statement->bindValue(3,$memberAccount);
        $statement->bindValue(4,$phone);
        $statement->bindValue(5,$orderStatus);
        $statement->bindValue(6,$pick1);
        $statement->bindValue(7,$pick2);
        $statement->execute();
        $data1 = $statement->fetchAll();
    }else{
        $sql =
        "SELECT ORDER_ID, ORDER_DATE, bb.PHONE, DISCOUNT, REG_DATE, ORDER_STATUS
        FROM LoveFood.`ORDER` as aa
        join LoveFood.MEMBER as bb
        on aa.MEMBER_ID_for_OD = bb.MEMBER_ID
        where ORDER_ID like ? and bb.MEMBER_ID like ? and bb.ACCOUNT like ? and PHONE like ? and ORDER_STATUS like ? ";
        $statement = $Util->getPDO()->prepare($sql);

        $statement->bindValue(1,$orderNum);
        $statement->bindValue(2,$memberNum);
        $statement->bindValue(3,$memberAccount);
        $statement->bindValue(4,$phone);
        $statement->bindValue(5,$orderStatus);
        $statement->execute();
        $data1 = $statement->fetchAll();
    }

    $sql = "SELECT bb.NAME, QUANTITY,bb.UNIT_PRICE,dd.NAME, cc.ORDER_ID FROM  ORDER_DETAIL as aa
    join PRODUCT as bb
    on aa.PRODUCT_ID_for_ODD = bb.PRODUCT_ID
    join `ORDER` as cc
    on cc.ORDER_ID = aa.ORDER_ID_for_ODD
    join MRT_PICKUP_SITE as dd
    on cc.MRT_PICKUP_SITE_ID_for_OD = dd.MRT_PICKUP_SITE_ID
    where ORDER_ID_for_ODD like ? 
    ";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->bindValue(1,$orderNum);
    $statement->execute();
    $data2 = $statement->fetchAll();

    for ($i = 0; $i < count($data1); $i++) {

        for ($k = 0; $k < count($data2); $k++) {
            if ($data1[$i]['ORDER_ID'] === $data2[$k]['ORDER_ID']) {
                $data1[$i]['detail'][] = $data2[$k];
            }
        }
    }
    // $allData = array('order' => $data1, 'detail' => $data2);
    print json_encode($data1);



    

    
   
    
?>