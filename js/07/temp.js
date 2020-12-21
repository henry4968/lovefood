///////////////js///////////////////
///////////////////////////////////
$('.carImg').click(function () {
    alert('dd');
});




////////////////vue///////////////
//////////////////////////////////
const main = new Vue({
    el: '#all',
    data: {
        tableData: null,
        count: 1,
        cartArray: [],
<<<<<<< HEAD
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
=======
        // cartArray:null
>>>>>>> weiyi
    },
    methods: {

        query() {
            const self = this;
            //全選下的食品種類
            // categories filter
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
                    //全選下的商家seller filter
            let itemName2Wth = $('.itemName2Wth').find('input');
            var arrSeller = new Array();
            for (i = 0; i < itemName2Wth.length; i++) {

                sellerChecked = $(`input[name="seller1[${i}]"]:checked`).val();

                if (sellerChecked != null) {
                    arrSeller.push(sellerChecked);
                }

            }
            console.log(arrSeller); //商家選取陣列

            //////商家//////
            let itemName5 = $('#itemName5').find('input');
            console.log(itemName5);
            var sellers = new Array();
            for (i = 0; i < itemName5.length; i++) {

                sChecked = $(`input[name="seller2[${i}]"]:checked`).val();

                if (sChecked != null) {
                    sellers.push(sChecked);
                }

            }
            console.log(sellers);
            
            ///////種類//////////
            let itemName6 = $('itemName6').find('input');
            console.log(itemName6);
            var arrspecies = new Array();
            for (i = 0; i < itemName6.length; i++) {

                speciesChecked = $(`input[name="categories2[${i}]"]:checked`).val();

                if (speciesChecked != null) {
                    arrspecies.push(speciesChecked);
                }

            }
            console.log(arrspecies);

            $.ajax({
                url: '../PHP/Frontend/EC_07/filter.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                type: 'POST',
                data: {
                    //將陣列放入data透過ajax傳值，php接值
                    arrCate,arrSeller,sellers,arrspecies               
                },
                success: function (res) {
                    // alert();
                    console.log(res);
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
            this.tableData[index].quantity++;
        },
        sub(index) {
            if (this.tableData[index].quantity >= 1) {
                this.tableData[index].quantity--;
            }
        },
        
        addCart(item) {
            const self = this;
            var produ = {
                name: item.PRODUCT_NAME,
                qty: item.quantity,
                seller:item.SUPPLIER_NAME,
                price:item.PRODUCT_SELLING_PRICE,
                id:item.PRODUCT_ID
            };
            this.cartArray.push(produ.qty);
            console.log(this.cartArray);
            if(produ.qty == 0){
                this.cartArray.pop();
                // console.log(produ.qty);
            }
            // localStorage
<<<<<<< HEAD
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
=======
            let itemStorage = [];
            itemStorage.push(produ);
            localStorage.setItem('itemStorage',JSON.stringify(itemStorage));
            // Storage() {
                // localStorage.JSON.parse(localStorage.getItem("cartArray"));
                
            //  }

        }
>>>>>>> weiyi


    },
    mounted(){
        const self = this;
        // store = new Array();
        $.ajax({
            url:'../PHP/Frontend/EC_07/storeCard.php',
            type: 'POST',
                success: function (res) {
                    // let aaa = JSON.parse(res);
                    // console.log(res);
                    for (let index = 0; index < res.length; index++) {
                        res[index].quantity = 0
                    }
                    self.tableData = res;
                },
                error: function (res) {
                    console.log('bbb');
                },
            dataType:'JSON',
        })
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