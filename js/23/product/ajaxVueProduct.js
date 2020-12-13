const app = new Vue({
    el: '.containerProduct',
    data : {
        tableData:null,
        fileName:"",
        categories:[],
        imgSrc:[],
        hover:false,
        dropZone:[0,1,2,3],
        cover:['封面圖片','圖片1','圖片2','圖片3'],
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
                let expDate = $("input[name='exp[0]']").val();
                let expTime = $("input[name='exp[1]']").val();
                let quantity = $("input[name='quantity']").val();
                let oriPrice = $("input[name='oriPrice']").val();
                let spePrice = $("input[name='spePrice']").val();
                let description = $("textarea[name='description']").val();
                let pickupSite = $("input[name='pickupSite']:checked").val();
                let fileUpload = $("input[type='file']").val().replace(/C:\\fakepath\\/i, '');//去除路徑

                $.ajax({

                    url:'../PHP/backStage/product/newProduct.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                    data:{sellerNum,categories,productName,expDate,expTime,quantity,pickupSite,fileUpload,description,oriPrice,spePrice},
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
        },
        imgDrop(e){
            let self = this;
            let readFile = new FileReader();

                let files = e.dataTransfer.files;
                readFile.readAsDataURL(files[0]);

                readFile.addEventListener('load',function(){
                    // alert(this.result)
                    self.imgSrc.push(this.result);
                })
                console.log($(e.target).closest('.dropZone'));
                $(e.target).closest('.dropZone').css('border','none')
            
        },
        remove(key,event){
            const self = this;
            console.log(event.target.closest('.dropZone'));
            self.imgSrc.splice(key,1);
            console.log($('.dropZone')[1]);
            alert(key)
            if(key==0){
                alert();
                $('.dropZone').eq(1).css('border','1px dashed')
                $('.dropZone').eq(0).css('border','1px dashed')
            }else{
            $(event.target).closest('.dropZone').css('border','1px dashed')

            }
        }
    },
});

