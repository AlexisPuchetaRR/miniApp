<template>
  <div class="w-48 h-full">
    <img :src="img">
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBar",
  props: {
    img: {
        type: String,
        default: () => {},
    }

  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["getDataActions"]),
    async save() {
      console.log(this.search);
      this.getDataActions(this.search);
      return this.$store.state.data;
    },
  },
};
</script>
