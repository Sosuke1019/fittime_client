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
        <v-table id="table">
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Point</th>
              <th class="text-left">Menu</th>

              <!-- <th class="text-left">Title</th>
              <th class="text-left">Point</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.date">
              <td>{{ item.date }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
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
      menu_s: 0,

      // tableに必要な変数宣言
      menu: [],
      date: "",
      // tableに入力されるデータ
      desserts: [
          {
            date: "2022/01/01",
            name: 150,
            calories: "腹筋",
          },
          {
            date: "2022/03/01",
            name: '120',
            calories: "腕立て伏せ",
          }
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

        await axios
        .get("http://118.27.15.148:8000/api/timeline/" + this.userid, {})
        .then((response) => {
          this.date = response.data["date"];
          this.menu = response.data["menu"];
          this.menu_s = this.menu["Point"];

          console.log(this.menu);
          console.log(this.date);
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
  font-size: 17px;
  display: flex;
  margin: auto;
  margin-bottom: 17px;
  text-align: center;
}
#table{
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>