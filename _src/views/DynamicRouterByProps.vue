<template>
    <div></div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      ID: '',
    };
  },
  // props: ['id'],
  // methods: {
  //   push () {
  //     // return this.$router.push()
  //     console.log(this.$route.params.id);
  //   }
  // },
  created () { // 生命週期
    // console.log('props ' + this.id);
    // console.log(this.$router.push('c7be36195652d1d7'));
    axios.get(`https://randomuser.me/api/`).then((res) => {
      // console.log(res.data.info.seed);
      this.ID = res.data.info.seed;
      console.log(this.ID);
      location.href = location.pathname + this.ID;
    })
    // 動態路由
    // const seed = this.$route.params.id;
    // axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
    //   console.log(res);
    // })
    // axios.get(`https://randomuser.me/api/?seed=陳天仁`).then((res) => {
    //   console.log(res);
    // })
    // axios.get(`https://randomuser.me/api/?seed=` + encodeURI('陳天仁')).then((res) => {
    //   console.log(res);
    // })
    // console.log('this ' + seed);
    // axios.get(`https://randomuser.me/api/`, { params: { seed: seed } }).then((res) => {
    //   // console.log(res.data.info.seed = this.id);
    //   // this.passDataToParams(seed);
    // }).catch((error) => { console.error(error) })
  },
}
</script>
