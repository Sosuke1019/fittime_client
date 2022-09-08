<template>
  <MyBar />
  <div class="text-center">
    <div class="my-15">
      <v-sheet
        class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
        color="basil"
        height="300"
        outlined
      >
        <div class="grey--text text--lighten-1 text-body-2 mb-4">
          Do you want to logout?
        </div>

        <v-btn
          :disabled="loading"
          class="ma-1 my-15"
          color="white"
          plain
          @click="re"
        >
          Cancel
        </v-btn>

        <v-btn
          :loading="loading"
          class="ma-1"
          color="red"
          plain
          @click="remove"
        >
          Delete
        </v-btn>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import MyBar from "./MyBar.vue";
export default {
  data: () => ({
    loading: false,
  }),
  components: {
    MyBar: MyBar,
  },
  methods: {
    async remove() {
      this.loading = true;

      await new Promise((resolve) => setTimeout(resolve, 3000));

      this.loading = false;

      this.$router.push("/home");
    },

    re() {
      this.$router.push("/timelab");
    },
  },
};
</script>
 <style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>