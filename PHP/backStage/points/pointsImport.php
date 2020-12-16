<?php

    include("../../backStage/Lib/connection.php");

    if (($handle = fopen($_POST["importCSV"], "r")) !== FALSE) {

        echo 123;

        // while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        //     $num = count($data, COUNT_RECURSIVE);
        //     for ($i = 0; $i < $num; $i++) {

        //         $sqlSelectMaxId = "SELECT max(POINTS_ISSANCER_ID) FROM Lovefood.POINTS_ISSANCE";

        //         $statementSelectMaxId  = $pdo->prepare($sqlSelectMaxId);
        //         $statementSelectMaxId->execute();
        //         $maxId = $statementSelectMaxId->fetch();

        //         $maxNumber = substr( $maxId[0], 2, 7) + 1;

        //         $insertId = "";

        //         if($maxNumber < 10){
        //             $insertId = "PI000000".$maxNumber;
        //         }else if($maxNumber < 100 && $maxNumber >= 10){
        //             $insertId = "PI00000".$maxNumber;
        //         }else if($maxNumber < 1000 && $maxNumber>=100){
        //             $insertId = "PI0000".$maxNumber;
        //         }else if($maxNumber < 10000 && $maxNumber>=1000){
        //             $insertId = "PI000".$maxNumber;
        //         }else if($maxNumber < 100000 && $maxNumber>=10000){
        //             $insertId = "PI00".$maxNumber;
        //         }

        //         $sqlCSVInsert = "INSERT INTO POINTS_ISSANCE VALUE ('$insertId','$data[0]','$data[1]',NOW())";
        //         $statementCSVInsert  = $pdo->prepare($sqlCSVInsert);
        //         $statementCSVInsert->execute(); 
        //     }
        // }
        // fclose($handle);

        echo "<script>history.back(-1);";

    }
?>
