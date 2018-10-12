<template>
  <div>
    <div ref="homeHeader" class="header">
      <div :class="['home-header', {'backHeader': transform}]">
        <a class="header-loc" @click="toLocation()">
          <i class="iconfont icon-loc-hollow" />
          <span class="header-loc-txt">
            <span class="header-loc-txt-marquee" data-address="">
              弘林国际大厦
            </span>
          </span>
          <i class="iconfont icon-arrow-right" />
        </a>
        <a class="search-icon-wrap" @click="toSearch()">
          <i class="iconfont icon-search"></i>
          <span class="search-text">搜索美团商家、商品名称</span>
        </a>
      </div>
      <div class="bnrs-wrap">
        <div id="bnrs" class="bnrs">
          <a class="baitem" href="javascript:;" data-app="1">
            <img src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" data-src-retina="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" class="needsclick" style="width: 100%;">
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
        transform: false,
      }
    },
    methods: {
      toSearch(key) {
        this.$router.push({path: '/search', query: { key }});
      },
      toLocation(key) {
        this.$router.push({path: '/location', query: { key }});
      },
    },
    mounted() {
      window.addEventListener('scroll', (e) => {
        console.log(this.transform);
        const scrollPosition = document.body.scrollTop + document.documentElement.scrollTop;
        if(scrollPosition > 30&&!this.transform){
          this.transform = true;
        }else if(scrollPosition < 30&&this.transform){
          this.transform = false;
        }
      })
    },
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .header{
    margin-top: -60px;
  }
  .home-header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 10px 0;
    z-index: 2;
    text-align: center;
    background: rgba(0,0,0,0);
    transition: .3s;
    &.backHeader{
      background-color: rgba(255,181,28,.95);
    }
    .header-loc {
      float: left;
      height: 20px;
      padding: 5px;
      color: #ffffff;
      font-size: 17px;
      background: rgba(0,0,0,0.3);
      -webkit-border-radius: 13px;
      -moz-border-radius: 13px;
      border-radius: 13px;
      margin-left: 10px;
      position: relative;
      max-width: 40%;
      margin-right: 12px;
      .header-loc-txt {
        display: inline-block;
        box-sizing: border-box;
        max-width: 100%;
        overflow: hidden;
        vertical-align: middle;
        padding: 0 10px;
        .header-loc-txt-marquee {
          white-space: nowrap;
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
        }
      }
    }
    .search-icon-wrap {
      float: right;
      height: 28px;
      padding-top: 4px;
      box-sizing: border-box;
      border-radius: 13px;
      font-size: 0;
      margin-right: 10px;
      width: 45%;
      background: #fff;
      text-align: left;
      i{
        padding: 3px 5px;
      }
      .search-text {
        width: 70%;
        display: inline-block;
        color: #999;
        font-size: 0.25rem;
        vertical-align: text-bottom;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
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
