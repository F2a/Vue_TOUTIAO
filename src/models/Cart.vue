<template>
  <div>
    <h1>Cart</h1>
  </div>
</template>
<script>
  export default {
    name: 'Cart',
    data () {
      return {
        title: 'Cart',
      }
    },
    methods: {}
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .ElemeHeader-root {
    height: 1.173333rem;
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
      background: #2395ff;
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
  }
  .cart-address {
    background-color: transparent;
    padding: .426667rem 0 0;
    min-height: 2.213333rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .cart-address {
      -webkit-flex: 0 100%;
      flex: 0 100%;
      padding: 0 .2rem;
      position: relative;
      color: #fff;
      overflow: hidden;
      .address-item {
        -webkit-flex: 0 100%;
        flex: 0 100%;
        padding: 0 .2rem;
        position: relative;
        color: #fff;
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
          font-size: .453333rem;
          font-weight: 700;
          line-height: 1.88;
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
      &:not(:last-child) {
        margin-bottom: .21rem;
      }
      .delivery {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px dotted #eee;
        padding: .42rem 0;
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
        padding: .42rem .53rem;
        font-size: .4rem;
        color: #333;
        .pay-text {
          color: #2395ff;
          font-weight: 500;
        }
      }
      .cart-group {
        padding: .42rem 0;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        z-index: 1;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        background-size: 4px;
      }
    }
  }
</style>
