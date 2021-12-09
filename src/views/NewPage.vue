<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          元件A
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          元件B
        </router-link>
        <router-link to="/newpage/namedView/c2a" class="list-group-item list-group-item-action">
          命名視圖c2a
        </router-link>
        <router-link to="/newpage/namedView/a2b" class="list-group-item list-group-item-action">
          命名視圖a2b
        </router-link>
        <router-link to="/newpage/dynamicRouter/c7be36195652d1d7" class="list-group-item list-group-item-action">
          動態路由($route)
        </router-link>
        <!-- <router-link to="/newpage/dynamicRouterByProps/c7be36195652d1d7" class="list-group-item list-group-item-action"> -->
        <!-- <router-link :to="{name:'新增頁面Props'}" class="list-group-item list-group-item-action"> -->
        <!-- <router-link :to="{path:'dynamicRouterByProps', query: { date: ID }}" class="list-group-item list-group-item-action"> -->
        <router-link :to="{ path:'/newpage/dynamicRouterByProps/'+ ID }" class="list-group-item list-group-item-action">
        <!-- <router-link :to="`/newpage/dynamicRouterByProps/`+ ID " class="list-group-item list-group-item-action"> -->
        <!-- <router-link to="/newpage/dynamicRouterByProps/" @click.prevent="passDataToParams" class="list-group-item list-group-item-action"> -->
          動態路由(props)
        </router-link>
        <router-link to="/newpage/routerNavigation" class="list-group-item list-group-item-action">
          路由導覽
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ByProps from "./DynamicRouterByProps";
// import ByProps, * as named from "./DynamicRouterByProps";
// console.log(ByProps());
// console.log(named.obj);
export default {
  data () {
    return {
      ID: ''
    }
  },
  methods: {
    passDataToParams (){
      ByProps.mounted().then((result) => {
        // console.log(result);
        this.ID = result;
      });
    }
  },
  created () {
    // 修正一堆錯誤
    console.log(this);
    // console.log(this.$route);
    console.log(this.$route.params.id)
    if (this.$route.params.id){
      this.ID = this.$route.params.id;
    } else {
      this.passDataToParams();
    }
  }
}
// export default {
//   data () {
//     return {
//       id: ''
//     }
//   },
//   created () {

//   }
//   // methods: {
//   //   randomusefloor (min, max) {
//   //     return Math.floor(Math.random() * (max - min + 1) + min);
//   //   },
//   //   makerandomletter (max) {
//   //     var text = "";
//   //     var possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   //     for (var i = 0; i < max; i++) {
//   //       text += possible.charAt(Math.floor(Math.random() * possible.length));
//   //     }
//   //     return text;
//   //   },

//   //   myrandomstring () {
//   //     this.id = this.makerandomletter(8) + this.randomusefloor(1, 999999);
//   //     console.log(this.id);
//   //   }
//   // },
//   // mounted () {
//   //   this.myrandomstring();
//   // }
// }

</script>
