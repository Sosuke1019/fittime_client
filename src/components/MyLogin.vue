<template>
  <v-app>
    <v-card app color="basil" clipped-left>
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 basil--text">
                FitTime
            </h1>
        </v-card-title>
        
    </v-card>
    <v-card width="400px" height="400" class="mx-auto my-12">
      <v-card-title >
        <h1 class="text-subtitle-2 text-center">FITTIME</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
           prepend-icon="mdi-account-circle" 
           label="mail"
           v-model="address" 
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
            <v-btn class="my-15" @click="loginUser">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  // data: () => ({
  //   showPassword : false
  //   //
  // }),
  data(){
    return {
      showPassword : false,
      address:'',
      password:'',
      userid:'',
    }
  },
  methods:{
    loginUser: async function () {
      await axios.post("http://118.27.15.148:8000/api/auth/login", {
        mail: this.address,
        password: this.password,
      })
      .then(response =>{
        console.log(response.data.userID);
        sessionStorage.setItem("id", response.data.userID);
        let userid = sessionStorage.getItem("id");
        console.log(userid);     
        });

        this.$router.push("/mypage");

      // this.$router.push("/timeline");
    },
  }
};
</script>