<template>
  <div class="slidebar">
      <div id="slider">
      <!-- <div id="sliderarea"> -->
        <span>{{msg}}</span>
        <div id="bgcolor" ref='bgcolor'></div>
        <div id="sliderblock" @touchstart="slidermove($event)" ref="sliderblock"></div>
      <!-- </div> -->
      </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: '',
  data () {
    return {
      beginScreenX:'',
      movingScreenX:'',
      endScreenX:'',
      Left:'',
      boxWidth:'',
      blockWidth:'',
      msg:"滑动验证"
    }
  },
  methods:{
        slidermove:function(event){
          event.preventDefault()
         //设置点击触摸开始时的初始位置
          this.beginScreenX=event.touches[0].clientX;
          this.$refs.sliderblock.addEventListener("touchmove",(event)=>{
          this.movingScreenX=event.touches[0].clientX;
          this.Left=this.movingScreenX-this.beginScreenX;
          var boxWidth=document.getElementById("slider");
          var blockWidth=document.getElementById("sliderblock");
          this.boxWidth=parseFloat(window.getComputedStyle(boxWidth).width);
          this.blockWidth=parseFloat(window.getComputedStyle(blockWidth).width);
          this.$refs.bgcolor.style.cssText='width:'+this.Left+"px";
          this.$refs.sliderblock.style.cssText='transform:translateX('+this.Left+'px)';
           if(this.Left>=(this.boxWidth-this.blockWidth)){
              this.Left=this.boxWidth-this.blockWidth;
              this.$refs.bgcolor.style.cssText='width:'+this.Left+"px";
              this.$refs.sliderblock.style.cssText='transform:translateX('+this.Left+'px)';
              //验证通过以后通过事件车传递验证通过
              eventBus.$emit("Verifying","passing")
            }
            if(this.Left<0){
              this.Left=0;
              this.$refs.bgcolor.style.cssText='width:'+this.Left+"px";
              this.$refs.sliderblock.style.cssText='transform:translateX('+this.Left+'px)';
            }
         },false);
          document.getElementById("sliderblock").addEventListener("touchend",(event)=>{
            if(this.Left<(this.boxWidth-this.blockWidth)){
              this.Left=0;
              this.$refs.bgcolor.style.cssText='width:0px';
              this.$refs.sliderblock.style.cssText='transform:translateX(0px)';
            };
          },false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #slider{
    width: 574/75rem;
    height: 1rem;
    background-color:#efefef;
    margin: 0.5rem auto 0;
    display: flex;
    position: relative;
    #sliderblock{
      width: 1.2rem;
      height: 1rem;
      background-color:red;
      z-index: 2;
    }
    #bgcolor{
      background-color:grey;
      height: 1rem;
      position: absolute;
    }
    span{
      position: absolute;
      color: blue;
      z-index: 1;
      line-height: 1rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
