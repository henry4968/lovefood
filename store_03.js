//數量加減按鈕
$(function () {
    // increment button
    $('#qtyplus1,#qtyplus2,#qtyplus3').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        /// 抓到當下value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it's not undefined
        if (!isNaN(currentVal)) {
            // 加1
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // 設定為0
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // decrement button 不得小於0
    $("#qtyminus1,#qtyminus2,#qtyminus3").click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // 抓到當下value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});
