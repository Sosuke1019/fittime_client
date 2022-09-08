<template>
  <MyBar />
  <v-container>
    <h1>ホーム画面</h1>
    <router-link to="/list">Go to List</router-link>
    <router-link to="/favo">Go to Favo</router-link>
  </v-container>
</template>

<script>
import MyBar from './MyBar.vue'

export default{
    components:{
        "MyBar": MyBar,
    }
}
</script>