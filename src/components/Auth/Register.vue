<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center wrap>
          <v-flex xs12 mb-5>
            <v-container  grid-list-xl pa-0>
              <v-flex display-1 text-xs-center mb-5>
                <h2>Register page</h2>
              </v-flex>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm12 md12 d-flex>
                  <v-layout>
                    <v-flex xs12>
                      <v-form ref="form">
                        <v-text-field
                          label="name"
                          v-model="name"
                        ></v-text-field>
                        <v-text-field
                          label="E-mail"
                          v-model="email"
                        ></v-text-field>
                        <v-text-field
                          label="Password"
                          v-model="password"
                        ></v-text-field>
                        <v-checkbox
                          label="Do you agree?"
                          v-model="agree"
                          :rules="[v => !!v || 'You must agree to continue!']"
                        ></v-checkbox>
                        <v-btn>submit</v-btn>
                        <router-link to="login">
                          <v-btn>Login</v-btn>
                        </router-link>
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
    data: () => ({
      name: null,
      email: null,
      password: null,
      agree: null
    })
  })
}
</script>

<style scoped>

</style>
