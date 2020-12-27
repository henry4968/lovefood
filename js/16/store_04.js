new Vue({
    el: '#all04',
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
        //localStorage取值
        newStorage: [],
        goodList: [],
        // 商品數量
        itemQty: 0,
        sessionId: null,
        discountPoints: null
    },

    mounted() {
        // 看看是一般會員或是賣家會員
        this.checklogin();
        // 大頭貼切換假如沒大頭貼就用預設如果有就切換
        this.Bitpicupdate();
        //localStorage取值
        let test = JSON.parse(localStorage.getItem("newStorage"));
        this.newStorage = test;
        // console.log(this.newStorage);
        // console.log(this.newStorage[0].goodList[0].id);
        // console.log(this.newStorage[0].goodList[0].qty);

        for (let i = 0; i < this.newStorage.length; i++) {
            for (let j = 0; j < this.newStorage[i].goodList.length; j++) {
                // console.log(this.newStorage[i].goodList[j].id);
                // console.log(this.newStorage[i].goodList[j].qty);
            }
        }

        //換頁載入＝＝＝＝＝
        let cartAllItems = JSON.parse(localStorage.getItem('itemStorage'));
        if (cartAllItems) {
            this.itemQty = cartAllItems.length
        }

        this.discountPoints = JSON.parse(localStorage.getItem('discountPoints'));
        this.sessionId = JSON.parse(localStorage.getItem('memberId'));

        // console.log(this.sessionId);
        // console.log(this.discountPoints);
    },
    updated() {
        // 看看是一般會員或是賣家會員
        this.checklogin();
        // 大頭貼切換假如沒大頭貼就用預設如果有就切換
        this.Bitpicupdate();
    },

    methods: {

        // 正式結帳
        checkOut() {

            const self = this;

            let totalDiscount = this.discountPoints;
            let memberId = this.sessionId;
            let orders = [];
            let productQuantity = 0;
            let totalPack = self.newStorage;
            for (let i = 0; i < this.newStorage.length; i++) {
                let order = [];
                for (let j = 0; j < this.newStorage[i].goodList.length; j++) {
                    let product = [];
                    product.push(this.newStorage[i].goodList[j].id);
                    product.push(this.newStorage[i].goodList[j].qty);
                    order.push(product);
                    // productQuantity++;
                }
                orders.push(order);
            }

            console.log(orders);
            console.log(productQuantity);

            $.ajax({
                url: '../PHP/Frontend/cartCheckout.php',
                type: 'POST',
                dataType: "text",
                data: { memberId, totalDiscount, orders, totalPack },
                success: function (res) {
                    console.log(res);
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
            });
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
                console.log(i);
            }
            return total;
        },
        mrtStation() {
            siteNum = [];
            iNum = [];
            site = ['MPS00001', 'MPS00002', 'MPS00003', 'MPS00004', 'MPS00005', 'MPS00006', 'MPS00007', 'MPS00008', 'MPS00009', 'MPS00010', 'MPS00011', 'MPS00012', 'MPS00013', 'MPS00014', 'MPS00015'];
            newSite = ['捷運市政府站', '捷運南京復興站', '捷運忠孝復興站', '捷運大安站', '捷運中山站', '捷運台北車站', '捷運西門站', '捷運中正紀念堂站', '捷運大橋頭站', '捷運民權西路站', '捷運石牌站', '捷運內湖站', '捷運南港站', '捷運古亭站', '捷運六張犁站'];
            for (i in this.newStorage) {
                siteNum.push(this.newStorage[i].pickUpSite)
            }
            for (i in siteNum) {
                iNum.push(site.indexOf(siteNum[i]));
            }
            let abc = newSite.filter(function (item, index, array) {
                for (i in iNum) {
                    if (index == iNum[i]) {
                        return true
                    }
                }
            })
            return abc;
        }
    }

});

