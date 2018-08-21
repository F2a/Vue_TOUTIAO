<template>
  <div class="hello">
    <v-meatType />
    <h3>title</h3>
    <i class="iconfont icon-mail"></i>
  </div>
</template>

<script>
  import * as  api from '../common/service';
  import meatType from './content/MeatType.vue';

  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    components: {
      "v-meatType": meatType
    },
    methods: {
      async getList () {
        const { data } = await api.getSeller();
        console.log(data);
  //      if(data)
  //        this.$store.commit('getLists', data.result);
      }
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
      this.getList()
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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
