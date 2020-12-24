let all = new Vue({
    el:'#all',
    data:{
        count:0,
        cartArray:[],
        tableData:null,
    },
    beforeMount(){
        const self = this;
        console.log(location.search)

        const urlParams = new URLSearchParams(location.search);
        const pdNum = urlParams.get('pdID')
        $.ajax({
            
            url:'../PHP/Frontend/EC_07/unitProduct.php',
            data:{pdNum},
            dataType:'JSON',
            type:'POST',
            success:function(res){
                if(self.tableData !== null){
                    // 清除 interval
                    for (let index = 0; index < self.tableData.length; index++) {
                        clearInterval(self.tableData[index].timer)
                        self.tableData[index].timer = null
                    }
                }
                console.log(res)
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
            error:function(res,error){
                console.log(error);
            }
        })
<<<<<<< HEAD
        .then(function(res){
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
                        const updateTime = () =>{
                            var now = new Date();
                            var difference = new Date(self.tableData[index].PRODUCT_EXP_DATE) - now.getTime();
                            // console.log(difference);
                            if(difference <= 0){

                            }else{
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
                                console.log(self.tableData[index].seconds);
                            }
                        }
                        clearInterval(self.tableData[index].timer)

                        self.tableData[index].timer = setInterval(updateTime,1000)
                    }
        // self.tableData[0].seconds = 123;

        })
        
        let cartAllItems = JSON.parse(localStorage.getItem('itemStorage'));
        self.getStorage = cartAllItems;//購物車items陣列
        self.itemQty = cartAllItems.length//購物車圖標
=======

>>>>>>> a15542d92cc6f20cb9e824c8f8a016f3db328e6f
    },
    methods: {
        sub(){
            
        },
        addCart(){
            // const self = this;
            // this.cartArray.push(this.count);
            // if(this.count==0){
            //     this.cartArray.pop();   
            // }
            localStorage.setItem('itemStorage',JSON.stringify(itemStorage));
            
        }
    },
    // updated(){
    //     const self = this;
    //     for (let index = 0; index < self.tableData.length; index++) {  
    //         self.tableData.quantity = 0
    //         self.tableData.hours = 0
    //         self.tableData.days = 0
    //         self.tableData.minutes = 0
    //         self.tableData.seconds = 0
    //         self.tableData.timer = null
    //         // res[index].PRODUCT_IMG = window.atob(res[index].PRODUCT_IMG) 
    //          // console.log(window.btoa(res[index].PRODUCT_IMG) )
    //     }

    //                 const updateTime = () =>{
    //                     var now = new Date();
    //                     var difference = new Date(self.tableData[index].PRODUCT_EXP_DATE) - now.getTime();
    //                     // console.log(difference);
    //                     if(difference <= 0){

    //                     }else{
    //                         var seconds = Math.floor(difference / 1000);
    //                         var minutes = Math.floor(seconds / 60);
    //                         var hours = Math.floor(minutes / 60);
    //                         var days = Math.floor(hours / 24);
                            
    //                         hours %= 24;
    //                         minutes %= 60;
    //                         seconds %= 60;
                            
    //                         self.tableData[index].hours = hours
    //                         self.tableData[index].days = days
    //                         self.tableData[index].minutes = minutes
    //                         self.tableData[index].seconds = seconds
    //                         console.log(self.tableData[index].seconds);
    //                     }
    //                 }
    //                 clearInterval(self.tableData[index].timer)

    //                 self.tableData[index].timer = setInterval(updateTime,1000)


    // }
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

