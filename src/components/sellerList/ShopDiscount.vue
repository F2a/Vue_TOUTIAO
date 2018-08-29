<template>
  <div @click="showDiscount($event)" :class="['clearfix', 'shop-discount-entries', { 'shop-discount-entries-show': shopDiscount }]">
    <div v-if="num>2" :class="['discount-down', { 'discount-up': shopDiscount }]">&lt;</div>
    <ul
      class="shop-discount-entry-wrap-overflow clearfix"
    >
      <li v-for="val in supports" v-if="val.show" class="shop-discount-entry clearfix">
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
</template>
<script>
  export default {
    name: 'ShopDiscount',
    props: ['supports'],
    data () {
      return {
        shopDiscount: false,
        num: 0,
      }
    },
    methods: {
      showDiscount (e){
        console.log(this.shopDiscount);
        e.preventDefault();
        e.stopPropagation();
        this.shopDiscount = !this.shopDiscount;
      },
    },
    mounted() {
      let num = 0;
      (this.supports||[]).map((val, i) => {
        if(val.show)
          num ++
      })
      this.num = num;
    },
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  /* 活动 */
  .shop-discount-entries {
    max-height: 1.2rem;
    font-size: 11px;
    color: #898989;
    padding-top: 0.5rem;
    position: relative;
    overflow: hidden;
    transition: .3s;
    &.shop-discount-entries-show{
      height: auto;
      max-height: 5rem;
      transition: .3s;
    }
    .discount-down{
      display: inline-block;
      box-sizing: border-box;
      color: #5f5f5f;
      font-size: 0.35rem;
      font-weight: 800;
      position: absolute;
      right: 0.5rem;
      transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      transition: .3s;
    }
    .discount-up{
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
    }
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
</style>
