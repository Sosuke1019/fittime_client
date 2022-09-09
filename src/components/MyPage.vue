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
        <div id = "status">
          <p >Point:{{point}}&emsp;</p>
          <p >Level:{{level}}&emsp;</p>
          <p >Status:{{status}}&emsp;</p>
        </div>

        <div>
          <v-btn depressed color="primary" v-on:click="edit"> 編集 </v-btn>
        </div>
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
#status{
  font-size: 10px;
  display: flex;
  margin: auto;
  margin-bottom: 17px;
  text-align: center;
}

</style>