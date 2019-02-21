<template>
  <div class="detail">
    <header>
      <div id="back">
      </div>
     <h6>证书详情</h6>
     <a id="talk" href="http://chat10.live800.com/live800/chatClient/chatbox.jsp?companyID=1103633&configID=236115&jid=5862580955"></a>
    </header>
    <div class="list">
      <div class="title">
      证书基本信息
    </div>
    <div class="info">
      <ul>
        <li v-for="(item,index) in listdata" :key="index"><h2>{{item.listname}}</h2><h2>{{item.datas}}</h2></li>
      </ul>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      // listdata:{
      //   itemname:["项目名称","颁证日期","到期日期","下次维护日","认证机构","证书状态"],
      //   itemdata:[21414561436416341635]
      // }
        listdata:[
          {listname:"项目名称",datas:"iso9001"},{listname:"颁证日期"},{listname:"到期日期"},{listname:"下次维护日"},{listname:"认证机构"},{listname:"证书状态"}
        ],
        dats:{
          xiangmu:'iso9001',
          bangzheng:"201801001",
          expire:"20180909",
          next:"2015310",
          org:"认我行",
          status:"vailid"
        }
    }
  },
  mounted(){
    // for(let i in this.dats){
    //   console.log(i)
    //   console.log(this.dats[i])
    // }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.detail{
  background-color: #F2F2F2;
  min-height: 100vh;
}
header{
  width: 100%;
  height: 68/75rem;
  background-color: #13D1BE;
  display: flex;
  justify-content: space-between;
  #back{
    width: 100/75rem;
    height: 100%;
    line-height: 68/75rem;
    background-image: url(https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/back.png);
    background-size:15/75rem 30/75rem;
    background-repeat: no-repeat;
    background-position:48/75rem center;
  }
  h6{
    font-size: 26/75rem;
    font-weight: bold;
    color: #FCFAFB;
    line-height: 68/75rem;
  }
  #talk{
    display: block;
    width: 100/75rem;
    height: 100%;
    line-height: 68/75rem;
    background-image: url(https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/talk.png);
    background-size:44/75rem 40/75rem;
    background-repeat: no-repeat;
    background-position:0 center;
  }
}
.list{
  padding-top: 34/75rem;
  background-color: #fff;

.title{
  width: 698/75rem;
  margin: 0 auto;
  font-size: 32/75rem;
  font-weight: 600;
  color: #FC5B0B;
  display: flex;
  align-items: center;
}
.title::before{
  content: "";
  display: inline-block;
  width: 6/75rem;
  height: 32/75rem;
  background-color: #FC5B0B;
  border-radius: 3/75rem;
  margin-right: 10/75rem;
}
.info{
  width: 698/75rem;
  height: auto;
  margin: 0 auto;
  li{
    width: 698/75rem;
    height: 100/75rem;
    line-height: 100/75rem;
    border-bottom: 2px solid #F4F4F4;
    display: flex;
    justify-content: space-between;
    h2{
      font-size: 28/75rem;
      font-weight: normal;
      color: #444444;
    }
  }
}
}
</style>
