
<template>
  <div :class="{'hidden': !visible}">
    <div class="modal">
      <div class="brief-modal">
        <h2>
          {{ sellerSyn.name }}
        </h2>
        <ul class="brief-modal-ul">
          <li>
            <h3>{{ sellerSyn.score }}</h3>
            <p>评分</p>
          </li>
          <li>
            <h3>{{ sellerSyn.sellCount }}单</h3>
            <p>月售</p>
          </li>
          <li>
            <h3>美团专送</h3>
            <p>约{{ sellerSyn.deliveryTime }}分钟</p>
          </li>
          <li>
            <h3>{{ sellerSyn.serviceScore }}元</h3>
            <p >配送费</p>
          </li>
          <li>
            <h3>{{ sellerSyn.distance }}km</h3>
            <p>距离</p>
          </li>
        </ul>
        <h3 class="brief-modal-anno">
          <span>公告</span>
        </h3>
        <div class="brief-modal-txt">
          {{ sellerSyn.bulletin }}
        </div>
      </div>
      <div class="modal-master" @click="hideModal" />
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'modal',
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
        this.visible = false;
      },
    },
    computed: {
      ...mapGetters([
        'sellerSyn',
      ])
    },
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 52;
    -webkit-flex-direction: column;
    flex-direction: column;
    .modal-master {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .5);
      z-index: 1;
    }
    .brief-modal {
      position: relative;
      box-sizing: border-box;
      width: 80%;
      max-height: 85vw;
      padding: 7vw 6.6vw 7.5vw;
      border-radius: 1vw;
      overflow: hidden;
      background: #fff;
      z-index: 99;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      transition: transform .2s, -webkit-transform .2s;
      will-change: transform;
      h2 {
        font-size: .6rem;
        line-height: 6.6vw;
        color: #333;
        text-align: center;
        font-weight: bolder;
      }
      .brief-modal-ul {
        display: flex;
        margin: 5vw -6.6vw 0;
        li {
          flex: 1;
          text-align: center;
          h3 {
            font-size: .4rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 1.6vw;
          }
          p {
            font-size: .3rem;
            color: #999;
          }
        }
      }
      .brief-modal-anno {
        position: relative;
        text-align: center;
        margin: 4.8vw auto 2.6vw;
        width: 20vw;
        background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
        background-size: 100% 1px;
        background-position: 50%;
        background-repeat: no-repeat;
        span {
          font-size: .32rem;
          padding: 0 1.066667vw;
          color: #999;
          background-color: #fff;
        }
      }
      .brief-modal-txt {
        font-size: .35rem;
        line-height: 1.54;
        color: #333;
        max-height: 2.6rem;
        overflow-y: auto;
      }
    }
  }
</style>
