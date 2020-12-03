
// main
Vue.component('member', {
    // data() {
    //   return {
    //     isA: true,
    //   };
    // },
    template: `
        <div class="member">
          <form id="member" method="post" action="#">
            <input type="email" placeholder="帳號 請輸入信箱" />
            <input type="password" placeholder="密碼" />
            <input type="password" placeholder="確認密碼" /><div class="checkEmail">
              <input class="checkEmail" type="text" placeholder="驗證密碼">
              <button class="checkEmail" type="button">發送驗證碼</button>
            </div>
            <button class="subSignup" type="submit">註冊</button>
            <button class="changeTOmember" type="button">會員登入</button>
          </form>
        </div>
      `,
    // methods: {
    //   changeTOmember() {
    //     this.isA = !this.isA;
    //     console.log(this.isA);
    //   },
    // },
});

Vue.component('seller', {
    template: `
        <div class="seller">
          <form id="seller" method="post" action="#">
            <input class="seller" type="email" placeholder="信箱" />
            <input class="seller" type="password" placeholder="密碼" />
            <input class="seller" type="password" placeholder="確認密碼" />
            <input class="seller" type="text" placeholder="公司名稱" />
            <input class="seller" type="text" placeholder="統一編號" />
            <input class="seller" type="text" placeholder="登記地址" />
            <input class="seller" type="text" placeholder="聯絡電話" />
            <button class="seller" type="submit">註冊</button>
          </form>
        </div>
      </div>
      `,
});

new Vue({
    el: '#signUpsignIn',
    //el是vue的固定屬性，el:document.getElementById('signUp'),
    data: { //變數放這裡
        act: '',
        content: 'seller',
        // different part
        moveR: '',
        moveL: '',
        overlay: '',
        overlaycontainer: '',
        movesignUpmm: '',
        movesignInmm: '',
        // isA: true,
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
// 
// function back() {
//   winwidth = window.innerWidth;
//   if (winwidth >= 701) {
//     // signUp
//     signUp = document.getElementById('signUp');
//     signUp.classList.remove('rwdsignUp');
//     signUp.classList.remove('signUpmm');
//     // signIn
//     signIn = document.getElementById('signIn');
//     signIn.classList.remove('rwdsignIn');
//     signIn.classList.remove('signInmm');
//     // overlayContainer
//     overlayContainer = document.getElementById('overlayContainer');
//     overlayContainer.classList.remove('overL');
//     // container
//     container = document.getElementsByClassName('container')[0];
//     container.classList.remove('overm');
//     // signInL
//     signInL = document.getElementsByClassName('signInL')[0];
//     signInL.classList.remove('msignInL');
//     // signUpR
//     signUpR = document.getElementsByClassName('signUpR')[0];
//     signInL.classList.add('msignUpR');
//   }
// }
window.addEventListener('load', doFirst);
document.addEventListener("click", doFirst);

// window.addEventListener('click', function (e) {
//   if (e.target.classList.contains('changeTosignup')) {
//     signUp = document.getElementById('signUp');
//     signUp.classList.remove('rwdsignUp');
//     signIn = document.getElementById('signIn');
//     signIn.classList.remove('rwdsignIn');
//     console.log(e.target.id);
//   };
//   if (e.target.id == "changeTosignup") {
//     signUp = document.getElementById('signUp');
//     signUp.classList.remove('rwdsignUp');
//     signIn = document.getElementById('signIn');
//     signIn.classList.remove('rwdsignIn');
//     console.log(signUp);
//     console.log(signIn);
//   };
// });