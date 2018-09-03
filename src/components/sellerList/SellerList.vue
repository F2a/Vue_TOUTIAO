<template>
  <div id="top-sellerList">
    <nav ref="poifilterNav" :class="['poifilter-nav', {'fixed-nav': transform}]">
      <a href="javascript:;" class="nav-item nav-right-sep">选项一</a>
      <a href="javascript:;" class="nav-item nav-right-sep">综合排序</a>
      <a href="javascript:;" class="nav-item">筛选</a>
    </nav>
    <div
      id="poilist"
      class="sellerlist"
      :style="{ 'padding-top': transform?'50px':'0', 'padding-bottom': (marginBottom||'0') + 'px',  }"
    >
      <div
        v-for="item in sellerList"
        @click="toSeller(item)"
        class="field"
      >
        <a>
          <div class="avatar">
            <img :src="item.avatar" :data-src-retina="item.avatar" class="j-poi-pic avatar-img">
          </div>
        </a>
        <div class="content">
        <a>
          <div class="shop-title shop-title-icon-0">
            <div class="shop-na">{{ item.name }}</div>
          </div>
          <div class="shop-mid-line clearfix">
            <div class="appr-status">
              <i :class="['appr-score', item.score < 1&&'appr-score-gray' ]"></i>
              <i :class="['appr-score', item.score < 2&&'appr-score-gray' ]"></i>
              <i :class="['appr-score', item.score < 3&&'appr-score-gray' ]"></i>
              <i :class="['appr-score', item.score < 4&&'appr-score-gray' ]"></i>
              <i :class="['appr-score', item.score < 5&&'appr-score-gray' ]"></i>
            </div>
            <div class="shop-sold mtsi-num">月售{{ item.sellCount }}</div>
            <i class="shop-right mtsi-num">{{ item.distance }}km</i>
            <i class="shop-dvd-line">|</i>
            <i class="shop-delivery-time mtsi-num">{{ item.deliveryTime }}min</i>
          </div>
          <div class="shop-line clearfix">
            <span class="shop-line-item">起送价
              <em class="mtsi-num">￥{{ item.minPrice }}</em>
            </span>
            <span class="shop-line-item mtsi-num"><span class="shop-line-item-line">|</span>配送 ¥{{ item.serviceScore }}</span>
            <div v-if="item.delivery" class="allocation-icon"><span>美团专送</span></div>
            <div class="clear"></div>
          </div>
          <v-discount :supports="item.supports" />
        </a>
        </div>
      </div>
      <p style="font-size: 0.3rem; line-height: 1rem" >努力加载中...</p>
    </div>
    <a @click="backTop" class="BackTop-wrapper" :style="{ 'display': transform?'block':'none'}">
      <i class="iconfont icon-backTop"></i>
    </a>
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import ShopDiscount from './ShopDiscount.vue'
  export default {
    data (){
      return {
        shopDiscount: false,
        transform: false,
        offsetTop: 396,
      }
    },
    props: ['marginTop', 'marginBottom'],
    mounted() {
     this.UpdateList();
      window.addEventListener('scroll', this.pushList);
      this.offsetTop = (this.$refs.poifilterNav.offsetTop||396) - (this.marginTop||0);
    },
    methods: {
      ...mapActions({
        UpdateList: 'getList', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      }),
      ...mapMutations({
        sellerSyn: 'SELLERSYN', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      }),
      toSeller(data) {
        this.$router.push({path: '/seller'});
        this.sellerSyn(data);
      },
      backTop(e) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
      pushList(e) {
        const scrollPosition = document.body.scrollTop + document.documentElement.scrollTop;
        const bodyHeight = document.body.scrollHeight - document.documentElement.clientHeight;
        if(scrollPosition >= this.offsetTop&&!this.transform){
          this.transform = true;
        }else if(scrollPosition <= this.offsetTop&&this.transform){
          this.transform = false;
        }
        if(scrollPosition + 500 > bodyHeight){
           this.UpdateList();
        }
      }
    },
    components: {
      'v-discount': ShopDiscount,
    },
    computed: {
      ...mapGetters([
        'spanning',
        'sellerList',
      ])
    },
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .poifilter-nav {
    display: block;
    width: 100%;
    height: 39px;
    border-width: 1px 0;
    position: relative;
    transition: 0.3s;
    background-color: #fff;
    &.fixed-nav{
      position: fixed;
      left: 0;
      top: 49px;
      z-index: 10;
    }
    .nav-right-sep {
      border-right: 1px solid #dddddd;
      text-align: center;
    }
    .nav-item {
      display: inline-block;
      box-sizing: border-box;
      width: 33%;
      float: left;
      height: 17px;
      line-height: 17px;
      margin-top: 11px;
      padding: 0 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 13px;
      color: #2f2f2f;
      text-align: center;
      &:after {
        content: '';
        display: inline-block;
        width: 5px;
        height: 5px;
        margin-bottom: 2px;
        margin-left: 6px;
        border: 1px solid #666;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transition: .3s;
      }
      &:last-child:after {
        width: 12px;
        height: 12px;
        margin: 0;
        border: 0;
        transform: rotate(0);
        -webkit-transform: rotate(0);
        -moz-transform: rotate(0);
        background: url(//xs01.meituan.net/waimai_i/img/select.71c1597f.png) no-repeat left 2px;
        background-size: 12px;
        display: inline-block;
      }
    }
    .focus:after {
      top: 8px;
      transform: rotate(225deg);
      -webkit-transform: rotate(225deg);
      -moz-transform: rotate(225deg);
      -webkit-transition: .3s;
    }
  }
  .sellerlist {
    background-color: #fff;
    .field {
      position: relative;
      padding: 0.4rem 0 0.4rem 0.3rem;
      background: #fff;
      border-bottom: 1px solid #e4e4e4;
      /* 左LOGO */
      .avatar {
        width: 2.24rem;
        height: 1.68rem;
        text-align: center;
        position: absolute;
        overflow: hidden;
        border: 1px solid #E4E4E4;
        .avatar-img {
          vertical-align: middle;
          width: 100%;
        }
      }
      /* 右 */
      .content {
        margin-left: 2.46rem;
        position: relative;
        overflow: hidden;
        text-align: left;
        /* 店名 */
        .shop-title {
          overflow: hidden;
          .shop-na {
            font-size: 0.42rem;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 500;
            margin-right: 15px;
          }
        }
        /* 店介绍 */
        .shop-mid-line {
          height: 23px;
          font-size: 20px;
          /* 评价，五角星 */
          .appr-status {
            float: left;
            width: 76px;
            height: 12px;
            margin: 8px 0 0 0;
            .appr-score {
              background: url(//xs01.meituan.net/waimai_i/img/sprite/newstars.ae33dbae.png) no-repeat;
              background-size: cover;
              width: 10px;
              height: 10px;
              float: left;
              margin-right: 4px;
              background-position: 0 0;
            }
            .appr-score-half {
              background-position: -13px 0;
            }
            .appr-score-gray {
              background-position: -27px 0;
            }
          }
          /* 月售 */
          .shop-sold {
            float: left;
            margin-top: 5px;
            font-size: 11px;
            color: #656565;
          }
          /* 配送距离和时间 */
          .shop-right {
            float: right;
            margin-right: 15px;
            font-size: 0.32rem;
            padding-top: 0.13rem;
            color: #656565;
            text-align: right;
          }
          .shop-dvd-line {
            float: right;
            margin: 0.24rem 5px 0;
            width: 0;
            height: 0.16rem;
            font-size: 0;
            border-right: 1px solid #ccc;
          }
          .shop-delivery-time {
            float: right;
            font-size: 0.32rem;
            margin-top: 0.13333333333333333rem;
            color: #656565;
            text-align: right;
          }
        }
        /* 起送，配送价格 */
        .shop-line {
          margin-top: 3px;
          clear: both;
          font-size: 0.32rem;
          color: #656565;
          .shop-line-item {
            margin-right: 2px;
          }
          .shop-line-item-line {
            margin-right: 5px;
            color: #dcdcdc;
          }
          /* 美团专送 */
          .allocation-icon {
            float: right;
            margin-right: 15px;
            margin-top: 0;
            span {
              position: relative;
              background-color: #FFD161;
              display: inline-block;
              height: 15px;
              line-height: 15px;
              padding: 0 6px;
              font-size: 10px;
              color: #333;
              font-weight: normal;
              vertical-align: baseline;
              &:after, &:before {
                content: '';
                position: absolute;
                border: 2px solid #fff;
                width: 0;
                height: 0;
                font-size: 0;
                left: 0;
                top: 0;
                border-color: #fff #FFD161 #FFD161 #fff;
              }
            }
          }
        }

      }
    }
  }
  .BackTop-wrapper{
    position: fixed;
    right: 0.6rem;
    bottom: 2rem;
    width: 1rem;
    height: 1rem;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;
    border-radius: 50%;
    background: #fff;
    transition: opacity .3s;
    will-change: transform;
    z-index: 10;
    i{
      margin-top: -0.12rem;
      vertical-align: middle;
    }
  }
</style>
