<template>
  <div>
    <header class="header ElemeHeader-root">
      <div class="ElemeHeader-wrapper ElemeHeader-gradientBg ElemeHeader-fixed" style="z-index: 8844;">
        <div class="ElemeHeader-left">
          <router-link :to="{ path: 'Home'}" replace>
            <a class="back" />
          </router-link>
        </div>
        <h1 class="ElemeHeader-center">选择收货地址</h1>
      </div>
    </header>
    <form class="fromBox">
      <p>
        {{ position.addressComponent?position.addressComponent.city:'---' }}
        <i class="iconfont icon-loc-hollow" />
      </p>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input v-model="position.formattedAddress||''" type="search" placeholder="输入地址">
      </div>
    </form>
    <v-amap ref="amap"  @position="GetPosition" />
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import amap from '../components/vueAmap/Amap.vue';

  export default {
    name: 'Location',
    data () {
      return {
        city: '---',
        formattedAddress: '',
        // position: {}
      };
    },
    computed: {
      ...mapGetters([
        'position',
      ]),
    },
    components: {
      "v-amap": amap,
    },
    methods: {
      GetPosition(value) {
//        console.log(value);
//        this.position = value;
//        this.city = value.addressComponent.city;
//        this.formattedAddress = value.formattedAddress;
      }
    },
    mounted() {
//      console.log(this.$refs.amap.position);
//      if(this.$refs.amap.position.addressComponent) {
//        this.city = this.$refs.amap.position.addressComponent.city
//      }
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
  .fromBox {
    display: flex;
    position: relative;
    flex-grow: 1;
    padding: .293333rem .293333rem .293333rem 0;
    margin-left: .293333rem;
    background-color: #fff;
    z-index: 101;
    p {
      -webkit-box-flex: 1;
      flex-grow: 1;
      font-size: .4rem;
      line-height: 1rem;
    }
    .search {
      height: 1rem;
      -webkit-box-flex: 3;
      flex-grow: 3;
      position: relative;
      i {
        position: absolute;
        top: .22rem;
        left: .22rem;
      }
      input {
        width: 100%;
        height: 1rem;
        display: block;
        padding-left: .85rem;
        -webkit-appearance: none;
        background-color: #f8f8f8;
        font-size: .4rem;
        color: #666;
        border: none;
        outline: none;
      }
    }

  }
</style>
