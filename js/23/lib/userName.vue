<script>
export default {
    template:`
    <div>
        // <span>{{account}}</span>
    </div>
    `,
    data(){
        return{
            account: 'abc',
        }
    },
    created(){
        this.account= $.cookie('account');
    }
}
</script>