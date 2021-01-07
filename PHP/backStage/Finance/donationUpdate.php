<?php

include("../Lib/backendUtilClass.php");
$Util = new UtilClass();

$birthday_ED = !empty($_POST["birthday_ED"])? $_POST["birthday_ED"] : null;
$remarks_ED = !empty($_POST["remarks_ED"])? $_POST["remarks_ED"] : null;



$sqlDonationUpdate = "UPDATE DONATION
SET DONATION_NAME = ?, DONATION_NATIONALITY = ?, DONATION_PERSONAL_ID_OR_TAX_ID = ?, DONATION_BIRTHDAY = ?, DONATION_ADDRESS = ?, DONATION_EMAIL = ?, DONATION_GENDER = ?, DONATION_REMARKS = ?, DONATION_RECEIPT_TITLE = ?, DONATION_PERSONAL_ID_OR_TAX_ID_OF_RECEIPT = ?, DONATION_DELIVERY_METHOD = ?
WHERE DONATION_ID = ?";

$statesmentDonationUpdate = $Util->getPDO()->prepare($sqlDonationUpdate);

$statesmentDonationUpdate->bindValue(1,$_POST["name_ED"]);
$statesmentDonationUpdate->bindValue(2,$_POST["nationality_ED"]);
$statesmentDonationUpdate->bindValue(3,$_POST["pID_tID_ED"]);
$statesmentDonationUpdate->bindValue(4,$birthday_ED);
$statesmentDonationUpdate->bindValue(5,$_POST["address_ED"]);
$statesmentDonationUpdate->bindValue(6,$_POST["email_ED"]);
$statesmentDonationUpdate->bindValue(7,$_POST["gender_ED"]);
$statesmentDonationUpdate->bindValue(8,$remarks_ED);
$statesmentDonationUpdate->bindValue(9,$_POST["receiptTitle_ED"]);
$statesmentDonationUpdate->bindValue(10,$_POST["receipt_pID_tID_ED"]);
$statesmentDonationUpdate->bindValue(11,$_POST["deliveryMethod_ED"]);
$statesmentDonationUpdate->bindValue(12,$_POST["selectedId_ED"]);

$statesmentDonationUpdate->execute();

echo "修改執行了！";

?>