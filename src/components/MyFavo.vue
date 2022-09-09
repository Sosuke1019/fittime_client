<template>
  <v-app>
    <MyBar />
    <!-- <v-app-bar
      app
      color="white"
      height="100"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="60%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline">
        FITTIME
      </v-toolbar-title>
    </v-app-bar> -->
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 50px"> </v-container>

      <v-row>
        <div class="columns medium-3" v-for="menu in menus" :key="menu.menuId">
          <v-col cols="auto">
            <v-card width="450" height="450" class="overflow-auto">
              <v-btn class="mx-2" fab  small color="blue" @click="addlog(menu)">
                WORK
                <v-icon darkligtht> mdi-checkbox-marked-circle </v-icon>
              </v-btn>
              <v-card-text>
                <h3>{{ menu.title }}</h3>
                {{ menu.body }}
              </v-card-text>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-sheet>
  </v-app>
</template>

<script>
import axios from 'axios';
// import axios from 'axios';
import MyBar from "./MyBar.vue";

export default {
  data: () => ({
    selected: [],
    menus: [],
    flag: false,
    userid:'',
    menuid:'',
    info:'',
  }),
  components: {
    MyBar: MyBar,
  },

  methods: {
    addlog(proxy){
      console.log(proxy);
      console.log(proxy.menuId);
      this.info = proxy.menuId;
      console.log(this.info);

      this.userid=sessionStorage.getItem("id");
      console.log(this.userid);
      this.menuid = this.info;
      // console.log(menu.[[Target]]);

      axios
      .post("http://118.27.15.148:8000/api/user/"+this.userid+"/log/"+this.menuid,{})
      .then(response=>{
        console.log(response);  
             
        });

      this.$router.push('/favo')
    }

      
    },




  

  mounted() {
        this.userid=sessionStorage.getItem("id");
        console.log(this.userid);

        axios
        .get("http://118.27.15.148:8000/api/user/"+this.userid+"/favorite")
        .then(response =>{ 
        this.menus=response.data  
        console.log(response);    
        });

        this.$router.push('/favo')
      },
};
</script>