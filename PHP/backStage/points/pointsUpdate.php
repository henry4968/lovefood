<?php 
    include("../Lib/UtilClass2.php");

    $Util = new UtilClass();
    $sqlUpdatePoints = "UPDATE Lovefood.MEMBER SET POINTS = ? WHERE MEMBER_ID = ?";
    $sqlShowFinalPoints = "SELECT POINTS FROM Lovefood.MEMBER WHERE MEMBER_ID like ?";

    $statementUpdatePoints = $Util->getPDO()->prepare($sqlUpdatePoints);
    $statementShowFinalPoints = $Util->getPDO()->prepare($sqlShowFinalPoints);

    $statementUpdatePoints->bindValue(1,$_POST['points']);
    $statementUpdatePoints->bindValue(2,$_POST['selectedId']);
    $statementUpdatePoints->execute();

    $statementShowFinalPoints->bindValue(1,$_POST['selectedId']);
    $statementShowFinalPoints->execute();

    $dataSP = $statementShowFinalPoints->fetchAll(PDO::FETCH_ASSOC);
    print json_encode($dataSP);

    // echo "修改點數的工作執行了！";
?>