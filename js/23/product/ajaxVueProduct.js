const app = new Vue({
    el: '.containerProduct',
    data : {
        tableData:null,
        fileName:"",
        categories:[],
    },
    

    mounted(){
        const self = this;
        $.ajax({
            url:'../PHP/backStage/product/categories.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
            type:'POST',
            dataType:'JSON',
            traditional: true,
            success: function(res){
                 self.categories = res;
            },
            error: function(res){
                console.log(res);
            },
        });
    },
    methods: {
        upload(){
                const self = this;
                let sellerNum = $("input[name='sellerNum']").val();
                let categories = $("option[name='categories']:selected").val();
                let productName = $("input[name='productName']").val();
                let boardTime1 = $("input[name='boardTime[0]']").val();
                let boardTime2 = $("input[name='boardTime[1]']").val();
                
                let expDate = $("input[name='exp[0]']").val();
                let expTime = $("input[name='exp[1]']").val();

                let quantity = $("input[name='quantity']").val();
                let price = $("input[name='price']").val();
                let description = $("textarea[name='description']").val();
                let pickupSite = $("input[name='pickupSite']:checked").val();
                let fileUpload = $("input[type='file']").val().replace(/C:\\fakepath\\/i, '');//去除路徑
                // console.log(boardTime1);
                // console.log(boardTime2);
                // console.log(exp1);
                // console.log(exp2);

                $.ajax({

                    url:'../PHP/backStage/product/newProduct.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                    data:{sellerNum,categories,productName,boardTime1,boardTime2,expDate,expTime,quantity,pickupSite,fileUpload,description,price},
                    type:'POST',
                    dataType:'text',
                    traditional: true,
                    success: function(res){
                         console.log(res);
                         self.tableData = res;
                    },
                    error: function(res){
                        console.log(res);
                    },
                });
            
        },
        showName(){ //顯示上傳檔案名稱
            const self = this;
            let fileUpload = $("input[type='file']").val().replace(/C:\\fakepath\\/i, '');//去除路徑
            self.fileName = fileUpload;
        }
    },
});

