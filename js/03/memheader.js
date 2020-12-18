// header
Vue.component('memhead', {
    template: `
    <!-- 標頭開始 -->
    <header id="memheader">
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
                    <a :href="seljumpage" class="navGeneralAnchorsForMobile" :class="{selloginchangemem:sleprop}" @click="sellogIncheck">賣家專區</a>
                </li>
                <li>
                    <a href="./donation_description.html" class="navGeneralAnchorsForMobile">捐款說明</a>
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
                <img id="logo" src="../img/03/memlogo.png">
            </a>
            <!-- 桌機版導覽列開始 -->
            <nav id="navigationForPC">
                <a href="./store_1.html" class="navGeneralAnchors">樂腹商城</a>
                <a :href="seljumpage" class="navGeneralAnchors" :class="{selloginchangemem:sleprop}" @click="sellogIncheck">賣家專區</a>
                <a href="./donation_description.html" class="navGeneralAnchors">捐款說明</a>
                <a href="./donate_now.html" id="navSepcialAnchor">
                    <div>
                        立即捐款
                    </div>
                </a>
                <a href="#0" id="navIcons01" class="navIcons">
                    <img src="../img/03/memmagnifier.png">
                </a>
                <a href="#0" id="navIcons02" class="navIcons">
                    <img src="../img/03/memcart.png">
                </a>
                <a :href="jumppage" id="navIcons03" class="navIcons" @click="logIncheck" @mouseover="onhover" @mouseout="onout">
                    <img v-if="prop" :src='Bigpicchange' >
                    <img v-else="prop"  src='../img/03/mempeoplecircle.png'>
                </a>
            </nav>
            <!-- 桌機版導覽列結束 -->
            <!-- 行動版次級導覽列開始 -->
            <nav id="subNavigationForMobile">
                <a href="#0" id="navIcons04" class="navIconsForMobile">
                    <img src="../img/03/memcart.png" alt="">
                </a>
                <a :href="jumppage" id="navIcons05" class="navIconsForMobile" @click="logIncheck" @mouseover="onhover" @mouseout="onout">
                    <img v-if="prop" :src='Bigpicchange' >
                    <img v-else="prop"  src='../img/03/mempeoplecircle.png'>
                </a>
            </nav>
            <!-- 行動版次級導覽列結束 -->
        </div>
    </header>
    `,
    data() {
        return {
            // 一般會員 href
            jumppage: '',
            // 賣家會員 href
            seljumpage: '',
            // 賣家會員class
            selloginchangemem: '',
            // 會員大頭貼
            Bigpicchange: "../img/03/mempeoplecirclechange.png",
        }
    },
    props: ['prop', 'sleprop'],
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
                    this.seljumpage = './sellerSignUp_SignIn.html';
                } else if ((checkdata.substr(0, 2) == 'SP')) {
                    this.seljumpage = '../backend/backendIndex.html';
                    this.selloginchangemem = true;
                }
            } else {
                alert('尚未登入會員，請登入會員');
                this.seljumpage = './sellerSignUp_SignIn.html';
            }
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
                    this.Bigpicchange = atob(data);

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
                    this.Bigpicchange = atob(data);
                    // console.log(this.Bigpicchange);
                } else {
                    $('#navIcons03 img').attr('src', '../img/03/mempeoplecirclechange.png');
                    // console.log();
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
                    this.Bigpicchange = atob(data);
                    // console.log(this.Bigpicchange);
                } else {
                    $('#navIcons03 img').attr('src', '../img/03/mempeoplecircle.png');
                }
            });
        },
    },
    mounted() {
        // 大頭貼切換假如沒大頭貼就用預設如果有就切換
        this.Bitpicupdate();
        // hover取到圖片
        this.onhover();
        // leave回到原狀
        this.onout();
    },
    updated() {
        // 大頭貼切換假如沒大頭貼就用預設如果有就切換
        this.Bitpicupdate();
        // hover取到圖片
        this.onhover();
        // leave回到原狀
        this.onout();
    },

});
let header = new Vue({
    el: '#memheader',
    data: {
        headId: 'memhead',
        // 判斷一般會員是否登入
        login: '',
        // 判斷賣家會員是否登入
        sellogin: '',
    },
    methods: {
        // 判斷是否有會員登入及是哪一種會員
        // 看看是一般會員或是賣家會員
        checklogin() {
            axios.post('../PHP/Frontend/sessionR.php').then(res => {
                // console.log(res);
                // 賣家或是買家ID
                checkdata = res.data;
                // console.log(checkdata.substr(0, 2));
                // console.log(checkdata);
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

    },
    mounted() {
        // 判斷是否有會員登入及是哪一種會員
        // 看看是一般會員或是賣家會員
        this.checklogin();
    },
    updated() {
    },
});

// 全域溝通 當member上傳圖片執行headerPic函式，header就變相被執行
// memberInformation.js:477行
function headerPic() {
    // 撈圖片
    axios.post('../PHP/Frontend/appearImg.php').then(res => {
        data = res.data
        // console.log(data);
        if (data != "") {
            $('#navIcons03 img').attr('src', atob(data));
            $('#navIcons05 img').attr('src', atob(data));
        }
    });
}