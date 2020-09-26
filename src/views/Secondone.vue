<template>
  <div>
    <tabbar :count="count"></tabbar>
  </div>
</template>

<script>
  import Tabbar from "../components/Tabbar";
  export default {
    name: "Secondone",
    components: {Tabbar},
    props: {
      count: {
        type: Number,
        default: 1
      }
    }
  }
</script>

<style scoped>

</style>