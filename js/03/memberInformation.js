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
    <div class="rightBorderorder">
        <div class="centerBorder">
          <div class="searchBorder">
            <form id="searchBorder" method="POST" action="#">
              <div class="searchDateBoder">
                <label class="search">查詢區間 : </label>
                <input id="dateFrom" type="date">
                <span class="whitespace">
                  &#32;&#126;&#32;
                </span>
                <input id="dateTo" type="date">
              </div>
              <div class="searchBtnBorder">
                <button id="searchBtnBorder" type="submit">查詢</button>
              </div>
              <div class="searchNoteBorder">
                <p class="searchNoteBorder">可查詢90天內之訂單</p>
              </div>
            </form>
          </div>
          <div class="orderStatusBorder">
            <div class="statussame allBorder">
              <p class="statussame all">全部</p>
            </div>
            <div class="statussame outBorder">
              <p class="statussame out">待出貨</p>
            </div>
            <div class="statussame getBorder">
              <p class="statussame get">待取貨</p>
            </div>
            <div class="statussame finishBorder">
              <p class="statussame finish">完成</p>
            </div>
            <div class="statussame cancelBorder">
              <p class="statussame cancel">取消</p>
            </div>
          </div>

          <div class="orderdetailBorder">
            <div class="catalogBorder">
              <div class="detailsame orderdateBorder">
                <div class="cattitle">
                  <h3 class="cattitle orderdate">訂單日期</h3>
                </div>
                <p class="contentsame orderdate">2020/11/01</p>
              </div>
              <div class="detailsame orderidBorder">
                <div class="cattitle">
                  <h3 class="cattitle orderid">訂單編號</h3>
                </div>
                <p class="contentsame orderid">2020110100001</p>
              </div>
              <div class="detailsame countBorder">
                <div class="cattitle">
                  <h3 class="cattitle conut">數量</h3>
                </div>
                <p class="contentsame conut">3</p>
              </div>
              <div class="detailsame orderallBorder">
                <div class="cattitle">
                  <h3 class="cattitle orderall">訂單總額</h3>
                </div>
                <p class="contentsame orderall">92</p>
              </div>
              <div class="detailsame paywayBorder">
                <div class="cattitle">
                  <h3 class="cattitle payway">付款方式</h3>
                </div>
                <p class="contentsame payway">信用卡</p>
              </div>
              <div class="detailsame orderconditionBorder">
                <div class="cattitle">
                  <h3 class="cattitle ordercondition">訂單狀態</h3>
                </div>
                <p class="contentsame ordercondition">待出貨</p>
              </div>
            </div>


            <div class="itemdetailBorder">
              <div class="itemstatusBorder">
                <div class="itemstopBorder">
                  <div class="fourcircleBorder">
                    <div class="orderestablishBorder">
                      <img class="orderestablish" src="../img/03/getincircle.png">
                      <div class="stablishBorder">
                        <span class="stablish">成立訂單</span>
                        <span class="stablishtime">16:30</span>
                      </div>
                    </div>
                    <div class="orderestablishBorder">
                      <img class="orderestablish" src="../img/03/getincircle.png">
                      <div class="stablishBorder">
                        <span class="stablish">等待出貨</span>
                        <span class="stablishtime">00:00</span>
                      </div>
                    </div>
                    <div class="orderestablishBorder">
                      <img class="orderestablish" src="../img/03/getincircle.png">
                      <div class="stablishBorder">
                        <span class="stablish">等待取貨</span>
                        <span class="stablishtime">00:00</span>
                      </div>
                    </div>
                    <div class="orderestablishBorder">
                      <img class="orderestablish" src="../img/03/getincircle.png">
                      <div class="stablishBorder">
                        <span class="stablish">已經取貨</span>
                        <span class="stablishtime">00:00</span>
                      </div>
                    </div>
                  </div>
                  <span class="midlineBorder"></span>
                </div>


                <div class="itembotBorder">
                  <div class="samebotBorder itembotId">
                    <span class="itembotIdtitle">訂單編號: </span>
                    <span class="itembotId">2020110100001</span>
                  </div>
                  <div class="samebotBorder gettime">
                    <span class="gettimetitle">取貨截止時間: </span>
                    <span class="gettime">2020/11/01 20:59分</span>
                  </div>
                  <div class="samebotBorder itembotseller">
                    <span class="itembotsellertitle">賣家: </span>
                    <span class="itembotseller">全家天母店</span>
                  </div>
                  <div class="samebotBorder getlocation">
                    <span class="getlocationtitle">取貨地點: </span>
                    <span class="getlocation">捷運南京復興站8號出口</span>
                  </div>
                </div>
              </div>



              <div class="itemsBorder">
                <div class="itemcontBorder">
                  <div class="itemconttopBorder">
                    <div class="itempicBorder">
                      <img class="itempic" src="../img/03/eatingitem.png">
                    </div>
                    <div class="itemmiddleBorder">
                      <div class="middleitemsame itemmiddleborder">
                        <p class="itemmiddle">秋鮭雙手卷</p>
                      </div>
                      <div class="middleitemsame itemordermiddleBorder">
                        <span class="itemordermiddletitle">訂貨時間：</span>
                        <span class="itemordermiddle">2020/11/01 16：30</span>
                      </div>
                      <div class="middleitemsame itemcountmiddleBorder">
                        <span class="itemcountmiddle">數量：</span>
                        <span class="itemcountmiddle">1</span>
                      </div>
                    </div>
                    <div class="itempriceunitBorder">
                      <div class="unitpriceBorder">
                        <p class="unitpricetitle">單價</p>
                        <p class="unitpricecontent">$27</p>
                      </div>
                      <div class="countpriceBorder">
                        <p class="countpricetitle">小計</p>
                        <p class="countpricecontent">$27</p>
                      </div>
                    </div>
                  </div>
                  <hr>
                </div>
                <div class="itemcontBorder">
                  <div class="itemconttopBorder">
                    <div class="itempicBorder">
                      <img class="itempic" src="../img/03/eatingitem.png">
                    </div>
                    <div class="itemmiddleBorder">
                      <div class="middleitemsame itemmiddleborder">
                        <p class="itemmiddle">秋鮭雙手卷</p>
                      </div>
                      <div class="middleitemsame itemordermiddleBorder">
                        <span class="itemordermiddletitle">訂貨時間：</span>
                        <span class="itemordermiddle">2020/11/01 16：30</span>
                      </div>
                      <div class="middleitemsame itemcountmiddleBorder">
                        <span class="itemcountmiddle">數量：</span>
                        <span class="itemcountmiddle">1</span>
                      </div>
                    </div>
                    <div class="itempriceunitBorder">
                      <div class="unitpriceBorder">
                        <p class="unitpricetitle">單價</p>
                        <p class="unitpricecontent">$27</p>
                      </div>
                      <div class="countpriceBorder">
                        <p class="countpricetitle">小計</p>
                        <p class="countpricecontent">$27</p>
                      </div>
                    </div>
                  </div>
                  <hr>
                </div>
                <div class="itemcontBorder">
                  <div class="itemconttopBorder">
                    <div class="itempicBorder">
                      <img class="itempic" src="../img/03/eatingitem.png">
                    </div>
                    <div class="itemmiddleBorder">
                      <div class="middleitemsame itemmiddleborder">
                        <p class="itemmiddle">秋鮭雙手卷</p>
                      </div>
                      <div class="middleitemsame itemordermiddleBorder">
                        <span class="itemordermiddletitle">訂貨時間：</span>
                        <span class="itemordermiddle">2020/11/01 16：30</span>
                      </div>
                      <div class="middleitemsame itemcountmiddleBorder">
                        <span class="itemcountmiddle">數量：</span>
                        <span class="itemcountmiddle">1</span>
                      </div>
                    </div>
                    <div class="itempriceunitBorder">
                      <div class="unitpriceBorder">
                        <p class="unitpricetitle">單價</p>
                        <p class="unitpricecontent">$27</p>
                      </div>
                      <div class="countpriceBorder">
                        <p class="countpricetitle">小計</p>
                        <p class="countpricecontent">$27</p>
                      </div>
                    </div>
                  </div>
                  <hr>
                </div>
              </div>



              <div class="endingBorder">
                <div class="endingconditionBorder">
                  <div class="itemendingsame itempayway">
                    <span class="itempaywaytitle">付款方式：</span>
                    <span class="itempaywaycontent">信用卡結帳</sapn>
                  </div>
                  <div class="itemendingsame itemdiscount">
                    <span class="itempaywaytitle">點數折扺：</span>
                    <span class="itempaywaycontent">0點</sapn>
                  </div>
                  <div class="itemendingsame itemorderall">
                    <span class="itempaywaytitle">訂單總額：</span>
                    <span class="itempaywaycontent">92元</sapn>
                  </div>
                </div>
                <form class="cancelBtnBorder" id="cancelBtnBorder" method="POST" action="#">
                  <img src="../img/03/trashcancel.png">
                  <button type="button" id="cancelBtn">取消訂單</button>
                </form>
              </div>

            </div>
          </div>

        </div>
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