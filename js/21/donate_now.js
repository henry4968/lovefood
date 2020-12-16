// 捐款表單頁

document.addEventListener("DOMContentLoaded", function () {

    // 信用卡卡號 
    var cards = document.getElementsByClassName("form-text-input-four");
    for (let i = 0; i < cards.length; i++) {
        // keydown 刪除倒退前一格
        cards[i].addEventListener("keydown", function (e) {
            if ((e.which >= 48 && e.which <= 57) || e.which == 8) {

                if (e.target.value.length == 0 && e.which == 8) {
                    let previous_el = this.previousElementSibling.previousElementSibling
                        ;
                    if (previous_el != null) {
                        previous_el.focus();
                    }
                }

            } else {
                e.preventDefault();
            }
        });
        // keyup 自動tab到下一格
        cards[i].addEventListener("keyup", function (e) {
            let str = (e.target.value).replace(/\D/g, "");
            e.target.value = str;
            if (str.length == 4) {
                let next_el = this.nextElementSibling.nextElementSibling;
                if (next_el != null) {
                    next_el.focus();
                }
            }
        });
    }


    let finalcheck = document.querySelector('#finalcheck');
    finalcheck.addEventListener('change', function () {
        if (finalcheck.checked) {
            $('#sendButton').addClass('allow').css({
                'background-color': '#B2C6A6',
                'cursor': 'pointer'
            }).attr('disabled', false)

        } else {
            $('#sendButton').removeClass('allow').css({
                'background-color': '#DEDEDE',
                'cursor': 'not-allowed'
            }).attr('disabled', true)

        }

    });


});


// 點擊帶入數字且變色
$(function () {
    let money = $('.form-money-box').find('.money-box');
    console.log(money[0]);
    money.eq(0).on('click', function (e) {
        $('#amounttext').val('500');
        money.css('background-color', 'white').css('color', '#B2C6A6')
        $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
    })
    money.eq(1).on('click', function (e) {
        $('#amounttext').val('1000');
        money.css('background-color', 'white').css('color', '#B2C6A6')
        $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
    })
    money.eq(2).on('click', function (e) {
        $('#amounttext').val('5000');
        money.css('background-color', 'white').css('color', '#B2C6A6')
        $(e.target).css('background-color', '#B2C6A6').css('color', 'white')
    })
});


// 未選必填不能送出
$(function () {
    $('#sendButton').on('click', function (e) {

        e.preventDefault();
        let donationPlan = $("[name='donationPlan']:checked").val();
        let donationMethod = $("[name='donationMethod']:checked").val();
        let amount = $("[name='amount']").val();
        let name = $("[name='name']").val();
        let email = $("[name='email']").val();
        let cardType = $("[name='cardType']:checked").val();
        let cardName = $("[name='cardName']").val();
        let ardNumberLine = $("[name='cardNumberLine']").val();
        let cardDate = $("[name='cardDate']").val();
        // let cardYear = $("[name='cardYear']").val();
        let cardThree = $("[name='cardThree']").val();
        let check = $("[name='check']:checked").val();
        let finalcheck = document.querySelector('#finalcheck');

        // console.log($('.formlabel');
        // console.log($('.form-checkbox-label');
        // console.log(email);

        if (donationPlan == null) {
            $('.formlabel').eq(0).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(0).removeClass('formlabel-active')
        }
        if (donationMethod == null) {
            $('.formlabel').eq(1).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(1).removeClass('formlabel-active')
        }

        if (amount == '') {
            $('.formlabel').eq(2).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(2).removeClass('formlabel-active')
        }

        if (name == '') {
            $('.formlabel').eq(4).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(4).removeClass('formlabel-active')
        }

        if (email == '') {
            $('.formlabel').eq(9).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(9).removeClass('formlabel-active')
        }

        if (cardType == null) {
            $('.formlabel').eq(12).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(12).removeClass('formlabel-active')
        }

        if (cardName == '') {
            $('.formlabel').eq(13).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(13).removeClass('formlabel-active')
        }

        if (ardNumberLine == '') {
            $('.formlabel').eq(14).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(14).removeClass('formlabel-active')
        }

        if (cardDate == '') {
            $('.formlabel').eq(15).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(15).removeClass('formlabel-active')
        }

        // if (cardYear == '') {
        //     $('.formlabel').eq(15).addClass('formlabel-active').attr('data-content', '此欄為必填')
        // } else {
        //     $('.formlabel').eq(15).removeClass('formlabel-active')
        // }

        if (cardThree == '') {
            $('.formlabel').eq(16).addClass('formlabel-active').attr('data-content', '此欄為必填')
        } else {
            $('.formlabel').eq(16).removeClass('formlabel-active')
        }


        $('form').submit();

    });
});


