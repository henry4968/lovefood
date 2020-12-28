
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
    el: '.containerIndex',
    data() {
        return {
            tableData: null,
            pageView: null,//當前頁面的陣列
            pageNow: null,//現在在第幾頁
        }
    },

    mounted() {
        const self = this;
        let urlParams = new URLSearchParams(window.location.search);
        let number = urlParams.get('number');
        let phone = urlParams.get('phone');
        let account = urlParams.get('account');
        let memberType = urlParams.get('memberType');
        let pick1 = urlParams.get('datePick1');
        let pick2 = urlParams.get('datePick2');

        $.ajax({
            url: '../PHP/backStage/member/memberQuery.php',  //檔案請注意路徑,是相對於引用檔並非相對於此檔案
            type: 'POST',
            data: { number, phone, account, memberType, pick1, pick2 },
            success: function (res) {
                console.log(res);
                self.tableData = res;
                self.pageView = res.filter(function (item, index, array) {
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
            dataType: "JSON",
        })

        $.ajax({
            url: '../PHP/Frontend/sessionR.php',
            success: function (res) {
                console.log(res);
                $.cookie('account', `${res}`, 3);

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


    methods: {
        query() {
            const self = this;

            let number = $("input[name='number']").val();
            let phone = $("input[name='phone']").val();
            let account = $("input[name='account']").val();
            let memberType = $("input[name='memberType']:checked").val();
            let pick1 = $("input[name='datePick1']").val();
            let pick2 = $("input[name='datePick2']").val();

            $.ajax({
                url: '../PHP/backStage/member/memberQuery.php', //檔案請注意路徑,是相對於引用檔並非相對於此檔案
                data: { number, phone, account, memberType, pick1, pick2 },
                type: 'POST',
                dataType: 'JSON',
                traditional: true,
                success: function (res) {
                    // console.log(res);
                    self.tableData = res;
                },
                error: function (res) {
                    console.log(res);
                },
            });
        },
        logOut() {



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
                // alert('這是page後' + page)
                // alert('這是pageNow' + pageNow)
                if (pageNow == Math.ceil(self.tableData.length /5)-1) {
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
    }
});