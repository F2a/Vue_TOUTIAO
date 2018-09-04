<template>
  <div>
    <div class="seller-top">
      <div class="seller-title">
        <nav class="seller-banner" style="background-image: url(&quot;//fuss10.elemecdn.com/a/59/cb76724cd560f895fe9b9ef1f28b5png.png?imageMogr/format/webp/thumbnail/750x/&quot;);">
          <a class="index--iRT3"></a>
        </nav>
        <div class="seller-syn">
          <div class="seller-logo">
            <img class="logo" src="//fuss10.elemecdn.com/a/51/11ccdda5a40ad9a28b7c5751d169fpng.png?imageMogr/format/webp/thumbnail/150x/">
          </div>
          <div class="name">
            <h2>
              <span>正宗浏阳蒸菜馆(九芝堂店)</span>
              <i class="iconfont icon-arrow-right" />
            </h2>
            <div class="takeaway">
              <span>评价4.4</span>
              <span>月售4414单</span>
              <span>蜂鸟快送<span>约27分钟</span></span>
            </div>
          </div>
          <div class="discount">
            <v-discount :supports="sellerSyn.supports" />
          </div>
          <p class="annou">公告：蒸食膳 真食尚 好料耗材好品质~</p>
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
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categ</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>
              <li class="categoryItem">
                <i class="iconfont icon-paper"></i>
                <span>categoryItem</span>
              </li>

            </ul>
          </div>
          <section class="container menuList">
            <div class="scroller">
              <dl role="menu">
                <dt role="heading" aria-label="必选品
(下单必点米饭)，">
                  <div class="category-title">
                    <strong class="category-name">必选品(下单必点米饭)</strong>
                    <span class="category-desc"></span>
                  </div>
                </dt>
                <dd aria-label="宝宝不用米饭，现价0元。" role="menuitem" class="">
                  <div class="fooddetails-root">
                  <span class="fooddetails-logo">
                    <img alt="宝宝不用米饭" title="宝宝不用米饭" src="//fuss10.elemecdn.com/5/c6/ef31560390005987ab4b428943b8bjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/">
                  </span>
                    <section class="fooddetails-info">
                      <p class="fooddetails-name">
                        <span class="fooddetails-nameText">宝宝不用米饭</span>
                      </p>
                      <p class="fooddetails-desc">不需要米饭点这里</p>
                      <p class="fooddetails-sales"></p>
                      <div class="fooddetails-activityRow"></div>
                      <span class="salesInfo-price fooddetails-salesInfo" style="color: rgb(255, 83, 57);">
                        <span>0</span>
                      </span>
                      <div class="fooddetails-button">
                      <span>
                        <span class="cartbutton-entitybutton">
                          <a role="button" aria-label="删减商品">
                            <i class="iconfont icon-add"/>
                          </a>
                          <span role="button" aria-label="已选1份" class="cartbutton-entityquantity">
                            1
                          </span>
                          <a href="javascript:" role="button" aria-label="添加商品">
                            <i  class="iconfont icon-sub" />
                          </a>
                        </span>
                      </span>
                    </div>
                    </section>
                  </div>
                </dd>
              </dl>
            </div>
          </section>
        </main>
      </div>
    </div>
    <footer class="cartview-cartview">
      <div @click="changeStatus" ref="mask" class="cartview-cartmask" />
      <div :class="['cartview-cartbody', {'cartview-cartbodyOpen': cartStatus}]" style="z-index: 11;">
        <section class="discount-tip-discountTip">
          <span style="color: #333333;">还差</span>
          <span style="color: #FF5339;">14</span>
          <span style="color: #333333;">元起送</span>
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
              <li class="entityList-entityrow">
                <span class="entityList-entityname">
                  <em class="entityList-name">香肠</em>
                  <p class="entityList-entityspecs"> </p>
                </span>
                <span class="entityList-entitytotal" style="color: rgb(255, 83, 57);">
                  <span class="entityList-entitytotalDiscount">￥2</span>
                </span>
                <span class="entityList-entitycartbutton">
                  <div class="fooddetails-button">
                        <span>
                          <span class="cartbutton-entitybutton">
                            <a role="button" aria-label="删减商品">
                              <i class="iconfont icon-add"/>
                            </a>
                            <span role="button" aria-label="已选1份" class="cartbutton-entityquantity">
                              1
                            </span>
                            <a href="javascript:" role="button" aria-label="添加商品">
                              <i  class="iconfont icon-sub" />
                            </a>
                          </span>
                        </span>
                      </div>
                </span>
              </li>
            </ul>
            <div class="entityList-entityrow entityList-packingfee">
              <span class="entityList-entityname">餐盒</span>
              <span class="entityList-entitytotal" style="color: rgb(255, 83, 57);">￥2</span>
              <span class="entityList-entitycartbutton"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomNav-cartfooter" style="z-index: 11;">
        <span @click="changeStatus" class="bottomNav-carticon">
          <i class="iconfont icon-gouwuche" />
          <span>2</span>
        </span>
        <div role="button" aria-label="购物车有商品2件，共6元，另需配送费1.6元。" class="bottomNav-cartInfo">
          <p class="bottomNav-carttotal">
            <span class="">¥6</span>
          </p>
          <p class="bottomNav-cartdelivery">另需配送费1.6元</p>
        </div>
        <a role="button" class="submit-btn-submitbutton submit-btn-disabled submit-btn-multiLine">
          <small>下单前请点必选品</small>
          <small>还差¥14起送</small>
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import ShopDiscount from '../components/sellerList/ShopDiscount.vue'

  export default {
    name: 'Seller',
    data () {
      return {
        cartStatus: false,
        title: 'Seller',
      }
    },
    mounted() {

    },
    methods: {
      changeStatus() {
        this.cartStatus = !this.cartStatus;
        const mask = this.$refs.mask;
        if(this.cartStatus){
          mask.style.display = 'block';
          window.setTimeout(() => {
            mask.style.opacity = '0.4';
          },50)
        }else{
          mask.style.opacity = '0';
          window.setTimeout(() => {
            mask.style.display = 'none';
          },300)
        }
      }
    },
    computed: {
      ...mapGetters([
        'spanning',
        'sellerList',
        'sellerSyn',
      ])
    },
    components: {
      'v-discount': ShopDiscount,
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
    padding-bottom: 1.28rem;
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
            line-height: 16px;
            padding: .466667rem .2rem;
            font-size: .32rem;
            color: #666;
            &.active {
              color: #333;
              background-color: #fff;
            }
            .iconfont {
              width: .346667rem;
              height: .346667rem;
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
          -webkit-overflow-scrolling: touch;
          dl{
            margin: 0;
            dt {
              position: relative;
              margin: .2rem 0 0 .26rem;
              padding: .2rem .8rem .2rem 0;
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
  /* 商品加减按钮 */
  .cartbutton-entitybutton {
    display: inline-flex;
    font-size: .346667rem;
    align-items: center;
    .cartbutton-entityquantity {
      display: inline-block;
      text-align: center;
      color: rgba(0,0,0,.87);
      vertical-align: middle;
      font-size: .373333rem;
      width: .693333rem;
      overflow: hidden;
    }
    a {
      display: inline-block;
      vertical-align: middle;
      text-decoration: none;
      margin: 0 3px;
    }
    i {
      color: rgb(35, 149, 255);
      font-size: 23px;
      vertical-align: middle;
    }
  }

</style>
