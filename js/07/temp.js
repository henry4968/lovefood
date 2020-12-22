
////////////////vue///////////////
//////////////////////////////////
const main = new Vue({
    el: '#all',
    data: {
        tableData: null,
        count: 1,
        cartArray: [],
        // cartArray:null
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
            // console.log(arrCate);
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
            // console.log(arrspecies,);
            // this.queryData('../PHP/Frontend/EC_07/filter.php',{
            //     //將陣列放入data透過ajax傳值，php接值
            //     arrCate:arrCate,arrSeller:arrSeller,sellers:sellers,arrspecies:arrspecies               
            // })


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
                seller: item.SUPPLIER_NAME,
                price: item.PRODUCT_SELLING_PRICE,
                id: item.PRODUCT_ID,
                img: item.PRODUCT_IMG,
                exp: item.PRODUCT_EXP_DATE
            };
            this.cartArray.push(produ.qty);
            console.log(this.cartArray);
            if (produ.qty == 0) {
                this.cartArray.pop();
                // console.log(produ.qty);
            }
            // localStorage
            let itemStorage = [];
            itemStorage.push(produ);

            localStorage.setItem('itemStorage', JSON.stringify(itemStorage));

            // for (let i = 0; i < this.cartArray.length; i++) {
            //     localStorage.setItem(`itemStorage${i}`, JSON.stringify(itemStorage));
            // }

            // Storage() {
            // localStorage.JSON.parse(localStorage.getItem("cartArray"));

            //  }

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
                },
                error: function (res, error) {
                    console.log(res, error);
                },
                dataType: 'JSON',
            })
        }


    },
    mounted() {
        const self = this;
        // store = new Array();
        this.queryData('../PHP/Frontend/EC_07/storeCard.php')
        // $.ajax({
        //     url:'../PHP/Frontend/EC_07/storeCard.php',
        //     type: 'POST',
        //         success: function (res) {
        //             // let aaa = JSON.parse(res);
        //             // console.log(res);
        //             for (let index = 0; index < res.length; index++) {
        //                 res[index].quantity = 0
        //             }
        //             self.tableData = res;
        //         },
        //         error: function (res) {
        //             console.log('bbb');
        //         },
        //     dataType:'JSON',
        // })
    },


})