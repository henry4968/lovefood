const app = new Vue({
        el:'.containerSellerIndex',
        data:{
                tableDataOne : null,
                tableDataSave : null,
                selected: null,
                fileName: null
        },
        mounted(){
            const self = this;
            let sellerNum = $.cookie('account');
            $.ajax({
                url:'../PHP/Frontend/sessionR.php',
                data:{sellerNum},
                success:function(res){
                    console.log(res);
                    $.cookie('account',`${res}`,3);
                },
                dataType:"text",
                error:function(res){
                    console.log(res);
                }
            })
            $.ajax({
                url:'../PHP/backStage/member/seller/sellerIndex.php',
                type:'POST',
                data:{sellerNum},
                success:function(res){
                    console.log(res);
                    self.tableDataOne = res;
                    self.fileName = res[0].SUPPLIER_DOCUMENTS;
                },
                dataType:"JSON",
                error:function(res){
                    console.log(res);
                }
            })
        },
        methods:{
            save(){
                const self = this;
                self.tableDataSave = self.tableDataOne;
                let tableDataSave = self.tableDataSave;
                let fileName = self.fileName;
                $.ajax({
                    url:'../PHP/backStage/member/seller/sellerIndexUpdate.php',
                    type:'POST',
                    data:{tableDataSave,fileName},
                    success:function(res){
                        console.log(res);
                        // self.tableDataOne = res;
                    },
                    dataType:"text",
                    error:function(res){
                        console.log(res);
                    }
                })
            },
            showName(){ //顯示上傳檔案名稱
            const self = this;
            let fileUpload = $("input[type='file']").val().replace(/C:\\fakepath\\/i, '');//去除路徑
            self.fileName = fileUpload;
            },
        },
 })