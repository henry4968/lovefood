$(document).ready(function(){
        $('#selectfm').hide();
        $('#Area1fm').hide();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();

    $('#selectAll').click(function(){
        $('#selectfm').show();
        $('#Area1fm').hide();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();

       
    }),$('li.areaName').eq(1).click(function(){
        $('#Area1fm').show();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();
        $('#selectfm').hide();

    }),$('li.areaName').eq(2).click(function(){
        $('#Area2fm').show();
        $('#Area3fm').hide();
        $('#RWDMap').hide();
        $('#selectfm').hide();
        $('#Area1fm').hide();


    }),$('li.areaName').eq(3).click(function(){
        $('#Area3fm').show();
        $('#RWDMap').hide();
        $('#selectfm').hide();
        $('#Area1fm').hide();
        $('#Area2fm').hide();

    })

});