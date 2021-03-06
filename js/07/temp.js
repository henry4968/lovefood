
////////////////vue///////////////
//////////////////////////////////
const main = new Vue({
    el: '#all',
    data: {
        tableData: null,
        itemStorage: [],
        itemQty: 0,
        pageView: null,//當前頁面的陣列
        pageNow: null,//現在在第幾頁
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
        query(button) {
            const self = this;
            let arrCate = new Array();
            let arrSeller = new Array();
            let onlySellersArr = new Array();
            var onlyCateArr = new Array();
            let onlyRWDMapArr = new Array();
            if (button == 1) {//全選篩選條件
                let itemsCate = $('.item3').find('input');//商品種類搜尋
                console.log(itemsCate);
                for (i = 0; i < itemsCate.length; i++) {
                    cateChecked = $(`input[name="categories1[${i}]"]:checked`).val();
                    console.log(cateChecked);
                    if (cateChecked != null) {
                        arrCate.push(cateChecked);//filter.php收值 arrCate
                    }
                }
                let itemName2Wth = $('.itemName2Wth').find('input');//商家搜尋
                for (i = 0; i < itemName2Wth.length; i++) {
                    sellerChecked = $(`input[name="seller1[${i}]"]:checked`).val();
                    if (sellerChecked != null) {
                        arrSeller.push(sellerChecked);//filter.php收值 arrSeller
                    }
                }
            } else if (button == 2) {

            } else if (button == 3) {
                let itemName5 = $('#itemName5').find('input');//單一商家搜尋
                // console.log(itemName5);
                for (i = 0; i < itemName5.length; i++) {
                    sChecked = $(`input[name="seller2[${i}]"]:checked`).val();
                    if (sChecked != null) {
                        onlySellersArr.push(sChecked);//filter.php收值onlySellersArr
                    }
                }
                console.log(onlySellersArr);
            } else if (button == 4) {
                ///////種類//////////
                let itemName6 = $('#itemName6').find('input');//單一種類搜尋
                // console.log(itemName6);
                for (i = 0; i < itemName6.length; i++) {
                    speciesChecked = $(`input[name="categories2[${i}]"]:checked`).val();
                    if (speciesChecked != null) {
                        onlyCateArr.push(speciesChecked);//filter.php收值onlyCateArr
                    }
                }
            } else if (button == 5) {
                ///////RWDMap///////
                let RWDMap = $('#itemName4').find('input');
                // console.log($('#itemName4').find('input'));
                for (i = 0; i < RWDMap.length; i++) {
                    RWDMapArr = $(`input[name="map[${i}]"]:checked`).val();
                    if (RWDMapArr != null) {
                        onlyRWDMapArr.push(RWDMapArr);//filter.php收值onlyCateArr
                    }
                }
            }

            // console.log(arrspecies,);
            this.queryData('../PHP/Frontend/EC_07/filter.php', {
                //將陣列放入data透過ajax傳值，php接值
                arrCate: arrCate, arrSeller: arrSeller, onlySellersArr: onlySellersArr, onlyCateArr: onlyCateArr, onlyRWDMapArr: onlyRWDMapArr
            })
        },
        add(item) {
            item.quantity++;
        },
        sub(item) {
            if (item.quantity >= 1) {
                item.quantity--;
            }
        },

        addCart(item) {
            const self = this;
            var produ = {
                name: item.PRODUCT_NAME,
                qty: item.quantity,
                seller: item.SUPPLIER_NAME,
                price: item.PRODUCT_SELLING_PRICE,
                id: item.PRODUCT_ID,
                img: item.PRODUCT_IMG,
                exp: item.PRODUCT_EXP_DATE,
                address: item.SUPPLIER_ADDRESS,
            }
            let cartAllItems = JSON.parse(localStorage.getItem('itemStorage'));
            console.log(cartAllItems);
            if (item.quantity > 0) {
                if (cartAllItems == null) { //不存在localstorage
                    self.itemStorage.push(produ);
                    self.itemQty++;
                    localStorage.setItem('itemStorage', JSON.stringify(self.itemStorage));
                } else {
                    var temp = cartAllItems.some(function (item) {
                        return item.name == produ.name;
                    })
                    if (temp) {
                        for (i = 0; i < cartAllItems.length; i++) {
                            if (cartAllItems[i].name == produ.name) {
                                cartAllItems[i].qty += item.quantity
                            }
                            // alert('相同')
                        }
                    } else {
                        cartAllItems.push(produ);
                        self.itemQty++;//購物車圖標
                        // alert('不同')
                    }
                    localStorage.setItem('itemStorage', JSON.stringify(cartAllItems));
                    console.log(self.itemStorage);
                    // alert('寫入')
                }
                alert('成功加入購物車');
            } else {
                alert('請選擇數量');
            }
            item.quantity = 0;
        },
        queryData(url, data = null) {
            const self = this

            if (self.tableData !== null) {
                // 清除 interval
                for (let index = 0; index < self.tableData.length; index++) {
                    clearInterval(self.tableData[index].timer)
                    self.tableData[index].timer = null
                }
            }

            $.ajax({
                url,
                data,
                type: 'POST',
                success: function (res) {
                    // console.log(res);
                    for (let index = 0; index < res.length; index++) {
                        res[index].quantity = 0
                        res[index].hours = 0
                        res[index].days = 0
                        res[index].minutes = 0
                        res[index].seconds = 0
                        res[index].timer = null
                        res[index].PRODUCT_IMG = window.atob(res[index].PRODUCT_IMG)

                        // console.log(window.btoa(res[index].PRODUCT_IMG) )
                    }
                    // self.$forceUpdate() 強制更新 vue data

                    self.tableData = res;
                    for (let index = 0; index < self.tableData.length; index++) {

                        const updateTime = () => {
                            var now = new Date();
                            var difference = new Date(self.tableData[index].PRODUCT_EXP_DATE) - now.getTime();

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
                            }
                        }
                        clearInterval(self.tableData[index].timer)

                        self.tableData[index].timer = setInterval(updateTime, 1000)
                    }
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index < 9;
                    })
                },
                error: function (res, error) {
                    console.log(res, error);
                },
                dataType: 'JSON',
            })
        },
        pageChange(page) {
            //==============標記當前在第幾頁=============
            const self = this;
            if (self.pageNow == 0) {
                page = pageNow + 1;
            }
            //==============直接換頁=============
            if (page > 0) {
                self.pageView = self.tableData.filter(function (item, index, array) {
                    return index >= 8 * (page - 1) && index < 8 * (page);
                })
                pageNow = page - 1;
                //頁碼變色
                $('#pagination').find('a').css({
                    backgroundColor: 'transparent',
                    color: '#887664'
                })
                $('#pagination').find('a').eq(`${page}`).css({
                    backgroundColor: '#887664',
                    color: '#FFF'
                })
                //==============上一頁=============
            } else if (page == 0) {
                //    alert('這是page前'+page)
                //    alert('這是pageNow'+pageNow)
                if (pageNow == 0) { //已經在最前頁
                    alert('當前已是最前頁，無法繼續後退');
                } else {
                    //頁碼變色
                    $('#pagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#pagination').find('a').eq(`${pageNow}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index >= 8 * (pageNow - 1) && index < 8 * (pageNow);
                    })
                    pageNow = pageNow - 1;
                }
                //==============下一頁=============
            } else if (page == 'next') {
                alert('這是page後' + page)
                alert('這是pageNow' + pageNow)
                if (pageNow == Math.floor(self.tableData.length / 8) - 1) {
                    alert('當前已是最末頁，無法繼續前進');
                } else {
                    //頁碼變色
                    $('#pagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#pagination').find('a').eq(`${pageNow + 2}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index >= 8 * (pageNow + 1) && index < 8 * (pageNow + 2);
                    })
                    pageNow = pageNow + 1;
                }
            }
            console.log(self.pageView);
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
                    $('#navIcons03 img').attr('src', '../img/22/index/ch05_nav_member.png');
                    $('#navIcons05 img').attr('src', '../img/22/index/ch05_nav_member.png');
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
        // store = new Array();
        self.queryData('../PHP/Frontend/EC_07/storeCard.php')
        //換頁載入＝＝＝＝＝
        setTimeout(() => {
            self.pageView = self.tableData.filter(function (item, index, array) {
                return index < 8;
            })
            pageNow = 0;
            $('#pagination').find('a').eq(1).css({
                backgroundColor: '#887664',
                color: '#FFF'
            })
        }, 1000);
        //換頁載入＝＝＝＝＝
        let cartAllItems = JSON.parse(localStorage.getItem('itemStorage'));
        if (cartAllItems) {
            self.itemQty = cartAllItems.length
        }
        // 購買清單合併數量
        let test = JSON.parse(localStorage.getItem("newStorage"));
        if (test) {
            this.itemQty = test.length
        }
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

})