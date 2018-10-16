<template>
  <div class="checkout">
    <header class="header ElemeHeader-root">
      <div class="ElemeHeader-wrapper ElemeHeader-gradientBg ElemeHeader-fixed" style="z-index: 8844;">
        <div class="ElemeHeader-left">
          <router-link :to="{ path: 'Seller'}" replace>
            <a class="back" />
          </router-link>
        </div>
        <h1 class="ElemeHeader-center">确认订单</h1>
      </div>
    </header>
    <div class="main">
      <section class="cart-address">
        <div class="address-item">
          <p class="title">
            <span>订单配送至</span>
          </p>
          <p class="address-detail">
            <span class="address-text">
              {{ position.pois&&position.pois.length?(position.pois[0].address + position.pois[0].name):'请选择配送地址' }}
            </span>
          </p>
          <h2 class="address-name">
            <span>方</span>
            <span>(先生)</span>
            <span class="phone">17673047043</span>
          </h2>
        </div>
      </section>
      <div class="checkout-section key-card">
        <section>
          <div class="delivery">
            <div class="delivery-left">
              <div class="delivery-time">
                <span class="cart-item__title">送达时间</span>
              </div>
            </div>
            <div class="right">
              <div class="delivery-select">

                尽快送达({{ deliveryTime }}送达)
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="cart-item pay-way">
            <div class="cart-item">支付方式</div>
            <div>
              <span class="pay-text">在线支付</span>
            </div>
          </div>
        </section>
      </div>
      <section class="checkout-section cart-group">
        <h3 class="cart-group-shop">
          <span class="cart-group">{{ sellerSyn.name }}</span>
        </h3>
        <ul class="cart-group-food">
          <li v-for="item in cart.goods">
            <div class="cart-group-center">
              <span class="cart-group">{{ item.name }}</span>
              <span class="num">×&nbsp;{{ item.num }}</span>
            </div>
            <span class="cart-group-right">
              <span class="cart-group">
                ¥
              </span>
              {{ item.price }}
            </span>
          </li>
        </ul>
        <ul class="cart-group-food">
          <li>
            <div>
                <span class="mini-tag cart-group">
                  <span class="cart-group-tag" style="background-color: rgb(115, 240, 115);">包装</span>
                </span>
              <span class="cart-group-center">餐盒</span>
            </div>
            <div class="cart-group-right">
              <span class="cart-group">¥</span>{{ cart.box }}
            </div>
          </li>
          <li>
            <div>
                <span class="mini-tag cart-group">
                  <span class="cart-group-tag mini-tag">商家</span>
                </span>
              <span class="cart-group-center">配送费</span>
            </div>
            <div class="cart-group-right">
              <span class="cart-group">¥</span>{{ sellerSyn.serviceScore }}
            </div>
          </li>
          <li>
            <div class="cart-group">
                <span class="cart-group-tag" style="background-color: rgb(240, 115, 115);">
                  <span>立减</span>
                </span>
              <span class="cart-group-center">优惠</span>
            </div>
            <div class="cart-group-right">&nbsp;
              <span class="cart-group">¥</span>{{ relief }}
            </div>
          </li>
        </ul>
        <div class="cart-group-total">
          <div></div>
          <div class="cart-group">
            <div>小计 ¥<span style="font-size: .52rem; font-weight: 500">{{ sum }}</span></div>
          </div>
        </div>
      </section>
    </div>
    <footer id="footer" class="action-bar">
      <span>¥{{ sum }}</span>
      <small>
      ｜已优惠¥{{ relief }}
      </small>
      <button class="submitbtn">去支付</button>
    </footer>
  </div>
</template>
<script>
  import moment from 'moment';
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Cart',
    methods: {},
    mounted() {
      console.log(this.cart);
      console.log(this.sellerSyn);
    },
    computed: {
      deliveryTime: function (){
        const date = moment().add(this.sellerSyn.deliveryTime, 'minutes').format('HH:mm');
        return date
      },
      relief: function (){
        let amount = 0;
        this.cart&&(this.cart.goods|| []).map((val, i) => {
          amount += (val.oldPrice - val.price)
        })
        return amount
      },
      sum: function (){
        let amount = this.cart.box + this.sellerSyn.serviceScore + this.cart.sum;
        return amount
      },
      ...mapGetters([
        'spanning',
        'sellerSyn',
        'cart',
        'position',
      ])
    },
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
  .checkout {
    position: relative;
    font-size: .426667rem;
    color: #333;
    min-height: 100%;
  }
  .main {
    padding-left: .16rem;
    padding-right: .16rem;
    padding-bottom: 1.413333rem;
    background-image: linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
  }
  .cart-address {
    background-color: transparent;
    min-height: 2.213333rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 100%;
    padding: .2rem;
    position: relative;
    color: #fff;
    overflow: hidden;
    .address-item {
      flex: 0 100%;
      padding: 0 .2rem;
      position: relative;
      color: #fff;
      text-align: left;
      overflow: hidden;
      .title {
        font-size: .4rem;
        line-height: 1.21;
        color: hsla(0,0%,100%,.8);
        span {
          vertical-align: middle;
        }
      }
      .address-detail {
        font-size: .45rem;
        font-weight: 700;
        padding: .2rem 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        .address-text {
          font-size: .6rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: calc(100% - .4rem);
        }
      }
      .address-name {
        font-size: .37rem;
        line-height: 1.21;
        margin-bottom: .13rem;
        .phone {
          margin-left: .2rem;
        }
      }
    }
  }
  .checkout-section {
    padding: 0 5vw;
    margin: .2rem;
    background: #fff;
    box-shadow: 0 0.013333rem 0.026667rem 0 rgba(0,0,0,.05);
    &:not(:last-child) {
      margin-bottom: .21rem;
    }
    .delivery {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px dotted #eee;
      padding: .6rem 0;
      .delivery-select {
        text-align: right;
        color: #2395ff;
      }
      .delivery-left {
        flex: 1;
        .delivery-time {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .4rem;
          font-weight: 500;
        }
        .delivery-extra {
          margin-top: .08rem;
          font-size: .293333rem;
          word-spacing: .06rem;
          .fengniao {
            display: inline-block;
            padding: .04rem .1rem;
            line-height: 1;
          }
        }
      }
    }
    .cart-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: .4rem;
      color: #333;
      padding: .3rem 0;
      .pay-text {
        color: #2395ff;
        font-weight: 500;
      }
    }
    .cart-group-shop {
      padding: .42rem 0;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      position: relative;
      color: #333;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      background-size: 4px;
      .cart-group {
        font-size: .45rem;
        line-height: 1;
        font-weight: 700;
        &:last-child {
          font-size: .35rem;
          font-weight: 500;
        }
      }
    }
    .cart-group-center {
      margin-left: 1vw;
      overflow: hidden;
      flex: 5;
    }
    .cart-group-right {
      font-size: .42rem;
      flex: 3;
      text-align: right;
    }
    .cart-group-tag {
      color: #fff;
      font-size: .26rem;
      background-color: #60acf4;
      display: inline-block;
      padding: .06rem;
      border-radius: 2px;
      vertical-align: middle;
      overflow: hidden;
    }
    .cart-group-total {
      padding: 4vw 0 4.8vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .373333rem;
      color: #333;
    }
    .cart-group-food {
      margin-top: .06rem;
      color: #333;
      font-size: .4rem;
      li {
        display: flex;
        align-items: center;
        width: 100%;
        padding: .45rem 0;
        border-bottom: 1px dotted #eee;
        font-size: .4rem;
        color: inherit;
        .cart-group-center{
          text-align: left;
        }
        .num{
          flex: 1;
          text-align: right;
          font-size: .32rem;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .action-bar {
    height: 1.173333rem;
    text-align: left;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #3c3c3c;
    z-index: 2;
    .submitbtn {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background: #00e067;
      min-width: 2.8rem;
      padding: 0 .15rem;
      border: none;
      color: #fff;
      font-size: .45rem;
    }
    span {
      color: #fff;
      font-size: .48rem;
      line-height: 1rem;
      padding-left: .3rem;
      vertical-align: middle;
    }
    small {
      display: inline-block;
      color: #999;
      font-size: .3rem;
      vertical-align: middle;
      margin-top: 3px;
    }
  }
</style>
