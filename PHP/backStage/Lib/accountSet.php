<?php
    session_start();
    $account = $_POST["account"];
    $password = $_POST["password"];
    $_SESSION['account'] = $account;
    echo "<script language=javascript> window.location.href = '../../../backend/sellerIndex.html'
    </script>";
?>