// header
Vue.component('memhead', {
    template: `
       <!-- 標頭開始 -->
    <header id="memheader">
        <div id="headerContentContainer">
            <a href="./index.html">
                <img id="logo" src="../img/03/memlogo.png">
            </a>

            <!-- 導覽列開始 -->
            <nav id="navigation">
                <a href="./store_1.html" class="navGeneralAnchors">樂腹商城</a>
                <a href="../backend/backendIndex.html" class="navGeneralAnchors">賣家專區</a>
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
                <a href="#0" id="navIcons03" class="navIcons">
                    <img src="../img/03/mempeoplecircle.png">
                </a>

            </nav>
            <!-- 導覽列結束 -->

        </div>
    </header>
    <!-- 標頭結束 -->
      `,
});
new Vue({
    el: '#memheader',
    data: {
        headId: 'memhead',
    },
});