<?php
  // 資料庫連線
  include("Lib/UtilClass.php");
  $Util = new UtilClass();

  // 針對該ID找出名稱
  include("Lib/MemberClass.php");

  $Member = new MemberClass();
  
  // 測試印出MEMBERID
  echo $Member->getMemberID();

  // 建立SQL
  $sql = "select name from member where MEMBER_ID = ?";

  //執行
  $statement = $Util->getPDO()->prepare($sql);

  // 給值
  $statement->bindValue(1, $Member);
  $statement->execute();
  $data = $statement->fetchAll();

  // echo $data;
?>