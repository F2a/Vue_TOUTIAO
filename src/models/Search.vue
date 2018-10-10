<template>
  <div>
    <div class="headerBackground" />
    <section class="header">
      <router-link :to="{ path: 'home'}" replace style="padding: 0 5px">
        <a class="back" />
      </router-link>
      <form class="fromBox">
        <i class="iconfont icon-search"></i>
        <input v-model="key" type="search" placeholder="输入商家、商品名称">
        <button type="submit">搜索</button>
      </form>
    </section>
    <v-sellerList :marginTop="50" />
  </div>
</template>
<script>
  import sellerList from '../components/sellerList/SellerList.vue';

  export default {
    name: 'Search',
    data () {
      return {
        title: 'Search',
        key: '',
      }
    },
    methods: {},
    mounted() {
      console.log(this.$route.query.key);
      this.key = this.$route.query.key;
    },
    components: {
      "v-sellerList": sellerList,
    },
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .headerBackground {
    width: 100%;
    height: 50px;
  }
  .header {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    z-index: 101;
    background: #fff;
    .fromBox {
      display: flex;
      position: relative;
      flex-grow: 1;
      padding: .293333rem .293333rem .293333rem 0;
      margin-left: .293333rem;
      background-color: #fff;
      z-index: 101;
      i {
        position: absolute;
        top: .45rem;
        left: .22rem;
      }
      input {
        -webkit-box-flex: 1;
        flex-grow: 1;
        border-radius: .026667rem;
        -webkit-appearance: none;
        background-color: #f8f8f8;
        padding: .173333rem .4rem .173333rem .88rem;
        font-size: .346667rem;
        color: #666;
        border: none;
        outline: none;
      }
      button {
        outline: none;
        color: #333;
        font-size: .426667rem;
        background: #fff;
        font-weight: 700;
        margin-left: .293333rem;
        border: none;
      }
    }
  }
  .back {
    margin-left: .35rem;
    width: .32rem;
    height: .32rem;
    display: inline-block;
    border-bottom: .05rem solid #999;
    border-left: .05rem solid #999;
    transform: rotate(45deg);
  }
</style>
