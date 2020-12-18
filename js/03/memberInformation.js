Vue.component('member', {
  template: `
      <div class="rightBorder" :class="{foursameBorderapp:foursameBorderapp == 1}">
        <form class="leftInfoborder" method="POST" action="#">
          <div class="myAccountBorder">
            <h1 class="myAccount">
              我的帳號
            </h1>
          </div>
          <div class="identifyBorder">
            <div class="idTitle">身份別: </div>
            <span class="idContent">{{idconten}}</span>
          </div>
          <div class="lineBorder">
            <hr>
          </div>
          <div class="memidBorder">
            <div class="memidTitile sameTile">會員編號:</div>
            <span class="memidContent">{{idmem}}</span>
          </div>
          <div class="emailBorder">
            <div class="emailTitle sameTile">信箱:</div>
            <span class="emailContent">{{idemail}}</span>
          </div>
          <div class="bigpasswordborder">
            <div class="passwordLef">
              <div class="passwordBorder">
                <div class="passwordTitle sameTile">密碼:</div>
                <span class="passwordContent" :class="{spannone: spn}">{{idpwd}}</span>
                <input class="passwordContent" :placeholder="pwdpla" type="password" :class="{inputappor: inpor , inpredpwd:inpredpwd}" v-model="pwdhtml" @click="disclasspwd" >
              </div>
              <div class="newpasswordBorder" :class="{divappre: divre}">
                <div class="newpasswordTitle sameTile">新密碼:</div>
                <input class="newpasswordContent" :placeholder="pwdnewpla" type="password" v-model="newpwdhtml" :class="{inprednewpwd:inprednewpwd}" @click="disclasspwdnew" >
              </div>
              <div class="cfmpasswordBorder" :class="{divappse: divse}">
                <div class="cfmpasswordTitle sameTile">確認密碼:</div>
                <input class="cfmpasswordContent" :placeholder="pwdnewcfpla" type="password" v-model="newpwdcfhtml" :class="{inprednewpwdcf:inprednewpwdcf}" @click="disclasspwdnewcf" >
              </div>
            </div>
            <div class="changeBtnright">
              <button class="savePassword" type="button" @click="changespan" :class="{saveapp: sa}">儲存密碼</button>
              <button class="changePassword" type="button" @click="changeinput" :class="{passnone: pn}">變更密碼</button>
            </div>
          </div>
          <div class="nameBorder">
            <div class="nameTitle sameTile">姓名:</div>
            <input class="nameContent" :placeholder="namepla" type="text" :class="{inputnameapp: inputnameapp , inpredname:inpredname}" v-model="modname" name="name" @click="disclassname">
            <span class="nameContent" :class="{spannamenone: spannamenone}">{{idname}}</span>
          </div>
          <div class="phoneBorder">
            <div class="phoneTitle sameTile">手機號碼:</div>
            <input class="phonenameContent" :placeholder="telpla" type="text" :class="{inputphoneapp: inputphoneapp , inpredtel:inpredtel}" v-model="modphone" name="tel" @click="disclasstel">
            <span class="phoneContent" :class="{spanphonenone: spanphonenone}">{{idphone}}</span>
          </div>
          <div class="addBorder">
            <div class="addTitle sameTile">地址:</div>
            <input class="addnameContent" :placeholder="addpla" type="text" :class="{inputaddnameapp: inputaddnameapp , inpredadd:inpredadd}" v-model="modadd" name="add" @click="disclassadd">
            <span class="addContent" :class="{spanaddnone: spanaddnone}" >{{idadd}}</span>
          </div>
          <div class="editsaveBtn">
            <button class="edit" type="button" @click="editfunc">編輯</button>
            <button class="save" type="button" @click="savefunc">儲存</button>
          </div>
        </form>
        <div class="rightPicborder">
          <div class="backCategoryBorder" @click="sync">
            <img class="backCategoryBorder" src="../img/03/backcategory.png">
          </div>
          <div class="uploadBorder">
            <div class="imageBorder">
              <img id="image" :src="uploadbigpic">
            </div>
            <div class="fileBorder">
              <input type="file" id="theFile" name="file" ref="file" @click="uploadimg" accept="image/*">
              <button type="button" id="fakeBtn" @click="editPicBtn">編輯圖片</button>
              <button type="button" id="uploadaxiosBtn" @click="uploadPicBtn">上傳圖片</button>
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


      // html input
      // 原本密碼
      pwdhtml: '',
      // 新密碼
      newpwdhtml: '',
      // 確認密碼 
      newpwdcfhtml: '',
      // 姓名 
      modname: '',
      // 手機號碼 
      modphone: '',
      // 地址 
      modadd: '',

      foursameBorderapp: '',
      backCategory: '',

      // placeholder
      // 密碼
      pwdpla: '請輸入原本密碼',
      // 新密碼
      pwdnewpla: '請輸入新密碼',
      // 密碼確認
      pwdnewcfpla: '請確認密碼',
      // 名字
      namepla: '請輸入姓名',
      // 手機
      telpla: '請輸入手機號碼',
      // 地址
      addpla: '請輸入地址',

      // class
      // 密碼
      inpredpwd: '',
      // 新密碼
      inprednewpwd: '',
      // 密碼確認
      inprednewpwdcf: '',
      // 名字
      inpredname: '',
      // 手機
      inpredtel: '',
      // 地址
      inpredadd: '',

      // 上傳圖片
      file: '',

      // 圖片綁定
      uploadbigpic: '',
    }
  },
  props: [
    'idconten',
    'idmem',
    'idemail',
    'idpwd',
    'idname',
    'idphone',
    'idadd',
    'idpwdtrue',
  ],
  methods: {
    // 開啟input 關閉span
    changeinput() {
      this.sa = true
      this.pn = true
      this.spn = true
      this.inpor = true
      this.divre = true
      this.divse = true
    },
    // 更換密碼 關閉input 開啟span
    changespan() {

      // 空白檢查
      // 原本密碼空白
      if (this.pwdhtml == "") {
        this.pwdpla = '密碼不可為空';
        this.inpredpwd = true;
      }

      // 新密碼空白
      if (this.newpwdhtml == "") {
        this.pwdnewpla = '新密碼不可為空';
        this.inprednewpwd = true;
      }

      // 確認密碼空白
      if (this.newpwdcfhtml == "") {
        this.pwdnewcfpla = '確認密碼不可為空';
        this.inprednewpwdcf = true;
      }

      // 格式檢查
      // 原密碼檢查
      if (this.pwdhtml != this.idpwdtrue) {
        this.pwdhtml = '';
        this.pwdpla = '原密碼輸入錯誤';
        this.inpredpwd = true;
      }

      // 新密碼與確認密碼比對
      if (this.newpwdhtml != this.newpwdcfhtml) {
        this.newpwdhtml = '';
        this.newpwdcfhtml = '';
        this.pwdnewpla = '與確認密碼不同';
        this.pwdnewcfpla = '與新密碼不同';
        this.inprednewpwd = true;
        this.inprednewpwdcf = true;
      }

      // 新密碼需大於8位數
      if (this.newpwdcfhtml != '') {
        if (this.newpwdcfhtml.length < 8) {
          this.newpwdhtml = '';
          this.newpwdcfhtml = '';
          this.pwdnewpla = '密碼字數小於8位數';
          this.pwdnewcfpla = '密碼字數小於8位數';
          this.inprednewpwd = true;
          this.inprednewpwdcf = true;
        }
      }


      // 判斷資料的原密碼與會員輸入的密碼是否一樣如果一樣就可以更新密碼
      if (this.pwdhtml != '' && this.newpwdhtml != "" && this.newpwdcfhtml != "" && this.inpredpwd != true && this.inprednewpwd != true && this.inprednewpwdcf != true) {
        // 密碼更新
        // 這是沒切換成********的原密碼
        // console.log(this.idpwdtrue);
        if (this.pwdhtml == this.idpwdtrue && this.newpwdhtml == this.newpwdcfhtml) {
          // alert('成功');

          // input span 切換
          this.sa = false
          this.pn = false
          this.spn = false
          this.inpor = false
          this.divre = false
          this.divse = false

          // 更新密碼
          // 建立資料表單
          // 為表單資料中的欄位/值建立相對應的的鍵/值對（key/value）集合，之後便可使用 XMLHttpRequest.send() 方法來送出資料。它在編碼類型設定為 multipart/form-data 時會採用與表單相同的格式送出。
          let data = new FormData();//new FormData() 固定語法
          // FormData.append()
          // 追加新值到 FormData 物件已有的對應鍵上；若該鍵不存在，則為其追加新的鍵。
          data.append('newpwd', this.newpwdcfhtml);

          let config = {
            header: {
              'Content-Type': 'multipart/form-data'
            }
          }

          // update 名字 手機號碼 地址
          axios.post('../PHP/Frontend/mamberUpdatepassword.php', data, config).then(res => {
            // 找出data
            // console.log(res);
          });

          // 傳父層 控制newpwd的值
          this.$emit('reloadnewpwd');
          // console.log(this.idpwdtrue);

        }
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

      // 檢查名字空白
      if (this.modname == '') {
        this.namepla = '名字不可為空';
        this.inpredname = true;
      }

      // 檢查手機號碼空白
      if (this.modphone == '') {
        this.telpla = '手機不可為空';
        this.inpredtel = true;
      }

      // 檢查地址空白
      if (this.modadd == '') {
        this.addpla = '地址不可為空';
        this.inpredadd = true;
      }

      // 名字檢查
      if (this.modname != '') {
        // 檢查格式
        // 假如姓名位數超過6位數抱錯，左邊會員標題字數有限
        if (this.modname.length > 6) {
          // 抓姓名字數
          alert(this.modname.length);

          this.modname = ''
          this.namepla = '名字不可超過6位數';
          this.inpredname = true;
        }
      }

      // 電話檢查 聯絡電話只能是數字及數字需大於等於10碼
      if (this.modphone != '') {
        const phonemath = /\d{10}/;
        if (this.modphone.search(phonemath) != 0 || this.modphone.length != 10) {
          this.modphone = '';
          this.telpla = '手機號碼格式不對';
          this.inpredtel = true;
        }
      }

      // 地址檢查 登記地址需包含中文和數字
      // escape對字串進行編碼時，字元值大於255的以"%u****"格式儲存，而字元值大於255的恰好是非英文字元（一般是中文字元，非中文字元也可以當作中文字元考慮）；indexOf用以判斷在字串中是否存在某子字串
      if (this.modadd != '') {
        const addmath = /\d{1}/; //最少要有一個數字
        if ((escape(this.modadd).indexOf("%u") < 0) || (this.modadd.search(addmath) == -1)) {
          // console.log(escape(this.modadd).indexOf("%u"));
          this.modadd = '';
          this.addpla = '地址格式不對';
          this.inpredadd = true;
        }
      }


      // 都沒問題就執行
      if (this.modname != '' && this.modphone != '' && this.modadd != '' && this.inpredname != true && this.inpredtel != true && this.inpredadd != true) {

        // input、span 出現、消失切換
        if (this.spannamenone == true) {
          this.spannamenone = false
          this.spanphonenone = false
          this.spanaddnone = false
          this.inputnameapp = false
          this.inputphoneapp = false
          this.inputaddnameapp = false
        }
        // 建立資料表單
        // 為表單資料中的欄位/值建立相對應的的鍵/值對（key/value）集合，之後便可使用 XMLHttpRequest.send() 方法來送出資料。它在編碼類型設定為 multipart/form-data 時會採用與表單相同的格式送出。
        let data = new FormData();//new FormData() 固定語法
        // FormData.append()
        // 追加新值到 FormData 物件已有的對應鍵上；若該鍵不存在，則為其追加新的鍵。
        data.append('name', this.modname);
        data.append('add', this.modadd);
        data.append('tel', this.modphone);

        let config = {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        }

        // update 名字 手機號碼 地址
        axios.post('../PHP/Frontend/mamberNameTelAdd.php', data, config).then(res => {
          // 找出data
          // console.log(res);
        });

        // 傳父層 控制name、tel、add的值
        this.$emit('reloadnameaddtel');
      }

    },
    // 原密碼取消class
    disclasspwd() {
      this.pwdpla = '請輸入原本密碼';
      this.inpredpwd = false;
    },
    // 新密碼取消class
    disclasspwdnew() {
      this.pwdnewpla = '請輸入新密碼';
      this.inprednewpwd = false;
    },
    // 確認密碼取消class
    disclasspwdnewcf() {
      this.pwdnewcfpla = '請輸入確認密碼';
      this.inprednewpwdcf = false;
    },
    // 名字取消class
    disclassname() {
      this.namepla = '請輸入姓名';
      this.inpredname = false;
    },
    // 手機號碼取消class
    disclasstel() {
      this.telpla = '請輸入手機號碼';
      this.inpredtel = false;
    },
    // 地址取消class
    disclassadd() {
      this.addpla = '請輸入地址';
      this.inpredadd = false;
    },
    // 實際接收圖片
    uploadimg() {
      // 當真的input被更改狀態時執行以下動作fileChange()
      document.getElementById('theFile').onchange = fileChange;
      function fileChange() {
        file = document.getElementById('theFile').files[0];
        readFile = new FileReader();
        readFile.readAsDataURL(file);
        readFile.addEventListener('load', function (e) {
          image = document.getElementById('image');
          image.src = this.result;
          image.style.maxWidth = '130px';
          image.style.maxHeight = '130px';
          bg = document.getElementsByClassName('imageBorder')[0];
          bg.style.backgroundImage = "url('')";

          this.uploadbigpic = e.target.result;
        });
      }
    },
    // 當按下假的input同時按下真的input
    editPicBtn() {
      // 當按下假的input同時按下真的input
      theFile = document.getElementById('theFile');
      theFile.click();
    },
    // 撈大頭貼
    appearImg() {

      axios.post('../PHP/Frontend/appearImg.php').then(function (response) {
        data = response.data;
        if (data != '') {
          this.uploadbigpic = data;

          // atob函数用来解碼一个已经被base-64编碼過的數據
          // 如果在PHP有base64_decode就不用atob
          image = document.getElementById('image');
          image.src = atob(data);
          // image.src = data;
          image.style.maxWidth = '130px';
          image.style.maxHeight = '130px';

          bg = document.getElementsByClassName('imageBorder')[0];
          bg.style.backgroundImage = "url('')";
        }

      });

    },
    // 上傳大頭貼
    uploadPicBtn() {

      let image = document.getElementById('image');
      let src = image.src;

      // 建立資料表單
      // 為表單資料中的欄位/值建立相對應的的鍵/值對（key/value）集合，之後便可使用 XMLHttpRequest.send 方法來送出資料。它在編碼類型設定為 multipart/form-data 時會採用與表單相同的格式送出。
      let data = new FormData();
      // new FormData 固定語法
      // FormData.append
      // 追加新值到 FormData 物件已有的對應鍵上；若該鍵不存在，則為其追加新的鍵。
      data.append('img', src);

      // console.log(this.uploadbigpic);
      let config = {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      }

      axios.post('../PHP/Frontend/uploadImg.php', data, config).then(response => {
        data = response.data;
        alert("上傳圖片成功");

      });

      // 全域溝通 當member上傳圖片執行headerPic函式，header就變相被執行
      // memheader.js:237行
      headerPic();

    },
    // 傳入父層，控制class
    sync() {
      this.$emit("my-click", false)
    },
  },
  mounted() {
    // 撈圖像
    this.appearImg();
  },
  updated() {
    // 撈圖像
    this.appearImg();
  },
});

Vue.component('order', {
  template: `
    <div class="rightBorderorder" :class="{foursameBorderapp:foursameBorderapp == 2}">
        <div class="centerBorder">
          <div class="orderbackCategoryBorder" @click="sync">
            <img class="orderbackCategoryBorder" src="../img/03/backcategory.png">
          </div>
          <div class="searchBorder">
            <form id="searchBorder" method="POST" action="#">
              <div class="searchDateBoder">
                <label class="search">查詢區間 : </label>
                <div class="dateFromdateTo">
                  <input id="dateFrom" type="date">
                  <div class="whitespace">
                    &#32;&#126;&#32;
                  </div>
                  <input id="dateTo" type="date">
                </div>
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

          <div v-if="orderList.length > 0" class="orderdetailBorder" v-for="order in orderList">
            <div class="catalogBorder">
              <div class="detailsame orderdateBorder">
                <div class="cattitle">
                  <h3 class="cattitle orderdate">訂單日期</h3>
                </div>
                <p class="contentsame orderdate" v-if="order.ORDER_DATE">{{orderdate}}</p>
              </div>
              <div class="detailsame orderidBorder">
                <div class="cattitle">
                  <h3 class="cattitle orderid">訂單編號</h3>
                </div>
                <p class="contentsame orderid" v-if="order.ORDER_ID">{{order.ORDER_ID}}</p>
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
                <p class="contentsame ordercondition" v-if="order.ORDER_STATUS">{{order.ORDER_STATUS}}</p>
              </div>
            </div>


            <div class="itemdetailBorder">
              <div class="itemstatusBorder">
                <div class="itemstopBorder">
                  <div class="fourcircleBorder">
                    <div class="orderestablishBorder">
                      <img class="orderestablish" v-if="order.ORDER_STATUS != '取消' " src="../img/03/getincircle.png">
                      <img class="orderestablish" v-else src="../img/03/getoutcircle.png">
                      <div class="stablishBorder">
                        <span class="stablish">成立訂單</span>
                        <span class="stablishtime" v-if="order.ORDER_DATE" >{{ordertime}}</span>
                      </div>
                    </div>
                    <div class="orderestablishBorder">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '待出貨' " src="../img/03/getincircle.png">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '待取貨' " src="../img/03/getincircle.png">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '取貨完成' " src="../img/03/getincircle.png">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '取消' " src="../img/03/getoutcircle.png">
                      <div class="stablishBorder">
                        <span class="stablish">等待出貨</span>
                      <!--   <span class="stablishtime">00:00</span> -->
                      </div>
                    </div>
                    <div class="orderestablishBorder">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '待取貨' " src="../img/03/getincircle.png">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '取貨完成' " src="../img/03/getincircle.png">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '待出貨' " src="../img/03/getoutcircle.png">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '取消' " src="../img/03/getoutcircle.png">
                      <div class="stablishBorder">
                        <span class="stablish">等待取貨</span>
                      <!-- <span class="stablishtime">00:00</span> -->
                      </div>
                    </div>
                    <div class="orderestablishBorder">
                      <img class="orderestablish" v-if="order.ORDER_STATUS == '取貨完成'" src="../img/03/getincircle.png">
                      <img class="orderestablish" v-else="order.ORDER_STATUS != '取貨完成'" src="../img/03/getoutcircle.png">
                      <div class="stablishBorder">
                        <span class="stablish">已經取貨</span>
                      <!--  <span class="stablishtime">00:00</span>  -->
                      </div>
                    </div>
                  </div>
                  <span class="midlineBorder"></span>
                </div>


                <div class="itembotBorder">
                  <div class="samebotBorder itembotId">
                    <span class="itembotIdtitle">訂單編號: </span>
                    <span class="itembotId" v-if="order.ORDER_ID" >{{order.ORDER_ID}}</span>
                  </div>
                  <div class="samebotBorder gettime">
                    <span class="gettimetitle">取貨截止時間: </span>
                    <span class="gettime" v-if="order.ORDER_PICKUP_DATE">{{order.ORDER_PICKUP_DATE}}</span>
                  </div>
                  <div class="samebotBorder itembotseller">
                    <span class="itembotsellertitle">賣家: </span>
                    <span class="itembotseller">全家天母店</span>
                  </div>
                  <div class="samebotBorder getlocation">
                    <span class="getlocationtitle">取貨地點: </span>
                    <span class="getlocation" v-for="orderadd in orderaddList">{{orderadd.MRT_PICKUP_SITE_NAME}}</span>
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
                        <span class="unitpricetitle">單價:</span>
                        <span class="unitpricecontent">$27</span>
                      </div>
                      <div class="countpriceBorder">
                        <span class="countpricetitle">小計:</span>
                        <span class="countpricecontent">$27</span>
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
                    <span class="itempaywaycontent" v-if="order.ORDER_DISCOUNT">{{order.ORDER_DISCOUNT}}點</span>
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
      // 不同的class切換
      chagestatussamebg: 1,
      foursameBorderapp: '',
      // 訂單
      orderList: null,
      // 訂單再撈一次
      orderList1: null,
      // 訂單日期
      orderdate: '',
      // 訂單時間
      ordertime: '',
      // 點數折抵
      orderdiscount: '',
      // 點數地址
      orderaddList: null,
    }
  },
  methods: {
    // 不同的class切換
    statussame(num) {
      this.chagestatussamebg = num
    },
    sync() {
      // 控制父層 class
      this.$emit("my-click", false)
    },
    // 撈全部訂單
    allselect() {

      axios.post('../PHP/Frontend/selecAll.php').then(res => {
        // 撈order
        this.orderList = res.data

        // 訂單日期 訂單時間
        res.data.forEach(i => {
          this.orderdate = i.ORDER_DATE.substr(0, 10);
          this.ordertime = i.ORDER_DATE.substr(10, 6);
        });

        // 訂單狀態
        res.data.forEach(a => {
          // 假如訂單狀態:0=>取消
          if (a.ORDER_STATUS == 0) {
            a.ORDER_STATUS = '取消'
          }
          // 假如訂單狀態:1=>待出貨
          if (a.ORDER_STATUS == 1) {
            a.ORDER_STATUS = '待出貨'
          }
          // 假如訂單狀態:2=>待取貨
          if (a.ORDER_STATUS == 2) {
            a.ORDER_STATUS = '待取貨'
          }
          // 假如訂單狀態:3=>取貨完成
          if (a.ORDER_STATUS == 3) {
            a.ORDER_STATUS = '取貨完成'
          }
        });

        // 點數折抵
        res.data.forEach(d => {
          // 假如點數折抵為空值變成0
          if (d.ORDER_DISCOUNT == null) {
            d.ORDER_DISCOUNT = '0'
          }
        });

      });

      axios.post('../PHP/Frontend/selecDetail.php').then(resp => {
        // 撈order 取貨地點
        this.orderaddList = resp.data
        console.log(this.orderaddList);
      });
    },
  },
  mounted() {
    // 撈全部訂單
    this.allselect();
  },
});

Vue.component('points', {
  template: `
    <div class="rightBorderpoints" :class="{foursameBorderapp:foursameBorderapp == 3}">
        <div class="toppointsBorder">
          <div class="topmiddlepointsBorder">
            <div class="pointbackCategoryBorder" @click="sync">
              <img class="pointbackCategoryBorder" src="../img/03/backcategory.png">
            </div>
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
              <div class="leftspecialduration">
                <label class="specialdurationtitle">期間：</label>
                  <div class="durFromdurTo">
                    <input id="durFrom" type="date">
                    <span class="durwhitespace">
                      &#32;&#126;&#32;
                    </span>
                    <input id="durTo" type="date">
                  </div>
              </div>
              <button id="dursearchBtnBorder" type="submit">查詢</button>
            </div>
          </div>
        </div>

        <div class="bottompointsBorder">
          <div class="bottommiddlepointsBorder">
            <div class="itempoint">
              <div class="iteminclude">
                <div class="dateandidBorder">
                  <div class="leftdateandidBorder">
                    <span class="itempointitle">日期：</span>
                    <span class="itempointcontent">2020/11/05</span>
                  </div>
                  <div class="rightdateandidBorder">
                    <span class="itempointidtitle">訂單編號：</span>
                    <span class="itempointidcontent">2020102000001</span>
                  </div>
                </div>
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
  methods: {
    sync() {
      this.$emit("my-click", false)
    },
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
                <div class="memappbackCategoryBorder" @click="sync">
                  <img class="memappbackCategoryBorder" src="../img/03/backcategory.png">
                </div>
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
          <div class="memappcahngebackCategoryBorder" @click="sync">
              <img class="memappchangebackCategoryBorder" src="../img/03/backcategory.png">
          </div>
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
                  <canvas id="myPics" width="300" height="150" @mouseenter="canvasfuction"></canvas>
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
        // 當滑鼠按下按鍵時背景圖去掉
        e.target.style.backgroundImage = "url('')";
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
    sync() {
      this.$emit("my-click", false)
      this.none = false
      this.block = false
    },
  },
});



// vue
let vm = new Vue({
  el: '#memWrap',
  data: {
    content: 'member',
    acth1: 0,
    act: 'a',
    leftBordermediumPhone: '',
    foursameBorderapp: '',

    // username
    username: '',

    // ID身份別
    idcont: '',

    // ID編號
    idmemin: '',

    // IDemail
    idemailin: '',

    // IDpassword
    idpwdin: '',
    // IDpassword(沒被轉成********)
    idpwdtruein: '',

    // IDname
    idnamein: '',

    // IDphone
    idphonein: '',

    // IDaddress
    idaddin: '',
  },
  methods: {
    memberButton(change, num, div, rwdborder) {
      this.content = change
      this.acth1 = num
      this.act = div
      this.leftBordermediumPhone = true
      this.foursameBorderapp = rwdborder
    },
    clicked(x) {
      this.leftBordermediumPhone = x;
      this.foursameBorderapp = x;
    },
    // 登出
    logout() {
      axios.post('../PHP/Frontend/Logout.php').then(respon => {
        alert('登出成功!');
        location.href = '../frontend/index.html';
      });
    },
    // 撈該ID的名稱left
    IDname() {
      // 因為axios和ajax指的this是自己的事件物，而vue的this指的是vue實例，所以這裡要宣告一個變數that等於vue的this
      // 或是在vue那裏宣告一個vm ==> vm.username
      let that = this;
      axios.post('../PHP/Frontend/memberlefttitle.php').then(function (res) {
        // 找到值
        checkdata = res.data;

        // 找名字
        // console.log(checkdata[0]);

        // 判斷是否有名字
        if (checkdata[0] != "") {
          if (checkdata[0] != null) {
            // 將名字塞入html
            that.username = checkdata[0];
          } else if (checkdata[0] == null) {
            that.username = '某某某';
            alert('請輸入名字');
          }
        } else {
          //提醒除錯
          alert(checkdata[0]);
        }
      })
    },
    // 撈該ID的身份別
    memberInf() {
      // 因為axios和ajax指的this是自己的事件物，而vue的this指的是vue實例，所以這裡要宣告一個變數that等於vue的this
      // 或是在vue那裏宣告一個vm ==> vm.username
      let that = this;
      axios.post('../PHP/Frontend/memberInfor.php').then(function (res) {
        // 找到值
        checkdata = res.data;

        // 找身份別 general or particular
        // console.log(checkdata.data[0].CLASS);
        // 判斷是是哪一種身份
        if (checkdata.data[0].MEMBER_CLASS == 0) {
          that.idcont = '一般會員';
        } else if (checkdata.data[0].MEMBER_CLASS == 1) {
          that.idcont = '特殊會員';
        } else {
          //提醒除錯
          // alert(checkdata[0]);
        }
      })
    },
    // 將ID塞入會員編號
    ID() {
      let that = this;
      // 用箭頭函式(res=>{})才能解決父傳子傳值的問題
      axios.post('../PHP/Frontend/sessionR.php').then(res => {

        checkdata = res.data;
        // console.log(checkdata);
        if (checkdata != '') {
          that.idmemin = checkdata;
          // console.log(that.idmemin);
        }
      });
    },
    // 撈該ID的信箱
    email() {
      // 因為axios和ajax指的this是自己的事件物，而vue的this指的是vue實例，所以這裡要宣告一個變數that等於vue的this
      // 或是在vue那裏宣告一個vm ==> vm.username
      let that = this;
      axios.post('../PHP/Frontend/memberInfor.php').then(function (res) {

        // 找到值
        checkdata = res.data;

        // 找email 
        // console.log(checkdata.dataac[0].ACCOUNT);

        // 如果抓到信箱就代入
        if (checkdata.dataac[0].MEMBER_ACCOUNT != "") {
          that.idemailin = checkdata.dataac[0].MEMBER_ACCOUNT;
        }

      })
    },
    // 撈該ID的密碼
    pwd() {
      // 因為axios和ajax指的this是自己的事件物，而vue的this指的是vue實例，所以這裡要宣告一個變數that等於vue的this
      // 或是在vue那裏宣告一個vm ==> vm.username
      let that = this;
      axios.post('../PHP/Frontend/memberInfor.php').then(function (res) {

        // 找到值
        checkdata = res.data;

        // 找密碼
        // console.log(checkdata.datapa[0].PASSWORD);

        // 如果抓到密碼就代入********
        if (checkdata.datapa[0].MEMBER_PASSWORD != "") {
          that.idpwdin = '********';
          // that.idpwdin = checkdata.datapa[0].PASSWORD;
          that.idpwdtruein = checkdata.datapa[0].MEMBER_PASSWORD;
        }
      })
    },
    // 撈該ID的名字
    name() {
      // 因為axios和ajax指的this是自己的事件物，而vue的this指的是vue實例，所以這裡要宣告一個變數that等於vue的this
      // 或是在vue那裏宣告一個vm ==> vm.username
      let that = this;
      axios.post('../PHP/Frontend/memberInfor.php').then(function (res) {

        // 找到值
        checkdata = res.data;

        // 找名字
        // console.log(checkdata.datana[0].NAME);

        // 如果抓到名字就代入
        if (checkdata.datana[0].MEMBER_NAME != "") {
          if (checkdata.datana[0].MEMBER_NAME != null) {
            that.idnamein = checkdata.datana[0].MEMBER_NAME;
          } else {
            that.idnamein = '請填寫名字';
          }
        } else {
          that.idnamein = '請填寫名字';
        }

      })
    },
    // 撈該ID的手機號碼
    phone() {
      // 因為axios和ajax指的this是自己的事件物，而vue的this指的是vue實例，所以這裡要宣告一個變數that等於vue的this
      // 或是在vue那裏宣告一個vm ==> vm.username
      let that = this;
      axios.post('../PHP/Frontend/memberInfor.php').then(function (res) {

        // 找到值
        checkdata = res.data;

        // 找手機號碼
        // console.log(checkdata.dataph[0].PHONE);

        // 如果抓到手機號碼就代入
        if (checkdata.dataph[0].MEMBER_PHONE != "") {
          if (checkdata.dataph[0].MEMBER_PHONE != null) {
            that.idphonein = checkdata.dataph[0].MEMBER_PHONE;
          } else if (checkdata.dataph[0].MEMBER_PHONE == null) {
            that.idphonein = '請填寫手機號碼';
          }
        } else {
          that.idphonein = '請填寫手機號碼';
        }

      })
    },
    // 撈該ID的地址
    address() {
      // 因為axios和ajax指的this是自己的事件物，而vue的this指的是vue實例，所以這裡要宣告一個變數that等於vue的this
      // 或是在vue那裏宣告一個vm ==> vm.username
      let that = this;
      axios.post('../PHP/Frontend/memberInfor.php').then(function (res) {

        // 找到值
        checkdata = res.data;

        // 找手機地址
        // console.log(checkdata.dataad[0].ADDRESS);

        // 如果抓到地址就代入
        if (checkdata.dataad[0].MEMBER_ADDRESS != "") {
          if (checkdata.dataad[0].MEMBER_ADDRESS != null) {
            that.idaddin = checkdata.dataad[0].MEMBER_ADDRESS;
          } else if (checkdata.dataad[0].MEMBER_ADDRESS == null) {
            that.idaddin = '請填寫地址';
          }
        } else {
          that.idaddin = '請填寫地址';
        }
      })
    },
    // 子層傳父層 名字 地址 電話
    reloadnameaddtelin() {
      // 撈該ID的名稱left
      this.IDname();
      // 撈名字
      this.name();
      // 撈手機號碼
      this.phone();
      // 撈地址
      this.address();
    },
    // 子層傳父層 密碼
    reloadnewpwdin() {
      // 撈密碼
      this.pwd();
    },
  },
  mounted() {
    (function () {
      axios.post('../PHP/Frontend/sessionR.php').then(function (res) {
        checkdata = res.data;
        console.log(checkdata);
      })
    }());
    // 撈名字
    this.IDname();
    // 撈身份別
    this.memberInf();
    // 將ID塞入會員編號
    this.ID();
    // 撈信箱
    this.email();
    // 撈密碼
    this.pwd();
    // 撈名字
    this.name();
    // 撈手機號碼
    this.phone();
    // 撈地址
    this.address();
  },
});