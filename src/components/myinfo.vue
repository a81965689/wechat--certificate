<template>
  <div class="myinfo">
    <div class="tabbar">
        <div class="bar">
          <ul>
            <li class="all" @touchstart=getdata(1)>
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/all.png">
              <p :class="num==1?'red':''">全部证书</p>
            </li>
            <li class="contract" @touchstart=getdata(2)>
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/contract.png">
              <p :class="num==2?'red':''">合同评审</p>
            </li>
            <li class="plane">
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/plane.png">
              <p :class="num==3?'red':''">计划排定</p>
            </li>
            <li class="doit">
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/doit.png">
              <p :class="num==4?'red':''">审核实施</p>
            </li>
            <li class="passed">
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/passed.png">
              <p :class="num==5?'red':''">已出证</p>
            </li>
            <li class="annual">
              <img src="https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/annual.png">
              <p :class="num==6?'red':''">待年审</p>
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
      <div class="listdata" v-for='(item,index) in data' :key="index">
        <router-link :to="{name:'login',params:{id:item.id}}" tag="div" class="list_row">
          <div class="cer_name">{{item.cername}}</div>
          <div class="time">{{item.time}}</div>
          <div class="money">{{item.money}}</div>
          <div class="status">{{item.status}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myinfo',
  data () {
    return {
      num:1,
      data:[{id:5,time:"2019.01.01",status:"订单评审",money:10000,cername:"iso9001"},{id:6, phone:1351,cername:"iso91111"}]
    }
  },
  mounted(){

  },
  methods:{
    getdata:function(n){
        this.num=n
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.myinfo{
  background-color: #F2F2F2;
  height: 100vh;
}
.tabbar{
  width:100%;
  height: 200/75rem;
}
.tabbar::before{
  display: block;
  content: '';
  width: 100%;
  height: 164/75rem;
  background-color: #13D1BE;
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
  .title{
    display: flex;
    justify-content: space-between;
    font-size: 28/75rem;
    color: #444444;
  }
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
</style>
