<?php 

    // 資料庫連線
    include("Lib/UtilClass.php");
    $Util = new UtilClass();
    $Member = $Member->getMemberID();

    // 找出ID
    include("Lib/MemberClass.php");
    $Member = new MemberClass();
    
    //建立SQL
    $sql = "SELECT MEMBER_AVATAR FROM member WHERE MEMBER_ID = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    
    //給值
    $statement->bindValue(1, $Member);
    $statement->execute();
    $data = $statement->fetchAll();

    $img = "";
    // 確認是否有存在資料
    foreach($data as $index => $row){
        $img = $row["MEMBER_ID"];
    }

    $img = base64_decode ($img);

    echo $img;


?>