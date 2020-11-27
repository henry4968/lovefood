function doFirst() {
  //先跟HTML畫面產生關聯，再建事件聆聽功能
  document.getElementById('theFile').onchange = fileChange;
}
function fileChange() {
  let file = document.getElementById('theFile').files[0];
  // console.log(file);
  file.value = "編輯圖片";
  let message = '';

  message += `檔案名稱: ${file.name}\n`;
  message += `檔案大小: ${file.size} byte(s)\n`;
  message += `檔案型態: ${file.type}\n`;
  message += `最後更新日期: ${file.lastModifiedDate}\n`;
  // message += `最後更新日期: ${file.lastModifiedDate.toTimeString()}\n`;

  // document.getElementById('fileInfo').value = message;

  //==============

  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    image = document.getElementById('image');
    image.src = this.result;
    image.style.maxWidth = '180px';
    image.style.maxHeight = '180px';
    bg = document.getElementsByClassName('imageBorder')[0];
    bg.style.backgroundImage = "url('')";
  });
}
window.addEventListener('load', doFirst);
new Vue({

});