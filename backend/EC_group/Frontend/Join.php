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

<form id="fm" method="POST" action="JoinR.php">
<div class="Car_">
	<div class="TOPtitle"></div>
	<table >
		<tr>
    		<td>
                <span>
                    自訂帳號 <input type="text" id="account" name="account" value=""/><br>
                    自訂密碼 <input type="password" id="pwd" name="pwd"  value=""/>
                </span>
            </td>								
        </tr>
	</table>
    <br />  
    <div>                  	        	
        <input type="submit" class="sami _S_" value="送出" onclick="return doSubmit();">
    </div>
</div>
</form>
<?php
	include("Footer.php");
?>