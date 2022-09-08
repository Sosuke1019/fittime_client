<template>
  <v-app>
    <MyBar />
    <!-- <v-app-bar
      app
      color="white"
      height="100"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="60%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline">
        FITTIME
      </v-toolbar-title>
    </v-app-bar> -->
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
  </v-app>
</template>

<script>
import MyBar from "./MyBar.vue";

export default {
  components: {
    MyBar: MyBar,
  },
};
</script>