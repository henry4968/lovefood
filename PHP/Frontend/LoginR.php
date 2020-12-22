<?php
    include("Lib/UtilClass.php");
	$Util = new UtilClass();	

    // 買家會員
    //建立SQL
    $sql = "SELECT * FROM member WHERE (MEMBER_CLASS = 0 or MEMBER_CLASS = 1) and MEMBER_ACCOUNT = ? and MEMBER_PASSWORD = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["pwd"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["MEMBER_ID"];
        $memberName = $row["MEMBER_ACCOUNT"];
    }

    // 賣家會員
    //建立SQL
    $selsql = "SELECT * FROM supplier WHERE (SUPPLIER_STATUS = 1 or SUPPLIER_STATUS = 2) and SUPPLIER_ACCOUNT = ? and SUPPLIER_PASSWORD = ?";

    //執行
    $selstatement = $Util->getPDO()->prepare($selsql);

    //給值
    $selstatement->bindValue(1, $_POST["account"]);
    $selstatement->bindValue(2, $_POST["pwd"]);
    // $statement->bindValue(1, "j23063519@gmail.com");
    // $statement->bindValue(2, "1qaz2wsx3e");
    $selstatement->execute();
    $seldata = $selstatement->fetchAll();

    $selmemberID = "";
    $selmemberName = "";
    foreach($seldata as $index => $selrow){
        $selmemberID = $selrow["SUPPLIER_ID"];
        $selmemberName = $selrow["SUPPLIER_ACCOUNT"];
    }


    //判斷是否有買家會員資料?
    if($memberID != "" && $memberName != ""){
        include("Lib/MemberClass.php");
        $Member = new MemberClass();

        //將會員資訊寫入session
        $Member->setMemberInfo($memberID, $memberName);

        //導回產品頁        
        echo "<script>alert('登入成功!'); location.href = '../../frontend/memberInformation.html';</script>"; 
    }else if($selmemberID != "" && $selmemberName != ""){//判斷是否有賣家會員資料?
        include("Lib/MemberClass.php");
        $Member = new MemberClass();

        //將會員資訊寫入session
        $Member->setMemberInfo($selmemberID, $selmemberName);

        //導回產品頁
        if($selmemberID  == 'SP0001'){ //廷翰加判斷式 判斷是不是超級管理員進不同網站
            echo "<script>alert('登入成功!'); location.href = '../../backend/backendIndex.html';</script>"; 
        }else{
            echo "<script>alert('登入成功!'); location.href = '../../backend/sellerIndex.html';</script>"; 
        }        
        
    }else{
        //跳出提示停留在登入頁
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../frontend/signUp_signIn.html';</script>"; 
    }
