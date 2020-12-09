const app = new Vue({
    el: '.containerOrder',
    data() {
        return {
            tableData:null,
            isShow:false, //綁定 v-show值
            paymentMethod:null,
            detail:null,
        }
    },
    
    // beforeMount() {
    //     const self = this;
    //     let urlParams = new URLSearchParams(window.location.search);
    //     let number= urlParams.get('number');
    //     let phone= urlParams.get('phone');
    //     let account= urlParams.get('account');
    //     let memberType = urlParams.get('memberType');
    //     let pick1= urlParams.get('datePick1');
    //     let pick2= urlParams.get('datePick2');

    //         $.ajax({
    //             url:'../PHP/backStage/member/memberQuery.php',  //檔案請注意路徑,是相對於引用檔並非相對於此檔案
    //             type:'POST',
    //             data:{number,phone,account,memberType,pick1,pick2},
    //             success:function(res){
    //                 console.log(res);
    //                 self.tableData = res;
    //             },
    //             error:function(res){
    //                 console.log(res);
    //             },
    //             dataType:"JSON",
    //             })
    //             // console.log(123);

    // },

    methods: {
        query(){
                const self = this;
                let orderNum = $("input[name='orderNum']").val();
                let memberNum = $("input[name='memberNum']").val();
                let phone = $("input[name='phone']").val();
                let memberAccount = $("input[name='memberAccount']").val();
                let pick1 = $("input[name='datePick1']").val();
                let pick2 = $("input[name='datePick2']").val();
                let orderStatus = $("input[name='orderStatus']:checked").val();

                $.ajax({

                    url:'../PHP/backStage/order/orderQuery.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                    data:{orderNum,memberNum,phone,memberAccount,pick1,pick2,orderStatus},
                    type:'POST',
                    dataType:'JSON',
                    traditional: true,
                    success: function(res){
                        // console.log(res);
                        
                        // for(i=0; i<res.length; i++){
                        //     res[i].isShow = !isShow;
                            
                        // }
                        // self.tableData = res;
                        
                         console.log(res);
                         self.tableData = res;
                        
                        for(i=0; i<self.tableData.length; i++){
                            // self.tableData[i].isShow = !isShow;
                            self.$set(self.tableData[i],'isShow',false) //更新self.tableData讓他有isShow
                        }
                        
                    },
                    error: function(res){
                        console.log(res);
                    },
                });
            
        },
    },
    updated(){
        // for(i=0;i<this.tableData1.length;i++){
        //     if(this.tableData1[i][3]< this.tableData2[i]) {

        //     }
        // }
        // let i = this.tableData1.length;
        // this.tableData1[0][3]  //點數
        // this.tableData2[0][4]
        // console.log(this.tableData1.length)
        
    },
    
});
$('.orderDetail').on('click',function(e){
    alert(13);
    let abc = e.target.closest("tr");
    console.log(abc);
})
//   $(".orderDetail").click(function(){
//     alert(13);
//   });
// $(document).ready(function () { 
//     $('button').click(function(){
//         alert('12');
//         console.log('123');
//     })
//  })



