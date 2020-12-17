<?php

    include("../../backStage/Lib/connection.php");

    $dataUL = [];

    // if (($handle = fopen($_FILES["importCSV"]["tmp_name"], "r")) !== FALSE) {  //直接開啟
    if (($handle = fopen($_FILES["csvFile"]["tmp_name"], "r")) !== FALSE) {  //AJAX開啟

        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {

                $sqlSelectMaxId = "SELECT max(POINTS_ISSANCER_ID) FROM Lovefood.POINTS_ISSANCE";

                $statementSelectMaxId  = $pdo->prepare($sqlSelectMaxId);
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

                $sqlCSVInsert = "INSERT INTO POINTS_ISSANCE VALUE ('$insertId','$data[0]','$data[1]',NOW())";
                $statementCSVInsert  = $pdo->prepare($sqlCSVInsert);
                $statementCSVInsert->execute();

                $sqlPointsUpdate = "UPDATE MEMBER SET POINTS = POINTS + ? WHERE MEMBER_ID = ?";
                $statesmentsqlPointsUpdate = $pdo->prepare($sqlPointsUpdate);
                $statesmentsqlPointsUpdate->bindValue(1,$data[1]);
                $statesmentsqlPointsUpdate->bindValue(2,$data[0]);
                $statesmentsqlPointsUpdate->execute();

                $sqlUploadRow = "SELECT PI.POINTS_ISSANCER_ID, PI.MEMBER_ID_for_PI, MB.ACCOUNT, MB.NAME, PI.ISSANCE_NUM, PI.ISSANCE_DATE FROM POINTS_ISSANCE PI JOIN MEMBER MB ON PI.MEMBER_ID_for_PI = MB.MEMBER_ID WHERE PI.POINTS_ISSANCER_ID like ?";
                $statesmentUploadRow = $pdo->prepare($sqlUploadRow);
                $statesmentUploadRow->bindValue(1,'%'.@$insertId.'%');
                $statesmentUploadRow->execute();
                $dataUR = $statesmentUploadRow->fetch(PDO::FETCH_ASSOC);

                array_push($dataUL,$dataUR);

        }
        fclose($handle);

        print json_encode($dataUL);
    }

?>
