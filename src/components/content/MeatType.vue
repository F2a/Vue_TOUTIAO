<template>
  <div>
    <div class="clearfix typesBox">
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
</style>
