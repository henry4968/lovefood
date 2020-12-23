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
            let itemStorage = [];
            itemStorage.push(produ);
            localStorage.setItem('itemStorage',JSON.stringify(itemStorage));
            // Storage() {
                // localStorage.JSON.parse(localStorage.getItem("cartArray"));
                
            //  }

        }


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


})