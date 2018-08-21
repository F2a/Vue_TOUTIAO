<template>
  <div>
    <div class="header">
      <mt-header
        fixed
        title="header"
        class="home-header"
        style="background-color: transparent"
      >
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="bnrs-wrap">
        <div id="bnrs" class="bnrs">
          <a class="baitem" href="javascript:;" data-app="1">
            <img src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" data-src-retina="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" class="needsclick" style="width: 375px;">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Content',
    data () {
      return {
        title: 'Content',
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .header{
    margin-top: -60px;
  }
  .bnrs-wrap {
    width: 100%;
    height: auto;
    min-height: 100px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
</style>
