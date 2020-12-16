<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="area2Txt">
    <img src="../img/21/donation_description/1apple.png" alt="">
    <div class="area2TxtTxt">
        <h3>即期食品的第二舞台</h3>
        <p>餐飲業者通常無法精確掌握實際的需求量，加上食安期效和倉儲成本等考量，通常會丟棄無法賣完的食物。以便利商店為例，為使貨架更新流暢，在食品尚未真正過期前，便會下架丟棄，每年浪費的總價值高達70億臺幣。而Lovefood的建立初衷，正是希望透過平台曝光的方式，為這些即期食品和有需要的人們爭取「黃金時間」。
        </p>
    </div>
</div> -->

<?php

include("./Lib/connection.php");

// 尋找目前流水號最大者，製造下一號並裝入變數
$sqlSelectMaxId = "SELECT max(DONATION_ID) FROM Lovefood.DONATION;";

$statementSelectMaxId  = $pdo->prepare($sqlSelectMaxId);
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
DONATION(DONATION_ID,DATE,DONATION_PLAN,DONATION_METHOD,AMOUNT,NAME,NATIONALITY,PERSONAL_ID_OR_TAX_ID,BIRTHDAY,ADDRESS,EMAIL,GENDER,REMARKS,RECEIPT_TITLE,PERSONAL_ID_OR_TAX_ID_OF_RECEIPT,DELIVERY_METHOD)
 VALUE (?,NOW(),?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

$sqlStatment = $pdo->prepare($sqlStatment);

$sqlStatment->bindValue(1,$insertId);
$sqlStatment->bindValue(2,$_POST["donationPlan"]);
$sqlStatment->bindValue(3,$_POST["donationMethod"]);
$sqlStatment->bindValue(4,$_POST["amount"]);
$sqlStatment->bindValue(5,$_POST["name"]);
$sqlStatment->bindValue(6,$_POST["nationality"]);
$sqlStatment->bindValue(7,$_POST["pID_tID"]);
$sqlStatment->bindValue(8,$_POST["birthday"]);
$sqlStatment->bindValue(9,$_POST["address"]);
$sqlStatment->bindValue(10,$_POST["email"]);
$sqlStatment->bindValue(11,$_POST["gender"]);
$sqlStatment->bindValue(12,$_POST["remarks"]);
$sqlStatment->bindValue(13,$_POST["receiptTitle"]);
$sqlStatment->bindValue(14,$_POST["receipt_pID_tID"]);
$sqlStatment->bindValue(15,$_POST["deliveryMethod"]);

$sqlStatment->execute();

// header("location:http://localhost/Lovefood/frontend/index.html");

?>

<!-- </body>
</html> -->