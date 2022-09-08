<template>
  <v-app>
    <MyBar />
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 50px"> </v-container>
      <div class="container">
        <div>
          <v-card width="400px" height="400" class="mx-auto my-12">
            <v-card-title>
              <h1 class="text-subtitle-2 text-center">会員登録</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account-circle"
                  label="mail"
                  v-model="address"
                />
                <v-text-field
                  prepend-icon="mdi-account-circle"
                  label="ユーザ名"
                  v-model="name"
                />
                <v-text-field
                  v-bind:type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  label="パスワード"
                  @click:append="showPassword = !showPassword"
                  v-model="password"
                />
                <v-card-actions class="justify-center">
                  <v-btn class="info" @click="loginUser">会員登録</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </div>
        <div>
          <v-card width="400px" height="400" class="mx-auto my-12">
            <v-card-title>
              <h1 class="text-subtitle-2 text-center">Login</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account-circle"
                  label="ユーザ名"
                  v-model="name2"
                />
                <v-text-field
                  v-bind:type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  label="パスワード"
                  @click:append="showPassword = !showPassword"
                  v-model="password2"
                />
                <v-card-actions class="justify-center">
                  <v-btn class="info" @click="resistUser">ログイン</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-sheet>
  </v-app>
</template>

<script>
import axios from 'axios';
import MyBar from "./MyBar.vue";

export default {
  name: "App",
  // data: () => ({
  //   showPassword : false
  //   //
  // }),
  components: {
    MyBar: MyBar,
  },
  data() {
    return {
      showPassword: false,
      address: "",
      name: "",
      password: "",
      name2: "",
      password2: "",
      info: "",
    };
  },
  methods: {
    submit() {
      console.log(this.address, this.name, this.password);
    },
    submit2() {
      console.log(this.name2, this.password2);
    },

    loginUser: async function () {
      await axios
      .get("http://localhost:8000/api/auth/login", {
            mail: this.name2,
            password: this.password2,
          })
        .then(function (response) {
          console.log(response.userId);
          this.$router.push("/home");
        })
        .catch(function (error) {
          console.log(error);
          this.$router.push("/login");
        });
    },

    resistUser: async function () {
      await axios
        .post("http://localhost:8000/api/user/create", {
            mail: this.address,
            username: this.name,
            password: this.passsword,
        })
        .then(function (response) {
          if (response.StatusCode == 200) {
            this.$router.push("/home");
          }
          else{
            this.$router.push("/login");
          }
          
        })
        .catch(function (error) {
          console.log(error);
          this.$router.push("/login");
        });
    },
  },

  // mounted: {
  //   loginUser: async function () {
  //     await axios
  //     .get("http://localhost:8000/api/auth/login", {
  //         data: {
  //           mail: this.name2,
  //           password: this.password2,
  //         },
  //       })
  //       .then(function (response) {
  //         console.log(response.userId);
  //         this.$router.push("/home");
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         this.$router.push("/login");
  //       });
  //   },

  //   resistUser: async function () {
  //     await axios
  //       .post("http://localhost:8000/api/user/create", {
  //         data: {
  //           mail: this.address,
  //           username: this.name,
  //           password: this.passsword,
  //         },
  //       })
  //       .then(function (response) {
  //         if (response.StatusCode == 200) {
  //           this.$router.push("/home");
  //         }
  //         else{
  //           this.$router.push("/login");
  //         }
          
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         this.$router.push("/login");
  //       });
  //   },
  // },
};
</script>

<style>
.container {
  display: flex;
  margin: auto;
}
</style>