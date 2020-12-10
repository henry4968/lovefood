// header
Vue.component('memhead', {
    data() {
        return {
            jumppage: '',
        }
    },
    props: ['prop'],
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
                    <a href="../backend/backendOrder.html" class="navGeneralAnchorsForMobile">賣家專區</a>
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
                <a href="../backend/backendOrder.html" class="navGeneralAnchors">賣家專區</a>
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
                <a :href="jumppage" id="navIcons03" class="navIcons" @click="logIncheck">
                    <img v-if="prop" src='../img/03/mempeoplecirclechange.png'>
                    <img v-else="prop"  src='../img/03/mempeoplecircle.png'>
                </a>
            </nav>
            <!-- 桌機版導覽列結束 -->
            <!-- 行動版次級導覽列開始 -->
            <nav id="subNavigationForMobile">
                <a href="#0" id="navIcons04" class="navIconsForMobile">
                    <img src="../img/03/memcart.png" alt="">
                </a>
                <a href="./memberInformation.html" id="navIcons05" class="navIconsForMobile">
                    <img src="../img/03/mempeoplecircle.png" alt="">
                </a>
            </nav>
            <!-- 行動版次級導覽列結束 -->
        </div>
    </header>
    `,
    methods: {
        logIncheck() {
            // 點擊判斷是否有登入會員，如果有登入就跳入會員中心，如果沒有登入就進入登入註冊頁面
            if (checkdata != '') {
                this.memberimg = '../img/03/mempeoplecirclechange.png';
                this.jumppage = './memberInformation.html';
            } else {
                this.jumppage = './signUp_signIn.html';
            }
        },
    },

});
var member = new Vue({
    el: '#memheader',
    data: {
        headId: 'memhead',
        login: '',
    },
    methods: {
        checklogin() {
            axios.post('../PHP/Frontend/sessionR.php').then(res => {
                checkdata = res.data;
                // console.log(checkdata);
                if (checkdata != '') {
                    this.login = true;
                } else {
                    this.login = false;
                }
            });
        },
    },
    mounted() {
        this.checklogin();
    },
});