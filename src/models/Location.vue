<template>
  <div>
    <header class="header ElemeHeader-root">
      <div class="ElemeHeader-wrapper ElemeHeader-gradientBg ElemeHeader-fixed" style="z-index: 8844;">
        <div class="ElemeHeader-left">
          <router-link :to="{ path: 'Seller'}" replace>
            <a class="back" />
          </router-link>
        </div>
        <h1 class="ElemeHeader-center">选择收货地址</h1>
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    name: 'Location',
    data () {
      return {
        title: 'Location',
      }
    },
    methods: {}
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .ElemeHeader-root {
    height: 1.15rem;
    .ElemeHeader-fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 8844;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 1.2rem;
      color: #fff;
      font-size: .48rem;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      .ElemeHeader-left {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.2rem;
        height: 1.2rem;
      }
      .ElemeHeader-center {
        position: absolute;
        top: 0;
        left: 50%;
        height: 1.2rem;
        max-width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        font-size: 1em;
        line-height: 1.173333rem;
        transform: translateX(-50%);
      }
    }
    .back {
      margin-top: .3rem;
      margin-left: .35rem;
      width: .32rem;
      height: .32rem;
      display: inline-block;
      border-bottom: .05rem solid #fff;
      border-left: .05rem solid #fff;
      transform: rotate(45deg);
    }
  }
</style>
