<template>
  <div class="myinfo">
		<div class="header">
			我的证书
			<div class="logout" @click=logout()>注销</div>
		</div>
   <div class="tabbar">
        <div class="bar">
          <ul>
            <li class="all" @click=getdata(0,0)>
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/all.png">
              <p :class="num==0?'red':''">全部证书</p>
            </li>
            <li class="contract" @click=getdata(1,1)>
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/contract.png">
              <p :class="num==1?'red':''">合同评审</p>
            </li>
            <li class="plane" @click=getdata(2,2)>
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/plane.png">
              <p :class="num==2?'red':''">计划排定</p>
            </li>
            <li class="doit" @click=getdata(3,3)>
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/doit.png">
              <p :class="num==3?'red':''">审核实施</p>
            </li>
            <li class="passed" @click=getdata(4,4)>
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/passed.png">
              <p :class="num==4?'red':''">已出证</p>
            </li>
            <li class="annual" @click=getdata(5,5)>
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/annual.png">
              <p :class="num==5?'red':''">待年审</p>
            </li>
          </ul>
        </div>
    </div>
    <div class="list">
      <div class="title">
        <div>项目名称</div>
        <div>订单时间</div>
        <div>订单金额</div>
        <div>订单状态</div>
      </div>
      <div class="listdata">
        <router-link v-for='(item,index) in data' :key="index" :to="{name:'detail',query:{id:item.id,userid:userid}}" tag="div" class="list_row">
          <div class="cer_name">{{item.certificate_name}}</div>
          <div class="time">{{item.order_time}}</div>
          <div class="money">{{item.amount}}</div>
          <div class="status">{{item.order_status}}</div>
        </router-link>
      </div>
    </div>
    <div class="companyname">
      <p>公司名称：{{companyname}}</p>
      <p>企业对接人：{{dockman}}</p>
    </div>
    <bottombar></bottombar>
  </div>
</template>

<script>
import bottombar from '../components/bottombar';
export default {
  name: 'myinfo',
  data () {
    return {
      num:0,
      userid:'',
      companyname:'',
      dockman:'',
      usertel:'',
      data:[],//渲染到页面上的数据
      backup:[],//备份复制的数据
      btn:[{classname:'all',sequence:0,src:'https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/all.png',title:'全部证书',status:0},{classname:'contract',sequence:1,src:'https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/contract.png',title:'合同评审',status:1},{classname:'plan',sequence:2,src:'https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/contract.png',title:'计划排定',status:2},{classname:'doit',sequence:3,src:'https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/doit.png',title:'审核实施',status:3},{classname:'passed',sequence:4,src:'https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/passed.png',title:'已出证',status:4},{classname:'annual',sequence:5,src:'https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/annual.png',title:'待年审',status:5}]
    }
  },
  mounted(){
    if(!this.$Cookies.get("logininfo")){
            this.$router.push({
          name:"login"
        })
    }else{
      //cookie里面获取过来的是字符串先转成对象才能使用
      let datas=JSON.parse(this.$Cookies.get("logininfo"));
      this.userid=datas.userid;
      this.companyname=datas.companyname;
      this.usertel=datas.usertel;
      this.dockman=datas.companycontacts;
      this.axios({
        method:"post",
        url:this.$api.api.orderform,
        data:{page:1,user_id:this.userid}
      })
      .then((msg)=>{
        this.data=msg.data.data
        let info=msg.data.data
        //把时间戳转换成日期
        for(let i in info){
          this.data[i].order_time=this.timestampToTime(info[i].order_time)
        }
        //复制一份筛选条件时更改副本；
        this.backup=this.data;
      })
    }
  },
  components:{
    bottombar
  },
  methods:{
	  logout:function(){
		  this.$Cookies.remove("logininfo")
		  this.$router.push({name:'login'})
		  
	  },
    getdata:function(n,status){
        this.num=n;
        if(status==0){
          this.data=this.backup;
          return false;
        }
        this.data=[];//先清空数据在筛选对应数据渲染
        for(let i=0;i<this.backup.length;i++){
          if(this.backup[i].status==status){
            this.data.push(this.backup[i])
          }
        }
    },
    timestampToTime:function(timestamp){
      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = this.change(date.getDate()) + ' ';
      return Y + M + D;
    },
    change:function(t) {
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
	box-sizing: border-box;
	width: 750/75rem;
	height: 88/75rem;
	padding: 0 26/75rem;
	background-color: #13D1BE;
	text-align: center;
	font-size: 36/75rem;
	font-weight: bold;
	line-height: 88/75rem;
	color: #fff;
	.logout{
		float: right;
		font-size:24/75rem;
	}
}
.myinfo{
  background-color: #F2F2F2;
  min-height: 100vh;
}
.tabbar{
  width:100%;
  height: 160/75rem;
}
.tabbar::before{
  display: block;
  content: '';
  width: 100%;
  height: 124/75rem;
}
.bar{
  width: 698/75rem;
  height: 140/75rem;
  border-radius: 10/75rem;
  margin: 0 auto;
  background-color:#fff;
  transform: translateY(-104/75rem);
  box-shadow: 2/75rem 2/75rem 3/75rem rgba(160,160,160,0.5);
  display: flex;
  align-items: center;
    ul{
      width: 100%;
      display: flex;
      justify-content: space-around;
        li{
        font-size: 24/75rem;
          img{
            display: block;
            margin:0 auto; 
          }
          p{
            padding-top: 15/75rem;
          }
          .red{
            color: #FF4810;
          }
      }
      }
      }
.all>img{
  width: 37/75rem;
  height: 44/75rem;
}
.contract>img{
  width: 43/75rem;
  height: 44/75rem;
}
.contract::after,.plane::after,.doit::after,.passed::after{
  content: '';
  background-image: url(https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/arrow.png);
  background-repeat:no-repeat;
  display: block;
  background-size:45/75rem 6/75rem;
  width: 45/75rem;
  height: 6/75rem;
  transform: translate3d(85/75rem,-75/75rem,0)
}
.passed::after{
  transform: translate3d(63/75rem,-75/75rem,0)
}
.plane>img,.passed>img{
  width: 40/75rem;
  height: 43/75rem;
}
.doit>img{
  width: 45/75rem;
  height: 45/75rem;
}
.annual>img{
  width: 46/75rem;
  height: 44/75rem;
}
.list{
  width: 698/75rem;
  height: 683/75rem;
  margin: 20/75rem auto 45/75rem;
  background-color: #fff;
  border-radius: 10/75rem;
  box-sizing: border-box;
  padding: 25/75rem;
  // overflow-y:scroll ;
  .title{
    display: flex;
    justify-content: space-between;
    font-size: 28/75rem;
    color: #444444;
    background-color: #fff;
  }
}
.listdata{
  overflow-y: scroll;
  height:600/75rem;
::-webkit-scrollbar{  
    width: 10px;  
    height: 10px;  
    background-color: #c1e2f1;  
}  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;  
    background-color: #c1e2f1;  
}  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #1f7ebe;  
}
  .list_row{
  height: 80/75rem;
  border-bottom: 1px solid #F4F4F4;
  line-height: 80/75rem;
  font-size: 24/75rem;
  color: #666666;
  display: flex;
  .cer_name,.time,.money{
    width: 180/75rem;
  }
}
}

.companyname{
  width: 698/75rem;
  height: 120/75rem;
  background-color: #13D1BE;
  margin: 0 auto 100/75rem;
  border-radius: 10/75rem;
  p{
    font-size: 32/75rem;
    font-weight: bold;
    color: #fff;
    height: 60/75rem;
    padding-left: 85/75rem;
    box-sizing: border-box;
    padding-top: 12/75rem;
  }
}
</style>
