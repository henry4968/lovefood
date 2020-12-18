const app = new Vue({
    el: '.containerProductEdit',
    data() {
        return {
            tableData:null,
            isShow:false, //綁定 v-show值
            filterData:null,
            detail:null,
            categories:null,
            //以下圖片for拖放區域
            imgSrc:null,
            hover:false,
            cover:['封面圖片','圖片1','圖片2','圖片3'],
            photo:['photo1','photo2','photo3','photo4'],
            exp:null,
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
                         self.tableData = res.query;
                         self.categories = res.categories;
                        //  for(i=0 ; i<res.query.length;i++){
                        //      self.imgSrc.push(res.query[i].PRODUCT_IMG);
                        //  }
                         console.log(self.imgSrc);
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
            // console.log(filterArr);
            console.log(filterArr); //過濾後的陣列
            self.filterData = filterArr;
            self.exp = filterArr[0].EXP_DATE.split(' ');//有效期限轉日期與時間陣列
            // console.log(exp);
        },
        offBoard(e){
            let off = $(e.target).val();
            $.ajax({

                url:'../PHP/backStage/product/productEdit.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                data:{validation:1,off},
                type:'POST',
                dataType:'text',
                traditional: true,
                success: function(res){
                        console.log(res);
                        alert();
                },
                error: function(res){
                    console.log(res);
                },
            });
        },
        save(e){
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
            let fileUpload = self.filterData[0].PRODUCT_IMG;
            let pdNum = $(e.target).val();
            $.ajax({

                url:'../PHP/backStage/product/productEdit.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                data:{sellerNum,categories,productName,expDate,expTime,quantity,pickupSite,fileUpload,description,oriPrice,spePrice,validation:0,pdNum},
                type:'POST',
                dataType:'text',
                traditional: true,
                success: function(res){
                        console.log(res);
                },
                error: function(res){
                    console.log(res);
                },
            });

        },
        imgInput(key,event){ //點擊input
            let self = this;
            let file = event.target.files[0];
            // alert(key);
            self.imgSrc.splice(key,1,URL.createObjectURL(file))
            $(event.target).closest('.dropZone').css('border','none')
        },
        imgDrop(key,event){ //拖曳圖片
            let self = this;
            let readFile = new FileReader();

            let files = event.dataTransfer.files;
            readFile.readAsDataURL(files[0]);

            readFile.addEventListener('load',function(){
                // alert(this.result)
                self.imgSrc.splice(key,1,this.result)
            })
            console.log($(event.target).closest('.dropZone'));
            $(event.target).closest('.dropZone').css('border','none')
            
        },
        remove(key,event){
            const self = this;
            console.log(event.target.closest('.dropZone'));
            self.imgSrc.splice(key,1);
            console.log($('.dropZone')[1]);
            // alert(key)
            if(key==0){
                // alert();
                $('.dropZone').eq(1).css('border','1px dashed')
                $('.dropZone').eq(0).css('border','1px dashed')
            }else{
            $(event.target).closest('.dropZone').css('border','1px dashed')

            }
        }
        
    },
});