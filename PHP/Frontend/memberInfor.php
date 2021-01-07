<?php
// 資料庫連線
include("Lib/frontendUtilClass.php");
$Util = new UtilClass();

// 針對該ID找出名稱
include("Lib/MemberClass.php");

$Member = new MemberClass();

// 測試印出MEMBERID
$MemberId = $Member->getMemberID();
// echo $MemberId;

// 建立SQL(撈CLASS)
$sql = "select MEMBER_CLASS from member where MEMBER_ID = ?";

//執行
$statement = $Util->getPDO()->prepare($sql);

// 給值
$statement->bindValue(1, $MemberId);
$statement->execute();
// $data = $statement->fetchAll();
$data = $statement->fetchAll();

// 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
// print json_encode($data);

// 建立SQL(撈ACCOUNT)
$sqlac = "select MEMBER_ACCOUNT from member where MEMBER_ID = ?";

//執行
$statementac = $Util->getPDO()->prepare($sqlac);

// 給值
$statementac->bindValue(1, $MemberId);
$statementac->execute();
// $data = $statement->fetchAll();
$dataac = $statementac->fetchAll();

// 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
// print json_encode($dataac);

// 建立SQL(撈PASSWORD)
$sqlpa = "select MEMBER_PASSWORD from member where MEMBER_ID = ?";

//執行
$statementpa = $Util->getPDO()->prepare($sqlpa);

// 給值
$statementpa->bindValue(1, $MemberId);
$statementpa->execute();
// $data = $statement->fetchAll();
$datapa = $statementpa->fetchAll();

// 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
// print json_encode($datapa);

// 建立SQL(撈NAME)
$sqlna = "select MEMBER_NAME from member where MEMBER_ID = ?";

//執行
$statementna = $Util->getPDO()->prepare($sqlna);

// 給值
$statementna->bindValue(1, $MemberId);
$statementna->execute();
// $data = $statement->fetchAll();
$datana = $statementna->fetchAll();

// 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
// print json_encode($datana);

// 建立SQL(撈phone)
$sqlph = "select MEMBER_PHONE from member where MEMBER_ID = ?";

//執行
$statementph = $Util->getPDO()->prepare($sqlph);

// 給值
$statementph->bindValue(1, $MemberId);
$statementph->execute();
// $data = $statement->fetchAll();
$dataph = $statementph->fetchAll();

// 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
// print json_encode($dataph);

// 建立SQL(撈address)
$sqlad = "select MEMBER_ADDRESS from member where MEMBER_ID = ?";

//執行
$statementad = $Util->getPDO()->prepare($sqlad);

// 給值
$statementad->bindValue(1, $MemberId);
$statementad->execute();
// $data = $statement->fetchAll();
$dataad = $statementad->fetchAll();

// 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
// print json_encode($dataad);

// 陣列合併用array('a' => $data, 'b' => $dataac)
$dataAll = array('data' => $data, 'dataac' =>  $dataac, 'datapa' => $datapa, 'datana' => $datana, 'dataph' => $dataph, 'dataad' => $dataad);

// 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
print json_encode($dataAll);
