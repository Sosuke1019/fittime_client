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
        <div class="columns medium-3" v-for="menu in menus" :key="menu.menuId">
          <v-col cols="auto">
            <v-card width="450" height="450" class="overflow-auto">
              <v-btn class="mx-2" fab  small color="white" @click="add">
                <v-icon color="pink"> mdi-heart </v-icon>
              </v-btn>
              <v-card-text>
                <h3>{{ menu.title }}</h3>
                {{ menu.body }}
              </v-card-text>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
import axios from 'axios';
// import axios from 'axios';
import MyBar from "./MyBar.vue";

export default {
  data: () => ({
    selected: [],
    menus: [],
    flag: false,
  }),
  components: {
    MyBar: MyBar,
  },

  methods: {
    searchUser: async function () {
      const response = {
        users: [
          {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            username: "nanashi",
          },
          {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            username: "nanashi",
          },
          {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            username: "nanashi",
          },
          {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            username: "nanashi",
          },
          {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            username: "nanashi",
          },
        ],
        menus: [
          {
            menuId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            title: "最強メニュー",
            username: "nanashi",
            body: "体力がある人むけのメニューです。これを1日一回すれば激痩せすること間違いなし！",
            nice: 56,
            point: 18,
            exercises: [
              {
                no: 0,
                name: "腹筋",
                time: 10,
              },
              {
                no: 0,
                name: "腹筋",
                time: 10,
              },
              {
                no: 0,
                name: "腹筋",
                time: 10,
              },
            ],
          },
          {
            menuId: "3fa85f64-5717-4562-b3fc-2c963f66afa",
            username: "nanashi",
            body: "体力がある人むけのメニューです。これを1日一回すれば激痩せすること間違いなし！",
            nice: 56,
            point: 18,
            exercises: [
              {
                no: 0,
                name: "腹筋",
                time: 10,
              },
              {
                no: 0,
                name: "腹筋",
                time: 10,
              },
              {
                no: 0,
                name: "腹筋",
                time: 10,
              },
            ],
          },
        ],
      };

      this.menus = response.menus;

      
    },

    mounted() {
        axios
        .get("http://118.27.15.148:8000/api/user/"+this.userid+"favorite/")
        .then(function (response) {
        console.log(response);          
        });
      },



  },

  mounted() {
    this.searchUser();
  },
};
</script>