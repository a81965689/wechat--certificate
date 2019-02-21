<template>
  <div class="bottombar">
    <a class="phone" href="tel:13968178413">
      电话
    </a>
    <div class="slogn">
      证书保姆
    </div>
    <router-link class="mine" to="/">
      我的
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'bottombar',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bottombar{
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100/75rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  padding: 0 70/75rem;
  justify-content: space-between;
  .phone{
    background-image: url(https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/phone.png);
    background-size: 47/75rem 47/75rem;
    background-repeat: no-repeat;
    background-position: 0 10/75rem;
    width: 88/75rem;
    height: 100%;
    box-sizing: border-box;
    padding-top:65/75rem;
    color: #8B8B8B;
  }
  .slogn{
    font-size: 36/75rem;
    font-weight: bold;
    color: #13D1BE;
    box-sizing: border-box;
    padding-top: 30/75rem;
  }
  .mine{
    background-image: url(https://rwxoss.oss-cn-hangzhou.aliyuncs.com/gzh/mine.png);
    background-size: 47/75rem 47/75rem;
    background-repeat: no-repeat;
    background-position: 0 10/75rem;
    width: 88/75rem;
    height: 100%;
    box-sizing: border-box;
    padding-top:65/75rem;
    color: #8B8B8B;
  }
}
</style>
