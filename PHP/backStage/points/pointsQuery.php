<?php

    include("../Lib/UtilClass2.php");
    $Util = new UtilClass();

    $pick01 = $_POST["pick01"];
    $pick02 = $_POST["pick02"];
    $number = '%'.@$_POST["number"].'%';
    $account = '%'.@$_POST["account"].'%';
    $name = '%'.@$_POST["name"].'%';
    $phone = '%'.@$_POST["phone"].'%';

    function is_Date($string){
        $arr = explode('-',$string);
        return (isset($arr[0])) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1],$arr[2],$arr[0])? true : false;
    }

    if(is_Date($_POST["pick01"]) && is_Date($_POST["pick02"])){
        $sql = "SELECT 
                    MEMBER_ID, ACCOUNT, NAME, PHONE, (POINTS - sum(DISCOUNT)) as Final_POINTS 
                FROM
                (SELECT
                    *
                FROM
                    Lovefood.`MEMBER` MB
                JOIN 
                    Lovefood.POINTS_ISSANCE `PI`
                ON
                    MB.MEMBER_ID = `PI`.MEMBER_ID_for_PI
                WHERE
                    ISSANCE_DATE >= '2020-01-01' && ISSANCE_DATE <= '2020-12-31') as T1
                JOIN
                    Lovefood.`ORDER` OD
                ON
                    T1.MEMBER_ID = OD.MEMBER_ID_for_OD
                WHERE
                    ORDER_DATE >= '2020-01-01' and ORDER_DATE <= '2020-12-31' and MEMBER_ID like ?
                    and ACCOUNT like ? and `NAME` like ? and PHONE like ?
                GROUP BY
                    MEMBER_ID";
                    
        $statesment = $Util->getPDO()->prepare($sql);

        $statesment->bindValue(1,$number);
        $statesment->bindValue(2,$account);
        $statesment->bindValue(3,$name);
        $statesment->bindValue(4,$phone);

        $statesment->execute();
        $data = $statesment->fetchAll();

    }else{

        $sql = "SELECT 
                    MEMBER_ID, ACCOUNT, NAME, PHONE, (POINTS - sum(DISCOUNT)) as Final_POINTS 
                FROM
                (SELECT
                    *
                FROM
                    Lovefood.`MEMBER` MB
                JOIN 
                    Lovefood.POINTS_ISSANCE `PI`
                ON
                    MB.MEMBER_ID = `PI`.MEMBER_ID_for_PI
                WHERE
                    ISSANCE_DATE >= '2020-01-01' && ISSANCE_DATE <= '2020-12-31') as T1
                JOIN
                    Lovefood.`ORDER` OD
                ON
                    T1.MEMBER_ID = OD.MEMBER_ID_for_OD
                WHERE
                    ORDER_DATE >= '2020-01-01' and ORDER_DATE <= '2020-12-31' and MEMBER_ID like ?
                    and ACCOUNT like ? and `NAME` like ? and PHONE like ?
                GROUP BY
                    MEMBER_ID";
                    
        $statesment = $Util->getPDO()->prepare($sql);

        $statesment->bindValue(1,$number);
        $statesment->bindValue(2,$account);
        $statesment->bindValue(3,$name);
        $statesment->bindValue(4,$phone);

        $statesment->execute();
        $data = $statesment->fetchAll();

    }

    // echo 123;
    print json_encode($data);

?>