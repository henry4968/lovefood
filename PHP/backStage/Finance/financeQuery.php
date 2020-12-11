<?php 

    include("../Lib/UtilClass2.php");
    $Util = new UtilClass();

    $dateStart = $_POST["dateStart"];
    $dateEnd = $_POST["dateEnd"];
    $general_ID = '%'.@$_POST["general_ID"].'%';
    $name = '%'.@$_POST["name"].'%';
    $email = '%'.@$_POST["email"].'%';
    $pID_tID = '%'.@$_POST["pID_tID"].'%';

    if(is_Date($_POST["dateStart"]) && is_Date($_POST["dateEnd"])){

        $sqlDonationLog = "SELECT GENERAL_ID, `NAME`,EMAIL , PERSONAL_ID_OR_TAX_ID, DONATION_PLAN, AMOUNT, `DATE` FROM Lovefood.DONATION WHERE GENERAL_ID like ? and `NAME` like ? and EMAIL like ? and PERSONAL_ID_OR_TAX_ID like ? and DATE >= ? and DATE <= ?";

        $statesmentDonationLog = $Util->getPDO()->prepare($sqlDonationLog);

        $statesmentDonationLog->bindValue(1,$general_ID);
        $statesmentDonationLog->bindValue(2,$name);
        $statesmentDonationLog->bindValue(3,$email);
        $statesmentDonationLog->bindValue(4,$pID_tID);
        $statesmentDonationLog->bindValue(5,$dateStart);
        $statesmentDonationLog->bindValue(6,$dateEnd);

        $statesmentDonationLog->execute();
        $dataDL = $statesmentDonationLog->fetchAll(PDO::FETCH_ASSOC);

        print json_encode($dataDL);
        
    }else{

        $sqlDonationLog = "SELECT GENERAL_ID, `NAME`,EMAIL , PERSONAL_ID_OR_TAX_ID, DONATION_PLAN, AMOUNT, `DATE` FROM Lovefood.DONATION WHERE GENERAL_ID like ? and `NAME` like ? and EMAIL like ? and PERSONAL_ID_OR_TAX_ID like ?";

        $statesmentDonationLog = $Util->getPDO()->prepare($sqlDonationLog);

        $statesmentDonationLog->bindValue(1,$general_ID);
        $statesmentDonationLog->bindValue(2,$name);
        $statesmentDonationLog->bindValue(3,$email);
        $statesmentDonationLog->bindValue(4,$pID_tID);

        $statesmentDonationLog->execute();
        $dataDL = $statesmentDonationLog->fetchAll(PDO::FETCH_ASSOC);

        print json_encode($dataDL);

    }

    function is_Date($string){
        $arr = explode('-',$string);
        return (isset($arr[0])) && isset($arr[1]) && isset($arr[2]) && checkdate($arr[1],$arr[2],$arr[0])? true : false;
    }

?>