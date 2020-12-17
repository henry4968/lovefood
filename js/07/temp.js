///////////////js///////////////////
///////////////////////////////////
$('.carImg').click(function () {
    alert('dd');
});




////////////////vue///////////////
//////////////////////////////////
Vue.component('cart', {
    // props:[''],

    template: `<div style="width: 20px; height: 20px; border-radius: 50px; display: flex; justify-content: center; background-color: red; color: #ffffff; align-items: center; position: absolute; z-index: 1; right: -14%;
    top: -40%;">0</div>`,
});
Vue.component('add-sub', {
    props: ['className', 'product'],
    data() {
        return {

        }
    },
    mounted() {

    },
    template: `
    <div class="productBottom">
    <div class="pdtQuantity" id="pdtQuantit">
        <span class="productText">數量</span>
        <button class="left" @click="sub()">
            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"
                class="pdtsvg">
                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5">
                </polygon>
            </svg>
        </button>
        <input type="text"  :value="item.quantity" name="qunatity" class="pdtValue" >
        <button type="button" class="right"  @click="add(index)">
            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"
                class="pdtsvg">
                <polygon
                    points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                </polygon>
            </svg>
        </button>
    </div>
    <button class="carImg"><img src="../img/07/cart.png"alt=""></button>
</div>                
                               
                                `,

    methods: {
        add() {
            const self = this;
            self.value++;
        },
        sub() {
            const self = this;
            if (self.value >= 1) {

                self.value--;
            }
        },


    },


})


const main = new Vue({
    el: '#all',
    data: {
        tableData: null,
        count: 1,
        cartArray: [],
        // 一般會員 href
        jumppage: '',
        // 賣家會員 href
        seljumpage: '',
        // 賣家會員class
        selloginchangemem: '',
        // 會員大頭貼
        Bigpicchange: "",
        // 判斷一般會員是否登入
        login: '',
        // 判斷賣家會員是否登入
        sellogin: '',
    },
    methods: {

        query() {
            const self = this;
            let itemsCate = $('.item3').find('input');
            console.log(itemsCate);
            var arrCate = new Array();

            for (i = 0; i < itemsCate.length; i++) {

                cateChecked = $(`input[name="categories1[${i}]"]:checked`).val();
                console.log(cateChecked);


                if (cateChecked != null) {
                    arrCate.push(cateChecked);
                }
            }
            console.log(arrCate);
            $.ajax({
                url: '../PHP/Frontend/EC_07/filter.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                type: 'POST',
                data: {
                    arrCate
                },
                success: function (res) {
                    for (let index = 0; index < res.length; index++) {
                        res[index].quantity = 0
                    }
                    self.tableData = res;
                },
                error: function (res) {
                    console.log(res);
                },
                dataType: "JSON",
                // dataType: "html",
                // dataType: "text",
            })

        },
        add(index) {
            this.tableData[index].quantity++
        },
        sub(index) {
            if (this.tableData[index].quantity >= 1) {
                this.tableData[index].quantity--;
            }
        },
        addCart(item) {
            // localStorage
            // cartArray
            this.cartArray.push(item)
            console.log(item.quantity);
        },



        // header=====================================

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
    computed: {


    },

    mounted() {
        // 看看是一般會員或是賣家會員
        this.checklogin();
        // 大頭貼切換假如沒大頭貼就用預設如果有就切換
        this.Bitpicupdate();
    },
    updated() {
        // 看看是一般會員或是賣家會員
        this.checklogin();
        // 大頭貼切換假如沒大頭貼就用預設如果有就切換
        this.Bitpicupdate();
    },


})