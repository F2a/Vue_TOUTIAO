<template>
  <div>
    <nav class="poifilter-nav">
      <a href="javascript:;" class="nav-item nav-right-sep">选项一</a>
      <a href="javascript:;" class="nav-item nav-right-sep">综合排序</a>
      <a href="javascript:;" class="nav-item">筛选</a>
    </nav>
    <div
      id="poilist"
      class="sellerlist"
      v-for="item in sellerList"
    >
      <div class="field">
        <a href="/restaurant/540823287940595">
          <div class="avatar">
            <img :src="item.avatar" :data-src-retina="item.avatar" class="j-poi-pic avatar-img">
          </div>
        </a>
        <div class="content">
          <a href="/restaurant/540823287940595">
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
            <div class="clearfix shop-discount-entries">
              <ul
                class="shop-discount-entry-wrap-overflow clearfix"
                v-for="val in item.supports"
              >
                <li v-if="val.show" class="shop-discount-entry clearfix">
                  <i :class="[
                  'iconfont',
                   'i-x12',
                    val.type==0?'icon-youhuijuan':
                    val.type==1?'icon-manjian':
                    val.type==2?'icon-weibiaoti-':
                    val.type==3?'icon-baozhengjin':
                    val.type==4?'icon-zhekou':''
                  ]"></i>
                  <p class="shop-discount-overflow mtsi-num">{{ val.description }}</p>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mounted() {
     this.UpdateList();
      window.addEventListener('scroll', this.pushList)
    },
    methods: {
      ...mapActions({
        UpdateList: 'getList', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      }),
      pushList(e) {
        const scrollPosition = document.body.scrollTop + document.documentElement.scrollTop;
        const bodyHeight = document.body.scrollHeight - document.documentElement.clientHeight;
        console.log(scrollPosition, bodyHeight);
        if(scrollPosition + 500 > bodyHeight){
           this.UpdateList();
        }
      }
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
    height: 39px;
    border-width: 1px 0;
    position: relative;
    -webkit-transition: 300ms;
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
        /* 活动 */
        .shop-discount-entries {
          font-size: 11px;
          color: #898989;
          padding-top: 0.5rem;
          position: relative;
          .shop-discount-entry-wrap-overflow {
            width: 70%;
            .shop-discount-entry {
              margin-bottom: 4px;
              position: relative;
              i {
                vertical-align: -2px;
                float: left;
              }
              .i-x12 {
                width: 0.38rem;
                height: 0.38rem;
                display: block;
                position: absolute;
                top: 1px;
              }
              .shop-discount-overflow {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-left: 17px;
                line-height: 17px;
              }
            }
          }
        }
      }
    }
  }
</style>
