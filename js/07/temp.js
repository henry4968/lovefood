///////////////js///////////////////
///////////////////////////////////
$('.carImg').click(function () {
    alert('dd');
});




////////////////vue///////////////
//////////////////////////////////
Vue.component('cart', {
    // props:[''],

    template: `<div style="width: 20px; height: 20px; border-radius: 50px; display: flex; justify-content: center; background-color: red; color: #ffffff; align-items: center; position: absolute; z-index: 1; right: -14%;
    top: -40%;">0</div>`,
});
Vue.component('add-sub', {
    props: ['className', 'product'],
    data() {
        return {

        }
    },
    mounted() {

    },
    template: `
    <div class="productBottom">
    <div class="pdtQuantity" id="pdtQuantit">
        <span class="productText">數量</span>
        <button class="left" @click="sub()">
            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"
                class="pdtsvg">
                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5">
                </polygon>
            </svg>
        </button>
        <input type="text"  :value="item.quantity" name="qunatity" class="pdtValue" >
        <button type="button" class="right"  @click="add(index)">
            <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"
                class="pdtsvg">
                <polygon
                    points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                </polygon>
            </svg>
        </button>
    </div>
    <button class="carImg"><img src="../img/07/cart.png"alt=""></button>
</div>                
                               
                                `,

    methods: {
        add() {
            const self = this;
            self.value++;
        },
        sub() {
            const self = this;
            if (self.value >= 1) {

                self.value--;
            }
        },


    },


})


const main = new Vue({
    el: '#all',
    data: {
        tableData: null,
        count: 1,
        cartArray: []
    },
    methods: {

        query() {
            const self = this;
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
            $.ajax({
                url: '../PHP/Frontend/EC_07/filter.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                type: 'POST',
                data: {
                    arrCate
                },
                success: function (res) {
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
            this.tableData[index].quantity++
        },
        sub(index) {
            if (this.tableData[index].quantity >= 1) {
                this.tableData[index].quantity--;
            }
        },
        addCart(item) {
            // localStorage
            // cartArray
            this.cartArray.push(item)
            console.log(item.quantity);
        }


    },
    computed: {


    },


})