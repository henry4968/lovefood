// main
Vue.component('member', {
  data() {
    return {
      // input檢查 報錯顯示紅框
      redbordercolorsignInemail: '',
      redbordercolorsignInpass: '',
      redbordercolorsignInpassconf: '',
      redbordercolorsendcheck: '',

      // 註冊信箱 placeholder
      signInemail: '信箱',

      // 註冊信箱內容 v-model(html)
      emailSend: '',

      // 註冊密碼 placeholder
      signInpass: '密碼',

      // 註冊密碼內容 v-model(html)
      signInpasssend: '',

      // 註冊密碼確認 placeholder
      signInpassconf: '確認密碼',

      // 註冊密碼確認 v-model(html)
      signInpassconfsend: '',

      // 註冊驗證發送碼 placeholder
      signInsendcheckcode: '驗證碼確認',

      // 註冊驗證發送碼 v-model(html)
      signInsendcheckcodesend: '',

      // 綁定input:type=password or text 密碼
      passtotex: 'password',

      // 綁定input:type=password or text 密碼確認
      passtotexconfir: 'password',

      // 綁定input:type=button or submit 註冊
      signUpbutton: 'button',

      // 驗證碼
      VerNum: '',
    };
  },
  template: `
        <div class="member">
          <form id="member" method="post" action="../PHP/Frontend/JoinR.php">
            <input type="email" :placeholder="signInemail" name="account" v-model="emailSend" :class="{redbordercolorsignInemail:redbordercolorsignInemail}" :change="delchi('emailSend')" @click="classnone1" />
            <input :type="passtotex" :placeholder="signInpass" v-model="signInpasssend" :class="{redbordercolorsignInpass:redbordercolorsignInpass}" @click="classnone2" @input="englishmath('signInpasssend')" />
            <input :type="passtotexconfir" :placeholder="signInpassconf" v-model="signInpassconfsend" name="pwd" :class="{redbordercolorsignInpassconf:redbordercolorsignInpassconf}" @click="classnone3" />
            <div class="checkEmail"  >
              <input class="checkEmail" type="text" :placeholder="signInsendcheckcode" v-model="signInsendcheckcodesend" :class="{redbordercolorsendcheck:redbordercolorsendcheck}" @click="classnone4" >
              <button class="checkEmail" @click="emailcheck(emailSend)" type="button">發送驗證碼</button>
            </div>
            <button class="subSignup" :type="signUpbutton" @click="check">註冊</button>
            <button class="changeTOmember" type="button">會員登入</button>
          </form>
          <div class="lineBor">
            <div class="lineL"></div>
            <span class="signUp">你可以快速註冊</span>
            <div class="lineR"></div>
          </div>
          <div class="fbgoogle">
            <img src="../img/03/Icon awesome-facebook.png">
            <img src="../img/03/Icon awesome-google-plus.png">
          </div>
        </div>
      `,
  methods: {
    // 註冊空白檢查
    check(event) {

      // 以下條件若是沒問題則prevent

      // 信箱空白檢查
      if (this.signInemail == '信箱' && this.emailSend == '') {
        // alert('信箱是空的');
        this.signInemail = '信箱不可為空白';
        this.redbordercolorsignInemail = true;
        event.preventDefault();
      }

      // 密碼空白檢查
      if (this.signInpass == '密碼' && this.signInpasssend == '') {
        this.signInpass = '密碼不可為空白';
        this.redbordercolorsignInpass = true;
        event.preventDefault();
      }

      // 確認密碼空白檢查
      if (this.signInpassconf == '確認密碼' && this.signInpassconfsend == '') {
        this.signInpassconf = '確認密碼不可為空白';
        this.redbordercolorsignInpassconf = true;
        event.preventDefault();
      }

      // 驗證碼確認空白檢查
      if (this.signInsendcheckcode == '驗證碼確認' && this.signInsendcheckcodesend == '') {
        this.signInsendcheckcode = '驗證碼不可空白';
        this.redbordercolorsendcheck = true;
        event.preventDefault();
      }

      // 密碼及確認密碼需相同
      if (this.signInpasssend != this.signInpassconfsend) {
        this.passtotex = 'text';
        this.passtotexconfir = 'text',
          this.signInpasssend = '',
          this.signInpassconfsend = '',
          this.signInpass = '與確認密碼相異';
        this.signInpassconf = '與密碼相異';
        this.redbordercolorsignInpass = true;
        this.redbordercolorsignInpassconf = true;
        event.preventDefault();
      }

      // 驗證信箱格式
      // 信箱正規式表達
      const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if ((this.emailSend).search(emailRule) != -1) {
      } else {
        this.emailSend = '';
        this.signInemail = '信箱格式錯誤';
        this.redbordercolorsignInemail = true;
        event.preventDefault();
      }

      // 密碼字數限制
      if (this.signInpasssend.length < 8) {
        this.signInpasssend = '';
        this.signInpassconfsend = '';
        this.signInpass = '密碼字數小於8位數';
        this.signInpassconf = '密碼字數小於8位數';
        this.redbordercolorsignInpass = true;
        this.redbordercolorsignInpassconf = true;
        event.preventDefault();
      }

      // 驗證碼驗證
      if (this.signInsendcheckcodesend != this.VerNum) {
        this.redbordercolorsendcheck = true;
        this.signInsendcheckcodesend = '';
        this.signInsendcheckcode = '驗證碼錯誤';
        event.preventDefault();
      }

      // 以上條件沒問題就submit
      if (this.redbordercolorsignInemail != true && this.redbordercolorsignInpass != true && this.redbordercolorsignInpassconf != true && this.redbordercolorsendcheck != true && this.emailSend != '' && this.signInpassconfsend != '' && this.signInsendcheckcodesend != '' && this.signInsendcheckcodesend != '') {
        this.signUpbutton = 'submit';
        event.target.submit();
      }
    },

    // 帳號登入禁止中文可使用email
    delchi(clear) {
      this[clear] = this[clear].replace(/[^\a-\z\A-\Z0-9\@._-]/g, '');
    },

    // 當input被點擊時去除紅框class及改變type型態
    classnone1() {
      this.redbordercolorsignInemail = false
      this.signInemail = '信箱'
    },
    classnone2() {
      this.redbordercolorsignInpass = false
      this.passtotex = 'password';
      this.signInpass = '密碼';
    },
    classnone3() {
      this.redbordercolorsignInpassconf = false
      this.passtotexconfir = 'password';
      this.signInpassconf = '確認密碼';
    },
    classnone4() {
      this.redbordercolorsendcheck = false
      this.signInsendcheckcode = '驗證碼確認'
    },

    // 只限定英文數字
    englishmath(cleartt) {
      this[cleartt] = this[cleartt].replace(/[\W]/g, '');
    },

    // 寄信驗證
    emailcheck(email) {

      // 信箱空白檢查
      if (this.signInemail == '信箱' && this.emailSend == '') {
        // alert('信箱是空的');
        this.signInemail = '信箱不可為空白';
        this.redbordercolorsignInemail = true;
      } else {

        // 驗證其他人輸入的值是否抓到
        // if (email != '') {
        //   alert(email);
        // }

        // 把驗證碼命名成一個變數 測試用
        this.VerNum = this.randomfun();
        // alert(this.VerNum);

        // 寄信驗證
        Email.send({
          SecureToken: "83e722aa-e25e-440b-b4ea-b3d5d6cf95b8",
          To: email,
          From: "tibamelovefood@gmail.com",
          Subject: "lovefood<tibamelovefood@gmail.com>",
          Body: `親愛的新會員您好!!這是您的驗證碼:${this.VerNum}`
        })
          .then(
            message => alert("驗證信已寄出，請查看信箱!"),
          );
      }

    },

    // 產生驗證碼
    randomfun() {
      this.VerNum = Math.floor((Math.random() * 9999) + 1000)
      return this.VerNum
    }
  },
});

Vue.component('seller', {
  template: `
        <div class="seller">
          <form id="seller" method="post" action="#">
            <input class="seller" type="email" :placeholder="selsignUpacpla" :class="{selsignUpac:selsignUpac}" v-model="selsignUpachtml" />
            <input class="seller" type="password" :placeholder="selsignUppapla" :class="{selsignUppa:selsignUppa}" v-model="selsignUppahtml" />
            <input class="seller" type="password" :placeholder="selsignUppacfpla" :class="{selsignUppacf:selsignUppacf}" v-model="selsignUppacfhtml" />
            <input class="seller" type="text" :placeholder="selcompla" :class="{selcom:selcom}" v-model="selcomhtml" />
            <input class="seller" type="text" :placeholder="selTaxpla" :class="{selTax:selTax}" v-model="selTaxhtml" />
            <input class="seller" type="text" :placeholder="seladdpla" :class="{seladd:seladd}" v-model="seladdhtml" />
            <input class="seller" type="text" :placeholder="selphonepla" :class="{selphone:selphone}" v-model="selphonehtml" />
            <button class="seller" type="submit" @click="sellersignUp">註冊</button>
            <button class="changeTOmember" id="goTOmember" type="button">會員登入</button>
          </form>
        </div>
      </div>
    `,
  data() {
    return {
      // input 紅框
      // 信箱
      selsignUpac: '',
      // 密碼
      selsignUppa: '',
      // 確認密碼
      selsignUppacf: '',
      // 公司名稱
      selcom: '',
      // 統一編號
      selTax: '',
      // 登記地址
      seladd: '',
      // 聯絡電話
      selphone: '',

      // input placeholder
      // 信箱
      selsignUpacpla: '信箱',
      // 密碼
      selsignUppapla: '密碼',
      // 確認密碼
      selsignUppacfpla: '確認密碼',
      // 公司名稱
      selcompla: '公司名稱',
      // 統一編號
      selTaxpla: '統一編號(非必填)',
      // 登記地址
      seladdpla: '登記地址',
      // 聯絡電話
      selphonepla: '聯絡電話',

      // input html
      // 信箱
      selsignUpachtml: '',
      // 密碼
      selsignUppahtml: '',
      // 確認密碼
      selsignUppacfhtml: '',
      // 公司名稱
      selcomhtml: '',
      // 統一編號
      selTaxhtml: '',
      // 登記地址
      seladdhtml: '',
      // 聯絡電話
      selphonehtml: '',
    }
  },
  methods: {
    // 賣家註冊 檢查
    sellersignUp(event) {

      // 驗證信箱格式
      // 信箱正規式表達
      const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if ((this.selsignUpachtml).search(emailRule) != -1) {
      } else {
        this.selsignUpachtml = '';
        this.selsignUpacpla = '信箱格式錯誤';
        this.selsignUpac = true;
        event.preventDefault();
      }

      // 密碼空白檢查
      if (this.selsignUppapla == '密碼' && this.selsignUppahtml == '') {
        this.selsignUppapla = '密碼不可為空白';
        this.selsignUppa = true;
        event.preventDefault();
      }

      // 確認密碼空白檢查
      if (this.selsignUppacfpla == '確認密碼' && this.selsignUppacfhtml == '') {
        this.selsignUppacfpla = '確認密碼不可為空白';
        this.selsignUppacf = true;
        event.preventDefault();
      }

      // 密碼及確認密碼需相同
      if (this.selsignUppahtml != this.selsignUppacfhtml) {
        this.selsignUppahtml = '';
        this.selsignUppacfhtml = '';
        this.selsignUppapla = '與確認密碼相異';
        this.selsignUppacfpla = '與密碼相異';
        this.selsignUppa = true;
        this.selsignUppacf = true;
        event.preventDefault();
      }

      // 密碼字數限制
      if (this.selsignUppahtml.length < 8) {
        this.selsignUppahtml = '';
        this.selsignUppacfhtml = '';
        this.selsignUppapla = '密碼字數小於8位數';
        this.selsignUppacfpla = '密碼字數小於8位數';
        this.selsignUppa = true;
        this.selsignUppacf = true;
        event.preventDefault();
      }

      // 公司名稱空白檢查
      if (this.selcompla == '公司名稱' && this.selcomhtml == '') {
        this.selcompla = '公司名稱不可為空白';
        this.selcom = true
        event.preventDefault();
      }

      // 統一編號
      this.selTax = true
      this.seladd = true
      this.selphone = true
      event.preventDefault();
    },
  },
});

new Vue({
  el: '#signUpsignIn',
  //el是vue的固定屬性，el:document.getElementById('signUp'),
  data: { //變數放這裡
    act: '',
    content: 'member',
    // different part
    moveR: '',
    moveL: '',
    overlay: '',
    overlaycontainer: '',
    movesignUpmm: '',
    movesignInmm: '',
    // isA: true,

    // input 的紅框
    // 帳號紅框
    loginredac: '',
    // 密碼紅框
    loginredpa: '',

    // 帳號 placeholder
    loingacplace: '信箱',

    // 帳號 html
    loginachtml: '',

    // 密碼 placeholder
    loingpaplace: '密碼',

    // 密碼 html
    loginpahtml: '',

    // 登入按鍵 登入type更改
    logintype: 'button',
  },
  methods: {
    activeButton(item) {
      if (this.act != false) {
        this.act = false
        this.content = item
        // console.log(this.content);
      }
    },
    activeButton1(item) {
      if (this.act != true) {
        this.act = true
        this.content = item
      }
    },
    signUpR() {
      this.moveR = true
      this.moveL = false
      this.overlay = false
      this.overlaycontainer = false
      this.movesignUpmm = false
      this.movesignInmm = false
    },
    signInL() {
      this.moveR = false
      this.moveL = true
      this.overlay = true
      this.overlaycontainer = true
      this.movesignUpmm = true
      this.movesignInmm = true
    },
    loginfun(event) {

      // 信箱空白檢查
      if (this.loingacplace == '信箱' && this.loginachtml == '') {
        // alert('信箱是空的');
        this.loingacplace = '信箱不可為空白';
        this.loginredac = true;
        event.preventDefault();
      }

      // 密碼空白檢查
      if (this.loingpaplace == '密碼' && this.loginpahtml == '') {
        // alert('信箱是空的');
        this.loingpaplace = '密碼不可為空白';
        this.loginredpa = true;
        event.preventDefault();
      }

      // 驗證信箱格式
      // 信箱正規式表達
      const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if ((this.loginachtml).search(emailRule) != -1) {
      } else {
        this.loginachtml = '';
        this.loingacplace = '信箱格式錯誤';
        this.loginredac = true;
        event.preventDefault();
      }

      // 密碼字數限制
      if (this.loginpahtml.length < 8) {
        this.loginpahtml = '';
        this.loingpaplace = '密碼字數小於8位數，密碼格式錯誤';
        this.loginredpa = true;
        event.preventDefault();
      }

      // 以上條件沒問題就submit
      if (this.loginredac != true && this.loginredpa != true && this.loginachtml != '' && this.loginpahtml != '') {
        this.logintype = 'submit';
        event.target.submit();
      }
    },

    // 登入信箱input 回復原狀
    clearredac() {
      this.loginachtml = '';
      this.loingacplace = '信箱';
      this.loginredac = false;
    },

    // 登入密碼input 回復原狀
    clearredpa() {
      this.loginpahtml = '';
      this.loingpaplace = '密碼';
      this.loginredpa = false;
    }
  },
  mounted() {
    (function () {
      axios.post('../PHP/Frontend/sessionR.php').then(function (res) {
        checkdata = res.data;
        // 測試用
        // if (checkdata != '') {
        //   // console.log(checkdata);
        //   // nav.$data.userid = data;
        //   // nav.$data.member = './mymember.html';
        // }
      })
    }());
  },
});

function doFirst() {
  // 會員登入
  changeTOmember = document.getElementsByClassName('changeTOmember')[0];
  // 註冊
  changeTosignup = document.getElementsByClassName('changeTosignup')[0];

  // 會員登入(函式)
  changeTOmember.addEventListener('click', changeTOmemberf);
  // 註冊(函式)
  changeTosignup.addEventListener('click', changeTosignupf);
}

// 會員登入(函式)
function changeTOmemberf() {
  signUp = document.getElementById('signUp');
  signUp.classList.add('signUpmm');
  signUp.classList.add('rwdsignUp');
  signIn = document.getElementById('signIn');
  signIn.classList.add('signInmm');
  signIn.classList.add('rwdsignIn');
  overlayContainer = document.getElementById('overlayContainer');
  overlayContainer.classList.add('overL');
  // 解決會員登入的小問題
  // window.addEventListener('resize', back);
}
// 註冊(函式)
function changeTosignupf() {
  signUp = document.getElementById('signUp');
  signUp.classList.remove('signUpmm');
  signUp.classList.remove('rwdsignUp');
  signIn = document.getElementById('signIn');
  signIn.classList.remove('signInmm');
  signIn.classList.remove('rwdsignIn');
  if (!signUp.classList.contains('rwdsignUp')) {
    signUp.classList.add('signUpmm');
    // signUp.classList.add('rwdsignUp');
    signIn.classList.add('signInmm');
    // signIn.classList.add('rwdsignIn');
    overlayContainer.classList.add('overL');
  }
}
window.addEventListener('load', doFirst);
document.addEventListener("click", doFirst);
