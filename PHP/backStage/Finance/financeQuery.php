<?php 

    include("../Lib/UtilClass2.php");
    $Util = new UtilClass();

    // $supplierId = $_POST["supplierId"];

    $sqlTotalSelling = "SELECT T1.ORDER_ID, T1.ORDER_DETAIL_QUANTITY, PD.PRODUCT_SELLING_PRICE, PD.SUPPLIER_ID_for_PD
                        FROM (SELECT * FROM `ORDER` OD JOIN ORDER_DETAIL ODD ON OD.ORDER_ID = ODD.ORDER_ID_for_ODD) as T1 
                        JOIN PRODUCT PD ON T1.PRODUCT_ID_for_ODD = PD.PRODUCT_ID
                        WHERE T1.ORDER_DATE between ? and ? and PD.SUPPLIER_ID_for_PD like ? and T1.ORDER_STATUS = 1";

    $sqlTotalOrder = "SELECT PD.SUPPLIER_ID_for_PD, count(T1.ORDER_ID) as TOTAL_ORDER
                        FROM (SELECT * FROM `ORDER` OD JOIN ORDER_DETAIL ODD ON OD.ORDER_ID = ODD.ORDER_ID_for_ODD) as T1
                        JOIN PRODUCT PD ON T1.PRODUCT_ID_for_ODD = PD.PRODUCT_ID WHERE T1.ORDER_DATE between '2020-01-01' and '2020-12-31' 
                        and PD.SUPPLIER_ID_for_PD like 'SP0002' and T1.ORDER_STATUS = 1 GROUP BY PD.SUPPLIER_ID_for_PD";    



    $statesmentTotalSelling = $Util->getPDO()->prepare($sqlTotalSelling);

    if(is_Date($_POST["dateStart"]) && is_Date($_POST["dateEnd"])){

        $statesmentTotalSelling->bindValue(1,$_POST["dateStart"]);
        $statesmentTotalSelling->bindValue(2,$_POST["dateEnd"]);
        $statesmentTotalSelling->bindValue(3,$_POST["supplierId"]);

        $statesmentTotalSelling->execute();
        $dataTS = $statesmentTotalSelling->fetchAll(PDO::FETCH_ASSOC);

        print json_encode($dataTS);
        
    }else{

        $statesmentTotalSelling->bindValue(1,'2020-01-01');
        $statesmentTotalSelling->bindValue(2,'2020-12-31');
        $statesmentTotalSelling->bindValue(3,$_POST["supplierId"]);

        $statesmentTotalSelling->execute();
        $dataTS = $statesmentTotalSelling->fetchAll(PDO::FETCH_ASSOC);

        print json_encode($dataTS);
        
    }

    function is_Date($string){
        $arr = explode('-',$string);
        return (isset($arr[0])) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1],$arr[2],$arr[0])? true : false;
    }

?>