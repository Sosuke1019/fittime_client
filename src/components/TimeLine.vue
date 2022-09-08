<template>
  <v-card app color="basil" height="1000">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">FitTime</h1>
    </v-card-title>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <!-- <v-tab v-for="item in items" :key="item" v-on:click="onclick">
                {{ item }}
            </v-tab> -->

      <v-tab v-on:click="onclick1"> Profile </v-tab>
      <v-tab v-on:click="onclick2"> Favorite </v-tab>
      <v-tab v-on:click="onclick3"> Timeline </v-tab>
      <v-tab v-on:click="onclick4"> Post </v-tab>
      <v-tab v-on:click="onclick5"> Logout </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <!-- <v-card color="basil" flat>
                    <v-card-text >{{ text }}</v-card-text>
                </v-card> -->
      </v-tab-item>
    </v-tabs-items>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-form>
        <v-text-field label="search" v-model="tag"></v-text-field>
        <v-card-actions class="justify-center">
          <v-btn class="info" @click="search">Search</v-btn>
        </v-card-actions>
      </v-form>
      <!-- <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list> -->
    </v-navigation-drawer>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 50px"> </v-container>

      <v-row>
        <v-col cols="auto">
          <v-card width="450" height="450" class="overflow-auto">
            <v-card-text>
              <h3>Overflow Auto</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facilis dicta esse molestias vero hic laudantium provident nisi
              eos quasi iusto alias sequi, aut aliquid voluptatibus commodi!
              Minima, eum voluptates?
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <div class="my-25" />
          <v-card width="450" height="450" class="overflow-auto">
            <v-card-text>
              <h3>Overflow Auto</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facilis dicta esse molestias vero hic laudantium provident nisi
              eos quasi iusto alias sequi, aut aliquid voluptatibus commodi!
              Minima, eum voluptates?
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <div class="my-25" />
          <v-card width="450" height="450" class="overflow-auto">
            <v-card-text>
              <h3>Overflow Auto</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facilis dicta esse molestias vero hic laudantium provident nisi
              eos quasi iusto alias sequi, aut aliquid voluptatibus commodi!
              Minima, eum voluptates?
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <div class="my-25" />
          <v-card width="450" height="450" class="overflow-auto">
            <v-card-text>
              <h3>Overflow Auto</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facilis dicta esse molestias vero hic laudantium provident nisi
              eos quasi iusto alias sequi, aut aliquid voluptatibus commodi!
              Minima, eum voluptates?
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card width="450" height="450" class="overflow-auto">
            <v-card-text>
              <h3>Overflow Auto</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facilis dicta esse molestias vero hic laudantium provident nisi
              eos quasi iusto alias sequi, aut aliquid voluptatibus commodi!
              Minima, eum voluptates?
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card width="450" height="450" class="overflow-auto">
            <v-card-text>
              <h3>Overflow Auto</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              facilis dicta esse molestias vero hic laudantium provident nisi
              eos quasi iusto alias sequi, aut aliquid voluptatibus commodi!
              Minima, eum voluptates?
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-card>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      tab: null,
      items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
      drawer: false,
      group: null,
      tag: "",
    };
  },
  // data1: () => ({
  //   drawer: false,
  //   group: null,
  // }),
  methods: {
    onclick1: function () {
      this.$router.push("/");
    },
    onclick2: function () {
      this.$router.push("/favo");
    },
    onclick3: function () {
      this.$router.push("/timeline");
    },
    onclick4: function () {
      this.$router.push("/post");
    },
    onclick5: function () {
      this.$router.push("/login");
    },
    search() {
      console.log(this.tag);
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },

  mounted: {
    loginUser: async function () {
      await axios
      .get("URL", {
          data: {
            mail: this.name2,
            password: this.password2,
          },
        })
        .then(function (response) {
          console.log(response.userId);
          this.$router.push("/profile");
        })
        .catch(function (error) {
          console.log(error);
          this.$router.push("/login");
        });
    },
  }
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