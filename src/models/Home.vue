<template>
  <div class="hello">
    <v-header />
    <v-meatType />
    <div class="shoplist-title">
      <h4>推荐商家</h4>
    </div>
    <v-sellerList />
    <v-userBar />
  </div>
</template>

<script>
  import meatType from '../components/meatTypes/MeatType.vue';
  import sellerList from '../components/sellerList/SellerList.vue';
  import header from '../components/header/Header.vue';
  import userBar from '../components/userBar/UserBar.vue';

  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    components: {
      "v-meatType": meatType,
      "v-sellerList": sellerList,
      "v-header": header,
      "v-userBar": userBar,
    },
    methods: {

    },
    beforeCreate() {
      console.log('在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用');
    },
    created() {
      console.log('在实例创建完成后被立即调用');
    },
    beforeMount() {
      console.log('在挂载开始之前被调用');
    },
    mounted() {
      console.log('挂载完成');
    },
    beforeUpdate() {
      console.log('数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前');
    },
    updated() {
      console.log('发生在虚拟 DOM 重新渲染和打补丁之后');
      // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。
      this.$nextTick(function () {
        // 所有的子组件也都一起被挂载可以用 vm.$nextTick
      })
    },
    activated() {
      console.log('keep-alive 组件激活时调用');
    },
    deactivated() {
      console.log('keep-alive 组件停用时调用');
    },
    beforeDestroy() {
      console.log('Vue 实例销毁之前调用');
    },
    destroyed() {
      console.log('Vue 实例销毁后调用');
    },
    errorCaptured(err, vm, info) {
      console.log('当捕获一个来自子孙组件的错误时被调用');
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  h4{
    font-size: 0.5rem;
  }
  .shoplist-title{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: .96rem;
    height: 9.6vw;
    font-size: 1rem;
    color: #000;
    background-color: #fff;
      &:after , &:before {
         display: block;
         content: "";
         width: .533333rem;
         width: 5.333333vw;
         height: .026667rem;
         height: .266667vw;
         margin: 0 .346667rem;
         background-color: #999;
     }
  }
</style>
