function doFirst(){
    $('#selectfm').hide();
    $('#Area1fm').hide();
    $('#Area2fm').hide();
    $('#Area3fm').hide();
    $('#RWDMap').hide();
    $('#mapBox').hide();

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
    
  
    $('#btnMap').click(function(){
         changeSize();
    });
    $(window).resize(function(){
         changeSize();
    });

    function changeSize(){
        if($(window).outerWidth() >= 1308){
            $('#mapBox').show();
            $('#RWDMap').hide();
            $('#selectfm').hide();
            $('#Area1fm').hide();
            $('#Area2fm').hide();
            $('#Area3fm').hide();
        }else{   
            $('#RWDMap').show();
            $('#mapBox').hide();
            $('#selectfm').hide();
            $('#Area1fm').hide();
            $('#Area2fm').hide();
            $('#Area3fm').hide();                     
        }
    }


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
function showCoords(shop){

    switch(shop.id){
        case 'Zhongzheng':
            getMarker(Zhongzheng,'Zhongzheng');
            break;
        case 'Nangang':
            getMarker(Nangang,'Nangang');
            break;
        case 'Wensha':
            getMarker(Wensha,'Wensha');
            break;
        case 'Datong':
            getMarker(Datong,'Datong');
            break;
        case 'Xinyin':
            getMarker(Xinyin,'Xinyin');
            break;
        case 'Zhongshan':
            getMarker(Zhongshan,'Zhongshan');
            break;
        case 'Songshan':
            getMarker(Songshan,'Songshan');
            break;
        case 'Daan':
            getMarker(Daan,'Daan');
            break;
        case 'Beitou':
            getMarker(Beitou,'Beitou');
            break;
        case 'Neihuqu':
            getMarker(Neihuqu,'Neihuqu');
            break;
        case 'Shilin':
            getMarker(Shilin,'Shilin');
            break;
    }
}
let markers = [];
function getMarker(coords, title){
    let i = 0;
    for(let key in markers){    //markers[key]
        markers[key].setVisible(false);
    }
    //多個經緯度
    for(let key in coords){  //coords[key]
        let lati = coords[key].split(',')[0];
        let longi = coords[key].split(',')[1];

        let position = new google.maps.LatLng(lati,longi);

        let marker = new google.maps.Marker({
            position,
            map,
        });
        marker.setTitle(title);
        markers[i] = marker;
        i++;
    }

    

}

window.addEventListener('load',doFirst);


