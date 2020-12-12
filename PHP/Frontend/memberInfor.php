<?php
  // 資料庫連線
  include("Lib/UtilClass.php");
  $Util = new UtilClass();

  // 針對該ID找出名稱
  include("Lib/MemberClass.php");

  $Member = new MemberClass();
  
  // 測試印出MEMBERID
  $MemberId = $Member->getMemberID();
  // echo $MemberId;

  // 建立SQL
  $sql = "select CLASS from member where MEMBER_ID = ?";

  //執行
  $statement = $Util->getPDO()->prepare($sql);

  // 給值
  $statement->bindValue(1, $MemberId);
  $statement->execute();
  // $data = $statement->fetchAll();
  $data = $statement->fetchAll();

  // 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
  // print json_encode($data);

  // 建立SQL
  $sqlac = "select ACCOUNT from member where MEMBER_ID = ?";

  //執行
  $statementac = $Util->getPDO()->prepare($sqlac);

  // 給值
  $statementac->bindValue(1, $MemberId);
  $statementac->execute();
  // $data = $statement->fetchAll();
  $dataac = $statementac->fetchAll();

  // 對變量進行JSON編碼，不能用print_r是因為它是把裡面的內容轉字串
  // print json_encode($dataac);

  $dataAll = array('data' => $data, 'dataac'=>$dataac);
  print json_encode($dataAll);
?>