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
      v-model="title"
      filled
      auto-grow
      label="ユーザー名"
      rows="1"
      row-height="20"
      placeholder="ユーザー名を編集"
    ></v-textarea>

    <!-- メニュー追記 -->
    <v-textarea
      v-model="menu"
      auto-grow
      counter
      label="自己紹介文"
      no-resize
      placeholder="自己紹介文を編集"
      rows="3"
      v-bind:rules="myrules"
    ></v-textarea>
            <div>
              <v-btn depressed color="primary"> 編集 </v-btn>
            </div>
        </div>
          
    </v-sheet>
  </v-app>
</template>

<script>
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
        name: "",
        password: "",
      };
    },
    methods: {
      submit() {
        console.log(this.name, this.password);
        //   this.$router.push('/')
      },
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