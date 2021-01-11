<?php

include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

$sqlDonationQuery = "SELECT year(DONATION_DATE) as `YEAR`, month(DONATION_DATE) as `MONTH`, day(DONATION_DATE) as `DAY`, DONATION_DATE, DONATION_NAME, DONATION_AMOUNT 
FROM donation ORDER BY DONATION_DATE desc limit 9";

$statementDonationQuery = $Util->getPDO()->prepare($sqlDonationQuery);
$statementDonationQuery->execute();
$dataDP = $statementDonationQuery->fetchAll(PDO::FETCH_ASSOC);

print json_encode($dataDP);
