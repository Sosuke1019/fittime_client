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
        v-bind:rules="myrules"
      ></v-textarea>
      <!-- ドロップダウンメニュー -->
      <v-select :items="items" filled label="ジャンル選択" v-model="exerciseId"></v-select>
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
    items: ["ラーメン", "つけ麺", "僕イケメン", "パスタ"],
    title: "",
    menu: "",
    input: 0,
    userid: "",
    exerciseId: "fde8b72a-2f94-11ed-8335-0242ac170004",
  }),

  mounted(){
      this.tag();
    },

  methods: {
    submit: async function () {
      this.userid = sessionStorage.getItem("id");
      console.log(this.userid);
      console.log(this.title)
      console.log(this.menu)
      await axios
        .post("http://118.27.15.148:8000/api/user/"+this.userid + "/menu", {
          title: this.title,
          body: this.menu,
          exerciseId: this.exerciseId,
          time: this.input,
        })
        .then(function (response) {
          console.log(response);
        });
      this.$router.go({path: '/TimeLine.vue', force: true}) 
    },

    tag: async function () {
        this.userid = sessionStorage.getItem("id")
        await axios
        .get("http://118.27.15.148:8000/api/user/"+this.userid, {
          userid: this.userid,
          
        })
        .then(response => {
          
          this.edit_before_username = response.data["Name"]
          this.edit_before_profile = response.data["Profile"]

          console.log(this.edit_before_username)
          console.log(this.edit_before_profile)
            
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