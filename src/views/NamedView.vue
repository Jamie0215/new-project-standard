<template>
  <h2>命名視圖</h2>
  <div class="row">
    <div class="col-6">
      <!-- <router-link :to="{name:'新增頁面c2a1'}">abc</router-link> -->
      <router-view name="left"></router-view>
        <!-- <router-link :to="c2a1">abc</router-link> -->
    </div>
    <div class="col-6">
      <router-view name="right"></router-view>
    </div>
  </div>
</template>
