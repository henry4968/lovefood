<?php
    include("Lib/UtilClass.php");
	$Util = new UtilClass();	

    //建立SQL
    $sql = "SELECT * FROM member WHERE (CLASS = 'general' or CLASS = 'particular') and ACCOUNT = ? and PASSWORD = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["pwd"]);
    // $statement->bindValue(1, "j23063519@gmail.com");
    // $statement->bindValue(2, "1qaz2wsx3e");
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["MEMBER_ID"];
        $memberName = $row["ACCOUNT"];
    }

    //判斷是否有會員資料?
    if($memberID != "" && $memberName != ""){
        include("Lib/MemberClass.php");
        $Member = new MemberClass();

        //將會員資訊寫入session
        $Member->setMemberInfo($memberID, $memberName);

        //導回產品頁        
        echo "<script>alert('登入成功!'); location.href = '../../frontend/memberInformation.html';</script>"; 
    }else{
        //跳出提示停留在登入頁
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../frontend/signUp_signIn.html';</script>"; 
    }
?>