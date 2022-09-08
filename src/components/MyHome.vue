<template>
  <v-app>
    <v-card app color="basil" clipped-left>
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 basil--text">FitTime</h1>
      </v-card-title>
    </v-card>
    <div>
      <v-card width="400px" height="400" class="mx-auto my-12">
        <v-card-title>
          <h1 class="text-subtitle-2 text-center">WELCOME ! !</h1>
        </v-card-title>
        <v-card color="plane">
          <v-card-actions class="justify-center">
            <v-btn
              :disabled="loading"
              class="ma-1 my-15 justify-center"
              color="info"
              plain
              @click="move_login"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card color="plane">
          <v-card-actions class="justify-center">
            <v-btn
              :disabled="loading"
              class="ma-1 my-15 justify-center"
              color="info"
              plain
              @click="move_resist"
            >
              Resist
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </div>
  </v-app>
</template>

<script>

export default {
  data: () => ({
      
    }),

    methods: {
       move_login(){
           this.$router.push('/login')
       },

      move_resist(){
          this.$router.push('/resist');
      }
    },


};
</script>
