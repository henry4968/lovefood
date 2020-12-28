
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
    el: '.containerOrder',
    data: {

        tableData: null,
        isShow: false, //綁定 v-show值
        paymentMethod: null,
        detail: null,
        code: '',
        pageView: null,//當前頁面的陣列
        pageNow: null,//現在在第幾頁
    },



    methods: {
        query() {
            const self = this;
            let orderNum = $("input[name='orderNum']").val();
            let memberNum = $("input[name='memberNum']").val();
            let phone = $("input[name='phone']").val();
            let memberAccount = $("input[name='memberAccount']").val();
            let pick1 = $("input[name='datePick1']").val();
            let pick2 = $("input[name='datePick2']").val();
            let orderStatus = $("input[name='orderStatus']:checked").val();

            $.ajax({
                url: '../PHP/backStage/order/orderQuery.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                data: { orderNum, memberNum, phone, memberAccount, pick1, pick2, orderStatus },
                type: 'POST',
                dataType: 'JSON',
                traditional: true,
                success: function (res) {
                    console.log(res);
                    self.tableData = res;
                    for (i = 0; i < self.tableData.length; i++) {
                        // self.tableData[i].isShow = !isShow;
                        self.$set(self.tableData[i], 'isShow', false) //更新self.tableData讓他有isShow
                    }
                    self.pageView = self.tableData.filter(function (item, index, array) {
                        return index < 5;
                    })
                    pageNow = 0;
                    setTimeout(() => {
                        let aLabel = $('#pagination').find('a')
                        for (i = 1; i < aLabel.length - 1; i++) {
                            $(aLabel).eq(i).css({
                                backgroundColor: 'transparent',
                                color: '#887664'
                            })
                        }
                        $(aLabel).eq(1).css({
                            backgroundColor: '#887664',
                            color: '#FFF'
                        })

                    }, 1);

                },
                error: function (res) {
                    console.log(res);
                },
            });

        },
        ship(e) {//出貨生成QR code
            const self = this;
            let orderNum = $(e.target).val();
            console.log(orderNum)
            $.ajax({

                url: '../PHP/backStage/order/test.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                data: { orderNum },
                type: 'GET',
                dataType: 'text',
                traditional: true,
                success: function (res) {
                    //  console.log(res);
                    self.code = res;
                    console.log(self.code);
                },
                error: function (res) {
                    console.log(res);
                },
            });
        }, pageChange(page) {
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
                // alert('這是page後' + page)
                // alert('這是pageNow' + pageNow)
                if (pageNow == Math.ceil(self.tableData.length / 5)-1) {
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

                if (res != 'SP0001') {
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
});