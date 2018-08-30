<template>
  <div class="user-bar-wrap">
    <div class="user-bar">
      <a class="user-bar-btn user-bar-btn-focus">
        <i class="ico-bowl-fill"></i>
        <span class="user-bar-btn-txt">首页</span>
      </a>
      <a class="user-bar-btn" >
        <i class="ico-paper"></i>
        <span class="user-bar-btn-txt">订单</span>
      </a>
      <a class="user-bar-btn" >
        <i class="ico-user"></i>
        <span class="user-bar-btn-txt">我的</span>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'user-bar',
    data () {
      return {
        title: 'user-bar',
      }
    },
    methods: {

    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .user-bar-wrap {
    width: 100%;
    position: fixed;
    bottom: 0;
    .user-bar {
      width: 100%;
      height: 56px;
      border-top: 1px solid #b6b6b6;
      background-color: rgba(246, 246, 246, 0.95);
      text-align: center;
      overflow: hidden;
      z-index: 100;
      .user-bar-btn {
        color: #999;
        height: 100%;
        width: 33%;
        float: left;
        .user-bar-btn-txt {
          display: block;
          font-size: 11px;
        }
        i {
          display: block;
          width: 25px;
          height: 25px;
          margin: 5px auto;
        }
        .user-bar-btn-focus {
          color: #333;
        }
      }
    }
  }
</style>
