<?php 
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();
    $sql = "SELECT * FROM LoveFood.MEMBER where MEMBER_ID like ? and PHONE like ?;";
    $statement = $Util->getPDO()->prepare($sql);

    $number = '%'.$_GET["number"].'%';
    $phone = '%'.$_GET["phone"].'%';    
    // $memberType = $_GET["memberType"];
    // $pick1 = $_GET["datePick1"];
    // $pick2 = $_GET["datePick2"];
    if(is_null($_GET['phone'])){
        $statement->bindValue(1,$number);
        // echo 0;
    }else{
        $statement->bindValue(2,$phone);
        // echo 1;
    }
    // $statement->bindValue(1,);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_NUM);
    // // print json_encode($data);
    print_r($data);
   
    
?>