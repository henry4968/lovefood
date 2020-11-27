
// $(function () {
//     $('#overFood').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });
// $(function () {
//     $('#joinShop').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });
// $(function () {
//     $('#helpChild').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });
// $(function () {
//     $('#goalmoney').counterUp({
//         delay: 10,
//         time: 2000
//     });
// });

window.addEventListener('load', doFirst);
function doFirst() {
    readMpreButton = document.getElementsByClassName('readMpreButton')[0];
    console.log(readMpreButton);
    readMpreButton.addEventListener('click', function () {
        main = document.getElementById('main');
        main.style.filter = 'blur(3px)';
        bb = document.getElementById('bb');
        bb.style.display = 'block';
    });
}
