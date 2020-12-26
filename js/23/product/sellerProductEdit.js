
Vue.component('user',{
    template:`
    <div>
        <li>{{user}}</li>
    </div>
    `,
    data(){
        return{
            user: null
        }
    },
    created(){
        this.user = $.cookie('account');
    }
})


const app = new Vue({
    el: '.containerProductEdit',
    data: {
            tableData:null,
            isShow:false, //綁定 v-show值
            filterData:null,
            detail:null,
            categories:null,
            //以下圖片for拖放區域
            imgSrc:['','','',''],
            hover:[false,false,false,false],
            cover:['封面圖片','圖片1','圖片2','圖片3'],
            photo:['photo1','photo2','photo3','photo4'],
            imgOrder:[0,1,2,3],
            exp:null,
            pageView:null,//當前頁面的陣列
            pageNow:null,//現在在第幾頁
    },
    
 

    methods: {
        query(){
                const self = this;
                let pdNum1 = $("input[name='pdNum1']").val();
                let pdNum2 = $("input[name='pdNum2']").val();
                
                $.ajax({
                    url:'../PHP/backStage/product/productQuery.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                    data:{pdNum1,pdNum2,idendity:1},
                    type:'POST',
                    dataType:'JSON',
                    traditional: true,
                    success: function(res){
                         console.log(res);
                         self.tableData = res.query;
                         self.categories = res.categories;
                         self.pageView = res.query.filter(function(item,index,array){
                             return index < 5;
                         })
                         pageNow = 0;
                         setTimeout(() => {
                            let aLabel = $('#pagination').find('a')
                            for(i=1;i<aLabel.length-1;i++){
                                $(aLabel).eq(i).css({
                                    backgroundColor:'transparent',
                                    color:'#887664'})
                            }
                            $(aLabel).eq(1).css({
                                backgroundColor:'#887664',
                                color:'#FFF'})
                             }, 1);
                           
   
                    },
                    error: function(res){
                        console.log(res);
                    },
                });
                // self.$set()
            
                
        },
            //==============換頁function=============
        pageChange(page){
            //==============標記當前在第幾頁=============
            const self = this;
            if(self.pageNow == 0){
                page = pageNow+1;
            }
            //==============直接換頁=============
            if(page > 0){
                self.pageView = self.tableData.filter(function(item,index,array){
                    return index >= 5 * (page-1) && index < 5*(page);
                })
                pageNow = page-1;
                //頁碼變色
                $('#pagination').find('a').css({ 
                    backgroundColor:'transparent',
                    color:'#887664'})
                $('#pagination').find('a').eq(`${page}`).css({
                    backgroundColor:'#887664',
                    color:'#FFF'})
            //==============上一頁=============
            }else if(page == 0){
            //    alert('這是page前'+page)
            //    alert('這是pageNow'+pageNow)
                if(pageNow == 0){ //已經在最前頁
                    alert('當前已是最前頁，無法繼續後退');
                }else{
                    //頁碼變色
                    $('#pagination').find('a').css({  
                        backgroundColor:'transparent',
                        color:'#887664'})
                    $('#pagination').find('a').eq(`${pageNow}`).css({
                        backgroundColor:'#887664',
                        color:'#FFF'})
                    self.pageView = self.tableData.filter(function(item,index,array){
                        return index >= 5 * (pageNow-1) && index < 5*(pageNow);
                    })
                    pageNow = pageNow -1;
                }
            //==============下一頁=============
            }else if(page == 'next' ){ 
                alert('這是page後'+page)
                alert('這是pageNow'+pageNow)
                if(pageNow == Math.floor(self.tableData.length/5)-1){
                    alert('當前已是最末頁，無法繼續前進');
                }else{
                    //頁碼變色
                    $('#pagination').find('a').css({  
                        backgroundColor:'transparent',
                        color:'#887664'})
                    $('#pagination').find('a').eq(`${pageNow+2}`).css({
                        backgroundColor:'#887664',
                        color:'#FFF'})
                    self.pageView = self.tableData.filter(function(item,index,array){
                        return index >= 5 * (pageNow+1) && index < 5*(pageNow +2);
                    })
                    pageNow = pageNow +1;
                }
            }
            console.log(self.pageView);
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
            // self.imgSrc = filterArr[0].PRODUCT_IMG;
            self.filterData = filterArr;
            self.exp = filterArr[0].PRODUCT_EXP_DATE.split(' ');//有效期限轉日期與時間陣列
            return self.isShow = true;
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
            return self.isShow = !self.isShow;
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
            let self = this;
            console.log(event.target.closest('.dropZone'));
            self.imgSrc.splice(key,1,'');
            console.log($('.dropZone')[1]);
            // alert(key)
            if(key==0){
                // alert();
                $('.dropZone').eq(1).css('border','1px dashed')
                $('.dropZone').eq(0).css('border','1px dashed')
            }else{
            $(event.target).closest('.dropZone').css('border','1px dashed')
            }
        },
        addMinus(change){
            if(change){
                this.filterData[0].PRODUCT_STOCK++;
            }else{
                if(this.filterData[0].PRODUCT_STOCK>1){
                    this.filterData[0].PRODUCT_STOCK--;
                }
            }
        }
        
    },
});