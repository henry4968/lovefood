<?php 
    include("../Lib/backendUtilClass.php");
    $Util = new UtilClass();

    $sqlUpdatePoints = "UPDATE Lovefood.MEMBER SET MEMBER_POINTS = ? WHERE MEMBER_ID = ?";
    $sqlShowFinalPoints = "SELECT MEMBER_POINTS FROM Lovefood.MEMBER WHERE MEMBER_ID like ?";

    $statementUpdatePoints = $Util->getPDO()->prepare($sqlUpdatePoints);
    $statementShowFinalPoints = $Util->getPDO()->prepare($sqlShowFinalPoints);

    if(!$_POST['points01'] == ""){

        $statementUpdatePoints->bindValue(1,$_POST['points01']);

    }else if(!$_POST['points02'] == ""){

        $statementUpdatePoints->bindValue(1,$_POST['points02']);
    }

    $statementUpdatePoints->bindValue(2,$_POST['selectedId']);
    $statementUpdatePoints->execute();

    $statementShowFinalPoints->bindValue(1,$_POST['selectedId']);
    $statementShowFinalPoints->execute();

    $dataSP = $statementShowFinalPoints->fetchAll(PDO::FETCH_ASSOC);
    print json_encode($dataSP);

    echo "修改點數的工作執行了！";
?>