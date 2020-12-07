        const app = new Vue({
            el:'.containerMem',
            data(){
                return {
                    tableData : null,
                }
            },
            beforeMount() {
                let urlParams = new URLSearchParams(window.location.search);
                const self = this;
                $.ajax({
                    url:'../PHP/backStage/member/profileR.php',
                    type:'GET',
                    data:{id:urlParams.get('id')},
                    success:function(res){
                        console.log();
                        console.log(res);
                        self.tableData = res;
                    },
                    dataType:"json",
                    })

            },
            methods: {
                update(){
                    const self = this;
                    let urlParams = new URLSearchParams(window.location.search);
                    let phone1 = $("input[name='phoneUpdate']").val();
                    let address = $("input[name='address']").val();
                    let id = urlParams.get('id');
                    $.ajax({
                    url:'../PHP/backStage/member/profileUpdate.php',
                    type:'POST',
                    data:{phone1,address,id},
                    success:function(res){
                        console.log(123);
                        
                        console.log(res);
                        self.tableData = res;
                    },
                    dataType:"json",
                })
                },
            }
        })