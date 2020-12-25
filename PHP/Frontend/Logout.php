<?php
    // 資料庫連線
    include("Lib/frontendUtilClass.php");
    $Util = new UtilClass();

    //清空session
    $Member->clearSession();

    // echo "<script>alert('登出成功!'); location.href = '../../frontend/index.html';</script>";  
