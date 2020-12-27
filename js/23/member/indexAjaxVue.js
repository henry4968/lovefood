
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



        }
    }
});