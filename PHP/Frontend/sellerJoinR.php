<?php
    include("Lib/UtilClass.php");
    $Util = new UtilClass();

    // 建立SQL 測試用
    // $sql = "INSERT INTO ec_members (Account , PWD , Type , CreateDate ) VALUES (?,?,1,NOW())";

    // select max first 
    $sql = "SELECT max(SUPPLIER_ID) FROM lovefood.supplier;";
    $statement = $Util->getPDO()->prepare($sql);
    $statement->execute();
    $maxId = $statement->fetch();
    // print_r($maxId[0]); //value

    // 分割SP0000從第三位開始並加數字1
    $maxValue = substr( $maxId[0] , 3 ,) + 1;
    // echo $maxValue; //測試用

    // 針對SUPPLIER_ID裡面做數字增加
    $insert = "";
    if($maxValue<10){
        $insert = "SP000".$maxValue;
    }
    elseif($maxValue<100 && $maxValue>=10){
        $insert = "SP00".$maxValue;
    }elseif($maxValue<1000 && $maxValue>=100){
        $insert = "SP0".$maxValue;
    }elseif($maxValue<10000 && $maxValue>=1000){
        $insert = "SP".$maxValue;
    }
    // echo $insert; 準備輸入的SUPPLIER_ID

    // 買家帳號重複問題解決
    //建立SQL
    $sql = "SELECT * FROM member WHERE MEMBER_CLASS = 0 and MEMBER_ACCOUNT = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["selaccount"]);
    $statement->execute();
    $data = $statement->fetchAll();

    // 賣家帳號重複問題解決
    //建立SQL
    $slesql = "SELECT * FROM supplier WHERE SUPPLIER_STATUS = 1 and SUPPLIER_ACCOUNT = ?";

    //執行
    $selstatement = $Util->getPDO()->prepare($slesql);

    //給值
    $selstatement->bindValue(1, $_POST["selaccount"]);
    $selstatement->execute();
    $seldata = $selstatement->fetchAll();

    // 判斷帳號是否重複
    if(count($data) >= 1 || count($seldata) >= 1){
        echo "<script>alert('帳號重複請重新註冊!'); location.href = '../../frontend/signUp_signIn.html';</script>";
    }else{
        // INSERT Second //如果帳號不重複就執行程式
        $sql = "INSERT INTO lovefood.supplier (SUPPLIER_ID,SUPPLIER_ACCOUNT,SUPPLIER_PASSWORD,SUPPLIER_REG_DATE,SUPPLIER_NAME,SUPPLIER_TAX_ID,SUPPLIER_DISTRICT,SUPPLIER_ADDRESS,SUPPLIER_PHONE,SUPPLIER_STATUS) VALUES (?,?,?,now(),?,?,0,?,?,1);";
    
        //執行
        $statement = $Util->getPDO()->prepare($sql);
    
        //給值
        $statement->bindValue(1, $insert);
        $statement->bindValue(2, $_POST["selaccount"]);
        $statement->bindValue(3, $_POST["selpwd"]);
        $statement->bindValue(4, $_POST["selcom"]);
        $statement->bindValue(5, $_POST["seltax"]);
        $statement->bindValue(6, $_POST["seladd"]);
        $statement->bindValue(7, $_POST["selpho"]);
        $statement->execute();
    
        echo "<script>alert('加入成功，請重新登入!'); location.href = '../../frontend/signUp_signIn.html';</script>";
    }

?>