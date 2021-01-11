Vue.component('selfPickUp', {
    props: ['newStorage'],
    template: `
    <div class="mapIconW pickUpLocal">{{newStorage.address}}<img
     src="../img/16/Icon awesome-map-marker-alt.png" class="mapIcon"></div>
    `,
});
Vue.component('showMap', {
    props: ['index', 'value',],
    methods: {
        sync() {
            this.$emit('my-emit', this.count);
        }
    },
    template: `
    <div>
       
        <div class="MRT">

            <ul id="MRT_Select">
                <li><label for="">請選擇：</label></li>
                <li class="mrtSelect" id="mrt2"><input type="radio" :name="'mrt['+index+']'" value="MPS00002" v-model="value.pickUpSite">捷運南京復興站</li>
                <li class="mrtSelect" id="mrt3"><input type="radio" :name="'mrt['+index+']'" value="MPS00003" v-model="value.pickUpSite">捷運忠孝復興站</li>
                <li class="mrtSelect" id="mrt10"><input type="radio":name="'mrt['+index+']'" value="MPS00010" v-model="value.pickUpSite">捷運民權西路站</li>
                <li class="mrtSelect" id="mrt8"><input type="radio" :name="'mrt['+index+']'" value="MPS00008" v-model="value.pickUpSite">捷運中正紀念堂站</li>
                <li class="mrtSelect" id="mrt15"><input type="radio":name="'mrt['+index+']'" value="MPS00015" v-model="value.pickUpSite">捷運六張犁站</li>
                <li class="mrtSelect" id="mrt6"><input type="radio" :name="'mrt['+index+']'" value="MPS00006" v-model="value.pickUpSite">捷運台北車站</li>
                <li class="mrtSelect" id="mrt1"><input type="radio" :name="'mrt['+index+']'" value="MPS00001" v-model="value.pickUpSite">捷運市政府站</li>
                <li class="mrtSelect" id="mrt9"><input type="radio" :name="'mrt['+index+']'" value="MPS00009" v-model="value.pickUpSite">捷運大橋頭站</li>
                <li class="mrtSelect" id="mrt11"><input type="radio":name="'mrt['+index+']'" value="MPS00011" v-model="value.pickUpSite">捷運石牌站</li>
                <li class="mrtSelect" id="mrt12"><input type="radio":name="'mrt['+index+']'" value="MPS00012" v-model="value.pickUpSite">捷運內湖站</li>
                <li class="mrtSelect" id="mrt13"><input type="radio":name="'mrt['+index+']'" value="MPS00013" v-model="value.pickUpSite">捷運南港站</li>
                <li class="mrtSelect" id="mrt14"><input type="radio":name="'mrt['+index+']'" value="MPS00014" v-model="value.pickUpSite">捷運古亭站</li>
                <li class="mrtSelect" id="mrt4"><input type="radio" :name="'mrt['+index+']'" value="MPS00004" v-model="value.pickUpSite">捷運大安站</li>
                <li class="mrtSelect" id="mrt5"><input type="radio" :name="'mrt['+index+']'" value="MPS00005" v-model="value.pickUpSite">捷運中山站</li>
                <li class="mrtSelect" id="mrt7"><input type="radio" :name="'mrt['+index+']'" value="MPS00007" v-model="value.pickUpSite">捷運西門站</li>
            </ul>
        </div>
    </div>`,

});



const main = new Vue({
    el: '#all',
    data: {
        itemStorage: [],
        exp: '',
        sessionId: null,
        // ↓購物車幾項商品
        // storgeValue: null,
        // ↓會員點數
        membersPoints: null,
        // ↓依賣家姓名整理後新陣列，陣列裡有陣列goodList放商品
        newStorage: [],
        // ↓賣家名稱
        seller: [],
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
        inputValue: null,
        // 商品數量
    },
    mounted() {
        const self = this;
        let test = JSON.parse(localStorage.getItem("itemStorage"));
        this.itemStorage = test;

        // console.log(this.itemStorage);
        let seller = this.seller;
        let newStorage = this.newStorage;
        let itemStorage = this.itemStorage;
        itemStorage.map(item => {
            if (seller.indexOf(item.seller) === -1) {
                newStorage.push({
                    seller: item.seller,
                    address: item.address,
                    content: "",
                    goodList: [],
                    pickUpDateArray: '',
                    //折抵點數只塞到此會員的第一張訂單
                    ORDER_DISCOUNT: 0,
                    pickUpMethod: '',
                    pickUpSite: '',
                });
                seller.push(item.seller)
            }
        });
        for (i = 0; i < itemStorage.length; i++) {
            // alert();
            for (k = 0; k < newStorage.length; k++) {
                if (itemStorage[i].seller == newStorage[k].seller) {
                    // alert(itemStorage[i].seller);
                    newStorage[k].goodList.push({
                        name: itemStorage[i].name,
                        qty: itemStorage[i].qty,
                        seller: itemStorage[i].seller,
                        price: itemStorage[i].price,
                        id: itemStorage[i].id,
                        img: itemStorage[i].img,
                        exp: itemStorage[i].exp,
                        address: itemStorage[i].address,
                    })
                }
            }
        }
        $.ajax({
            url: '../PHP/Frontend/sessionR.php',
            type: 'POST',
            dataType: "text",
            success: function (res) {
                self.sessionId = res;
                // console.log(self.sessionId);
            },
            error: function (res) {
                console.log("回傳失敗！");
                // console.log(res.responseText);
            },
        });


        setTimeout(function () {
            let loggnedInId = self.sessionId;
            $.ajax({
                url: '../PHP/Frontend/cartShowPoints.php',
                type: 'POST',
                dataType: "JSON",
                data: { loggnedInId },
                success: function (res) {
                    // console.log(res);
                    self.membersPoints = parseInt(res[0].MEMBER_POINTS);
                },
                error: function (error) {
                    console.log("回傳失敗！");
                    console.log(error);
                },
            });

        }, 100)

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
    },

    methods: {

        add(i, index) {
            // alert("!!!");
            this.newStorage[index].goodList[i].qty++;
        },
        reduce(i, index) {
            if (this.newStorage[index].goodList[i].qty >= 1) {
                this.newStorage[index].goodList[i].qty--;
            }
        },
        del(index) {
            // alert(i);
            this.newStorage.splice(index, 1);

        },
        //結帳s
        confirmPay() {
            const self = this;
            console.log(this.newStorage);
            localStorage.setItem('newStorage', JSON.stringify(self.newStorage));
            localStorage.setItem('discountPoints', JSON.stringify(self.inputValue));
            localStorage.setItem('memberId', JSON.stringify(self.sessionId));
        },
        discountAllPoints() {

            const self = this;
            var value = document.querySelector("#inputDiscount").value;

            if (self.membersPoints >= this.total) {
                this.inputValue = this.total;
            } else {
                this.inputValue = self.membersPoints;
            }
        },
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
        // 出現放大鏡
        longsearch() {
            // 桌機板search bar js
            $("#navIcons01").focus(function () {
                $("#searchInputForWeb").addClass('block');
                $("#searchInputForWeb").focus();
            })
            $("#searchInputForWeb").blur(function () {
                $("#searchInputForWeb").removeClass('block');
            });
        },

    },
    computed: {

        //計算總金額
        total() {
            var total = 0;
            for (var index in this.newStorage) {
                for (var i in this.newStorage[index].goodList) {
                    total += this.newStorage[index].goodList[i].price * this.newStorage[index].goodList[i].qty;
                }
                // console.log(i);
            }
            return total;
        },
        //單筆訂單金額
        subtotal() {
            var subtotal = [];
            var itemPrice = 0;
            let abc = 0
            for (var index in this.newStorage) {
                for (var i in this.newStorage[index].goodList) {
                    itemPrice += this.newStorage[index].goodList[i].price * this.newStorage[index].goodList[i].qty
                }
                itemPrice -= abc
                subtotal.push(itemPrice);
                abc = itemPrice

            }
            return subtotal;
        },
        // 購物車幾樣商品
        itemQty() {
            if (this.newStorage == []) {
                return 0;
            } else {
                return this.newStorage.length
            }
        },
        pickUpDate() {
            //日期格式轉換
            Date.prototype.Format = function (fmt) {
                //author: meizz
                var o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds(), //秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                    S: this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(
                        RegExp.$1,
                        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
                    );
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(
                            RegExp.$1,
                            RegExp.$1.length == 1
                                ? o[k]
                                : ("00" + o[k]).substr(("" + o[k]).length)
                        );
                return fmt;
            };
            //   開始計算取貨區間
            let pickUpTimeOrder = [];
            for (var index in this.newStorage) {
                //確保最後一個是最快到期 
                this.newStorage[index].goodList.sort(function (a, b) {
                    return -((+new Date(a.exp)) - (+new Date(b.exp)));
                });
                for (var i in this.newStorage[index].goodList) {
                    dt1 = (+new Date(this.newStorage[index].goodList[i].exp));
                    //有效期限前三小時
                    dt2 = 3 * 60 * 60 * 1000;
                    a = new Date(parseInt(dt1 - dt2)).Format("yyyy-MM-dd hh:mm:ss")
                }
                pickUpTimeOrder.push(a);
            }
            // for(i<0;i<this.newStorage.length;i++){
            //     this.newStorage[i].pickUpDateArray.push(pickUpTimeOrder[i]);
            // }
            for (var i in this.newStorage) {
                // console.log(this.newStorage[i])
                this.newStorage[i].pickUpTimeOrder = pickUpTimeOrder[i];//塞日期進newStorage
            }
            return pickUpTimeOrder;
        },
    },
});