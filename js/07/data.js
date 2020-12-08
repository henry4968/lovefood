// 捷運站經緯度
let ShiZhengfu = [25.041364153183242, 121.56624969571978];
let NanjingFuxing = [25.051762594211034, 121.54428177029567];
let ZhongxiaoFuxing = [25.04179654981004, 121.54382371262312];
let Daan = [25.033285214078155, 121.5436182549509];
let Zhongshan = [25.052908531208832, 121.52036953960668];

let markers = [];
function getMarker(coords, title){
    let i = 0;
    for(let key in markers){    //markers[key]
        markers[key].setVisible(false);
    }

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
