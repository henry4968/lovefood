<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>EC管理後台</title>
</head>
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

<body bgcolor="#ffffff" leftmargin="0" marginwidth="0" topmargin="30" align="center">
    <tr>
        <td>管理後台使用者登入</td>
    </tr>

    <form method="post" action="LoginR.php">

        <tr>
            <td>

                <table letter-spacing: 5px; " cellpadding=" 0" cellspacing="0" border="1" align="center">
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">帳號</td>
                        <td align="center"><input type="text" id="account" name="account" value="TED101"/></td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">密碼</td>
                        <td align="center"><input type="password" id="pwd" name="pwd"  value="TED101"/></td>
                    </tr>                    
                </table>
            </td>
        </tr>
        <tr>
            <td align="center">
                <br>                
                <input type="submit" name="submitBtn" id="submitBtn" value="送出" onclick="return doSubmit();">
            </td>
        </tr>

    </form>

</body>

</html>