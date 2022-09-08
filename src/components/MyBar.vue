<template>
    <v-card app color="basil" clipped-left>
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 basil--text">
                FitTime
            </h1>
        </v-card-title>
        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
            <!-- <v-tab v-for="item in items" :key="item" v-on:click="onclick">
                {{ item }}
            </v-tab> -->

            <v-tab v-on:click="onclick1">
                Profile
            </v-tab>
            <v-tab v-on:click="onclick2">
                Favorite
            </v-tab>
            <v-tab v-on:click="onclick3">
                Timeline
            </v-tab>
            <v-tab v-on:click="onclick4">
                Post
            </v-tab>
            <v-tab v-on:click="onclick5">
                Logout
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
                <!-- <v-card color="basil" flat>
                    <v-card-text >{{ text }}</v-card-text>
                </v-card> -->
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>
<script>
    export default {
        // data() {
        //     return {
        //         tab: null,
        //         items: [
        //             'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
        //         ],
        //     }
        // },
        methods: {
            onclick1: function(){
                this.$router.push('/mypage');
            },
            onclick2: function(){
                this.$router.push('/favo');
            },
            onclick3: function(){
                this.$router.push('/timeline');
            },
            onclick4: function(){
                this.$router.push('/post');
            },
            onclick5: function(){
                this.$router.push('/login');
            }

        },
    }
</script>
<style>
    /* Helper classes */
    .basil {
        background-color: #FFFBE6 !important;
    }
    .basil--text {
        color: #356859 !important;
    }
</style>