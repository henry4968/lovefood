<?php
    include("../Lib/MemberClass.php");
    $Member = new MemberClass();

    //清空session
    $Member->clearSession();

    echo "<script>alert('登出成功!'); location.href = 'Product.php';</script>";  
?>