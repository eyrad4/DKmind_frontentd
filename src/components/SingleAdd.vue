<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout justify-center align-center wrap>
          <v-flex xs12 mb-5>
            <v-container grid-list-xl pa-0>
              <v-flex display-1 text-xs-center mb-5>
                <h2>Ads items</h2>
              </v-flex>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm12 md12 d-flex>
                  <v-card>
                    <v-flex xs6 sm6 md6 d-flex>
                      <v-card-media src="" style="background: #000" height="400px">
                      </v-card-media>
                    </v-flex>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Item name</h3>
                        <div>date: 11-12-2018</div>
                        <div>Price: 100 usd</div>
                        <div>description</div>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    name: 'test'
  })
}
</script>

<style scoped>

</style>
