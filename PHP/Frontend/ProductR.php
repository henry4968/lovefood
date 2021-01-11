<?php 

    // 資料庫連線
    include("Lib/UtilClass16.php");
    $Util = new UtilClass();

    // 找出ID
    include("Lib/MemberClass.php");
    $Member = new MemberClass();
    $Member = $Member->getMemberID();

    //建立SQL
    // $sql = "SELECT MEMBER_AVATAR FROM member WHERE MEMBER_ID = ? ";
    $sql = "SELECT * FROM product";

    //執行
    $statement = $Util->getPDO()->prepare($sql);
    
    //給值
    $statement->bindValue(1, $Member);
    $statement->execute();
    $data = $statement->fetchAll();

    print_r(json_encode($data));

    // $img = "";
    // // 確認是否有存在資料
    // foreach($data as $index => $row){
    //     $img = $row["MEMBER_AVATAR"];
    // }

    // $img = base64_decode($img);

    // print_r ($data[0]["MEMBER_AVATAR"]);
    // print_r ($img);
