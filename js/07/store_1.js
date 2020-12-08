function doFirst(){
    navigator.geolocation.getCurrentPosition(succCallback);
}
function succCallback(e){
    let lati = 25.0406319;
    let longi = 121.5564303;

    let position = new google.maps.LatLng(lati,longi);
    let area = document.getElementById('googlemap');
    let options = {
        zoom: 14,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(area,options);

    let marker = new google.maps.Marker({
        position,
        map,        
    });
    // marker.setTitle('目前位置');
    // marker.setIcon('../img/07/cart.png');
}
let ShiZhengfu = [25.041364153183242, 121.56624969571978];
let NanjingFuxing = [25.051762594211034, 121.54428177029567];
let ZhongxiaoFuxing = [25.04179654981004, 121.54382371262312];
let Daan = [25.033285214078155, 121.5436182549509];
let Zhongshan = [25.052908531208832, 121.52036953960668];
function showCoords(shop){

    switch(shop.id){
        case 'ShiZhengfu':
            getMarker(ShiZhengfu,'ShiZhengfu');
            break;
        case 'NanjingFuxing':
            getMarker(NanjingFuxing,'NanjingFuxing');
            break;
        case 'Daan':
            getMarker(Daan,'Daan');
            break;
        case 'ZhongxiaoFuxing':
            getMarker(ZhongxiaoFuxing,'ZhongxiaoFuxing');
            break;
        case 'Zhongshan':
            getMarker(Zhongshan,'Zhongshan');
            break;
    }
}

window.addEventListener('load',doFirst);

$(document).ready(function(){
        $('#selectfm').hide();
        $('#Area1fm').hide();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();
        $('#mapBox').hide();
    
        if($(window).outerWidth() >= 1280){
            // alert('sdssd');
            $('#btnMap').click(function(){
                $('#mapBox').show();
                $('#RWDMap').hide();
                $('#selectfm').hide();
                $('#Area1fm').hide();
                $('#Area2fm').hide();
                $('#Area3fm').hide();
    
            })
    
        }else if($(window).outerWidth() <= 1280){
            // alert(',unumnum');
            $('#btnMap').click(function(){
                $('#RWDMap').show();
                $('#mapBox').hide();
                $('#selectfm').hide();
                $('#Area1fm').hide();
                $('#Area2fm').hide();
                $('#Area3fm').hide();

            })
            
        }



    $('input.searchName').click(function(){
        $('#selectfm').show();
        $('#Area1fm').hide();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();
        $('#mapBox').hide();


       
    }),$('input.searchName').eq(1).click(function(){
        $('#Area1fm').show();
        $('#Area2fm').hide();
        $('#Area3fm').hide();
        $('#RWDMap').hide();
        $('#selectfm').hide();
        $('#mapBox').hide();

    }),$('input.searchName').eq(2).click(function(){
        $('#Area2fm').show();
        $('#Area3fm').hide();
        $('#RWDMap').hide();
        $('#selectfm').hide();
        $('#Area1fm').hide();
        $('#mapBox').hide();


    }),$('input.searchName').eq(3).click(function(){
        $('#Area3fm').show();
        $('#RWDMap').hide();
        $('#selectfm').hide();
        $('#Area1fm').hide();
        $('#Area2fm').hide();
        $('#mapBox').hide();

    });
    

});

