const app = new Vue({
    el: '.containerProductEdit',
    data() {
        return {
            tableData:null,
            isShow:false, //綁定 v-show值
            filterData:null,
            detail:null,
        }
    },
    


    methods: {
        query(){
                const self = this;
                let pdNum1 = $("input[name='pdNum1']").val();
                let pdNum2 = $("input[name='pdNum2']").val();
                
                $.ajax({


                    url:'../PHP/backStage/product/productQuery.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                    data:{pdNum1,pdNum2},
                    type:'POST',
                    dataType:'JSON',
                    traditional: true,
                    success: function(res){
                         console.log(res);
                         self.tableData = res;

                         
                        
                        // for(i=0; i<self.tableData.length; i++){
                        //     self.$set(self.tableData[i],'isShow',false) //更新self.tableData讓他有isShow
                        // }
                        
                    },
                    error: function(res){
                        console.log(res);
                    },
                });
            
        },
        filter(e){
            let that = $(e.target).val();
            let self = this;

            let filterArr = new Array;
            
            for(i=0;i<self.tableData.length;i++){
                if(self.tableData[i].PRODUCT_ID == that){
                    filterArr.push(self.tableData[i])
                }
            }
            console.log(filterArr); //過濾後的陣列
            self.filterData = filterArr;
        }
    },
});