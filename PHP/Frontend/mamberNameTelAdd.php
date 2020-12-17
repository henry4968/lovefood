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

  // 建立SQL(update NAME ADDRESS PHONE)
  $sql = "update member set MEMBER_NAME = ? , MEMBER_ADDRESS = ? , MEMBER_PHONE = ? where MEMBER_ID = ?";

  //執行
  $statement = $Util->getPDO()->prepare($sql);

  // 給值
  $statement->bindValue(1, $_POST["name"]);
  $statement->bindValue(2, $_POST["add"]);
  $statement->bindValue(3, $_POST["tel"]);
  $statement->bindValue(4, $MemberId);
  $statement->execute();
  $data = $statement->fetchAll();
?>