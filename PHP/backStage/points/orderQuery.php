<?php
    include("../Lib/UtilClass2.php");
    $Util = new UtilClass();

    $pick01 = $_POST["pick01"];
    $pick02 = $_POST["pick02"];
    $order = '%'.@$_POST["order"].'%';
    $number = '%'.@$_POST["number"].'%';
    $account = '%'.@$_POST["account"].'%';
    $phone = '%'.@$_POST["phone"].'%';

    function is_Date($string){
        $arr = explode('-',$string);
        return (isset($arr[0])) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1],$arr[2],$arr[0])? true : false;
    }

    if(is_Date($_POST["pick01"]) && is_Date($_POST["pick02"])){
        $sql = "SELECT * FROM `ORDER`";
        // $sql = "SELECT OD.MEMBER_ID_for_OD, MB.`ACCOUNT`, OD.ORDER_ID, OD.ORDER_DATE FROM Lovefood.ORDER as OD JOIN Lovefood.MEMBER as MB ON OD.MEMBER_ID_for_OD = MB.MEMBER_ID WHERE
        // OD.MEMBER_ID_for_OD like ? and MB.`ACCOUNT` like ? and OD.ORDER_ID like ? and OD.ORDER_DATE like ?"
        $statesment = $Util->getPDO()->prepare($sql);

        // $statesment->bindValue(1,$number);
        // $statesment->bindValue(2,$account);
        // $statesment->bindValue(3,$order);

    }
    $sql = "SELECT * FROM `ORDER`";
    $statesment = $Util->getPDO()->prepare($sql);
    $statesment->execute();
    $data = $statesment->fetchAll();
    print json_encode($data);
    // echo 123;

?>