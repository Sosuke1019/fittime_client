<template>
    <v-app>
        <v-card app color="basil" clipped-left>
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 basil--text">
                FitTime
            </h1>
        </v-card-title>  
    </v-card>

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
                  <v-btn class="info" @click="resistUser">会員登録</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </div>
    </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      showPassword: false,
      address: "",
      name: "",
      password: "",
      info: Number,
    };
  },
  methods: {

    resistUser:  function () {
       axios
        .post("http://118.27.15.148:8000/api/user/create", {
          username: this.name,
          mail: this.address,
          password: this.password,
        })
        .then(response => {
            this.info = response.status
            console.log(this.info)
            if(this.info==200){
                this.$router.push('/home');
            }

        }
        )
    },
},
};
</script>
