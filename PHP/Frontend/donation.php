<?php

include("./Lib/connection.php");

$sqlStatment = "INSERT INTO 
DONATION(DONATION_ID,DATE,DONATION_PLAN,DONATION_METHOD,AMOUNT,NAME,NATIONALITY,PERSONAL_ID_OR_TAX_ID,BIRTHDAY,ADDRESS,EMAIL,GENDER,REMARKS,RECEIPT_TITLE,PERSONAL_ID_OR_TAX_ID_OF_RECEIPT,DELIVERY_METHOD)
 VALUE ('DN0000004',NOW(),?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
// $sqlSelect = "SELECT * FROM DONATION";

$sqlStatment = $pdo->prepare($sqlStatment);
// $sqlSelect = $pdo->prepare($sqlSelect);

$sqlStatment->bindValue(1,$_POST["donationPlan"]);
$sqlStatment->bindValue(2,$_POST["donationMethod"]);
$sqlStatment->bindValue(3,$_POST["amount"]);
$sqlStatment->bindValue(4,$_POST["name"]);
$sqlStatment->bindValue(5,$_POST["nationality"]);
$sqlStatment->bindValue(6,$_POST["pID_tID"]);
$sqlStatment->bindValue(7,$_POST["birthday"]);
$sqlStatment->bindValue(8,$_POST["address"]);
$sqlStatment->bindValue(9,$_POST["email"]);
$sqlStatment->bindValue(10,$_POST["gender"]);
$sqlStatment->bindValue(11,$_POST["remarks"]);
$sqlStatment->bindValue(12,$_POST["receiptTitle"]);
$sqlStatment->bindValue(13,$_POST["receipt_pID_tID"]);
$sqlStatment->bindValue(14,$_POST["deliveryMethod"]);

$sqlStatment->execute();
// $sqlSelect->execute();

// $All = $sqlSelect->fetchAll(PDO::FETCH_ASSOC);

// print_r($All);

?>