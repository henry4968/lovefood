Vue.component('member', {
  template: `
      <div class="rightBorder" :class="{foursameBorderapp:foursameBorderapp == 1,backCategory:backCategory}">
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
          <div class="bigpasswordborder">
            <div class="passwordLef">
              <div class="passwordBorder">
                <div class="passwordTitle sameTile">密碼:</div>
                <span class="passwordContent" :class="{spannone: spn}">{{confirmpassword}}</span>
                <input class="passwordContent" placeholder="請輸入原本密碼" type="password" :class="{inputappor: inpor}">
              </div>
              <div class="newpasswordBorder" :class="{divappre: divre}">
                <div class="newpasswordTitle sameTile">新密碼:</div>
                <input class="newpasswordContent" placeholder="請輸入新密碼" type="password">
              </div>
              <div class="cfmpasswordBorder" :class="{divappse: divse}">
                <div class="cfmpasswordTitle sameTile">確認密碼:</div>
                <input class="cfmpasswordContent" placeholder="請確認密碼" type="password" v-model="confirmpassword">
              </div>
            </div>
            <div class="changeBtnright">
              <button class="savePassword" type="button" @click="changePassword" :class="{saveapp: sa}">儲存密碼</button>
              <button class="changePassword" type="button" @click="changePassword" :class="{passnone: pn}">變更密碼</button>
            </div>
          </div>
          <div class="nameBorder">
            <div class="nameTitle sameTile">姓名:</div>
            <input class="nameContent" placeholder="請輸入姓名" type="text" :class="{inputnameapp: inputnameapp}" v-model="modname">
            <span class="nameContent" :class="{spannamenone: spannamenone}">{{modname}}</span>
          </div>
          <div class="phoneBorder">
            <div class="phoneTitle sameTile">手機號碼:</div>
            <input class="phonenameContent" placeholder="請輸入手機" type="text" :class="{inputphoneapp: inputphoneapp}" v-model="modphone">
            <span class="phoneContent" :class="{spanphonenone: spanphonenone}">{{modphone}}</span>
          </div>
          <div class="addBorder">
            <div class="addTitle sameTile">地址:</div>
            <input class="addnameContent" placeholder="請輸入地址" type="text" :class="{inputaddnameapp: inputaddnameapp}" v-model="modadd">
            <span class="addContent" :class="{spanaddnone: spanaddnone}">{{modadd}}</span>
          </div>
          <div class="editsaveBtn">
            <button class="edit" type="button" @click="editfunc">編輯</button>
            <button class="save" type="button" @click="savefunc">儲存</button>
          </div>
        </form>
        <div class="rightPicborder">
          <div class="backCategoryBorder" @click="sync">
            <img class="backCategoryBorder" src="../../img/03/backcategory.png">
          </div>
          <div class="uploadBorder">
            <div class="imageBorder">
              <img id="image">
            </div>
            <!-- <div>
              <textarea id="fileInfo"></textarea>
            </div> -->
            <div class="fileBorder">
              <input type="file" id="theFile">
              <button type="button" id="fakeBtn" @click="uploadpicBtn">編輯圖片</button>
            </div>  
          </div>
        </div>
      </div>
      `,
  data() {
    return {
      sa: '',
      pn: '',
      spn: '',
      inpor: '',
      divre: '',
      divse: '',
      spannamenone: '',
      spanphonenone: '',
      spanaddnone: '',
      inputnameapp: '',
      inputphoneapp: '',
      inputaddnameapp: '',
      modname: '',
      modphone: '',
      modadd: '',
      confirmpassword: '',
      foursameBorderapp: '',
      backCategory: '',
    }
  },
  methods: {
    changePassword() {
      if (this.sa == '' && this.pn == '') {
        this.sa = true
        this.pn = true
        this.spn = true
        this.inpor = true
        this.divre = true
        this.divse = true
      } else {
        this.sa = false
        this.pn = false
        this.spn = false
        this.inpor = false
        this.divre = false
        this.divse = false
      }

    },
    editfunc() {
      if (this.spannamenone == '') {
        this.spannamenone = true
        this.spanphonenone = true
        this.spanaddnone = true
        this.inputnameapp = true
        this.inputphoneapp = true
        this.inputaddnameapp = true
      }
    },
    savefunc() {
      if (this.spannamenone == true) {
        this.spannamenone = false
        this.spanphonenone = false
        this.spanaddnone = false
        this.inputnameapp = false
        this.inputphoneapp = false
        this.inputaddnameapp = false
      }
    },
    uploadpicBtn() {
      // 當按下假的input同時按下真的input
      theFile = document.getElementById('theFile');
      theFile.click();
      // 當真的input被更改狀態時執行以下動作fileChange()
      document.getElementById('theFile').onchange = fileChange;
      function fileChange() {
        let file = document.getElementById('theFile').files[0];
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
    },
    sync() {
      this.backCategory = true
      this.$emit("my-click", false)
    },
  },

});

Vue.component('order', {
  template: `
    <div class="rightBorderorder" :class="{foursameBorderapp:foursameBorderapp == 2}">
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
            <div class="statussame allBorder" @click="statussame(1)" :class="{chagestatussamebg : chagestatussamebg == 1}">
              <p class="statussame all">全部</p>
            </div>
            <div class="statussame outBorder" @click="statussame(2)" :class="{chagestatussamebg : chagestatussamebg == 2}">
              <p class="statussame out">待出貨</p>
            </div>
            <div class="statussame getBorder" @click="statussame(3)" :class="{chagestatussamebg : chagestatussamebg == 3}">
              <p class="statussame get">待取貨</p>
            </div>
            <div class="statussame finishBorder" @click="statussame(4)" :class="{chagestatussamebg : chagestatussamebg == 4}">
              <p class="statussame finish">完成</p>
            </div>
            <div class="statussame cancelBorder" @click="statussame(5)" :class="{chagestatussamebg : chagestatussamebg == 5}">
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
                    <span class="itempaywaycontent">信用卡結帳</span>
                  </div>
                  <div class="itemendingsame itemdiscount">
                    <span class="itempaywaytitle">點數折扺：</span>
                    <span class="itempaywaycontent">0點</span>
                  </div>
                  <div class="itemendingsame itemorderall">
                    <span class="itempaywaytitle">訂單總額：</span>
                    <span class="itempaywaycontent">92元</span>
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
  data() {
    return {
      chagestatussamebg: 1,
      foursameBorderapp: '',
    }
  },
  methods: {
    statussame(num) {
      this.chagestatussamebg = num
    },
  },
});

Vue.component('points', {
  template: `
    <div class="rightBorderpoints" :class="{foursameBorderapp:foursameBorderapp == 3}">
        <div class="toppointsBorder">
          <div class="topmiddlepointsBorder">
            <div class="specialmemberborder">
              <span class="conditionDateTitle">
                特殊會員狀態：
              </span>
              <img src="../img/03/specialpic.png">
              <span class="conditionDateContent">
                2020/09/28
              </span>
            </div>
            <div class="specialmemberID">
              <span class="specialmemIDtitle">
                會員編號：
              </span>
              <span class="specialmemIDcontent">
                AA2020103000001
              </span>
            </div>
            <div class="specailmemberpoints">
              <span class="specialmemtitle">
                剩餘點數：
              </span>
              <span class="specialmemcontent">
                946點
              </span>
              <span class="specialmemlimit">
                點數請於2020/12/31 24:00 前使用完畢
              </span>
            </div>
            <div class="specialduration">
              <label class="specialdurationtitle">期間：</label>
              <input id="durFrom" type="date">
              <span class="durwhitespace">
                &#32;&#126;&#32;
              </span>
              <input id="durTo" type="date">
              <button id="dursearchBtnBorder" type="submit">查詢</button>
            </div>
          </div>
        </div>

        <div class="bottompointsBorder">
          <div class="bottommiddlepointsBorder">
            <div class="itempoint">
              <div class="iteminclude">
                <span class="itempointitle">日期：</span>
                <span class="itempointcontent">2020/11/05</span>
                <span class="itempointidtitle">訂單編號：</span>
                <span class="itempointidcontent">2020102000001</span>
                <span class="itempointplus">+500點</span>
              </div>
              <span class="line"></span>
            </div>
          </div>
        </div>
      </div>
      `,
  data() {
    return {
      foursameBorderapp: '',
    }
  },
});

Vue.component('memberApply', {
  template: `
    <div class="rightBordermemberApply" :class="{foursameBorderapp:foursameBorderapp == 4}">
        <div class="middlespecialBorder" :class="{special: none}">
          <div class="topBorder">
            <div class="toptitleBorder">
              <h1 class="toptitle">此功能為特殊會員使用</h1>
            </div>
            <span class="linetopbottom"></span>
          </div>
          <div class="bottomBorder">
            <div class="botleft">
              <div class="loveimg">
                <img src="../img/03/speciallove.png">
              </div>
              <div class="wordlineBorder">
                <h2 class="firsttitle">讓愛循環不止</h2>
                <h4 class="secondtitle">本站轉贈之點數僅做愛心使用，</h4>
                <h4 class="thirdtitle">不得兌換現金，</h4>
                <h4 class="fourthtitle">或營利使用。</h4>
              </div>
            </div>
            <div class="botright">
              <div class="botrightmiddleBorder">
                <div class="sametypeBorder">
                  <div class="sametype">
                    <h3 class="samelovecontent">
                      服務說明：
                    </h3>
                    <h3 class="samelovecontent">
                      一、服務對象：
                    </h3>
                    <div class="samecontent">
                      缺食者(街友、清寒家庭、高風險家庭者、遭逢巨變者、
                      清寒身心障礙者)等經濟弱勢。
                    </div>
                    <h3 class="samelovecontent">
                      二、服務內容：
                    </h3>
                    <div class="samecontent">
                      本網站每月提供免費愛心點數，供特殊會員以點數兌換
                      本站上架餐點，本網站之愛心數點皆由社會各界愛心人
                      士捐款轉贈點數。
                    </div>
                    <h3 class="samelovecontent">
                      三、申請方式：
                    </h3>
                    <div class="samecontent">
                      上傳有效期間之清寒證明文件，待工作人員審核通過後，
                      即可獲得特殊會員資格，並於審核通過後隔月獲得愛心點
                      數。
                    </div>
                    <h3 class="samelovecontent">
                      四、上傳文件內容：
                    </h3>
                    <h3 class="samelovecontent">
                      (1)填妥申請書乙份。
                    </h3>
                    <h3 class="samelovecontent">
                      (2)本人之身份證明文件及第二證件。
                    </h3>
                    <h3 class="samelovecontent">
                      (3)有效之清寒證明文件。
                    </h3>
                  </div>
                </div>
                <div class="apllyBtnBorder">
                  <button type="button" class="apllyBtn" @click="tononetoblock">申請成為特殊會員</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="changemiddlespecailBorder" :class="{specialchange: block}">
          <div class="topchangeBorder">
            <div class="topchangetitleBorder">
              <img class="topchangetitlepic" src="../img/03/specialpic.png">
              <h1 class="topchangetitle">特殊會員申請</h1>
            </div>
            <h1 class="topchangeservice">服務申請說明：</h1>
            <div class="topfirstBorder">
              <h1 class="topfirsttitle">一、服務對象：</h1>
              <div class="topfirstcontent">缺食者(街友、清寒家庭、高風險家庭者、遭逢巨變者、清寒身心障礙者)等經濟弱勢。</div>
            </div>
            <div class="topfirstBorder">
              <h1 class="topfirsttitle">二、服務內容：</h1>
              <div class="topfirstcontent">本網站每月提供免費愛心點數，供特殊會員以點數兌換本站上架餐點，本網站之愛心數點皆由社會各界愛心人士捐款轉贈點數。</div>
            </div>
            <div class="topfirstBorder">
              <h1 class="topfirsttitle">三、申請方式：</h1>
              <div class="topfirstcontent">上傳有效期間之清寒證明文件，待工作人員審核通過後，即可獲得特殊會員資格，並於審核通過後隔月獲得愛心點數。</div>
            </div>
            <div class="fourfirstBorder">
              <div class="fourfirstcontent">
                <h1 class="fourtitle">四、上傳文件內容：</h1>
              </div>
              <div class="foursecondcontent">
                <h1 class="fourtitle">(1)填妥申請書乙份。</h1>
                <h1 class="fourtitle">(2)本人之身份證明文件及第二證件。</h1>
                <h1 class="fourtitle">(3)有效之清寒證明文件。</h1>
              </div>
            </div>
            <span class="changeline"></span>
          </div>
          <div class="bottomchangeBorder">
            <div class="bottomchangeleftBorder">
              <div class="memberInform">
                <div class="memtitleBorder">
                  <h1 class="memtitle">特殊會員狀態 : </h1>
                </div>
                <div class="samememberBord memberIdBorder">
                  <span class="samemembertitleBord memberIDtitle">會員編號 : </span>
                  <span class="sameconten memberID">AA2020103000001</span>
                </div>
                <div class="samememberBord memberEmailBorder">
                  <span class="samemembertitleBord memberEmailtitle">帳 號 : </span>
                  <span class="sameconten memberEmail">jabiden@gmail.com</span>
                </div>
                <div class="samememberBord memberNameBorder">
                  <span class="samemembertitleBord memberNametitle">姓 名 : </span>
                  <span class="sameconten memberName">甲必丹</span>
                </div>
              </div>
              <form class="uploadfileBorder" id="uploadfileBorder" method="POST" action="#">
                <div class="apllybookBorder">
                  <textarea id="fileInfor"></textarea>
                  <input type="file" id="thefile" multiple>
                  <button type="button" id="fakebtn" @click="uploadmultiplefile">選擇檔案</button>
                </div>
                <div class="elecsignBorder">
                  <canvas id="myPics" width="400" height="150" @mouseenter="canvasfuction"></canvas>
                </div>
                <div class="uploadBtnBorder">
                  <button type="submit" id="manyfileupload">上傳</button>
                </div>
              </form>
            </div>
            <div class="bottomchangerightBorder">
              <div class="bottomchangeloveimg">
                <img src="../img/03/speciallove.png">
              </div>
              <div class="bottomchangewordlineBorder">
                <h2 class="firsttitlebot">讓愛循環不止</h2>
                <h4 class="secondtitlebot">本站轉贈之點數僅做愛心使用，</h4>
                <h4 class="thirdtitlebot">不得兌換現金，</h4>
                <h4 class="fourthtitlebot">或營利使用。</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      `,
  data() {
    return {
      none: '',
      block: '',
      foursameBorderapp: '',
    }
  },
  methods: {
    tononetoblock() {
      this.none = true
      this.block = true
    },
    uploadmultiplefile() {
      // 當按下假的input時等同於按下真的按鈕
      thefile = document.getElementById('thefile');
      thefile.click();
      // 去掉背景圖
      fileInfor = document.getElementById('fileInfor');
      fileInfor.style.backgroundImage = "url('')";
      // 當真按鈕改變狀態時執行filechangee()
      document.getElementById('thefile').onchange = filechangee;
      function filechangee() {
        let files = document.getElementById('thefile').files;
        let message = '';
        for (let i = 0; i < files.length; i++) {
          message += `檔案名稱: ${files[i].name}\n`;
          message += `檔案大小: ${files[i].size} byte(s)\n`;
          message += `檔案型態: ${files[i].type}\n`;
          // message += `最後更新日期: ${files[i].lastModifiedDate}\n`;
          message += `==================\n`;
          // 取得檔案資訊後塞入textarea裡面
          document.getElementById('fileInfor').value = message;
        }
      }
    },
    canvasfuction() {
      // 電子簽章
      let isDrawing = false;
      let x = 0;
      let y = 0;

      const myPics = document.getElementById('myPics');
      const context = myPics.getContext('2d');

      // 當滑鼠在canvas這裡按下執行以下動作
      myPics.addEventListener('mousedown', e => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
      });
      // 當滑鼠在canvas按下後並移動滑鼠，判斷isDrawing === true，就執行以下動作
      myPics.addEventListener('mousemove', e => {
        if (isDrawing === true) {
          drawLine(context, x, y, e.offsetX, e.offsetY);
          x = e.offsetX;
          y = e.offsetY;
        }
      });
      // 當滑鼠在canvas按下後並移動滑鼠以及最後提起滑鼠按鍵，判斷isDrawing === true，就執行以下動作
      window.addEventListener('mouseup', e => {
        if (isDrawing === true) {
          drawLine(context, x, y, e.offsetX, e.offsetY);
          x = 0;
          y = 0;
          isDrawing = false;
        }
      });
      // 給mousemove、mouseup使用
      function drawLine(context, x1, y1, x2, y2) {
        context.beginPath();
        context.strokeStyle = 'blue';
        context.lineWidth = 2;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
      }
    },
  },
});



// vue
new Vue({
  el: '#memWrap',
  data: {
    content: 'points',
    acth1: 0,
    act: 'a',
    leftBordermediumPhone: '',
    foursameBorderapp: '',
  },
  methods: {
    memberButton(change, num, div, rwdborder) {
      this.content = change
      this.acth1 = num
      this.act = div
      this.leftBordermediumPhone = true
      // leftBorder = document.getElementsByClassName('leftBorder')[0];
      // leftBorder.classList.add('leftBordermediumPhone')
      this.foursameBorderapp = rwdborder
    },
    clicked(x) {
      this.leftBordermediumPhone = x ;
      // alert(`${x}`);
      // console.log(x);
    },
  },
});