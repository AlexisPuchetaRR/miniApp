<template>
  <div>
    <SearchBar/>
    <h1>Item Detail</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'ItemDetail',
  components: {
    SearchBar
  }
}
</script>