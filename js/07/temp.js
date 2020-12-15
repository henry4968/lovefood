////////////////vue///////////////
//////////////////////////////////
Vue.component('cart',{
    // props:['items'],

    template:`<div style="width: 20px; height: 20px; border-radius: 50px; display: flex; justify-content: center; background-color: red; color: #ffffff; align-items: center; position: absolute; z-index: 1; right: -14%;
    top: -40%;">{{0}}</div>`,
});
Vue.component('addSub',{
    props:['count'],
    template:`
                            <div class="pdtQuantity">
                                    <span class="productText">數量</span>
                                    <button class="left" @click="sub(index)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"
                                            class="pdtsvg">
                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5">
                                            </polygon>
                                        </svg>
                                    </button>
                                    <input type="text" :name="index" :value="count" class="pdtValue" >
                                    <button type="button" class="right"  @click="add(index)">
                                        <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"
                                            class="pdtsvg">
                                            <polygon
                                                points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5">
                                            </polygon>
                                        </svg>
                                    </button>
                                </div>`,
   
    methods:{
        add(index) {
            const self = this;
            self.count++;
        },
        sub(index){
            const self = this;
            if(self.count >= 1){

                self.count--;
            }
        },
        
    },
    data(){
        return{
            count:0,
        }
    }
})


new Vue({
    el:'#main',
    data:{
        tableData: null,
        count:0,
    },
    methods: {
        // input 加與減
        
        
        //input 加與減 結束
        carImg(){
            alert(item.count)
        },
        query(){
            const self = this;
            let itemsCate = $('.item3').find('input');
            console.log(itemsCate);
            var arrCate = new Array();

            for(i=0;i<itemsCate.length;i++){

                cateChecked = $(`input[name="categories1[${i}]"]:checked`).val();
                console.log(cateChecked);

                
                if(cateChecked != null){
                    arrCate.push(cateChecked);
                }
            }
            console.log(arrCate);
            $.ajax({
                url: '../PHP/Frontend/EC_07/filter.php',  //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                type: 'POST',
                data: { arrCate},
                success: function (res) {
                    console.log(res);
                    self.tableData = res;
                },
                error: function (res) {
                    console.log(res);
                },
                dataType: "JSON",
                // dataType: "html",
                // dataType: "text",
            })

        }
        
    },
    computed:{
        
    },
    
})
const prdt = [
    {
        img:'../img/07/p7.png',
        name:'蔥鹽雞飯糰',
        price:'39',
        quantity: 0
        // totalprice: price * quantity
    },
    {
        img:'../img/07/p8.png',
        name:'丹麥紅豆捲',
        price:'42',
        quantity: 0
       
    },
    {
        img:'../img/07/p6.png',
        name:'金鑽鳳梨鑼燒',
        price:'40',
        quantity: 0

    }
]
new Vue({
    el:'#header',
    data:{
        items: [],
        prdt: prdt,
        showCart: false,
        verified: false,
        quantity: 1,
    },
    computed: {
        total() {
          var total = 0;
          for(var i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
          }
          return total;
        }
      },
      methods: {
        addToCart(item) {
          item.quantity += 1;
          this.items.push(item);
        },
        removeFromCart(item) {
          item.quantity -= 1;
          this.items.splice(this.items.indexOf(item), 1);
        }
      },
      
    
    
});
