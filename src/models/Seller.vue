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
    <div class="menuview">
      <main class="menuview-main">
        <div class="category">
          <ul class="categoryWrapper">
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>
            <li class="categoryItem">
              <i class="icontfont icon-paper"></i>
              <span>categoryItem</span>
            </li>

          </ul>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import ShopDiscount from '../components/sellerList/ShopDiscount.vue'

  export default {
    name: 'Seller',
    data () {
      return {
        title: 'Seller',
      }
    },
    mounted() {

    },
    methods: {

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
            padding: .466667rem .2rem;
            font-size: .32rem;
            color: #666;
            &.active {
              color: #333;
              background-color: #fff;
            }
            .icon {
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
              margin-left: .26rem;
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
              .fooddetails {
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
                      .cartbutton-entitybutton {
                        display: inline-flex;
                        font-size: .346667rem;
                        align-items: center;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
