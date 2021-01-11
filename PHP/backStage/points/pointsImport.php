<?php

    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $dataUL = [];

    // if (($handle = fopen($_FILES["importCSV"]["tmp_name"], "r")) !== FALSE) {  //直接開啟
    if (($handle = fopen($_FILES["csvFileInput"]["tmp_name"], "r")) !== FALSE) {  //AJAX開啟

        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {

                $sqlSelectMaxId = "SELECT max(POINTS_ISSUANCE_ID) FROM points_issuance";

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

                $sqlCSVInsert = "INSERT INTO points_issuance VALUE ('$insertId','$data[0]','$data[1]',NOW())";
                $statementCSVInsert  = $Util->getPDO()->prepare($sqlCSVInsert);
                $statementCSVInsert->execute();

                $sqlPointsUpdate = "UPDATE member SET MEMBER_POINTS = MEMBER_POINTS + ? WHERE MEMBER_ID = ?";
                $statesmentsqlPointsUpdate = $Util->getPDO()->prepare($sqlPointsUpdate);
                $statesmentsqlPointsUpdate->bindValue(1,$data[1]);
                $statesmentsqlPointsUpdate->bindValue(2,$data[0]);
                $statesmentsqlPointsUpdate->execute();

                $sqlUploadRow = "SELECT PI.POINTS_ISSUANCE_ID, PI.MEMBER_ID_for_PI, MB.MEMBER_ACCOUNT, MB.MEMBER_NAME, PI.POINTS_ISSUANCE_NUM, PI.POINTS_ISSUANCE_DATE, MB.MEMBER_POINTS FROM points_issuance PI JOIN MEMBER MB ON PI.MEMBER_ID_for_PI = MB.MEMBER_ID WHERE PI.POINTS_ISSUANCE_ID like ?";
                $statesmentUploadRow = $Util->getPDO()->prepare($sqlUploadRow);
                $statesmentUploadRow->bindValue(1,'%'.@$insertId.'%');
                $statesmentUploadRow->execute();
                $dataUR = $statesmentUploadRow->fetch(PDO::FETCH_ASSOC);

                array_push($dataUL,$dataUR);

        }
        fclose($handle);

        print json_encode($dataUL);
    }

?>
