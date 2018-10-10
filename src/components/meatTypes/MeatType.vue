<template>
  <div>
    <div class="clearfix typesBox">
      <a class="types" @click="toSearch('美食')">
        <div class="circle" style="background-color: #F7B55D">
          <i class="iconfont icon-meishi"></i>
        </div>
        <span>美食</span>
      </a>
      <a class="types" @click="toSearch('美团城市')">
        <div class="circle" style="background-color: #9874DB">
          <i class="iconfont icon-chaoshi"></i>
        </div>
        <span>美团城市</span>
      </a>
      <a class="types" @click="toSearch('生鲜蔬果')">
        <div class="circle" style="background-color: #17C295">
          <i class="iconfont icon-ziyuan"></i>
        </div>
        <span>生鲜蔬果</span>
      </a>
      <a class="types" @click="toSearch('美团专递')">
        <div class="circle" style="background-color: #F7B55D">
          <i class="iconfont icon-meituanwaimai"></i>
        </div>
        <span>美团专递</span>
      </a>
      <a class="types" @click="toSearch('晚餐优选')">
        <div class="circle" style="background-color: #17C295">
          <i class="iconfont icon-wancan"></i>
        </div>
        <span>晚餐优选</span>
      </a>
      <a class="types" @click="toSearch('甜点饮品')">
        <div class="circle" style="background-color: #4EA8EC">
          <i class="iconfont icon-tianpin"></i>
        </div>
        <span>甜点饮品</span>
      </a>
      <a class="types" @click="toSearch('小吃馆')">
        <div class="circle" style="background-color: #9874DB">
          <i class="iconfont icon-xiaochi14"></i>
        </div>
        <span>小吃馆</span>
      </a>
      <a class="types" @click="toSearch('家常菜')">
        <div class="circle" style="background-color: #F2725D">
          <i class="iconfont icon-chaocaishouru"></i>
        </div>
        <span>家常菜</span>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MeatType',
    data () {
      return {
        title: 'MeatType',
        key: ''
      }
    },
    methods: {
      toSearch(key) {
        this.$router.push({path: '/search', query: { key }});
      }
    },

  }
</script>
<style scoped>
  .typesBox{
    width: 100%;
    margin: 10px 0;
    font-size: 14px;
  }
  .types{
    width: 25%;
    cursor: pointer;
    text-align: center;
    float: left;
  }
  .circle{
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.15rem auto;
    border-radius: 50%;
    background-color: #ccc;
  }
  .iconfont{
    font-size: .9rem;
    line-height: 1.35rem;
    color: #FFFFFF;
  }
</style>
