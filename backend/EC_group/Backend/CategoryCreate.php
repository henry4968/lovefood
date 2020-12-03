<?php
    include("LoginCheck.php");
?>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>EC管理後台</title>
</head>
<script type="text/javascript">
    function doSubmit() {
        //判斷CateName是否有值?
        if (document.getElementById('CateName').value == '') {
            alert("請填寫[分類名稱]");
            return false;
        }

        //判斷Status(radio button)是否有值?
        var isChecked = false;
        var obj = document.getElementsByName('Status');    
        for(var i=0; i< obj.length; i++){
            if (obj[i].checked) {
                isChecked = true;
            }
        }    
        if(!isChecked){
            alert("請填寫[是否上架]");
            return false;
        }    
    }
</script>

<body bgcolor="#ffffff" leftmargin="0" marginwidth="0" topmargin="30" align="center">
    <tr>
        <td>新增分類</td>
    </tr>

    <form method="post" action="CategoryCreateR.php">

        <tr>
            <td>

                <table letter-spacing: 5px; " cellpadding=" 0" cellspacing="0" border="1" align="center">
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">分類名稱</td>
                        <td align="center"><input type="text" id="CateName" name="CateName" /></td>
                    </tr>
                    <tr>
                        <td class="s4" align="center" style="background-color:#FFF0F5;">狀態</td>
                        <td align="center">
                            <input type="radio" name="Status" value="2" checked/>上架
                            &nbsp;&nbsp;
                            <input type="radio" name="Status" value="1"/>下架
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center">
                <br>
                <input type="button" name="cancel" id="cancel" value="取消" onclick="javascript: history.go(-1);">&nbsp;&nbsp;
                <input type="submit" name="submitBtn" id="submitBtn" value="送出" onclick="return doSubmit();">
            </td>
        </tr>

    </form>

</body>

</html>