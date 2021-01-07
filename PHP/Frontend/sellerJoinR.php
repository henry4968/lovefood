<?php
// 資料庫連線
include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

// 建立SQL 測試用
// $sql = "INSERT INTO ec_members (Account , PWD , Type , CreateDate ) VALUES (?,?,1,NOW())";

// select max first 
$sql = "SELECT max(SUPPLIER_ID) FROM supplier;";
$statement = $Util->getPDO()->prepare($sql);
$statement->execute();
$maxId = $statement->fetch();
// print_r($maxId[0]); //value

// 分割SP0000從第三位開始並加數字1
$maxValue = substr($maxId[0], 3) + 1;
// echo $maxValue; //測試用

// 針對SUPPLIER_ID裡面做數字增加
$insert = "";
if ($maxValue < 10) {
    $insert = "SP000" . $maxValue;
} elseif ($maxValue < 100 && $maxValue >= 10) {
    $insert = "SP00" . $maxValue;
} elseif ($maxValue < 1000 && $maxValue >= 100) {
    $insert = "SP0" . $maxValue;
} elseif ($maxValue < 10000 && $maxValue >= 1000) {
    $insert = "SP" . $maxValue;
}
// echo $insert; 準備輸入的SUPPLIER_ID

// 買家帳號重複問題解決
//建立SQL
$sql = "SELECT * FROM member WHERE (MEMBER_CLASS = 0 or MEMBER_CLASS = 1) and MEMBER_ACCOUNT = ?";

//執行
$statement = $Util->getPDO()->prepare($sql);

//給值
$statement->bindValue(1, $_POST["selaccount"]);
$statement->execute();
$data = $statement->fetchAll();

// 賣家帳號重複問題解決
//建立SQL
$slesql = "SELECT * FROM supplier WHERE (SUPPLIER_STATUS = 1 or SUPPLIER_STATUS = 2) and SUPPLIER_ACCOUNT = ?";

//執行
$selstatement = $Util->getPDO()->prepare($slesql);

//給值
$selstatement->bindValue(1, $_POST["selaccount"]);
$selstatement->execute();
$seldata = $selstatement->fetchAll();

// 公司ID
// 建立SQL
$sqlorid = "SELECT max(ORGANIZATION_ID) FROM organization";

//執行
$oridstatement = $Util->getPDO()->prepare($sqlorid);

//給值
$oridstatement->execute();
$oridstatementdata = $oridstatement->fetch();

$maxoridValue = substr($oridstatementdata[0], 3) + 1;
// echo $maxValue; //測試用

// 針對SUPPLIER_ID裡面做數字增加
$insertorid = "";
if ($maxoridValue < 10) {
    $insertorid = "OG000000" . $maxoridValue;
} elseif ($maxoridValue < 100 && $maxoridValue >= 10) {
    $insertorid = "OG00000" . $maxoridValue;
} elseif ($maxoridValue < 1000 && $maxoridValue >= 100) {
    $insertorid = "OG0000" . $maxoridValue;
} elseif ($maxoridValue < 10000 && $maxoridValue >= 1000) {
    $insertorid = "OG000" . $maxoridValue;
} elseif ($maxoridValue < 100000 && $maxoridValue >= 10000) {
    $insertorid = "OG00" . $maxoridValue;
} elseif ($maxoridValue < 1000000 && $maxoridValue >= 100000) {
    $insertorid = "OG0" . $maxoridValue;
}
// echo $insertorid; //測試

// 判斷帳號是否重複
if (count($data) >= 1 || count($seldata) >= 1) {
    echo "<script>alert('帳號重複請重新註冊!'); location.href = '../../frontend/signUp_signIn.html';</script>";
} else {
    // INSERT Second //如果帳號不重複就執行程式
    // 增加新公司ID及名稱
    $sqlorid = "INSERT INTO organization (ORGANIZATION_ID,ORGANIZATION_FULL_NAME,ORGANIZATION_NICK_NAME) VALUES (?,?,?)";

    //執行
    $sqloridstatement = $Util->getPDO()->prepare($sqlorid);

    //給值
    $sqloridstatement->bindValue(1, $insertorid);
    $sqloridstatement->bindValue(2, $_POST["selcom"]);
    $sqloridstatement->bindValue(3, $_POST["selcom"]);
    $sqloridstatement->execute();

    // INSERT Second //如果帳號不重複就執行程式
    $sql = "INSERT INTO supplier (SUPPLIER_ID,SUPPLIER_ACCOUNT,SUPPLIER_PASSWORD,SUPPLIER_REG_DATE,SUPPLIER_NAME,SUPPLIER_TAX_ID,SUPPLIER_DISTRICT,SUPPLIER_ADDRESS,SUPPLIER_PHONE,ORGANIZATION_ID_for_SP,SUPPLIER_STATUS) VALUES (?,?,?,now(),'待審核店',?,0,?,?,?,1)";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $insert);
    $statement->bindValue(2, $_POST["selaccount"]);
    $statement->bindValue(3, $_POST["selpwd"]);
    $statement->bindValue(4, $_POST["seltax"]);
    $statement->bindValue(5, $_POST["seladd"]);
    $statement->bindValue(6, $_POST["selpho"]);
    $statement->bindValue(7, $insertorid);
    $statement->execute();


    echo "<script>alert('加入成功，請重新登入!'); location.href = '../../frontend/signUp_signIn.html';</script>";
}
