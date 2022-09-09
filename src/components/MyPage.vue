<template>
  <v-app>
    <MyBar />
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <div id="body">
        <h1>{{ edit_before_username }}さんのMyPage</h1>

        <v-textarea
          v-model="edit_name"
          filled
          auto-grow
          label="ユーザー名"
          rows="1"
          row-height="20"
          :placeholder="edit_before_username"
          v-bind:rules="myrules_n"
        ></v-textarea>

        <!-- メニュー追記 -->
        <v-textarea
          v-model="edit_profile"
          auto-grow
          counter
          label="自己紹介文"
          no-resize
          :placeholder="edit_before_profile"
          rows="3"
          v-bind:rules="myrules"
        ></v-textarea>

        <!-- stasusを記述 -->
        <div id="status">
          <p>Point:{{ point }}&emsp;</p>
          <p>Level:{{ level }}&emsp;</p>
          <p>Status:{{ status }}&emsp;</p>
        </div>
        <!-- 編集ボタン -->
        <div>
          <v-btn depressed color="primary" v-on:click="edit"> 編集 </v-btn>
        </div>

        <!-- テーブル作成 -->
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>

      </div>
    </v-sheet>
  </v-app>
</template>

<script>
import axios from "axios";
import MyBar from "./MyBar.vue";

export default {
  name: "App",
  components: {
    MyBar: MyBar,
  },
  // data: () => ({
  data() {
    return {
      myrules: [(text) => text.length <= 30 || "最大文字数は30文字です"],
      myrules_n: [(text) => text.length <= 10 || "最大文字数は10文字です"],
      showPassword: false,
      edit_before_username: "1",
      edit_before_profile: "",
      edit_name: "",
      edit_profile: "",
      name: "",
      userid: "",
      posint: 0,
      level: 0,
      ststus: "",

      // tableに必要な変数宣言

      // tableに入力されるデータ
      headers: [
          {
            text: '運動log',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
    };
  },

  mounted() {
    this.save();
  },

  methods: {
    // プロフィール情報を更新
    edit: async function () {
      await axios
        .patch(
          "http://118.27.15.148:8000/api/user/" + this.userid + "/username",
          {
            username: this.edit_name,
          }
        )
        .then((response) => {
          console.log(response.data["Name"]);
        });

      await axios
        .patch(
          "http://118.27.15.148:8000/api/user/" + this.userid + "/profile",
          {
            profile: this.edit_profile,
          }
        )
        .then((response) => {
          console.log(response.data["Profile"]);
        });

      this.$router.go({ path: this.$router.currentRoute.path, force: true });
    },

    save: async function () {
      this.userid = sessionStorage.getItem("id");
      await axios
        .get("http://118.27.15.148:8000/api/user/" + this.userid, {
          userid: this.userid,
        })
        .then((response) => {
          this.edit_before_username = response.data["Name"];
          this.edit_before_profile = response.data["Profile"];
          this.point = response.data["Point"];
          this.level = response.data["Level"];
          this.status = response.data["Status"];

          console.log(this.edit_before_username);
          console.log(this.edit_before_profile);
        });
    },
  },
};
</script>


<style>
.body {
  width: 400px;
  text-align: center;
  margin: auto;
}
#body h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 35px;
}
#status {
  font-size: 10px;
  display: flex;
  margin: auto;
  margin-bottom: 17px;
  text-align: center;
}
</style>