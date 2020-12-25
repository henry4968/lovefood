<?php

include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

// 尋找目前流水號最大者，製造下一號並裝入變數
$sqlSelectMaxId = "SELECT max(DONATION_ID) FROM DONATION;";

$statementSelectMaxId  = $Util->getPDO()->prepare($sqlSelectMaxId);
$statementSelectMaxId->execute();
$maxId = $statementSelectMaxId->fetch();

$maxNumber = substr( $maxId[0], 2, 7) + 1;

$insertId = "";

if($maxNumber < 10){
    $insertId = "DN000000".$maxNumber;
}else if($maxNumber < 100 && $maxNumber >= 10){
    $insertId = "DN00000".$maxNumber;
}else if($maxNumber < 1000 && $maxNumber>=100){
    $insertId = "DN0000".$maxNumber;
}else if($maxNumber < 10000 && $maxNumber>=1000){
    $insertId = "DN000".$maxNumber;
}else if($maxNumber < 100000 && $maxNumber>=10000){
    $insertId = "DN00".$maxNumber;
}

// 植入流水號後的捐款輸入語法
$sqlStatment = "INSERT INTO 
DONATION(DONATION_ID, DONATION_DATE, DONATION_PLAN, DONATION_METHOD, DONATION_AMOUNT, DONATION_NAME,DONATION_NATIONALITY, 
DONATION_PERSONAL_ID_OR_TAX_ID,DONATION_BIRTHDAY, DONATION_ADDRESS, DONATION_EMAIL, DONATION_GENDER, DONATION_REMARKS, DONATION_RECEIPT_TITLE, 
DONATION_PERSONAL_ID_OR_TAX_ID_OF_RECEIPT, DONATION_DELIVERY_METHOD) VALUE (?,NOW(),?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

$sqlStatment = $Util->getPDO()->prepare($sqlStatment);

$nationlity = !empty($_POST["nationality"]) ? $_POST["nationality"] : null;
$gender = !empty($_POST["gender"]) ? $_POST["gender"] : null;
$birthday = !empty($_POST["birthday"]) ? $_POST["birthday"] : null;
$deliveryMethod = !empty($_POST["deliveryMethod"]) ? $_POST["deliveryMethod"] : null;

$sqlStatment->bindValue(1,$insertId);
$sqlStatment->bindValue(2,$_POST["donationPlan"]);
$sqlStatment->bindValue(3,$_POST["donationMethod"]);
$sqlStatment->bindValue(4,$_POST["amount"]);
$sqlStatment->bindValue(5,$_POST["name"]);
$sqlStatment->bindValue(6,$nationlity);
$sqlStatment->bindValue(7,$_POST["pID_tID"]);
$sqlStatment->bindValue(8,$birthday);
$sqlStatment->bindValue(9,$_POST["address"]);
$sqlStatment->bindValue(10,$_POST["email"]);
$sqlStatment->bindValue(11,$gender);
$sqlStatment->bindValue(12,$_POST["remarks"]);
$sqlStatment->bindValue(13,$_POST["receiptTitle"]);
$sqlStatment->bindValue(14,$_POST["receipt_pID_tID"]);
$sqlStatment->bindValue(15,$deliveryMethod);

$sqlStatment->execute();

$sqlDonationCompleted = "SELECT DONATION_ID, DONATION_AMOUNT, DONATION_METHOD, year(DONATION_DATE), month(DONATION_DATE), day(DONATION_DATE) FROM DONATION WHERE DONATION_ID = ?";

$statementDonationCompleted = $Util->getPDO()->prepare($sqlDonationCompleted);
$statementDonationCompleted->bindValue(1,$insertId);
$statementDonationCompleted->execute();

$dataDC = $statementDonationCompleted->fetchAll(PDO::FETCH_ASSOC);

print $dataDC;

header("location:http://localhost/Lovefood/frontend/donate_completed.html");

?>