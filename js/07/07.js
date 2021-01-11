let all = new Vue({
    el: '#all',
    data: {
        count: 0,
        itemQty: 0,
        tableData: null,
        getStorage: null,
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
    methods: {
        addSub(type) { //數量加減
            if (type == 0) {
                if (this.count > 0)
                    return this.count--;
            } else {
                return this.count++;
            }
        },
        addToCart(item) {
            const self = this;
            var produ = {
                name: item.PRODUCT_NAME,
                qty: self.count,
                seller: item.SUPPLIER_NAME,
                price: item.PRODUCT_SELLING_PRICE,
                id: item.PRODUCT_ID,
                img: item.PRODUCT_IMG,
                exp: item.PRODUCT_EXP_DATE,
                address: item.SUPPLIER_ADDRESS,
            }

            // console.log(cartAllItems);
            if (self.count > 0) {
                if (self.getStorage == null) { //不存在localstorage
                    getStorage.push(produ);
                    self.itemQty++;
                    localStorage.setItem('itemStorage', JSON.stringify(self.itemStorage));
                } else {
                    var temp = self.getStorage.some(function (item) {
                        return item.name == produ.name;
                    })
                    if (temp) {
                        for (i = 0; i < self.getStorage.length; i++) {
                            if (self.getStorage[i].name == produ.name) {
                                self.getStorage[i].qty += produ.qty
                            }
                            // alert('相同')
                        }
                    } else {
                        self.getStorage.push(produ);
                        self.itemQty++;//購物車圖標
                        // alert('不同')
                    }
                    localStorage.setItem('itemStorage', JSON.stringify(self.getStorage));
                    console.log(self.itemStorage);
                    // alert('寫入')
                }
                alert('成功加入購物車');
            } else {
                alert('請選擇數量');
            }
            self.count = 0;
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
    mounted() {
        const self = this;
        // console.log(location.search)
        const urlParams = new URLSearchParams(location.search);
        const pdNum = urlParams.get('pdID')
        $.ajax({
            url: '../PHP/Frontend/EC_07/unitProduct.php',
            data: { pdNum },
            dataType: 'JSON',
            type: 'POST',
            success: function (res) {
                if (self.tableData !== null) {
                    // 清除 interval
                    for (let index = 0; index < self.tableData.length; index++) {
                        clearInterval(self.tableData[index].timer)
                        self.tableData[index].timer = null
                    }
                }
                // console.log(res)
                for (let index = 0; index < res.length; index++) {
                    res[index].hours = 0
                    res[index].days = 0
                    res[index].minutes = 0
                    res[index].seconds = 0
                    res[index].timer = null
                }
                // console.log(res);
                self.tableData = res;
            },
            error: function (res, error) {
                console.log(error);
            }
        })
            .then(function (res) {
                // console.log(res);
                // for (let index = 0; index < self.tableData.length; index++) {  
                //     res[index].quantity = 0
                //     res[index].hours = 0
                //     res[index].days = 0
                //     res[index].minutes = 0
                //     res[index].seconds = 0
                //     res[index].timer = null
                //     // res[index].PRODUCT_IMG = window.atob(res[index].PRODUCT_IMG) 
                //      // console.log(window.btoa(res[index].PRODUCT_IMG) )
                // }
                for (let index = 0; index < self.tableData.length; index++) {
                    const updateTime = () => {
                        var now = new Date();
                        var difference = new Date(self.tableData[index].PRODUCT_EXP_DATE) - now.getTime();
                        // console.log(difference);
                        if (difference <= 0) {

                        } else {
                            var seconds = Math.floor(difference / 1000);
                            var minutes = Math.floor(seconds / 60);
                            var hours = Math.floor(minutes / 60);
                            var days = Math.floor(hours / 24);

                            hours %= 24;
                            minutes %= 60;
                            seconds %= 60;

                            self.tableData[index].hours = hours
                            self.tableData[index].days = days
                            self.tableData[index].minutes = minutes
                            self.tableData[index].seconds = seconds
                            // console.log(self.tableData[index].seconds);
                        }
                    }
                    clearInterval(self.tableData[index].timer)

                    self.tableData[index].timer = setInterval(updateTime, 1000)
                }
                // self.tableData[0].seconds = 123;

            })
        let cartAllItems = JSON.parse(localStorage.getItem('itemStorage'));
        if (cartAllItems) {
            self.getStorage = cartAllItems;//購物車items陣列
        } else {
            self.getStorage = [];//購物車items陣列
        }
        self.itemQty = cartAllItems.length//購物車圖標

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
        // 購買清單合併數量
        let test = JSON.parse(localStorage.getItem("newStorage"));
        if (test) {
            this.itemQty = test.length
        }
    },
});

//////////////輪播////////////

//////////vue//////////

