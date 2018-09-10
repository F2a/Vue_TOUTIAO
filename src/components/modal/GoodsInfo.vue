<template>
  <div :class="{'hidden': !visible}">
    <div data-v-782b8f42="" class="foodpanel-root">
      <div class="foodpanel-close" @click="hideModal()">
       X
      </div>
      <div class="foodpanel-body">
        <div class="foodpanel-foodimg">
          <img alt="米饭" src="//fuss10.elemecdn.com/6/92/7116116ecc9415258a1e36e1926a0jpeg.jpeg?imageMogr/format/webp/thumbnail/!375x375r/gravity/Center/crop/375x375/">
        </div>
        <div class="foodpanel-foodinfo">
          <div class="foodpanel-foodname">
            <p class="foodpanel-content">米饭</p>
          </div>
          <div class="foodpanel-foodsales">
            <span>月售2095份</span>
            <span>好评率99%</span>
          </div>
          <div class="foodpanel-priceLine">
            <span class="salesInfo-price" style="color: rgb(255, 83, 57);">
              <span>1</span>
            </span>
            <div class="foodpanel-activityRow">

            </div>
            <span class="foodpanel-cartBtn">

            </span>
          </div>
          <p class="foodpanel-desc">大米产自东北，松花江水浇灌，米香浓郁，松软可口。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'goodsinfo',
    props: ['info'],
    data () {
      return {
        visible: false
      }
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      hideModal() {
        console.log(11);
        this.visible = false;
      },
    },
    mounted() {
      console.log(this.info);
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .foodpanel-root {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    .foodpanel-close {
      width: .75rem;
      height: .75rem;
      border-radius: 50%;
      background-color: rgba(0,0,0,.2);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 10;
      top: .2rem;
      right: .4rem;
    }
    .foodpanel-body {
      position: relative;
      background-color: #fff;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 2rem;
      .foodpanel-foodimg {
        width: 100%;
        height: 10rem;
        display: block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .foodpanel-foodinfo {
        position: relative;
        padding: .4rem .4rem 0;
        width: 100%;
        min-height: 3rem;
        .foodpanel-foodname {
          position: relative;
          display: -webkit-flex;
          display: flex;
          align-items: center;
          margin-bottom: .24rem;
          .foodpanel-content {
            font-size: .53rem;
            font-weight: 700;
            width: 7.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .foodpanel-foodsales {
          font-size: .3rem;
          color: #666;
          line-height: 1;
          margin-bottom: .24rem;
        }
        .foodpanel-priceLine {
          display: -webkit-flex;
          display: flex;
          align-items: center;
          margin-bottom: .24rem;
          .salesInfo-price {
            font-size: .48rem;
            line-height: .426667rem;
            color: #ff5339;
            padding-bottom: .093333rem;
            display: flex;
            align-items: baseline;
          }
          .foodpanel-desc {
            font-size: .293333rem;
            color: #666;
            line-height: .373333rem;
          }
        }
      }
    }
  }
</style>
