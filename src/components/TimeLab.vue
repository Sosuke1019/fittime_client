<template>
<!-- <div>{{userid}}</div> -->
  <v-card app color="basil" height="1000">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">FitTime</h1>
    </v-card-title>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <!-- <v-tab v-for="item in items" :key="item" v-on:click="onclick">
                {{ item }}
            </v-tab> -->

      <v-tab v-on:click="onclick1"> Profile </v-tab>
      <v-tab v-on:click="onclick2"> Favorite </v-tab>
      <v-tab v-on:click="onclick3"> Timeline </v-tab>
      <v-tab v-on:click="onclick4"> Post </v-tab>
      <v-tab v-on:click="onclick5"> Logout </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <!-- <v-card color="basil" flat>
                    <v-card-text >{{ text }}</v-card-text>
                </v-card> -->
      </v-tab-item>
    </v-tabs-items>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-form>
        <v-text-field label="search" v-model="tag"></v-text-field>
        <v-card-actions class="justify-center">
          <v-col>
          <v-btn class="info" @click="searchUser">Search</v-btn>
          <v-btn @click='myview'>View My log</v-btn>
          </v-col>
        </v-card-actions>
      </v-form>
      <!-- <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list> -->
    </v-navigation-drawer>
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
              <v-btn class="mx-2" fab  small color="white"  @click="setid(menu);add()">
                <v-icon color="pink"> mdi-heart</v-icon>
              </v-btn>
              <v-card-text>
                <h3>{{ menu.title }}</h3>
                <h4>{{menu.menuId}}</h4>
                <h4>{{menu.username}}</h4>
                <h5>{{menu.date}}</h5>
                {{ menu.body }}
              </v-card-text>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-sheet>
  </v-card>
</template>


<script>
import axios from "axios";
export default {
  // props: {
  //   userid: String
  // },
  data() {
    return {
      tab: null,
      items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
      drawer: false,
      group: null,
      tag: "",
      menus: [],
      menuid:"",
      userid:'',
      info:'',
    };
  },
  // data1: () => ({
  //   drawer: false,
  //   group: null,
  // }),
  methods: {
    onload: function() {
      console.log("this page"+this.userid);
    },
    onclick1: function () {
      this.$router.push("/mypage");
    },
    onclick2: function () {
      this.$router.push("/favo");
    },
    onclick3: function () {
      this.$router.push("/timelab");
    },
    onclick4: function () {
      this.$router.push("/post");
    },
    onclick5: function () {
      this.$router.push("/logout");
    },
    // search() {
    //   console.log(this.tag);
    // },

    searchUser: async function () {
      console.log(this.tag)
      // const response = {
      //   users: [
      //     {
      //       userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      //       username: "nanashi",
      //     },
      //     {
      //       userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      //       username: "nanashi",
      //     },
      //     {
      //       userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      //       username: "nanashi",
      //     },
      //     {
      //       userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      //       username: "nanashi",
      //     },
      //     {
      //       userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      //       username: "nanashi",
      //     },
      //   ],
      //   menus: [
      //     {
      //       menuId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      //       title: "??????????????????",
      //       username: "nanashi",
      //       body: "?????????????????????????????????????????????????????????1?????????????????????????????????????????????????????????",
      //       nice: 56,
      //       point: 18,
      //       exercises: [
      //         {
      //           no: 0,
      //           name: "??????",
      //           time: 10,
      //         },
      //         {
      //           no: 0,
      //           name: "??????",
      //           time: 10,
      //         },
      //         {
      //           no: 0,
      //           name: "??????",
      //           time: 10,
      //         },
      //       ],
      //     },
      //     {
      //       menuId: "3fa85f64-5717-4562-b3fc-2c963f66afa",
      //       username: "nanashi",
      //       body: "?????????????????????????????????????????????????????????1?????????????????????????????????????????????????????????",
      //       nice: 56,
      //       point: 18,
      //       exercises: [
      //         {
      //           no: 0,
      //           name: "??????",
      //           time: 10,
      //         },
      //         {
      //           no: 0,
      //           name: "??????",
      //           time: 10,
      //         },
      //         {
      //           no: 0,
      //           name: "??????",
      //           time: 10,
      //         },
      //       ],
      //     },
      //   ],
      // };

      // this.menus = response.menus;

      await axios.get("http://118.27.15.148:8000/api/search?word="+this.tag
      )
      // .then(function (response) {
      //   this.menus = response;         
      //   });
      .then(response=>{
      console.log(response);  
      this.menus=response.data.menus;
      // this.$router.push('/timelab');

      })
      
    },
    
    setid(proxy){
      console.log(proxy);
      console.log(proxy.menuId);
      this.info = proxy.menuId;
      console.log(this.info);
      // this.info=menu.;
    },

    add(){
      this.userid=sessionStorage.getItem("id");
      console.log(this.userid);
      this.menuid = this.info;
      // console.log(menu.[[Target]]);

      axios
      .post("http://118.27.15.148:8000/api/user/"+this.userid+"/favorite/"+this.menuid,{})
      .then(response=>{
        console.log(response);  
             
        });

      this.$router.push('/timelab')
    },

    myview(){
      this.userid=sessionStorage.getItem("id");
      axios
      .get("http://118.27.15.148:8000/api/timeline/"+this.userid)
      .then(response=>{
        console.log(response);
        this.menus=response.data;
        this.$router.push('/timelab');   
      }

      );
      this.$router.push('/timelab');
    }
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },

  mounted() {
     axios
     .get("http://118.27.15.148:8000/api/search")
     .then(response =>{
        console.log(response);
        this.menus = response.data.menus;  
        });
  },
};
</script>


<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>