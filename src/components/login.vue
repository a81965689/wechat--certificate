<template>
  <div class="login">
    <div class="phonearea">
      <div class="phone">
        <input placeholder="请输入手机号" v-model="phonenumber">
        <span @touchstart='sendMessage'>{{text}}</span>
      </div>
      <div class="textcode">
        <input placeholder="请输入验证码">
      </div>
    </div>
    <!-- <slider></slider> -->
    <div class='tip' v-bind:class="[{show:tipshow}]">{{msg}}</div>
    <div class="submit" @click="login">确认绑定</div>
  </div>
</template>

<script>
// import slider from '../components/slidebar';
// import wx from 'weixin-js-sdk'
export default {
  name: 'login',
  data () {
    return {
      phonenumber:'',
      text:"发送验证码",
      msg:'',
      tipshow:0
      // verifying:''
    }
  },
  components:{
    // slider
    },
    mounted(){
      //接收子组件传过来的验证数据判断是否已经验证
      // this.get()
    },
  methods:{
    // get:function(){
    //     eventBus.$on("Verifying",(val)=>{
    //     this.verifying=val
    //   })
    // },
    //显示错误提示
    shwotip:function(){
        this.tipshow=1;
        setTimeout(()=>{
        this.tipshow=0;
       },2500)
    },
    sendMessage:function(){
     if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.phonenumber))){
       this.msg="手机号码错误请重新输入";
        this.shwotip()
    }else{
      let n=60
      var timer=setInterval(() => {
        if(n>0){
          this.text=n--+'s'
        }else{
          this.text="再次发送验证码";
          clearInterval(timer)
        }
      }, 1000);
    }
    },
    login:function(){
      // if(this.verifying){
      //   console.log(this.verifying)
      // }else{
      //   this.msg="请先滑动滑块验证";
      //   this.shwotip()
      // }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.phonearea{
  width: 624/75rem;
  height: 280/75rem;
  background-color:#F7F7F7;
  margin:140/75rem auto 0;
  border:2/75rem solid rgba(232,232,232,0.9);
  border-radius: 10/75rem;
  input{
    background-color: #F7F7F7;
  }
  .phone{
    height: 50%;
    width: 574/75rem;
    border-bottom: 1px solid rgba(183,183,183,0.2);
    margin: 0 auto;
    box-sizing: border-box;
    background-image: url(../assets/phone.png);
    background-size:42/75rem 69/75rem;
    background-repeat: no-repeat;
    background-position: 40/75rem 40/75rem;
    position: relative;
    input{
      transform: translate3d(110/75rem,40/75rem,0);
      height: 64/75rem;
      width: 260/75rem;
    }
    span{
      background-color: #13D1BE;
      font-size: 24/75rem;
      color: #FCFCFC;
      display: inline-block;
      width: 170/75rem;
      height: 48/75rem;
      text-align:center;
      line-height: 48/75rem;
      transform: translate3d(130/75rem,40/75rem,0);
      border-radius: 6/75rem;
    }
    .counting{
    background-color: #666;
    }
  }
  .textcode{
    height: 50%;
    width: 574/75rem;
    margin: 0 auto;
    box-sizing: border-box;
    background-image: url(../assets/textcode.png);
    background-size:42/75rem 60/75rem;
    background-repeat: no-repeat;
    background-position: 40/75rem 48/75rem;
    input{
    transform: translate3d(110/75rem,40/75rem,0);
    height: 64/75rem;
    width: 260/75rem;
    }
  }
}
  .submit{
    width: 516/75rem;
    height: 64/75rem;
    margin: 0 auto;
    background-color: #13D1BE;
    color: #fff;
    font-size: 32/75rem;
    text-align: center;
    line-height: 64/75rem;
    border-radius: 10/75rem;
    transform: translateY(50/75rem);

  }
  .tip{
    width:300/75rem;
    height: 100/75rem;
    margin: 0 auto;
    transform: translateY(30/75rem);
    background-color:rgba(0,0,0,0.1);
    border-radius: 10/75rem;
    text-align: center;
    line-height: 100/75rem;
    font-size: 24/75rem;
    transition: 0.5s;
    opacity: 0;
  }
  .show{
    transition: 0.5s;
    opacity: 1;
  }

</style>
