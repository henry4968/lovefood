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
  $sql = "update member set MEMBER_PASSWORD = ? where MEMBER_ID = ?";

  //執行
  $statement = $Util->getPDO()->prepare($sql);

  // 給值
  $statement->bindValue(1, $_POST["newpwd"]);
  $statement->bindValue(2, $MemberId);
  $statement->execute();
  $data = $statement->fetchAll();
?>