
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
let all = new Vue({
    el:'#all',
    data:{
        count:0,
        cartArray: 0,
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
                console.log(res);
                self.tableData = res;
            },
            error:function(res,error){
                console.log(error);
            }
        })

    },
    methods: {
        sub(){
            if(count0){
               
            }
        },
        addCart(){
            this.cartArray.push(this.count);
            if(this.count==0){
                this.cartArray.pop();
            }
        }
    },
});

