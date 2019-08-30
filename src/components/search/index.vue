<template>
  <div>
    <search></search>
    <hot></hot>
    <sort></sort>
  </div>
</template>
<script>
import search from './components/search.vue'
import hot from './components/hot.vue'
import sort from './components/sort.vue'
export default {
  components: {
    search,
    hot,
    sort
  }
}
</script>
