function doFirst() {
  //先跟HTML畫面產生關聯，再建事件聆聽功能
  document.getElementById('theFile').onchange = fileChange;
  theFile = document.getElementById('theFile');
  fakeBtn = document.getElementById('fakeBtn');
  fakeBtn.addEventListener('click', function () {
    theFile.click();
  });
}
function fileChange() {
  let file = document.getElementById('theFile').files[0];

  // let message = '';

  // message += `檔案名稱: ${file.name}\n`;
  // message += `檔案大小: ${file.size} byte(s)\n`;
  // message += `檔案型態: ${file.type}\n`;
  // message += `最後更新日期: ${file.lastModifiedDate}\n`;
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

// id="member"
Vue.component('member', {
  template: `
    <div class="rightBorder">
      <form class="leftInfoborder" method="POST" action="#">
          <div class="myAccountBorder">
            <h1 class="myAccount">
              我的帳號
            </h1>
          </div>
          <div class="identifyBorder">
            <div class="idTitle">身分別:</div>
            <span class="idContent">一般會員</span>
          </div>
          <div class="lineBorder">
            <hr>
          </div>
          <div class="memidBorder">
            <div class="memidTitile sameTile">會員編號:</div>
            <span class="memidContent">AA2020103000001</span>
          </div>
          <div class="emailBorder">
            <div class="emailTitle sameTile">信箱:</div>
            <span class="emailContent">jabiden@gmail.com</span>
          </div>
          <div class="passwordborder">
            <div class="passwordLef">
              <div class="passwordBorder">
                <div class="passwordTitle sameTile">密碼:</div>
                <input class="passwordContent" placeholder="請輸入原本密碼" type="password">
              </div>
              <div class="newpasswordBorder">
                <div class="newpasswordTitle sameTile">新密碼:</div>
                <input class="newpasswordContent" placeholder="請輸入新密碼" type="password">
              </div>
              <div class="cfmpasswordBorder">
                <div class="cfmpasswordTitle sameTile">確認密碼:</div>
                <input class="cfmpasswordContent" placeholder="請確認密碼" type="password">
              </div>
            </div>
            <div class="changeBtnright">
              <button class="changePassword" type="button">儲存密碼</button>
            </div>
          </div>
          <div class="nameBorder">
            <div class="nameTitle sameTile">姓名:</div>
            <span class="nameContent">甲必丹</span>
          </div>
          <div class="phoneBorder">
            <div class="phoneTitle sameTile">手機號碼:</div>
            <span class="phoneContent">0924-708053</span>
          </div>
          <div class="addBorder">
            <div class="addTitle sameTile">地址:</div>
            <span class="addContent">台北市南京東路三段219號5樓</span>
          </div>
          <div class="editsaveBtn">
            <button class="edit" type="button">編輯</button>
            <button class="save" type="button">儲存</button>
          </div>
        </form>
        <div class="rightPicborder">
          <div class="uploadBorder">
            <div class="imageBorder">
              <img id="image">
            </div>
            <!-- <div>
              <textarea id="fileInfo"></textarea>
            </div> -->
            <div class="fileBorder">
              <input type="file" id="theFile">
              <button id="fakeBtn">編輯圖片</button>
            </div>  
          </div>
        </div>
      </div>
      `,
});

Vue.component('order', {
  template: `
    <div class="rightBorder">
      1
      </div>
      `,
});

Vue.component('points', {
  template: `
    <div class="rightBorder">
      2
      </div>
      `,
});

Vue.component('memberApply', {
  template: `
    <div class="rightBorder">
      3
      </div>
      `,
});

window.addEventListener('load', doFirst);
new Vue({
  el: '#memWrap',
  data: {
    content: 'member',
    acth1: 0,
    act: 'a',
  },
  methods: {
    memberButton(change, num, div) {
      this.content = change
      this.acth1 = num
      this.act = div
    },
    // orderButton(change, num) {
    //   this.content = change;
    //   this.acth1 = num;
    // },
    // pointsButton(change, num) {
    //   this.content = change;
    //   this.acth1 = num;
    // },
    // memberApplyButton(change, num) {
    //   this.content = change;
    //   this.acth1 = num;
    // },
  },
});