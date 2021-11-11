<template>
  <h2>命名視圖</h2>
  <div class="row">
    <div class="col-6">
      <router-view name="left"></router-view>
    </div>
    <div class="col-6">
      <router-view name="right"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataA: {
          "min_position": 8,
          "has_more_items": false,
          "items_html": "Car",
          "new_latent_count": 4,
          "objArray": [{
              "class": "upper",
              "age": 20211130
            },
            {
              "class": "upper",
              "age": 20210101
            },
            {
              "class": "upper",
              "age": 20200909
            },
            {
              "class": "middle",
              "age": 20181111
            },
            {
              "class": "upper",
              "age": 20150230
            }
          ]
        },
        id: []
      }
    },
    methods: {
    },
    mounted() {
      this.dataA.objArray.forEach(list => {
        this.id.push(list.age)
      })

    }
  }

</script>
