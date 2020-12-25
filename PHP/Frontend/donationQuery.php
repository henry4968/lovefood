<?php

include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

$sqlDonationQuery = "SELECT year(DONATION_DATE) as `YEAR`, month(DONATION_DATE) as `MONTH`, day(DONATION_DATE) as `DAY`, DONATION_NAME, DONATION_AMOUNT 
FROM Lovefood.donation WHERE DONATION_DATE between '2015-01-01' and '2020-12-31' ORDER BY DONATION_DATE desc";

$statementDonationQuery = $Util->getPDO()->prepare($sqlDonationQuery);
$statementDonationQuery->execute();
$dataDP = $statementDonationQuery->fetchAll(PDO::FETCH_ASSOC);

print json_encode($dataDP);

?>