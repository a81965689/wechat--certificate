<template>
  <div class="detail">
    <header>
      <router-link id="back" tag="div" to="/">
      </router-link>
     <h6>证书详情</h6>
     <div id="talk"></div>
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
        id:'',
        userid:'',
        listdata:[
          {listname:"项目名称",datas:''},{listname:"颁证日期",datas:''},{listname:"到期日期",datas:''},{listname:"下次维护日",datas:''},{listname:"认证机构",datas:''},{listname:"证书状态",datas:''}
        ],
    }
  },
  mounted(){
    if(!this.$Cookies.get("logininfo")){
        this.$router.push({
      name:"login"
    })
    }else{
      this.getdata()
    }
    
  },
  methods:{
    getdata:function(){
      let info=this.$route.query;
        this.id=info.id;
        this.userid=info.userid;
        this.axios({
          method:'post',
          url:this.$api.api.detail,
          data:{order_id:this.id,user_id:this.userid}
        })
        .then((msg)=>{
          let info=msg.data.data
          this.listdata[0].datas=info.certificate_name;
          this.listdata[1].datas=info.due_date;
          this.listdata[2].datas=info.issuing_date;
          this.listdata[3].datas=info.next_maintenance_day;
          this.listdata[4].datas=info.certificate_authority;
          this.listdata[5].datas=info.status
        })
    }
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
