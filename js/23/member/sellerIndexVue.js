//v-model="select"綁定從資料庫取出來的值,從nuw Vue向下傳遞 props給profile,用select接selected
Vue.component('profile',{ 
    props:['change','select'],
    template:`<div>
                <h2 class="btn-brown">賣家檔案</h2>
                <h3>會員編號 <input class="input-xl" type="text" name="numberUp" :value="change[0][0]" disabled></h3>
                <h3>會員帳號 <input class="input-xl" type="text" name="accountUp" :value="change[0][1]" disabled></h3>
                <h3>公司名稱 <input class="input-xl" type="password" name="nameUp" :value="change[0][4]" disabled></h3>
                <h3>公司電話 <input class="input-xl" type="text" name="phoneUp" :value="change[0][7]"></h3>
                <h3>登記地址 <input class="input-xl" type="text" name="addressUp" :value="change[0][6]" size="45"></h3>
                <span><button class="btn-s btn-brown">返回</button><button class="btn-s btn-brown">儲存</button></span>
                </div>`,  
    data(){
        return{
            tableDataOne : null,
            selected:null,
        };
    },
})


const app = new Vue({
        el:'.containerSeller',
        data(){
            return{
                tableDataOne : null,
                tableData : null,
                selected: null,
            }
        },
        mounted(){
            $.ajax({
                url:'../PHP/Frontend/sessionR.php',
                success:function(res){
                    console.log(res);
                    $.cookie('account',`${res}`,3);
                    // $.cookie('account',null,{expires:-1});

                },
                dataType:"text",
                error:function(res){
                    console.log(res);
                }
                })
        },
        // mounted(){
        //         let id = $("input[name='id']").val();

        //         const self = this;
        //         $.ajax({
        //         url:'../PHP/backStage/member/seller/sellerProfileR.php',
        //         type:'GET',
        //         data:{id},
        //         success:function(res){
        //             console.log(res[0][0]);
        //             self.tableDataOne = res;
        //             self.selected= res[0][8];//assign選單預設值
        //         },
        //         dataType:"json",
        //         })
        // },
        methods:{
            
            
            
        },
 })