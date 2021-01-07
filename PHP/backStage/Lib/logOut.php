<?php
session_start();

include("MemberClass.php");
$Member = new MemberClass();

//清空session
$Member->clearSession();
// echo $Member->getMemberID();
echo "<script language=javascript>alert('登出成功!'); window.location.href= '../../../frontend/signUp_signIn.html'; </script>";
