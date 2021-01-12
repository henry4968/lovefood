<?php 

    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $sqlTotalSelling = "SELECT T1.ORDER_ID, T1.ORDER_DETAIL_QUANTITY, PD.PRODUCT_SELLING_PRICE, PD.SUPPLIER_ID_for_PD
                        FROM (SELECT * FROM `order` OD JOIN order_detail ODD ON OD.ORDER_ID = ODD.ORDER_ID_for_ODD) as T1 
                        JOIN product PD ON T1.PRODUCT_ID_for_ODD = PD.PRODUCT_ID
                        WHERE T1.ORDER_DATE between ? and ? and PD.SUPPLIER_ID_for_PD like ? and T1.ORDER_STATUS = 1";

    $sqlDailySelling = "SELECT PD.SUPPLIER_ID_for_PD as SUPPLIER, year(T1.ORDER_DATE) as `YEAR`, month(T1.ORDER_DATE) as `MONTH`, 
                        day(T1.ORDER_DATE) as `DAY`, sum(PD.PRODUCT_SELLING_PRICE * T1.ORDER_DETAIL_QUANTITY) as DAILY_SELLING 
                        FROM (SELECT * FROM `order` OD JOIN order_detail ODD ON OD.ORDER_ID = ODD.ORDER_ID_for_ODD) as T1 
                        JOIN product PD ON T1.PRODUCT_ID_for_ODD = PD.PRODUCT_ID WHERE PD.SUPPLIER_ID_for_PD = ? and T1.ORDER_STATUS = 1 
                        and T1.ORDER_DATE between ? and ? GROUP BY year(T1.ORDER_DATE), month(T1.ORDER_DATE), day(T1.ORDER_DATE)";

    $sqlTotalOrder = "SELECT PD.SUPPLIER_ID_for_PD, count(T1.ORDER_ID) as TOTAL_ORDER
                        FROM (SELECT * FROM `order` OD JOIN order_detail ODD ON OD.ORDER_ID = ODD.ORDER_ID_for_ODD) as T1
                        JOIN product PD ON T1.PRODUCT_ID_for_ODD = PD.PRODUCT_ID WHERE T1.ORDER_DATE between ? and ? 
                        and PD.SUPPLIER_ID_for_PD like ? and T1.ORDER_STATUS = 1 GROUP BY PD.SUPPLIER_ID_for_PD";

    $sqlTotalSoldGoods = "SELECT T1.ORDER_ID, T1.ORDER_DATE, T1.PRODUCT_ID_for_ODD, PD.PRODUCT_NAME, T1.ORDER_DETAIL_QUANTITY
                            FROM (SELECT * FROM `order` OD JOIN order_detail ODD ON OD.ORDER_ID = ODD.ORDER_ID_for_ODD) as T1
                            JOIN product PD ON T1.PRODUCT_ID_for_ODD = PD.PRODUCT_ID WHERE T1.ORDER_DATE between ? and ?
                            and PD.SUPPLIER_ID_for_PD like ? and T1.ORDER_STATUS = 1";

    $sqlMostPopularGood = "SELECT T1.PRODUCT_ID_for_ODD, PD.PRODUCT_NAME, sum(T1.ORDER_DETAIL_QUANTITY) as Total_QUANTITY
                            FROM (SELECT * FROM `order` OD JOIN order_detail ODD ON OD.ORDER_ID = ODD.ORDER_ID_for_ODD) as T1
                            JOIN product PD ON T1.PRODUCT_ID_for_ODD = PD.PRODUCT_ID WHERE T1.ORDER_DATE between ? and ? 
                            and PD.SUPPLIER_ID_for_PD like ? and T1.ORDER_STATUS = 1 
                            GROUP BY T1.PRODUCT_ID_for_ODD ORDER BY Total_QUANTITY desc LIMIT 1";

    $sqlMostUnpopularGood = "SELECT T1.PRODUCT_ID_for_ODD, PD.PRODUCT_NAME, sum(T1.ORDER_DETAIL_QUANTITY) as Total_QUANTITY
                                FROM (SELECT * FROM `order` OD JOIN order_detail ODD ON OD.ORDER_ID = ODD.ORDER_ID_for_ODD) as T1
                                JOIN product PD ON T1.PRODUCT_ID_for_ODD = PD.PRODUCT_ID WHERE T1.ORDER_DATE between ? and ? 
                                and PD.SUPPLIER_ID_for_PD like ? and T1.ORDER_STATUS = 1 
                                GROUP BY T1.PRODUCT_ID_for_ODD ORDER BY Total_QUANTITY asc LIMIT 1";

    $statesmentTotalSelling = $Util->getPDO()->prepare($sqlTotalSelling);
    $statesmentDailySelling = $Util->getPDO()->prepare($sqlDailySelling);
    $statesmentTotalOrder = $Util->getPDO()->prepare($sqlTotalOrder);
    $statesmentTotalSoldGoods = $Util->getPDO()->prepare($sqlTotalSoldGoods);
    $statesmentMostPopularGood = $Util->getPDO()->prepare($sqlMostPopularGood);
    $statesmentMostUnpopularGood = $Util->getPDO()->prepare($sqlMostUnpopularGood);

    if(is_Date($_POST["dateStart"]) && is_Date($_POST["dateEnd"])){

        $statesmentTotalSelling->bindValue(1,$_POST["dateStart"]);
        $statesmentTotalSelling->bindValue(2,$_POST["dateEnd"]);
        $statesmentTotalSelling->bindValue(3,$_POST["supplierId"]);

        $statesmentTotalSelling->execute();
        $dataTS = $statesmentTotalSelling->fetchAll(PDO::FETCH_ASSOC);

        $statesmentDailySelling->bindValue(1,$_POST["supplierId"]);
        $statesmentDailySelling->bindValue(2,$_POST["dateStart"]);
        $statesmentDailySelling->bindValue(3,$_POST["dateEnd"]);

        $statesmentDailySelling->execute();
        $dataDS = $statesmentDailySelling->fetchAll(PDO::FETCH_ASSOC);

        $statesmentTotalOrder->bindValue(1,$_POST["dateStart"]);
        $statesmentTotalOrder->bindValue(2,$_POST["dateEnd"]);
        $statesmentTotalOrder->bindValue(3,$_POST["supplierId"]);

        $statesmentTotalOrder->execute();
        $dataTO = $statesmentTotalOrder->fetchAll(PDO::FETCH_ASSOC);

        $statesmentTotalSoldGoods->bindValue(1,$_POST["dateStart"]);
        $statesmentTotalSoldGoods->bindValue(2,$_POST["dateEnd"]);
        $statesmentTotalSoldGoods->bindValue(3,$_POST["supplierId"]);

        $statesmentTotalSoldGoods->execute();
        $dataSG = $statesmentTotalSoldGoods->fetchAll(PDO::FETCH_ASSOC);

        $statesmentMostPopularGood->bindValue(1,$_POST["dateStart"]);
        $statesmentMostPopularGood->bindValue(2,$_POST["dateEnd"]);
        $statesmentMostPopularGood->bindValue(3,$_POST["supplierId"]);

        $statesmentMostPopularGood->execute();
        $dataPG = $statesmentMostPopularGood->fetchAll(PDO::FETCH_ASSOC);

        $statesmentMostUnpopularGood->bindValue(1,$_POST["dateStart"]);
        $statesmentMostUnpopularGood->bindValue(2,$_POST["dateEnd"]);
        $statesmentMostUnpopularGood->bindValue(3,$_POST["supplierId"]);

        $statesmentMostUnpopularGood->execute();
        $dataUG = $statesmentMostUnpopularGood->fetchAll(PDO::FETCH_ASSOC);

        $financeQueryWithDate = array('financeTotalSelling' => $dataTS,'financeTDailySelling' =>$dataDS, 'financeTotalOrder' =>$dataTO, 
        'totalSoldGoods' =>$dataSG, 'mostPopularGood' =>$dataPG, 'mostUnpopularGood' =>$dataUG);

        print json_encode($financeQueryWithDate);
        
    }else{

        $statesmentTotalSelling->bindValue(1,'2020-01-01');
        $statesmentTotalSelling->bindValue(2,'2020-12-31');
        $statesmentTotalSelling->bindValue(3,$_POST["supplierId"]);

        $statesmentTotalSelling->execute();
        $dataTS = $statesmentTotalSelling->fetchAll(PDO::FETCH_ASSOC);

        $statesmentDailySelling->bindValue(1,$_POST["supplierId"]);
        $statesmentDailySelling->bindValue(2,'2020-01-01');
        $statesmentDailySelling->bindValue(3,'2020-12-31');

        $statesmentDailySelling->execute();
        $dataDS = $statesmentDailySelling->fetchAll(PDO::FETCH_ASSOC);

        $statesmentTotalOrder->bindValue(1,'2020-01-01');
        $statesmentTotalOrder->bindValue(2,'2020-12-31');
        $statesmentTotalOrder->bindValue(3,$_POST["supplierId"]);

        $statesmentTotalOrder->execute();
        $dataTO = $statesmentTotalOrder->fetchAll(PDO::FETCH_ASSOC);
        
        $statesmentTotalSoldGoods->bindValue(1,'2020-01-01');
        $statesmentTotalSoldGoods->bindValue(2,'2020-12-31');
        $statesmentTotalSoldGoods->bindValue(3,$_POST["supplierId"]);

        $statesmentTotalSoldGoods->execute();
        $dataSG = $statesmentTotalSoldGoods->fetchAll(PDO::FETCH_ASSOC);

        $statesmentMostPopularGood->bindValue(1,'2020-01-01');
        $statesmentMostPopularGood->bindValue(2,'2020-12-31');
        $statesmentMostPopularGood->bindValue(3,$_POST["supplierId"]);

        $statesmentMostPopularGood->execute();
        $dataPG = $statesmentMostPopularGood->fetchAll(PDO::FETCH_ASSOC);

        $statesmentMostUnpopularGood->bindValue(1,'2020-01-01');
        $statesmentMostUnpopularGood->bindValue(2,'2020-12-31');
        $statesmentMostUnpopularGood->bindValue(3,$_POST["supplierId"]);

        $statesmentMostUnpopularGood->execute();
        $dataUG = $statesmentMostUnpopularGood->fetchAll(PDO::FETCH_ASSOC);

        $financeQueryWithoutDate = array('financeTotalSelling' => $dataTS,'financeTDailySelling' =>$dataDS, 'financeTotalOrder' =>$dataTO, 
        'totalSoldGoods' =>$dataSG, 'mostPopularGood' =>$dataPG, 'mostUnpopularGood' =>$dataUG);

        print json_encode($financeQueryWithoutDate);
        
    }

    function is_Date($string){
        $arr = explode('-',$string);
        return (isset($arr[0])) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1],$arr[2],$arr[0])? true : false;
    }
