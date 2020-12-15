////////////////vue///////////////
//////////////////////////////////
Vue.component('cart',{
    // props:['items.count'],

    template:`<div style="width: 20px; height: 20px; border-radius: 50px; display: flex; justify-content: center; background-color: red; color: #ffffff; align-items: center; position: absolute; z-index: 1; right: -14%;
    top: -40%;">{{0}}</div>`,
});


new Vue({
    el:'#main',
    data:{
        
        
    //     items:[
    //         {
    //             src:"../img/07/p1.png",
    //             title:"蛋黃奶香麵包",
    //             species:'麵包甜品',
    //             seller:'全家天山店',
    //             newprice:'20',
    //             oldprice:'25',
    //             count:0
    //         },
    //         {
    //             src:"../img/07/p2.png",
    //             title:"日式紅豆銅鑼燒",
    //             species:'麵包甜品',
    //             seller:'全家天山店',
    //             newprice:'25',
    //             oldprice:'32',
    //             count:0
    //         },
    //         {
    //             src:"../img/07/p3.png",
    //             title:"鹽烤松阪豬",
    //             species:'御飯糰',
    //             seller:'全家天山店',
    //             newprice:'33',
    //             oldprice:'42',
    //             count:0
    //         },
    //         {
    //             src:"../img/07/p4.png",
    //             title:"秋鮭鮪魚雙手卷",
    //             species:'麵包甜品',
    //             seller:'全家天山店',
    //             newprice:'39',
    //             oldprice:'40',
    //             count:0
    //         },
    //         {
    //             src:"../img/07/p5.png",
    //             title:"香草烤雞沙拉",
    //             species:'水果沙拉',
    //             seller:'全家天山店',
    //             newprice:'69',
    //             oldprice:'55',
    //             count:0
    //         },
    //         {
    //             src:"../img/07/p6.png",
    //             title:"金鑽鳳梨鑼燒",
    //             species:'水果沙拉',
    //             seller:'全家天山店',
    //             newprice:'40',
    //             oldprice:'50',
    //             count:0
    //         },
    //         {
    //             src:"../img/07/p7.png",
    //             title:"蔥鹽雞飯糰",
    //             species:'御飯糰',
    //             seller:'全家天山店',
    //             newprice:'39',
    //             oldprice:'31',
    //             count:0
    //         },
    //         {
    //             src:"../img/07/p8.png",
    //             title:"丹麥紅豆捲",
    //             species:'麵包甜品',
    //             seller:'全家天山店',
    //             newprice:'42',
    //             oldprice:'33',
    //             count:0
    //         }

    // ],
    //             title:"蔥鹽雞飯糰",
    //             species:'御飯糰',
    //             seller:'全家天山店',
    //             newprice:'39',
    //             oldprice:'31',
    //             count:0
    //     prdts:[
    //     {
    //         img:'../img/07/p7.png',
    //         name:'蔥鹽雞飯糰',
    //         price:'39',
    //         quantity: 6
    //         // totalprice: price * quantity
    //     },
    //     {
    //         img:'../img/07/p8.png',
    //         name:'丹麥紅豆捲',
    //         price:'42',
    //         quantity: 0
           
    //     },
    //     {
    //         img:'../img/07/p6.png',
    //         name:'金鑽鳳梨鑼燒',
    //         price:'40',
    //         quantity: 0
    
    //     }
    // ]
    },
    methods: {
        //input 加與減
        add(index) {
            
            this.items[index].count++;
            
        },
        sub(index){
            if(this.items[index].count >= 1){

                this.items[index].count--;
            }
        },
        //input 加與減 結束
        carImg(){
            alert(item.count)
        },
        
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
