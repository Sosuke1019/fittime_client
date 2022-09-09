<template >
  <MyBar />
  <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="600">
    <div id="body">
      <h1>投稿</h1>

      <v-textarea
        v-model="title"
        filled
        auto-grow
        label="タイトル"
        rows="1"
        row-height="20"
        placeholder="タイトルを入力"
        v-bind:rules="myrules_title"
      ></v-textarea>

      <!-- メニュー追記 -->
      <v-textarea
        v-model="menu"
        auto-grow
        counter
        label="トレーニングメニュー"
        no-resize
        placeholder="トレーニングメニューを入力"
        rows="3"
        v-bind:rules="myrules_menu"
      ></v-textarea>
      <!-- ドロップダウンメニュー -->
      <v-select
        v-model="key"
        :items="items"
        label="エクササイズ"
        item-title="name"
        item-value="id"
        placeholder="エクササイズを選択"
        single-line
      ></v-select>
      <div class="text-center"></div>
      <!-- 所要時間入力 -->
      <v-textarea
        v-model="input"
        filled
        auto-grow
        label="所要時間"
        rows="1"
        row-height="20"
        placeholder="所要時間入力"
      ></v-textarea>

      <div>
        <v-btn depressed color="primary" v-on:click="submit"> 送信 </v-btn>
      </div>
    </div>
  </v-sheet>
</template>

<script >
import axios from "axios";
import MyBar from "./MyBar.vue";

export default {
  components: {
    MyBar: MyBar,
  },
  data: () => ({
    myrules_title: [(text) => text.length <= 20 || "最大文字数は20文字です"],
    myrules_menu: [(text) => text.length <= 50 || "最大文字数は50文字です"],
    items: [],
    // name: [],
    title: " ",
    menu: " ",
    input: 1,
    userid: "",
    key:"",
  }),

  mounted(){
      this.tag();
    },

  methods: {
    submit: async function () {
      this.userid = sessionStorage.getItem("id");
      console.log(this.userid);
      console.log(this.title);
      console.log(this.menu);
      console.log(this.input);
      await axios
        .post("http://118.27.15.148:8000/api/user/" + this.userid + "/menu", {
          title: this.title,
          body: this.menu,
          exerciseId: this.key,
          time: Number(this.input),
        })
        .then(function (response) {
          console.log(response);
        });
        this.$router.go({ path: "/TimeLab.vue", force: true });
    },

    tag: async function () {
        await axios
        .get("http://118.27.15.148:8000/api/exercise", {

        })
        .then(response => {
          this.items = response.data["exercises"]

          console.log(this.items)
          console.log(this.name)
        })

    },
  },
};
</script>

<style >
#body {
  width: 400px;
  text-align: center;
  margin: auto;
}
</style>