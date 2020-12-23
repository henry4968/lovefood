let all = new Vue({
    el:'#all',
    data:{
        count:0,
        itemQty:0,
        tableData:null,
        getStorage:null,
    },
    mounted(){
        const self = this;
        // console.log(location.search)
        const urlParams = new URLSearchParams(location.search);
        const pdNum = urlParams.get('pdID')
        $.ajax({
            url:'../PHP/Frontend/EC_07/unitProduct.php',
            data:{pdNum},
            dataType:'JSON',
            type:'POST',
            success:function(res){
                console.log(res);
                self.tableData = res;
            },
            error:function(res,error){
                console.log(error);
            }
        })
        let cartAllItems = JSON.parse(localStorage.getItem('itemStorage'));
        self.getStorage = cartAllItems;//購物車items陣列
        self.itemQty = cartAllItems.length//購物車圖標
    },
    methods: {
       addSub(type){ //數量加減
           if(type == 0){
               if(this.count>0)
               return this.count--;
           }else{
               return this.count++;
           }
       },
       addToCart(item){
           const self = this;
        var produ = {
            name: item.PRODUCT_NAME,
            qty: self.count,
            seller:item.SUPPLIER_NAME,
            price:item.PRODUCT_SELLING_PRICE,
            id:item.PRODUCT_ID,
        };
        if(self.getStorage != null){
            alert();
            let arrAll = new Array; 
            for(i=0; i < self.getStorage.length; i++){
                arrAll.push(self.getStorage[i]);
            }
            arrAll.push(produ);
            // console.log(arrAll);
            self.itemQty++; //購物車圖標
            localStorage.setItem('itemStorage',JSON.stringify(arrAll));
        }
       },
    },
});

//////////////輪播////////////
$(document).ready(function () {
    $('#carouselist').lightSlider({
        item: 4,
        loop: true,
        auto: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 765,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 483,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }

        ]
    });
});

//////////vue//////////

