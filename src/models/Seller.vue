<template>
  <div>
    <div class="seller-top">
      <div class="seller-title">
        <nav class="seller-banner" :style="{ 'background-image': 'url(&quot;'+sellerSyn.avatar+'&quot;)'}">
          <router-link :to="{ path: 'home'}" replace>
            <a class="back" />
          </router-link>
        </nav>
        <div class="seller-syn">
          <div class="seller-logo">
            <img class="logo" :src="sellerSyn.pics" :data-src-retina="sellerSyn.pics">
          </div>
          <seller-modal ref="SellerModal" />
          <div class="name">
            <h2 @click="showSyn">
              <span>{{ sellerSyn.name }}</span>
              <i class="iconfont icon-arrow-right" />
            </h2>
            <div class="takeaway">
              <span>评价{{ sellerSyn.score }}</span>
              <span>月售{{ sellerSyn.sellCount }}单</span>
              <span>美团专送<span>约{{ sellerSyn.deliveryTime }}分钟</span></span>
            </div>
          </div>
          <div class="discount">
            <v-discount :supports="sellerSyn.supports" />
          </div>
          <p class="annou">公告：{{ sellerSyn.bulletin }}</p>
        </div>
      </div>
    </div>
    <div class="seller-tab">
      <div class="shop-tab-1MgBk">
        <div class="shop-tab-2ipt1 shop-tab-nD6jp">
          <p class="shop-tab-2H0qT">
            点餐<span class="shop-tab-1GaSq" style="background-color: rgb(35, 149, 255);"></span>
          </p>
        </div>
        <div class="shop-tab-2ipt1">
          <p class="shop-tab-2H0qT">
            评价<span class="shop-tab-1GaSq" style="background-color: rgb(35, 149, 255);"></span>
          </p>
        </div>
      </div>
    </div>
    <div  style="height: 495px;">
      <div class="menuview">
        <main class="menuview-main">
          <div class="category">
            <ul class="categoryWrapper">
              <li v-for="item in goods" :class="['categoryItem', {'active': type === item.type}]"  @click="goodsScroll(item.type)">
                <i :class="['iconfont',
                      item.type==0?'icon-zhekou':
                      item.type==1?'icon-manjian':
                      item.type==3?'icon-chaocaishouru':
                      item.type==5?'icon-youhuijuan':
                      item.type==6?'icon-tianpin':
                      item.type==9?'icon-manjian':'hidden' ]"
                /><span :style="{ width: item.type!=2&&item.type!=4&&item.type!=7&&item.type!=8?'75%':'100%' }">{{ item.name }}</span>
              </li>
            </ul>
          </div>
          <section class="container menuList">
            <div class="scroller">
              <dl role="menu">
                <div v-for="(item, index) in goods">
                  <dt :id="'category' + item.type" role="heading" :aria-label="item.name" >
                    <div class="category-title">
                      <strong class="category-name">{{ item.name }}</strong>
                      <span class="category-desc"></span>
                    </div>
                  </dt>
                  <dd v-for="(val, i) in item.foods">
                    <div class="fooddetails-root"  @click="showGoodsInfo(val, i, index)">
                        <span class="fooddetails-logo">
                          <img :alt="val.name" :title="val.name" :src="val.image">
                        </span>
                        <section class="fooddetails-info">
                          <p class="fooddetails-name">
                            <span class="fooddetails-nameText">{{ val.name }}</span>
                          </p>
                          <p class="fooddetails-desc">{{ val.description }}</p>
                          <p class="fooddetails-sales"></p>
                          <div class="fooddetails-activityRow"></div>
                          <span class="salesInfo-price fooddetails-salesInfo" style="color: rgb(255, 83, 57);">
                          <span>{{ val.price }}</span>
                            <del class="salesInfo-originPrice">¥{{ val.oldPrice }}</del>
                          </span>
                            <div class="fooddetails-button">
                          <span>
                            <entity-button :i="i" :index="index" :num="val.num" />
                          </span>
                        </div>
                      </section>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </main>
      </div>
    </div>
    <footer class="cartview-cartview">
      <div @click="cartControl" ref="mask" class="cartview-cartmask" />
      <div :class="['cartview-cartbody', {'cartview-cartbodyOpen': cartStatus}]" style="z-index: 11;">
        <section class="discount-tip-discountTip">
          <span v-if="(sellerSyn.deliveryPrice - cart.sum)>0">
            <span style="color: #333333;">还差</span>
            <span style="color: #FF5339;">¥{{ sellerSyn.deliveryPrice - cart.sum }}</span>
            <span style="color: #333333;">元起送</span>
          </span>
          <span v-else class="annou" style="color: #333333;">
            {{ sellerSyn.bulletin }}
          </span>
        </section>
        <div :style="{ opacity: cartStatus?'1':'0' }">
          <div class="cartview-cartheader">
            <div class="cartview-headerText">
              <span>已选商品</span>
            </div>
            <a class="cartview-cartheaderRemove">
              <i></i>
              <span>清空</span>
            </a>
          </div>
          <div class="entityList-cartbodyScroller">
            <ul class="entityList-cartlist">
              <li v-for="item in cart.goods" class="entityList-entityrow">
                <span class="entityList-entityname">
                  <em class="entityList-name">{{ item.name }}</em>
                  <p class="entityList-entityspecs"> </p>
                </span>
                <span class="entityList-entitytotal" style="color: rgb(255, 83, 57);">
                  <span class="entityList-entitytotalDiscount">￥{{ item.price * item.num }}</span>
                </span>
                <span class="entityList-entitycartbutton">
                  <div class="fooddetails-button">
                    <span>
                      <entity-button :i="item.i" :index="item.index" :num="item.num" />
                    </span>
                  </div>
                </span>
              </li>
            </ul>
            <div class="entityList-entityrow entityList-packingfee">
              <span class="entityList-entityname">餐盒</span>
              <span class="entityList-entitytotal" style="color: rgb(255, 83, 57);">￥{{ cart.box }}</span>
              <span class="entityList-entitycartbutton"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomNav-cartfooter" style="z-index: 11;">
        <span @click="cartControl" :class="['bottomNav-carticon', {'bottomNav-empty': cart.goods.length==0}]">
          <i class="iconfont icon-gouwuche" />
          <span v-if="cart.goods.length">{{ cart.box?cart.box*2:0 }}</span>
        </span>
        <div role="button" aria-label="购物车有商品2件，共6元，另需配送费1.6元。" class="bottomNav-cartInfo">
          <p class="bottomNav-carttotal">
            <span class="">¥{{ cart.sum + cart.box }}</span>
          </p>
          <p class="bottomNav-cartdelivery">另需配送费{{ sellerSyn.serviceScore }}元</p>
        </div>
        <a role="button"
           :class="['submit-btn-submitbutton', {'submit-btn-disabled': (sellerSyn.deliveryPrice - cart.sum)>0 }, 'submit-btn-multiLine']"
           @click="toCart"
        >
          <small v-if="(sellerSyn.deliveryPrice - cart.sum)>0">还差¥{{ sellerSyn.deliveryPrice - cart.sum }}起送</small>
          <span v-else>去结算</span>
        </a>
      </div>
    </footer>
    <goods-modal ref="GoodsModal"  :goods="goodsInfo" />
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import ShopDiscount from '../components/sellerList/ShopDiscount.vue'
  import SellerModal from '../components/modal/SellerInfo.vue'
  import GoodsModal from '../components/modal/GoodsInfo.vue'
  import Entitybutton from '../components/entitybutton/Entitybutton.vue'

  export default {
    name: 'Seller',
    data () {
      return {
        cartStatus: false,
        title: 'Seller',
        goodsInfo: {},
        type: 0,
      }
    },
    mounted() {
      if(!(this.goods&&this.goods.length)) {
        this.getGoods();
      }
    },
    methods: {
      ...mapActions({
        getGoods: 'getGoods',
      }),
      ...mapMutations({
        postGoods: 'POSTGOODS',
      }),
      toCart() {
        if(this.sellerSyn.deliveryPrice - this.cart.sum < 0)
          this.$router.push({ path: 'cart' })
      },
      goodsScroll(type) { // 索引滚动
        this.type = type;
        document.querySelector("#category" + type).scrollIntoView(true);
      },
      cartControl() { // 展示购物车
        if(this.cartStatus||(this.cart.goods&&this.cart.goods.length)) {
          this.cartStatus = !this.cartStatus;
          const mask = this.$refs.mask;
          if (this.cartStatus) {
            mask.style.display = 'block';
            window.setTimeout(() => {
              mask.style.opacity = '0.4';
            }, 50)
          } else {
            mask.style.opacity = '0';
            window.setTimeout(() => {
              mask.style.display = 'none';
            }, 300)
          }
        }
      },
      showSyn() {
        this.$refs.SellerModal.showModal();
      },
      showGoodsInfo(val, i, index) {
        val.i = i;
        val.index= index;
        this.goodsInfo = val;
        this.$refs.GoodsModal.showModal();
      }
    },

    computed: {
      ...mapGetters([
        'spanning',
        'sellerSyn',
        'goods',
        'cart',
      ])
    },
    components: {
      'v-discount': ShopDiscount,
      'seller-modal': SellerModal,
      'goods-modal': GoodsModal,
      'entity-button': Entitybutton,
    },
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .seller-top {
    position: relative;
    .seller-title {
      color: #333;
      font-size: .293333rem;
      background-color: #fff;
      padding-top: 2.666667rem;
      .seller-banner {
        width: 100%;
        display: flex;
        height: 2.666667rem;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: 0;
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
      .seller-syn {
        padding: .8rem 0 0;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        .seller-logo {
          width: 2rem;
          height: 2rem;
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -1rem;
          margin-top: -1.6rem;
          .logo {
            width: 100%;
            height: 100%;
            border-radius: .08rem;
            box-shadow: 0 0 0.04rem 0 rgba(0, 0, 0, .2);
          }
        }
        .name {
          -webkit-flex: 1;
          flex: 1;
          width: 7.2rem;
          .takeaway {
            white-space: nowrap;
            height: .32rem;
            margin-top: .173333rem;
            font-size: .293333rem;
            color: #666;
            text-align: center;
          }
        }
        .discount {
          float: right;
          width: 8rem;
          color: #333;
          align-items: center;
          font-size: .293333rem;
        }
        .annou {
          color: #999;
          width: 8rem;
          overflow: hidden;
          text-align: left;
          text-overflow: ellipsis;
          margin: .226667rem auto .266667rem;
          padding: 0;
          white-space: nowrap;
        }
      }
    }
  }
  .seller-tab{
    position: sticky;
    top: 0px;
    z-index: 2;
    .shop-tab-1MgBk {
      line-height: 1.066667rem;
      display: flex;
      background-color: #fff;
      .shop-tab-2ipt1 {
        position: relative;
        flex: 1;
        text-align: center;
        font-size: .4rem;
        color: #666;
        border-bottom: 1px solid #ebebeb;
        .shop-tab-2H0qT {
          display: inline-block;
          position: relative;
          color: #333;
          font-weight: 700;
          .shop-tab-1GaSq {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: .053333rem;
            height: .533333vw;
            background-color: #2395ff;
          }
        }
      }
    }
  }
  .menuview{
    height: 100%;
    padding-bottom: 1.62rem;
    background-color: #fff;
    .menuview-main {
      display: flex;
      height: 100%;
      /* 左侧分类条 */
      .category {
        overflow-y: auto;
        width: 21vw;
        height: 100%;
        background-color: #f8f8f8;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 1rem;
        .categoryWrapper {
          flex: none;
          position: relative;
          z-index: 0;
          .categoryItem {
            position: relative;
            color: #666;
            line-height: 16px;
            font-size: .32rem;
            text-align: left;
            padding: .46rem .2rem;
            span {
              display: inline-block;
              width: 75%;
            }
            &.active {
              color: #333;
              background-color: #fff;
            }
            .iconfont {
              width: 20%;
              height: .35rem;
              font-size: 14px;
              vertical-align: top;
              margin-right: .08rem;
            }
          }
        }
      }
      /* 右侧商品列表 */
      .menuList {
        position: relative;
        height: 100%;
        width: 79vw;
        .scroller {
          height: 100%;
          padding-bottom: 1rem;
          overflow-y: auto;
          scroll-behavior: smooth; /* 平滑滚动 */
          -webkit-overflow-scrolling: touch;
          dl{
            margin: 0;
            dt {
              position: relative;
              margin-left: .26rem;
              padding: .4rem .8rem .2rem 0;
              .category-title {
                display: flex;
                align-items: center;
                overflow: hidden;
                .category-name {
                  margin-right: .133333rem;
                  font-weight: 700;
                  font-size: .32rem;
                  color: #666;
                  -webkit-flex: none;
                  flex: none;
                }
                span[data-v-782b8f42] {
                  flex: 1;
                  color: #999;
                  font-size: .266667rem;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
            dd {
              position: relative;
              margin: 0;
              min-height: 3.066667rem;
              padding-left: .266667rem;
              .fooddetails-root {
                padding: .266667rem 0;
                margin-bottom: .013333rem;
                display: flex;
                min-height: 2.746667rem;
                position: relative;
                .fooddetails-logo {
                  width: 2.533333rem;
                  height: 2.533333rem;
                  flex: none;
                  margin-right: .266667rem;
                  position: relative;
                  img {
                    width: 100%;
                    border-radius: .053333rem;
                  }
                }
                .fooddetails-info {
                  -webkit-flex: 1;
                  flex: 1;
                  position: relative;
                  padding-bottom: .666667rem;
                  padding-right: .4rem;
                  .fooddetails-name {
                    position: relative;
                    padding-right: .4rem;
                    display: -webkit-flex;
                    display: flex;
                    align-items: start;
                    text-align: left;
                    span {
                      font-weight: 700;
                      overflow: hidden;
                      font-size: .4rem;
                      white-space: nowrap;
                      width: 4rem;
                      text-overflow: ellipsis;
                    }
                  }
                  .fooddetails-desc {
                    margin: .133333rem 0;
                    font-size: .266667rem;
                    text-align: left;
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 4.266667rem;
                  }
                  .salesInfo-originPrice {
                    font-size: .32rem;
                    color: #999;
                    margin-left: .16rem;
                  }
                  .salesInfo-price {
                    position: absolute;
                    bottom: 0;
                    font-size: .48rem;
                    line-height: .426667rem;
                    color: #ff5339;
                    padding-bottom: .093333rem;
                    display: -webkit-flex;
                    display: flex;
                    -webkit-align-items: baseline;
                    align-items: baseline;
                    &:before {
                      content: "\A5";
                      font-size: .373333rem;
                      display: inline-block;
                      margin-right: .266667vw;
                    }
                  }
                  .fooddetails-button {
                    position: absolute;
                    right: .4rem;
                    bottom: .066667rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  footer {
    font-size: .42rem;
    /* 购物车列表 */
    .cartview-cartmask {
      display: none;
      position: fixed;
      z-index: 10;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000;
      opacity: .4;
      transition: opacity .3s ease;
    }
    .cartview-cartbody {
      position: fixed;
      z-index: 11;
      bottom: 1.8rem;
      left: 0;
      width: 100%;
      background-color: #fff;
      transition: transform .3s ease;
      transform: translate3d(0,100%,0);
      &.cartview-cartbodyOpen {
        transform: translateZ(0);
        bottom: 1.28rem;
      }
      .discount-tip-discountTip {
        background-color: #fffad6;
        border-top: 1px solid #f9e8a3;
        opacity: .96;
        line-height: .5rem;
        font-size: .26rem;
        text-align: center;
        .annou{
          box-sizing: border-box;
          display: inline-block;
          width: 100%;
          padding: 0 .5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .cartview-headerText {
        display: flex;
        align-items: center;

        flex: 1;
      }
      .cartview-cartheader {
        display: flex;
        align-items: center;
        padding: 0 .4rem;
        border-bottom: .013333rem solid #ddd;
        background-color: #eceff1;
        color: #666;
        height: 1.06rem;
        .cartview-cartheaderRemove {
          flex: none;
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          padding-left: .4rem;
          color: #666;
          text-decoration: none;
          font-size: .35rem;
          line-height: .4rem;
        }
      }
      .entityList-cartbodyScroller {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        max-height: 8rem;
        ul {
          flex: none;
        }
        .entityList-entityrow {
          display: flex;
          align-items: center;
          padding: .2rem .3rem .2rem 0;
          min-height: 1.5rem;
          margin-left: .3rem;
          &.entityList-packingfee {
            border-top: .13vw solid #eee;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #eee;
          }
          .entityList-entityname {
            flex: 5.5;
            line-height: normal;
            text-align: left;
            .entityList-name {
              display: inline-block;
              font-style: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              vertical-align: middle;
              max-width: 4.66rem;
            }
            .entityList-entityspecs {
              width: 100%;
              line-height: .3rem;
              color: #999;
              font-size: .27rem;
            }
          }
          .entityList-entitytotal {
            flex: 2.5;
            color: #ff5339;
            text-align: right;
            white-space: nowrap;
            font-weight: 700;
          }
          .entityList-entitycartbutton {
            flex: 3;
            text-align: right;
          }
        }
      }
    }
    /* 购物车底部 */
    .bottomNav-cartfooter {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      padding-left: 2.1rem;
      background-color: rgba(61,61,63,.9);
      height: 1.28rem;
      .bottomNav-carticon {
        position: absolute;
        left: .32rem;
        bottom: .2rem;
        width: 1.3rem;
        height: 1.3rem;
        box-sizing: border-box;
        border-radius: 100%;
        background-color: #3190e8;
        border: .13rem solid #444;
        box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
        will-change: transform;
        .iconfont{
          font-size: .6rem;
          color: #fff;
          padding-top: .2rem;
        }
        span {
          position: absolute;
          right: -.12rem;
          top: -.133333rem;
          line-height: 1;
          background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
          color: #fff;
          border-radius: .32rem;
          padding: .053333rem .133333rem;
          font-size: .266667rem;
        }
        &.bottomNav-empty {
          background-color: #666;
          .iconfont {
            color: #999;
          }
        }
      }
      .bottomNav-cartInfo {
        flex: 1;
        text-align: left;
        .bottomNav-carttotal {
          font-size: .48rem;
          line-height: normal;
          color: #fff;
          .bottomNav-carttotalOriginal {
            font-size: .7em;
            color: #999;
          }
        }
        .bottomNav-cartdelivery {
          color: #999;
          font-size: .26rem;
        }
      }
      .submit-btn-submitbutton {
        height: 100%;
        width: 2.8rem;
        background-color: #38ca73;
        color: #fff;
        text-align: center;
        text-decoration: none;
        font-size: .4rem;
        font-weight: 700;
        -webkit-user-select: none;
        user-select: none;
        line-height: 1.28rem;
        &.submit-btn-multiLine {
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1.3;
        }
        &.submit-btn-disabled {
          background-color: #666666;
        }
      }
    }

  }
</style>
