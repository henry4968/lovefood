<?php

include("../Lib/UtilClass2.php");
$Util = new UtilClass();

$sqlDonationUpdate = "UPDATE DONATION
SET NAME = ?, NATIONALITY = ?, PERSONAL_ID_OR_TAX_ID = ?, BIRTHDAY = ?, ADDRESS = ?, EMAIL = ?, GENDER = ?, REMARKS = ?, RECEIPT_TITLE = ?, PERSONAL_ID_OR_TAX_ID_OF_RECEIPT = ?, DELIVERY_METHOD = ?
WHERE DONATION_ID = ?";

$statesmentDonationUpdate = $Util->getPDO()->prepare($sqlDonationUpdate);

$statesmentDonationUpdate->bindValue(1,$_POST["name_ED"]);
$statesmentDonationUpdate->bindValue(2,$_POST["nationality_ED"]);
$statesmentDonationUpdate->bindValue(3,$_POST["pID_tID_ED"]);
$statesmentDonationUpdate->bindValue(4,$_POST["birthday_ED"]);
$statesmentDonationUpdate->bindValue(5,$_POST["address_ED"]);
$statesmentDonationUpdate->bindValue(6,$_POST["email_ED"]);
$statesmentDonationUpdate->bindValue(7,$_POST["gender_ED"]);
$statesmentDonationUpdate->bindValue(8,$_POST["remarks_ED"]);
$statesmentDonationUpdate->bindValue(9,$_POST["receiptTitle_ED"]);
$statesmentDonationUpdate->bindValue(10,$_POST["receipt_pID_tID_ED"]);
$statesmentDonationUpdate->bindValue(11,$_POST["deliveryMethod_ED"]);
$statesmentDonationUpdate->bindValue(12,$_POST["selectedId_ED"]);

$statesmentDonationUpdate->execute();

?>