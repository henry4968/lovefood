$(document).ready(function(){
        $('#selectfm').hide();
        $('#Area1fm').hide();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();

    $('input.searchName').click(function(){
        $('#selectfm').show();
        $('#Area1fm').hide();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();

       
    }),$('input.searchName').eq(1).click(function(){
        $('#Area1fm').show();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();
        $('#selectfm').hide();

    }),$('input.searchName').eq(2).click(function(){
        $('#Area2fm').show();
        $('#Area3fm').hide();
        $('#RWDMap').hide();
        $('#selectfm').hide();
        $('#Area1fm').hide();


    }),$('input.searchName').eq(3).click(function(){
        $('#Area3fm').show();
        $('#RWDMap').hide();
        $('#selectfm').hide();
        $('#Area1fm').hide();
        $('#Area2fm').hide();

    })

});