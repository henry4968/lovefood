<?php

include("../PHP/Frontend/Lib/frontendUtilClass.php");
$Util = new UtilClass();

// 尋找目前流水號最大者，製造下一號並裝入變數
$sqlSelectMaxId = "SELECT max(DONATION_ID) FROM donation;";

$statementSelectMaxId  = $Util->getPDO()->prepare($sqlSelectMaxId);
$statementSelectMaxId->execute();
$maxId = $statementSelectMaxId->fetch();

$maxNumber = substr($maxId[0], 2, 7) + 1;

$insertId = "";

if ($maxNumber < 10) {
    $insertId = "DN000000" . $maxNumber;
} else if ($maxNumber < 100 && $maxNumber >= 10) {
    $insertId = "DN00000" . $maxNumber;
} else if ($maxNumber < 1000 && $maxNumber >= 100) {
    $insertId = "DN0000" . $maxNumber;
} else if ($maxNumber < 10000 && $maxNumber >= 1000) {
    $insertId = "DN000" . $maxNumber;
} else if ($maxNumber < 100000 && $maxNumber >= 10000) {
    $insertId = "DN00" . $maxNumber;
}

// 植入流水號後的捐款輸入語法
$sqlStatment = "INSERT INTO 
donation(DONATION_ID, DONATION_DATE, DONATION_PLAN, DONATION_METHOD, DONATION_AMOUNT, DONATION_NAME,DONATION_NATIONALITY, 
DONATION_PERSONAL_ID_OR_TAX_ID,DONATION_BIRTHDAY, DONATION_ADDRESS, DONATION_EMAIL, DONATION_GENDER, DONATION_REMARKS, DONATION_RECEIPT_TITLE, 
DONATION_PERSONAL_ID_OR_TAX_ID_OF_RECEIPT, DONATION_DELIVERY_METHOD) VALUE (?,NOW(),?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

$sqlStatment = $Util->getPDO()->prepare($sqlStatment);

$nationlity = !empty($_POST["nationality"]) ? $_POST["nationality"] : null;
$gender = !empty($_POST["gender"]) ? $_POST["gender"] : null;
$birthday = !empty($_POST["birthday"]) ? $_POST["birthday"] : null;
$deliveryMethod = !empty($_POST["deliveryMethod"]) ? $_POST["deliveryMethod"] : null;

$sqlStatment->bindValue(1, $insertId);
$sqlStatment->bindValue(2, $_POST["donationPlan"]);
$sqlStatment->bindValue(3, $_POST["donationMethod"]);
$sqlStatment->bindValue(4, $_POST["amount"]);
$sqlStatment->bindValue(5, $_POST["name"]);
$sqlStatment->bindValue(6, $nationlity);
$sqlStatment->bindValue(7, $_POST["pID_tID"]);
$sqlStatment->bindValue(8, $birthday);
$sqlStatment->bindValue(9, $_POST["address"]);
$sqlStatment->bindValue(10, $_POST["email"]);
$sqlStatment->bindValue(11, $gender);
$sqlStatment->bindValue(12, $_POST["remarks"]);
$sqlStatment->bindValue(13, $_POST["receiptTitle"]);
$sqlStatment->bindValue(14, $_POST["receipt_pID_tID"]);
$sqlStatment->bindValue(15, $deliveryMethod);

$sqlStatment->execute();

$sqlDonationCompleted = "SELECT DONATION_ID, DONATION_AMOUNT, DONATION_METHOD, year(DONATION_DATE), month(DONATION_DATE), day(DONATION_DATE) FROM donation WHERE DONATION_ID = ?";

$statementDonationCompleted = $Util->getPDO()->prepare($sqlDonationCompleted);
$statementDonationCompleted->bindValue(1, $insertId);
$statementDonationCompleted->execute();

$dataDC = $statementDonationCompleted->fetchAll(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Love food│捐款完成</title>
    <!-- 自訂css -->
    <link rel="stylesheet" href="../css/donate_completed.css">
    <script src="../node_modules/jquery/dist/jquery.js"></script>
    <script src="../node_modules/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="../node_modules/counterup/jquery.counterup.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
    <link rel="icon" type="image/png" href="../img/21/donation_description/map_leaf.png" />
    <!-- 自訂js -->
    <script src="../js/21/donation.js"></script>

    <!-- <script src="../js/21/donation.js"></script> -->
    <script src="../js/21/donate_completed.js"></script>
    <!-- axios套件 -->
    <script src="../node_modules/axios/dist/axios.min.js"></script>
</head>

<body>
    <!-- 標頭開始 -->
    <header id="header">
        <!-- 漢堡選單開始 -->
        <input type="checkbox" id="hamburgerMenuToggle">
        <label for="hamburgerMenuToggle" id="hamburgerMenuButton">
            <span></span>
        </label>
        <!-- 行動版行動導覽列開始 -->
        <nav id="navigationForMobile">
            <div id="searchBarForMobile">
                <input type="text" placeholder="搜尋..." id="searchInputForMobile">
            </div>
            <ul>
                <li>
                    <a href="./store_1.html" class="navGeneralAnchorsForMobile">樂腹商城</a>
                </li>
                <li>
                    <a :href="seljumpage" class="navGeneralAnchorsForMobile" @click="sellogIncheck">賣家專區</a>
                </li>
                <li>
                    <a href="./donation_description.html" class="navGeneralAnchorsForMobile" id="donationPage">捐款說明</a>
                </li>
                <li>
                    <a href="./donate_now.html" id="navSepcialAnchorForMobile">
                        <div>
                            立即捐款
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- 行動版導覽列結束 -->
        <!-- 漢堡選單結束 -->
        <div id="headerContentContainer">
            <a href="./index.html">
                <img id="logo" src="../img/22/index/ch04_header_logo.png">
            </a>
            <!-- 桌機版導覽列開始 -->
            <nav id="navigationForPC">
                <a href="./store_1.html" class="navGeneralAnchors">樂腹商城</a>
                <a :href="seljumpage" class="navGeneralAnchors" :class="{selloginchangemem:sellogin}" @click="sellogIncheck">賣家專區</a>
                <a href="./donation_description.html" class="navGeneralAnchors">捐款說明</a>
                <a href="./donate_now.html" id="navSepcialAnchor">
                    <div>
                        立即捐款
                    </div>
                </a>
                <a href="#0" id="navIcons01" class="navIcons" style="z-index: 99;">
                    <img id="navIconsImg" src="../img/22/index/ch04_nav_search.png" alt="">
                    <input type="text" placeholder="搜尋..." id="searchInputForWeb" class="searchInputBlur" style="height: 55px;">
                </a>
                <a href="./store_3.html" id="navIcons02" class="navIcons" style="position: relative;margin-left: 0px;">
                    <div style="width: 20px; height: 20px; border-radius: 50px; display: flex; justify-content: center; background-color: #ef8686; color: #ffffff; align-items: center; position: absolute; z-index: 1; right: -14%; font-size: 17px;top: -15%;">
                        {{itemQty}}
                    </div>
                    <img src="../img/22/index/ch04_nav_cart.png" alt="">
                </a>
                <a :href="jumppage" id="navIcons03" class="navIcons" @click="logIncheck" @mouseover="onhover" @mouseout="onout">
                    <img v-if="login" :src='Bigpicchange'>
                    <img v-else="login" src='../img/22/index/ch04_nav_member.png'>
                </a>
            </nav>
            <!-- 桌機版導覽列結束 -->
            <!-- 行動版次級導覽列開始 -->
            <nav id="subNavigationForMobile">
                <a href="./store_3.html" id="navIcons04" class="navIconsForMobile" style="position: relative;margin-left: 0px;">
                    <div style="width: 20px; height: 20px; border-radius: 50px; display: flex; justify-content: center; background-color: #ef8686; color: #ffffff; align-items: center; position: absolute; z-index: 1; right: -14%; font-size: 17px;top: -20%;">
                        {{itemQty}}
                    </div>
                    <img src="../img/22/index/ch04_nav_cart.png" alt="">
                </a>
                <a :href="jumppage" id="navIcons05" class="navIconsForMobile" @click="logIncheck" @mouseover="onhover" @mouseout="onout">
                    <img v-if="login" :src='Bigpicchange'>
                    <img v-else="login" src='../img/22/index/ch04_nav_member.png'>
                </a>
            </nav>
            <!-- 行動版次級導覽列結束 -->
        </div>
    </header>
    <!-- 標頭結束 -->

    <main id="background">
        <div class="welcomeBg">
            <img id="flower_left" src="../img/21/welcome/flower_left.png" alt="">
            <img id="flower_right" src="../img/21/welcome/flower_right.png" alt="">

        </div>
        <div class="donateForm">
            <form action="">
                <div class="donateItem">

                    <div class="donateLine">
                        <div class="donateTitle">
                            <img src="../img/21/donation_now/form_icon.png" alt="">
                            <span>捐款成功</span>
                        </div>
                    </div>
                    <div class="inner">
                        <div class="thanksTxt">
                            <h1>謝謝您的捐款！</h1>
                            <p>衷心感謝您的支持 ，為有需要的朋友提供援助！
                                <br>
                                您的線上捐款已被確認。如有任何查詢，請連同以下捐款資料與我們聯絡。
                            </p>
                        </div>

                        <div class="detail">

                            <div class="formRow">
                                <!-- 明細標題 -->
                                <div class="detailTitle">
                                    ．捐款編號：
                                </div>
                                <!-- 明細內容 -->
                                <div class="detailContent">
                                    <?php echo $dataDC[0]['DONATION_ID']; ?>
                                </div>
                            </div>

                            <div class="formRow">
                                <!-- 明細標題 -->
                                <div class="detailTitle">
                                    ．捐款金額：
                                </div>
                                <!-- 明細內容 -->
                                <div class="detailContent">
                                    <?php echo $dataDC[0]['DONATION_AMOUNT']; ?> 元
                                </div>
                            </div>

                            <div class="formRow">
                                <!-- 明細標題 -->
                                <div class="detailTitle">
                                    ．捐款項目：
                                </div>
                                <!-- 明細內容 -->
                                <div class="detailContent">
                                    <?php if ($dataDC[0]['DONATION_METHOD'] == 1) {
                                        echo '定期捐款';
                                    } else if ($dataDC[0]['DONATION_METHOD'] == 2) {
                                        echo '單次扣款';
                                    } else {
                                        echo '資料錯誤';
                                    } ?>
                                </div>
                            </div>

                            <div class="formRow">
                                <!-- 明細標題 -->
                                <div class="detailTitle">
                                    ．捐款日期：
                                </div>
                                <!-- 明細內容 -->
                                <div class="detailContent">
                                    <?php echo $dataDC[0]['year(DONATION_DATE)']; ?>-<?php echo $dataDC[0]['month(DONATION_DATE)']; ?>-<?php echo $dataDC[0]['day(DONATION_DATE)']; ?>
                                </div>
                            </div>
                        </div>

                        <div class="checkButton">
                            <a href="./index.html">
                                <input type="button" class="Button" id="backIndex" value=回首頁>
                            </a>
                            <a href="./donation_description.html#nav3">
                                <input type="button" class="Button" id="thankArea" value=感謝區>
                            </a>
                        </div>




                    </div>
            </form>
        </div>
    </main>

    <div class="donateFooter">
        <footer>
            <div class="footerBlock">
                <div>
                    <div class="footer_logo">
                        <a href="index.html"><img src="../img/21/donation_description/footer_logo.png"></a>
                        <p class="copyright">&copy LOVE FOOD All right reserved</p>
                    </div>
                    <div class="info">
                        <a href="#"><img src="../img/21/donation_description/footer_map.png">台北市南京東路三段215號5樓</a><br>
                        <a href="#"><img src="../img/21/donation_description/footer_tel.png">02-24708053</a><br>
                        <a href="#"><img src="../img/21/donation_description/footer_mail.png">service@lovefood.com</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</body>
<script src="../node_modules/vue/dist/vue.js"></script>
<!-- header vue -->
<script>
    new Vue({
        el: '#header',
        data: {
            // 一般會員 href
            jumppage: '',
            // 賣家會員 href
            seljumpage: '',
            // 賣家會員class
            selloginchangemem: '',
            // 會員大頭貼
            Bigpicchange: '../img/22/index/ch04_nav_member.png',
            // 判斷一般會員是否登入
            login: '',
            // 判斷賣家會員是否登入
            sellogin: '',
            // 商品數量
            itemQty: 0,
        },
        methods: {
            // 點擊判斷是否有登入會員，如果有登入就跳入會員中心，如果沒有登入，就進入登入註冊頁面
            logIncheck() {
                if (checkdata != '') {
                    if (checkdata.substr(0, 2) == 'MB') {
                        this.jumppage = './memberInformation.html';
                    } else if ((checkdata.substr(0, 2) == 'SP')) {
                        alert('尚未登入會員，請登入會員');
                        this.jumppage = './signUp_signIn.html';
                    }
                } else {
                    alert('尚未登入會員，請登入會員');
                    this.jumppage = './signUp_signIn.html';
                }
            },
            // 點擊判斷是否有登入賣家會員，如果有登入就跳入賣家中心，如果沒有登入，就進入登入註冊頁面
            sellogIncheck() {
                if (checkdata != '') {
                    if (checkdata.substr(0, 2) == 'MB') {
                        alert('尚未登入會員，請登入賣家會員');
                        this.seljumpage = './signUp_signIn.html';
                    } else if ((checkdata.substr(0, 2) == 'SP')) {
                        this.seljumpage = '../backend/sellerIndex.html';
                        this.selloginchangemem = true;
                    }
                } else {
                    alert('尚未登入會員，請登入會員');
                    this.seljumpage = './signUp_signIn.html';
                }
            },
            // 判斷是否有會員登入及是哪一種會員
            // 看看是一般會員或是賣家會員
            checklogin() {
                axios.post('../PHP/Frontend/sessionR.php').then(res => {
                    // console.log(res);
                    // 賣家或是買家ID
                    checkdata = res.data;
                    // console.log(checkdata.substr(0, 2));
                    // alert(checkdata);
                    if (checkdata != '') {
                        // 判斷是賣家會員使"賣家專區"變色
                        if ((checkdata.substr(0, 2) == 'SP')) {
                            // console.log(checkdata.substr(0, 2));
                            this.sellogin = true;
                            // console.log(this.sellogin);
                        } else {
                            this.sellogin = false;
                            // console.log(this.sellogin);
                        }
                        // 判斷是一般會員使"會員"變色
                        if ((checkdata.substr(0, 2) == 'MB')) {
                            this.login = true;
                        } else {
                            this.login = false;
                        }
                    }
                });
            },
            // 大頭貼切換假如沒大頭貼就用預設如果有就切換
            Bitpicupdate() {
                // 撈圖片
                axios.post('../PHP/Frontend/appearImg.php').then(res => {
                    data = res.data
                    // console.log(data);
                    if (data != "") {
                        // atob函数用来解碼一个已经被base-64编碼過的數據
                        // 如果在PHP有base64_decode就不用atob
                        // this.Bigpicchange = atob(data);
                        $('#navIcons03 img').attr('src', atob(data));
                        $('#navIcons05 img').attr('src', atob(data));
                    } else {
                        $('#navIcons03 img').attr('src', '../img/22/index/ch04_nav_member.png');
                        $('#navIcons05 img').attr('src', '../img/22/index/ch04_nav_member.png');
                    }
                });
            },
            // hover取到圖片
            onhover() {
                // 撈圖片
                axios.post('../PHP/Frontend/appearImg.php').then(res => {
                    data = res.data
                    // console.log(data);
                    if (data != "") {
                        // atob函数用来解碼一个已经被base-64编碼過的數據
                        // 如果在PHP有base64_decode就不用atob
                        // this.Bigpicchange = atob(data);
                        // console.log(this.Bigpicchange);
                        $('#navIcons03 img').attr('src', atob(data));
                        $('#navIcons05 img').attr('src', atob(data));
                    }
                });
            },
            // leave回到原狀
            onout() {
                // 撈圖片
                axios.post('../PHP/Frontend/appearImg.php').then(res => {
                    data = res.data
                    // console.log(data);
                    if (data != "") {
                        // atob函数用来解碼一个已经被base-64编碼過的數據
                        // 如果在PHP有base64_decode就不用atob
                        // this.Bigpicchange = atob(data);
                        // console.log(this.Bigpicchange);
                        $('#navIcons03 img').attr('src', atob(data));
                        $('#navIcons05 img').attr('src', atob(data));
                    }
                });
            },

        },
        mounted() {
            // 看看是一般會員或是賣家會員
            this.checklogin();
            // 大頭貼切換假如沒大頭貼就用預設如果有就切換
            this.Bitpicupdate();
            //換頁載入＝＝＝＝＝
            let cartAllItems = JSON.parse(localStorage.getItem('itemStorage'));
            if (cartAllItems) {
                this.itemQty = cartAllItems.length
            }
        },
        updated() {
            // 看看是一般會員或是賣家會員
            this.checklogin();
            // 大頭貼切換假如沒大頭貼就用預設如果有就切換
            this.Bitpicupdate();
            let cartAllItems = JSON.parse(localStorage.getItem('itemStorage'));
            if (cartAllItems) {
                this.itemQty = cartAllItems.length
            }
        },
    });
</script>

</html>