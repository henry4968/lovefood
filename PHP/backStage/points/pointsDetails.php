<?php 
    include("../Lib/UtilClass2.php");

    $Util = new UtilClass();
    $sql = "SELECT ORDER_ID, DISCOUNT, ORDER_DATE FROM Lovefood.ORDER WHERE DISCOUNT > 0 ";

    $statement = $Util->getPDO()->prepare($sql);

    $statement->execute();

    $data = $statement->fetchAll(PDO::FETCH_NUM);

    print json_encode($data);


    // $sql = "SELECT * from `ORDER`";

    // $statesment = $Util->getPDO()->prepare($sql);

       
    // $statesment->execute();
    // $data = $statesment->fetchAll();




    // $sql = "SELECT * from MEMBER";
    // $statesment = $Util->getPDO()->prepare($sql);
    // $statesment->execute();
    // $data1 = $statesment->fetchAll();

    // print json_encode($data1);
    $abc = array('member' => $data1,'order' =>$data);
    echo json_encode($abc);


?>