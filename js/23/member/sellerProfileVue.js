//v-model="select"綁定從資料庫取出來的值,從nuw Vue向下傳遞 props給profile,用select接selected
        Vue.component('profile',{ 
            props:['change','select'],
            template:`<div>
                        <h2 class="btn-brown">賣家檔案</h2>
                        <h3>會員編號 <input class="input-xl" type="text" name="numberUp" :placeholder="change[0][0]" disabled></h3>
                        <h3>會員帳號 <input class="input-xl" type="text" name="accountUp" :placeholder="change[0][1]" disabled></h3>
                        <h3>公司名稱 <input class="input-xl" type="password" name="nameUp" :placeholder="change[0][4]" disabled></h3>
                        <h3>公司電話 <input class="input-xl" type="text" name="phoneUp" :placeholder="change[0][7]"></h3>
                        <h3>登記地址 <input class="input-xl" type="text" name="addressUp" :placeholder="change[0][6]" size="45"></h3>
                        <h3>停權原因 <select name="terminateUp" id="" v-model="select">
                                        <option value="0">00 - 無</option>
                                        <option value="1">01 - 賣家嚴重違法上架規範</option>
                                        <option value="2">02 - 賣家上架違禁商品</option>
                                        <option value="3">03 - 賣家違反供應充足原則</option>
                                        <option value="4">04 - 賣家侵害智慧財產權</option>
                                        <option value="5">05 - 賣家暫時歇業</option>
                                        <option value="6">06 - 賣家結束營業</option>
                                        <option value="7">07 - 其他</option>
                                    </select>
                        </h3>
                        <span><button class="btn-s btn-brown">返回</button><button class="btn-s btn-brown">儲存</button></span>
                      </div>`,  
            data(){
                return{
                    tableDataOne : null,
                    selected:null,
                };
            },
        })


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
            el:'.containerSeller',
            data(){
                return{
                    tableDataOne : null,
                    tableData : null,
                    selected: null,
                }
            },
            methods:{
                query(){

                    const self = this;
                    let number = $("input[name='number']").val();
                    let phone = $("input[name='phone']").val();
                    let account = $("input[name='account']").val();
                    let pick1 = $("input[name='datePick1']").val();
                    let pick2 = $("input[name='datePick2']").val();

                    $.ajax({
                        url:"../PHP/backStage/member/seller/sellerQuery.php",
                        type: "POST",
                        data:{number, phone, account, pick1, pick2},
                        dataType:"JSON",
                        success: function(res){
                            console.log(res);
                            self.tableData = res;
                        },
                        error: function(res){
                            console.log(res);
                        }
                    })
                },
                update(){
                    let id = $("input[name='id']").val();

                    const self = this;
                    $.ajax({
                    url:'../PHP/backStage/member/seller/sellerProfileR.php',
                    type:'GET',
                    data:{id},
                    success:function(res){
                        console.log(res[0][0]);
                        self.tableDataOne = res;
                        self.selected= res[0][8];//assign選單預設值
                    },
                    dataType:"json",
                    })
                }
                
                
            },
                    })