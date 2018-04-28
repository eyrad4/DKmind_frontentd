<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center wrap>
          <v-flex xs12 mb-5>
            <v-container grid-list-xl pa-0>
              <v-flex display-1 text-xs-center mb-5>
                <h2>Last add items</h2>
              </v-flex>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md3 d-flex v-for="i in 14" :key="`14${i}`">
                  <v-card>
                    <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Item {{ i }}</h3>
                        <div>description</div>
                        <div>Price: 100 usd</div>
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
  })
}
</script>

<style scoped>

</style>
