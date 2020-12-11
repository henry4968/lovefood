<?php
    include("Lib/UtilClass.php");
    $Util = new UtilClass();

    // 建立SQL 測試用
    // $sql = "INSERT INTO ec_members (Account , PWD , Type , CreateDate ) VALUES (?,?,1,NOW())";

    // select max first 
    $sql ="SELECT max(MEMBER_ID) FROM lovefood.member;";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->execute();
    $maxId = $statement->fetch();
    // print_r($maxId[0]); //value

    // 分割MB0000000從第三位開始並加數字1
    $maxValue = substr( $maxId[0] , 3 ,) + 1;
    // echo $maxValue; //測試用

    // 針對MEMBER_ID裡面做數字增加
    $insert = "";
    if($maxValue<10){
        $insert = "MB000000".$maxValue;
    }
    elseif($maxValue<100 && $maxValue>=10){
        $insert = "MB00000".$maxValue;
    }elseif($maxValue<1000 && $maxValue>=100){
        $insert = "MB0000".$maxValue;
    }elseif($maxValue<10000 && $maxValue>=1000){
        $insert = "MB000".$maxValue;
    }elseif($maxValue<100000 && $maxValue>=10000){
        $insert = "MB00".$maxValue;
    }
    // echo $insert; 準備輸入的memberID

    // 買家帳號重複問題解決
    //建立SQL
    $sql = "SELECT * FROM member WHERE CLASS = 'general' and ACCOUNT = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account"]);
    $statement->execute();
    $data = $statement->fetchAll();

    // 賣家帳號重複問題解決
    //建立SQL
    $slesql = "SELECT * FROM supplier WHERE SUPPLIER_STATUS = 1 and ACCOUNT = ?";

    //執行
    $selstatement = $Util->getPDO()->prepare($slesql);

    //給值
    $selstatement->bindValue(1, $_POST["account"]);
    $selstatement->execute();
    $seldata = $selstatement->fetchAll();

    // 判斷帳號是否重複
    if(count($data) >= 1 || count($seldata) >= 1){
        echo "<script>alert('帳號重複請重新註冊!'); location.href = '../../frontend/signUp_signIn.html';</script>";
    }else{
        // INSERT Second //如果帳號不重複就執行程式
        $sql = "INSERT INTO member (MEMBER_ID,CLASS,ACCOUNT,PASSWORD,REG_DATE,MEMBER_STATUS) VALUES (?,'general',?,?, NOW() ,1)";
    
        //執行
        $statement = $Util->getPDO()->prepare($sql);
    
        //給值
        $statement->bindValue(1, $insert);
        $statement->bindValue(2, $_POST["account"]);
        $statement->bindValue(3, $_POST["pwd"]);
        $statement->execute();
    
        echo "<script>alert('加入成功，請重新登入!'); location.href = '../../frontend/signUp_signIn.html';</script>";
    }

?>