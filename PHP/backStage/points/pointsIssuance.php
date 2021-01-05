<?php 
    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $sqlSelectMaxId = "SELECT max(POINTS_ISSUANCE_ID) FROM POINTS_ISSUANCE";

    $statementSelectMaxId  = $Util->getPDO()->prepare($sqlSelectMaxId);
    $statementSelectMaxId->execute();
    $maxId = $statementSelectMaxId->fetch();

    $maxNumber = substr( $maxId[0], 2, 7) + 1;

    $insertId = "";

    if($maxNumber < 10){
        $insertId = "PI000000".$maxNumber;
    }else if($maxNumber < 100 && $maxNumber >= 10){
        $insertId = "PI00000".$maxNumber;
    }else if($maxNumber < 1000 && $maxNumber>=100){
        $insertId = "PI0000".$maxNumber;
    }else if($maxNumber < 10000 && $maxNumber>=1000){
        $insertId = "PI000".$maxNumber;
    }else if($maxNumber < 100000 && $maxNumber>=10000){
        $insertId = "PI00".$maxNumber;
    }

    $sqlIssuancePoints = "INSERT INTO POINTS_ISSUANCE VALUE ('$insertId', ?, ?, NOW())";
    $statementIssuancePoints  = $Util->getPDO()->prepare($sqlIssuancePoints);

    if(!$_POST['points01'] == ""){

        $statementIssuancePoints->bindValue(1,$_POST["selectedId"]);
        $statementIssuancePoints->bindValue(2,$_POST['points01']);


    }else if(!$_POST['points02'] == ""){

        $statementIssuancePoints->bindValue(1,$_POST["selectedId"]);
        $statementIssuancePoints->bindValue(2,$_POST['points02']);

    }

    $statementIssuancePoints->execute();

    $sqlPointsUpdate = "UPDATE MEMBER SET MEMBER_POINTS = MEMBER_POINTS + ? WHERE MEMBER_ID = ?";
    $statesmentsqlPointsUpdate = $Util->getPDO()->prepare($sqlPointsUpdate);

    if(!$_POST['points01'] == ""){

        $statesmentsqlPointsUpdate->bindValue(1,$_POST['points01']);
        $statesmentsqlPointsUpdate->bindValue(2,$_POST["selectedId"]);

    }else if(!$_POST['points02'] == ""){

        $statesmentsqlPointsUpdate->bindValue(1,$_POST['points02']);
        $statesmentsqlPointsUpdate->bindValue(2,$_POST["selectedId"]);

    }

    $statesmentsqlPointsUpdate->execute();

    echo "發放點數的工作執行了！";
?>