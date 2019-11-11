<template>
    <div>
        <div class="logindiv">
            <input type="text" name="" id="" placeholder="网易邮箱账号" v-model="user"><br>
            <input type="text" name="" id="" placeholder="密码" v-model="pwd"><br>
            <p>使用 <span style="color:blue;">网易账号管家</span> ，全面保护您的账号！</p>
            <button @click="loginbtn()">登录</button>
            <p>忘记密码？未注册</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import '../../mock/mock'
export default {
    data() {
        return {
            user:'',
            pwd:''
        }
    },
    methods: {
        async loginbtn(){
            let logindata=await axios.get('/api/login')
            console.log(logindata)
            let data=logindata.data[0]
            if(data.user===this.user&&data.pwd===this.pwd){
                window.localStorage.setItem('logindata',JSON.stringify(data))
                this.$router.push('/')
            }else{//输入错误提示
            alert('账号或密码输入错误')
            this.user=''
            this.pwd=''
        }
        }
    }
}
</script>