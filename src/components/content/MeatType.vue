<template>
  <div>
    <div class="clearBoth typesBox">
      <a class="types">
        <div class="circle"></div>
        <span>美食</span>
      </a>
      <a class="types">
        <div class="circle"></div>
        <span>美团城市</span>
      </a>
      <a class="types">
        <div class="circle"></div>
        <span>生鲜蔬果</span>
      </a>
      <a class="types">
        <div class="circle"></div>
        <span>美团专递</span>
      </a>
      <a class="types">
        <div class="circle"></div>
        <span>晚餐优选</span>
      </a>
      <a class="types">
        <div class="circle"></div>
        <span>甜点饮品</span>
      </a>
      <a class="types">
        <div class="circle"></div>
        <span>小吃馆</span>
      </a>
      <a class="types">
        <div class="circle"></div>
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
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .typesBox{
    width: 100%;
    margin: 10px 0;
  }
  .types{
    width: 25%;
    cursor: pointer;
    text-align: center;
    float: left;
  }
  .circle{
    width: 3rem;
    height: 3rem;
    margin: 0.5rem auto;
    border-radius: 50%;
    background-color: #ccc;
  }
</style>
