<template>
  <div class="bg-primary flex justify-center w-full">
    <img
      src="../assets/logo.png"
      width="96px"
      height="32px"
      alt="Mercado libre logo"
      class="py-2"
    />
    <div class=" py-4">
      <div class="flex items-center bg-white px-1 h-12">
        <input
          type="text"
          placeholder=" Nunca dejes de buscar"
          size="120"
          class="h-full"
          name="search"
          v-model="search"
          v-on:keyup.enter="save()"
        />
        <div class="w-4 h-full ">
          <button @click="save()">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="svg-inline--fa fa-search fa-w-16 bg-gray-300 h-full py-2 px-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="gray"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
  created() {
  },
  methods: {
    ...mapActions(['getDataActions']),
    async save() {
      await this.getDataActions(this.search);
      this.$router.push("/").catch(()=>{});
      return this.$store.state.data;
    },
  },
};
</script>
