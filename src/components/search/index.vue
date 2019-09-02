<template>
  <div>
    <searchInput></searchInput>
    <searchHot></searchHot>
    <searchSort></searchSort>
  </div>
</template>
<script>
import searchInput from './components/searchInput.vue'
import searchHot from './components/searchHot.vue'
import searchSort from './components/searchSort.vue'
export default {
  components: {
    searchInput,
    searchHot,
    searchSort
  },
  data () {
    return {
    }
  }

}
</script>
