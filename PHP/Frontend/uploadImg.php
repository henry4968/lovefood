<?php
// 資料庫連線
include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

// 找出ID
include("Lib/MemberClass.php");
$Member = new MemberClass();
$Member = $Member->getMemberID();

// 找IMG
$img = $_POST["img"];

//字串以MIME BASE64編碼，在Base64中的可列印字元包括字母A-Z、a-z、數位0-9，這樣共有62個字元，此外兩個可列印符號在不同的系統中而不同
//Base64常用於在通常處理文字資料的場合，表示、傳輸、儲存一些二進制資料
// 加密函式為base64_encode (string $data)
// $data 為你將加密的資料
$img = base64_encode($img);
echo $img;

$sql = "UPDATE member SET MEMBER_AVATAR = ? where MEMBER_ID = ?";

//執行
$statement = $Util->getPDO()->prepare($sql);

//給值
$statement->bindValue(1, $img);
$statement->bindValue(2, $Member);
$statement->execute();
$data = $statement->fetchAll();
