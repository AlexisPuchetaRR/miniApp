<template>
  <div>
    <SearchBar />
    <div class="bg-gray-200 w-full h-full min-h-screen">
      <div class="px-12 py-8 bg-gray-200">
        <div class="bg-white">
          <ul>
            <li v-for="value in list" :key="value.id">
              <Item :img="value.thumbnail" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import Item from "@/components/Item.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    SearchBar,
    Item,
  },
  computed: mapState({
    list: (state) => state.data,
  }),
};
</script>
