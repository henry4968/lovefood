Vue.component('selfPickUp', {
    template: `
    <div class="pickUpLocal">台北市 松山區 南京東路三段253號<img
     src="../img/16/Icon awesome-map-marker-alt.png" class="mapIcon"></div>
    `,
});
Vue.component('showMap', {
    template: `
    <div>
        <div class="mapIconW pickUpLocal">捷運南京復興站 8號出口
        <img src="../img/16/Icon awesome-map-marker-alt.png" class="mapIcon"></div>
    <img src="../img/16/MRT.jpg" class="imgMRT">

    <ul id="MRT_Select">
        <li><label for="">請選擇：</label></li>
        <li class="mrtSelect" id="mrt1"><input type="checkbox">捷運市政府站</li>
        <li class="mrtSelect" id="mrt2"><input type="checkbox">捷運南京復興站</li>
        <li class="mrtSelect" id="mrt3"><input type="checkbox">捷運忠教復興站</li>
        <li class="mrtSelect" id="mrt4"><input type="checkbox">捷運大安站</li>
        <li class="mrtSelect" id="mrt5"><input type="checkbox">捷運中山站</li>
        <li class="mrtSelect" id="mrt6"><input type="checkbox">捷運台北車站</li>
        <li class="mrtSelect" id="mrt7"><input type="checkbox">捷運西門站</li>
        <li class="mrtSelect" id="mrt8"><input type="checkbox">捷運中正紀念堂站</li>
        <li class="mrtSelect" id="mrt9"><input type="checkbox">捷運大橋頭站</li>
        <li class="mrtSelect" id="mrt10"><input type="checkbox">捷運民權西路站</li>
        <li class="mrtSelect" id="mrt11"><input type="checkbox">捷運石牌站</li>
        <li class="mrtSelect" id="mrt12"><input type="checkbox">捷運內湖站</li>
        <li class="mrtSelect" id="mrt13"><input type="checkbox">捷運南港站</li>
        <li class="mrtSelect" id="mrt14"><input type="checkbox">捷運古亭站</li>
        <li class="mrtSelect" id="mrt15"><input type="checkbox">捷運六張犁站</li>
    </ul>

    </div>
    `,
});


const main = new Vue({
    el: '#all',
    data: {
        itemStorage: [],
        content: 'selfPickUp',
        exp: '',
        sessionId: null,
        storgeValue: null,
        membersPoints: null,
        inputValue: 0
    },

    mounted() {

        const self = this;

        let test = JSON.parse(localStorage.getItem("itemStorage"));
        this.itemStorage = test;

        $.ajax({
            url: '../PHP/Frontend/sessionR.php',
            type: 'POST',
            dataType: "text",
            success: function (res) {
                self.sessionId = res;
                console.log(self.sessionId);
            },
            error: function (res) {
                console.log("回傳失敗！");
                console.log(res.responseText);
            },
        });


        setTimeout(function () {

            let loggnedInId = self.sessionId;

            $.ajax({
                url: '../PHP/Frontend/cartShowPoints.php',
                type: 'POST',
                dataType: "JSON",
                data: { loggnedInId },
                success: function (res) {
                    console.log(res);
                    self.membersPoints = res[0].MEMBER_POINTS;
                },
                error: function (res) {
                    console.log("回傳失敗！");
                    console.log(res.responseText);
                },
            });

        }, 100)

    },

    methods: {
        setQty(item) {
            this.qty = item.qty.value;

        },
        add(index) {
            // alert(index);
            this.itemStorage[index].qty++;
        },
        reduce(index) {
            if (this.itemStorage[index].qty >= 1) {
                this.itemStorage[index].qty--;
            }
        },
        del(index) {
            this.itemStorage.splice(index, 1);
        },

        points() {

        },
        // sum() {
        // var sum = 0
        // for (var i in this.itemStorage) {
        //     sum += parseInt(this.itemStorage[i].price) * parseFloat(this.price)
        // }
        // return total
        // },
        // pickUpExp() {
        // 先把時間、日期轉成分鐘數，比較大小，再轉日期、時間。
        // this.itemStorage.exp
        // },


        // discountAllPoints() {

        //     if (inputValue > self.membersPoints){

        //     }



        // }


    },

    computed: {

        //計算總金額
        total() {
            var total = 0;
            for (var i in this.itemStorage) {
                console.log(i);
                total += this.itemStorage[i].price * this.itemStorage[i].qty;
            }
            return total;
        },

        inputKeyUp() {

            if (inputValue > membersPoints) {
                alert("超過啦");
            }

        },
    },

});