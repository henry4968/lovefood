//v-model="select"綁定從資料庫取出來的值,從nuw Vue向下傳遞 props給profile,用select接selected
Vue.component('profile', {
    props: ['change', 'select'],
    template: `<div>
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
    data() {
        return {
            tableDataOne: null,
            selected: null,
        };
    },
})


Vue.component('user', {
    template: `
    <div>
        <li>{{user}}</li>
    </div>
    `,
    data() {
        return {
            user: null
        }
    },
    created() {
        this.user = $.cookie('account');
    }
})







const app = new Vue({
    el: '.containerSeller',
    data() {
        return {
            tableDataOne: null,
            tableData: null,
            selected: null,
            pageView: null,//當前頁面的陣列
            pageNow: null,//現在在第幾頁
        }
    },
    methods: {
        query() {

            const self = this;
            let number = $("input[name='number']").val();
            let phone = $("input[name='phone']").val();
            let account = $("input[name='account']").val();
            let pick1 = $("input[name='datePick1']").val();
            let pick2 = $("input[name='datePick2']").val();

            $.ajax({
                url: "../PHP/backStage/member/seller/sellerQuery.php",
                type: "POST",
                data: { number, phone, account, pick1, pick2 },
                dataType: "JSON",
                success: function (res) {
                    console.log(res);
                    self.tableData = res;
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index < 5;
                    })
                },
                error: function (res) {
                    console.log(res);
                }
            })

            pageNow = 0;
            setTimeout(() => {
                $('#pagination').find('a').eq(1).css({
                    backgroundColor: '#887664',
                    color: '#FFF'
                })
            }, 1);
        },
        update() {
            let id = $("input[name='id']").val();

            const self = this;
            $.ajax({
                url: '../PHP/backStage/member/seller/sellerProfileR.php',
                type: 'GET',
                data: { id },
                success: function (res) {
                    console.log(res[0][0]);
                    self.tableDataOne = res;
                    self.selected = res[0][8];//assign選單預設值
                },
                dataType: "json",
            })
        },
        //==============換頁function=============
        pageChange(page) {
            //==============標記當前在第幾頁=============
            const self = this;
            if (self.pageNow == 0) {
                page = pageNow + 1;
            }
            //==============直接換頁=============
            if (page > 0) {
                self.pageView = self.tableData.filter(function (item, index, array) {
                    return index >= 5 * (page - 1) && index < 5 * (page);
                })
                pageNow = page - 1;
                //頁碼變色
                $('#pagination').find('a').css({
                    backgroundColor: 'transparent',
                    color: '#887664'
                })
                $('#pagination').find('a').eq(`${page}`).css({
                    backgroundColor: '#887664',
                    color: '#FFF'
                })
                //==============上一頁=============
            } else if (page == 0) {
                //    alert('這是page前'+page)
                //    alert('這是pageNow'+pageNow)
                if (pageNow == 0) { //已經在最前頁
                    alert('當前已是最前頁，無法繼續後退');
                } else {
                    //頁碼變色
                    $('#pagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#pagination').find('a').eq(`${pageNow}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index >= 5 * (pageNow - 1) && index < 5 * (pageNow);
                    })
                    pageNow = pageNow - 1;
                }
                //==============下一頁=============
            } else if (page == 'next') {
                alert('這是page後' + page)
                alert('這是pageNow' + pageNow)
                if (pageNow == Math.floor(self.tableData.length / 5)) {
                    alert('當前已是最末頁，無法繼續前進');
                } else {
                    //頁碼變色
                    $('#pagination').find('a').css({
                        backgroundColor: 'transparent',
                        color: '#887664'
                    })
                    $('#pagination').find('a').eq(`${pageNow + 2}`).css({
                        backgroundColor: '#887664',
                        color: '#FFF'
                    })
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index >= 5 * (pageNow + 1) && index < 5 * (pageNow + 2);
                    })
                    pageNow = pageNow + 1;
                }
            }
            console.log(self.pageView);
        },


    },
    mounted() {
        $.ajax({
            url: '../PHP/Frontend/sessionR.php',
            success: function (res) {
                $.cookie('account', `${res}`, 3);
                self.loginAccount = res;

                if (res.substr(0, 2) != 'SP') {
                    console.log(self.loginAccount);
                    location.href = "../frontend/signUp_signIn.html";
                    alert('尚未登入請重新登入');
                } else if (res == '') {
                    location.href = "../frontend/signUp_signIn.html";
                    alert('尚未登入請重新登入');
                }
            },
            dataType: "text",
            error: function (res) {
                console.log(res);
            }
        })
    },
})