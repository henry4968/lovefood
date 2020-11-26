// header
Vue.component('memfooter', {
  template: `
      <footer id="memfooter">
        <div class="footerborder">
            <div class="footer_logo">
                <a href="#0"><img src="../img/03/memlogofooter.png"></a>
                <p class="copyright">&copyLOVE FOOD All right reserved</p>
            </div>
            <div class="info">
                <a href="#0"><img src="../img/03/memaddress.png">台北市南京東路三段215號5樓</a><br>
                <a href="#0"><img src="../img/03/memphone.png">02- 24708053</a><br>
                <a href="#0"><img src="../img/03/mememail.png">service@lovefood.com</a>
            </div>
        </div>
      </footer>
      `,
});
new Vue({
  el: '#memfooter',
  data: {
    footerId: 'memfooter',
  },
});