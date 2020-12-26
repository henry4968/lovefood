<?php 

    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $dateStart = $_POST["dateStart"];
    $dateEnd = $_POST["dateEnd"];
    $DONATION_ID = '%'.@$_POST["DONATION_ID"].'%';
    $name = '%'.@$_POST["name"].'%';
    $email = '%'.@$_POST["email"].'%';
    $pID_tID = '%'.@$_POST["pID_tID"].'%';

    if(is_Date($dateStart) && is_Date($dateEnd)){

        $sqlDonationLog = "SELECT DONATION_ID, DONATION_NAME, DONATION_EMAIL, DONATION_PERSONAL_ID_OR_TAX_ID, DONATION_PLAN, DONATION_AMOUNT, DONATION_DATE FROM Lovefood.DONATION WHERE DONATION_ID like ? and DONATION_NAME like ? and DONATION_EMAIL like ? and DONATION_PERSONAL_ID_OR_TAX_ID like ? and DONATION_DATE >= ? and DONATION_DATE <= ?";

        $statesmentDonationLog = $Util->getPDO()->prepare($sqlDonationLog);

        $statesmentDonationLog->bindValue(1,$DONATION_ID);
        $statesmentDonationLog->bindValue(2,$name);
        $statesmentDonationLog->bindValue(3,$email);
        $statesmentDonationLog->bindValue(4,$pID_tID);
        $statesmentDonationLog->bindValue(5,$dateStart);
        $statesmentDonationLog->bindValue(6,$dateEnd);

        $statesmentDonationLog->execute();
        $dataDL = $statesmentDonationLog->fetchAll(PDO::FETCH_ASSOC);

        print json_encode($dataDL);
        
    }else{

        $sqlDonationLog = "SELECT DONATION_ID, DONATION_NAME, DONATION_EMAIL, DONATION_PERSONAL_ID_OR_TAX_ID, DONATION_PLAN, DONATION_AMOUNT, DONATION_DATE FROM Lovefood.DONATION WHERE DONATION_ID like ? and DONATION_NAME like ? and DONATION_EMAIL like ? and DONATION_PERSONAL_ID_OR_TAX_ID like ?";

        $statesmentDonationLog = $Util->getPDO()->prepare($sqlDonationLog);

        $statesmentDonationLog->bindValue(1,$DONATION_ID);
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