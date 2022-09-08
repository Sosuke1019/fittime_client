<template>
  <v-app>
    <MyBar />
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <div id="body">
        <v-col cols="4">
          <h1>MyPage</h1>
        </v-col>

        <v-textarea
          v-model="edit_name"
          filled
          auto-grow
          label="ユーザー名"
          rows="1"
          row-height="20"
          placeholder="ユーザー名を編集"
        ></v-textarea>

        <!-- メニュー追記 -->
        <v-textarea
          v-model="edit_profile"
          auto-grow
          counter
          label="自己紹介文"
          no-resize
          placeholder="自己紹介文を編集"
          rows="3"
          v-bind:rules="myrules"
        ></v-textarea>
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
  data: () => ({
    data() {
      return {
        myrules: [(text) => text.length <= 30 || "最大文字数は30文字です"],
        showPassword: false,
        edit_begore_username: "",
        edit_before_profile: "",
        edit_name: "",
        edit_profile: "",
        userid: "",
      };
    },
    methods: {
      // プロフィール情報を更新
      edit: async function () {
      await axios
        .post("http://localhost:8000/api/user/" + this.userid + "/" + this.edit_begore_username, {
          title: this.title,
          body: this.name,
          exercises: this.menu,
        })
        .then(function (response) {
          console.log(response.userid);
          this.$router.push("/Mypage");
        })
        .catch(function (error) {
          console.log(error);
          this.$router.push("/MyPage");
        })

      await axios
        .post("http://localhost:8000/api/user/" + this.userid + "/menu", {
          title: this.title,
          body: this.name,
          exercises: this.menu,
        })
        .then(function (response) {
          console.log(response.userid);
          this.$router.push("/Mypage");
        })
        .catch(function (error) {
          console.log(error);
          this.$router.push("/MyPage");
        })
      
      },
        // プロフィール情報を取得
        save: async function () {
      await axios
        .post("http://localhost:8000/api/user/"+this.userid, {
          res_userid: this.userid,
          
        })
        .then(function (response) {
          console.log(response.userid);
          this.edit_begore_username = response.userid;
          this.edit_before_profile = response.profile;
          this.$router.push("/MyPage");
        })
        .catch(function (error) {
          console.log(error);
          this.$router.push("/Mypage");
        });
    },

    //
  }),
};
</script>


<style >
.body {
  width: 400px;
  text-align: center;
  margin: auto;
}
</style>