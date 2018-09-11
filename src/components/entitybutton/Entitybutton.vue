<template>
  <span class="cartbutton-entitybutton">
     <a v-if="num>0" role="button" aria-label="删减商品" @click="changeNum($event, index, i, 'sub')">
      <i  class="iconfont icon-sub" />
    </a>
    <span v-if="num>0" role="button" class="cartbutton-entityquantity">
      {{ num }}
    </span>
     <a role="button" aria-label="添加商品" @click="changeNum($event, index, i, 'add')">
      <i class="iconfont icon-add"/>
    </a>
  </span>
</template>
<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    name: 'cartButton',
    props: ['i', 'num', 'index'],
    computed: {
      ...mapGetters([
        'spanning',
        'goods',
      ])
    },
    methods: {
      ...mapMutations({
        postGoods: 'POSTGOODS',
      }),
      changeNum(e, index, i, action) { //商品增减
        e.stopPropagation();
        e.preventDefault();
        const data = this.goods;
        if(action=='add'){
          data[index].foods[i].num++;
        }else if(action=='sub'&&data[index].foods[i].num>0){
          data[index].foods[i].num--;
        }
        this.postGoods(data);
      },
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  /* 商品加减按钮 */
  .cartbutton-entitybutton {
    display: inline-flex;
    font-size: .346667rem;
    align-items: center;
    .cartbutton-entityquantity {
      display: inline-block;
      text-align: center;
      color: rgba(0,0,0,.87);
      vertical-align: middle;
      font-size: .373333rem;
      width: .693333rem;
      overflow: hidden;
    }
    a {
      display: inline-block;
      vertical-align: middle;
      text-decoration: none;
      margin: 0 3px;
    }
    i {
      color: rgb(35, 149, 255);
      font-size: 23px;
      vertical-align: middle;
    }
  }
</style>
