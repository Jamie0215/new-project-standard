<template>
    <button type="button" @click="getRoute">getRoute</button>
    <button type="button" @click="push">Push</button>
    <button type="button" @click="replace">Replace</button>
    <button type="button" @click="go">Go</button>
    <hr/>
    <button type="button" @click="addRoute">新增路由</button>
</template>
<script>
export default {
  methods: {
    // 取得常用參數
    getRoute () {
      // 取得路由的屬性
      // https://next.router.vuejs.org/zh/api/#routelocationnormalized
      // 範例: this.$route.fullPath (目前網址)
      // console.log(this.$route);

      // 呼叫路由的方法
      // https://next.router.vuejs.org/zh/api/#router-%E6%96%B9%E6%B3%95 (方法)
      // 範例: this.$router.go(-1) (回上一頁)
      console.log(this.$router);
    },
    // 包含歷史紀錄
    push () {
    //   this.$router.push('/newpage/dynamicRouter/c7be36195652d1d7');
      this.$router.push({
        name: 'About',
      });
    },
    // 沒有歷史紀錄
    replace () {

    },
    // 操作歷史紀錄
    go () {

    },
    // 延伸介紹
    addRoute () {

    },

  },
};
</script>
