<?php
    include("Header.php");
?>
<script type="text/javascript">
    function doSubmit() {
        if (document.getElementById('account').value == '') {
            alert("請填寫[帳號]");
            return false;
        }
        if (document.getElementById('pwd').value == '') {
            alert("請填寫[密碼]");
            return false;
        }        
    }
</script>

<!-- 按下送出後傳送到R -->
<form id="fm" method="POST" action="LoginR.php"> 
<div class="Car_">
	<div class="TOPtitle"></div>
	<table class="cart-item">
		<tr>
    		<td>
                <span>
                    帳號 <input type="text" id="account" name="account" value=""/><br>
                    密碼 <input type="password" id="pwd" name="pwd"  value=""/>
                </span>
            </td>								
        </tr>
	</table>
    <br />  
    <div>                  	
        <input type="button" class="sami _S_" value="加入會員" onclick="location.href='Join.php'">	
        <input type="submit" class="sami _S_" value="登入" onclick="return doSubmit();">
    </div>
</div>
</form>
<?php
	include("Footer.php");
?>