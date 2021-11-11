<template>
  <h1>UserID:{{ this.$route.params.id }}</h1>
  <pre>{{ id }}</pre>
</template>
<script>
import axios from "axios";
export default {
  props: ["id"],
  mounted () { // 已經將HTML掛載到畫面上
    console.log(this.id);
    return new Promise((resolve) => {
      axios.get(`https://randomuser.me/api/`).then((res) => {
        resolve(res.data.info.seed);
      });
    });
  },
  created () { // 進入生命週期代表資料已經建立完成了
    // this.$router.push({ name: 'user', params: { userId: 1 } })
    // console.log(this.id);
  }
};

// import axios from "axios";
// export default {
//   // props: ['id'],
//   methods: {
//     push () {
//       // return this.$router.push()
//       console.log(this.$route.params.id);
//     }
//   },
//   created () {
//     // 生命週期
//     // console.log('props ' + this.id);
//     console.log(this.$router.push());
//     // console.log(this.$router.push('c7be36195652d1d7'));
//     // axios.get(`https://randomuser.me/api/`).then((res) => {
//     //   console.log(res);
//     //   // res.data.info.seed = this.id
//     //   this.$router.push(res.data.info.seed);
//     // });
//     // 動態路由
//     // const seed = this.$route.params.id;
//     // axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
//     //   console.log(res);
//     // })
//     // axios.get(`https://randomuser.me/api/?seed=陳天仁`).then((res) => {
//     //   console.log(res);
//     // })
//     // axios.get(`https://randomuser.me/api/?seed=` + encodeURI('陳天仁')).then((res) => {
//     //   console.log(res);
//     // })
//     // console.log('this ' + seed);
//     // axios.get(`https://randomuser.me/api/`, { params: { seed: seed } }).then((res) => {
//     //   // console.log(res.data.info.seed = this.id);
//     //   // this.passDataToParams(seed);
//     // }).catch((error) => { console.error(error) })
//   },
// };
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
</style>
