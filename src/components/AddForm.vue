<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center wrap>
          <v-flex xs12 mb-5>
            <v-container  grid-list-xl pa-0>
              <v-flex display-1 text-xs-center mb-5>
                <h2>Add</h2>
              </v-flex>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm12 md12 d-flex>
                  <v-layout>
                    <v-flex xs12>
                      <v-form ref="form">
                        <v-flex xs12>
                          <v-text-field
                            label="name"
                            v-model="name"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-select
                            :items="categories"
                            v-model="e1"
                            label="Chose categories"
                            single-line
                          ></v-select>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field
                            name="text"
                            label="Description"
                            multi-line
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field
                            label="price"
                            v-model="Price"
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-btn>Save</v-btn>
                          <v-btn>back</v-btn>
                      </v-form>
                    </v-flex>
                  </v-layout>
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
    email: null,
    photos: null,
    description: null,
    price: null,
    categories: [
      { text: 'cat 1' },
      { text: 'cat 2' },
      { text: 'cat 3' },
      { text: 'cat 4' },
      { text: 'cat 5' },
      { text: 'cat 6' },
      { text: 'cat 7' }
    ]
  })
}
</script>

<style scoped>

</style>
