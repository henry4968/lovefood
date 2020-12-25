Vue.component('selfPickUp', {
    template: `
    <div class="pickUpLocal">台北市 松山區 南京東路三段253號<img
     src="../img/16/Icon awesome-map-marker-alt.png" class="mapIcon"></div>
    `,
});
Vue.component('showMap', {
    template: `
    <div>
    <div class="mapIconW pickUpLocal" v-text="MRT">{{MRT}}
    <img src="../img/16/Icon awesome-map-marker-alt.png"
        class="mapIcon">
    </div>
    <div class="MRT">
    <div class="mapImg">
        <img src="../img/16/MRT.jpg" class="imgMRT">
        <img class="mapLocate" data-toggle="tooltip" title="捷運市政府站"
            id="TaipeiCityHall" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運南京復興站"
            id="Nanjing" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運忠孝復興站"
            id="Zhongxiao" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運大安站"
            id="Daan" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運中山站"
            id="Zhongshan" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運台北車站"
            id="TaipeiMainStaiton" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運西門站"
            id="Ximen" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運中正紀念堂站"
            id="MemorialHal" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運大橋頭站"
            id="Daqiaotou" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運民權西路站"
            id="MinquanWRoad" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運石牌站"
            id="Shipai" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運內湖站"
            id="Neihu" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運南港站"
            id="Nanggong" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運古亭站"
            id="Guting" src="../img/16/IconYellow.png">
        <img class="mapLocate" data-toggle="tooltip" title="捷運六張犁站"
            id="Liuzhangli" src="../img/16/IconYellow.png">
    </div>

    <ul id="MRT_Select">
        <li><label for="">請選擇：</label></li>
        <li class="mrtSelect" id="mrt1"><input type="checkbox">捷運市政府站</li>
        <li class="mrtSelect" id="mrt2"><input type="checkbox">捷運南京復興站</li>
        <li class="mrtSelect" id="mrt3"><input type="checkbox">捷運忠教復興站</li>
        <li class="mrtSelect" id="mrt4"><input type="checkbox">捷運大安站</li>
        <li class="mrtSelect" id="mrt5"><input type="checkbox">捷運中山站</li>
        <li class="mrtSelect" id="mrt6"><input type="checkbox">捷運台北車站</li>
        <li class="mrtSelect" id="mrt7"><input type="checkbox">捷運西門站</li>
        <li class="mrtSelect" id="mrt8"><input type="checkbox">捷運中正紀念堂站</li>
        <li class="mrtSelect" id="mrt9"><input type="checkbox">捷運大橋頭站</li>
        <li class="mrtSelect" id="mrt10"><input type="checkbox">捷運民權西路站</li>
        <li class="mrtSelect" id="mrt11"><input type="checkbox">捷運石牌站</li>
        <li class="mrtSelect" id="mrt12"><input type="checkbox">捷運內湖站</li>
        <li class="mrtSelect" id="mrt13"><input type="checkbox">捷運南港站</li>
        <li class="mrtSelect" id="mrt14"><input type="checkbox">捷運古亭站</li>
        <li class="mrtSelect" id="mrt15"><input type="checkbox">捷運六張犁站</li>
    </ul>

</div>
    `,
});


const main = new Vue({
    el: '#all',
    data: {
        itemStorage: [],
        content: 'selfPickUp',
        exp: '',
        sessionId: null,
        storgeValue: null,
        membersPoints: null,
        newStorage: [],
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

    },

    mounted() {

        const self = this;

        let test = JSON.parse(localStorage.getItem("itemStorage"));
        this.itemStorage = test;

        console.log(this.itemStorage);
        let seller = this.seller;
        let newStorage = this.newStorage;
        let itemStorage = this.itemStorage;
        itemStorage.map(item => {
            if (seller.indexOf(item.seller) === -1) {
                newStorage.push({
                    seller: item.seller,
                    goodList: [{
                        name: item.name,
                        qty: item.qty,
                        seller: item.seller,
                        price: item.price,
                        id: item.id,
                        img: item.img,
                    }]
                });
                seller.push(item.seller)
            }
        });
        newStorage.map(item => {
            itemStorage.map(items => {
                if (item.seller == items.seller) {
                    item.newStorage.push(items)
                }
            })
        })


        // localStorage.setItem('newStorage', JSON.stringify(self.newStorage));
        console.log(newStorage);

        $.ajax({
            url: '../PHP/Frontend/sessionR.php',
            type: 'POST',
            dataType: "text",
            success: function (res) {
                self.sessionId = res;
                console.log(self.sessionId);
            },
            error: function (res) {
                console.log("回傳失敗！");
                console.log(res.responseText);
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
                    console.log(res);
                    self.membersPoints = res[0].MEMBER_POINTS;
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
            });

        }, 100)

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

    methods: {

        add(i,index) {
            alert("!!!");
            this.newStorage[index].goodList[i].qty++;
        },
        reduce(i,index) {
            if (this.newStorage[index].goodList.qty >= 1) {
                this.newStorage[index].goodList.qty--;

            }
        },
        del(index) {
            this.newStorage.splice(index, 1);
        },


        // sum() {
        // var sum = 0
        // for (var i in this.itemStorage) {
        //     sum += parseInt(this.itemStorage[i].price) * parseFloat(this.price)
        // }
        // return total
        // },
        // pickUpExp() {
        // 先把時間、日期轉成分鐘數，比較大小，再轉日期、時間。
        // this.itemStorage.exp
        // },


        // discountAllPoints() {

        //     if (inputValue > self.membersPoints){

        //     }



        // }

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
    // watch: {
    //     inputValue: function () {
    //         if (this.inputValue > this.membersPoints) {
    //             alert('超過啦');
    //         }
    //     }
    // },

    computed: {

        //計算總金額
        total() {
            var total = 0;
            for (var i in this.itemStorage) {
                console.log(i);
                total += this.itemStorage[i].price * this.itemStorage[i].qty;
            }
            return total;
        },

        inputKeyUp() {



        },
    },
});