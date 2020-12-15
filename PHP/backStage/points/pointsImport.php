<?php

    include("../../backStage/Lib/connection.php");

    if (($handle = fopen($_POST["importCSV"], "r")) !== FALSE) {
        $row = 0;

        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $num = count($data, COUNT_RECURSIVE);
            for ($i = 0; $i < $num; $i++) {
                $sqlCSVInsert = "INSERT INTO POINTS_ISSANCE VALUE ($i,'".$data[0]."','".$data[1]."',NOW())";
                $statementCSVInsert  = $pdo->prepare($sqlCSVInsert);
                $statementCSVInsert->execute();
                $row++;    
            }
        }
        echo $row;
        fclose($handle);
    }
?>