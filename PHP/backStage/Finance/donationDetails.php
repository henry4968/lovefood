<?php 

    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $sqlDonationDetails = "SELECT * FROM donation WHERE DONATION_ID like ?";
    $statesmentDonationDetails = $Util->getPDO()->prepare($sqlDonationDetails);

    $statesmentDonationDetails->bindValue(1,'%'.@$_POST["DONATION_ID"].'%');
    $statesmentDonationDetails->execute();
    
    $dataDD = $statesmentDonationDetails->fetchAll(PDO::FETCH_ASSOC);
    print json_encode($dataDD);
