let all = new Vue({
    el:'#all',
    data:{
        count:0,
        cartArray:0,
        // tableData:null,
    },
    beforeMount(){
        const self = this;
        console.log(location.search)

        const urlParams = new URLSearchParams(location.search);
        const pdNum = urlParams.get('pdID')
        $.ajax({
            
            url:'../PHP/Frontend/EC_07/unitProduct.php',
            data:{pdNum},
            dataType:'JSON',
            type:'POST',
            success:function(res){
                console.log(res);
                self.tableData = res;
            },
            error:function(res,error){
                console.log(error);
            }
        })

    },
    methods: {
        sub(){
            
        },
        addCart(){
            this.cartArray.push(this.count);
            if(this.count==0){
                this.cartArray.pop();
            }
        }
    },
});