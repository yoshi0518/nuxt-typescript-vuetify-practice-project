<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer />
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon large href="https://google.com" target="_blank" v-on="on">
                <v-icon>mdi-code-tags</v-icon>
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn icon large href="https://codepen.io/johnjleider/pen/pMvGQO" target="_blank" v-on="on">
                <v-icon>mdi-codepen</v-icon>
              </v-btn>
            </template>
            <span>Codepen</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="loginId" label="Login" name="login" prepend-icon="person" type="text" />
            <v-text-field id="password" v-model="password" label="Password" name="password" prepend-icon="lock" type="password" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="LoginButtonClick()">Login</v-btn>
          <v-btn>Cancel</v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar v-model="snackbar" color="error">
        Login Error
        <v-btn dark text @click="snackbar = !snackbar">Close</v-btn>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { userStore } from '@/store';

@Component({
  // layout
  layout: 'login',
})
export default class PageLoginIndex extends Vue {
  // data
  loginId: string = '';
  password: string = '';
  snackbar: boolean = false;

  adminItems: object[] = [
    { icon: 'mdi-contacts', text: 'Home', to: '/' },
    { icon: 'mdi-history', text: 'Card', to: '/card' },
    { icon: 'mdi-content-copy', text: 'Table', to: '/table' },
    { icon: 'mdi-content-copy', text: 'Images', to: '/images' },
    { icon: 'mdi-settings', text: 'Form', to: '/form' },
    { icon: 'mdi-settings', text: 'Carousels', to: '/carousels' },
    { icon: 'mdi-help-circle', text: 'File Input', to: '/file-input' },
    { icon: 'mdi-cellphone-link', text: 'Google', href: 'https://www.google.com', target: '_blank' },
    { icon: 'mdi-keyboard', text: 'Yahoo', href: 'https://www.yahoo.co.jp', target: '_blank' },
  ];

  userItems: object[] = [
    { icon: 'mdi-contacts', text: 'Home', to: '/' },
    { icon: 'mdi-history', text: 'Card', to: '/card' },
    { icon: 'mdi-content-copy', text: 'Table', to: '/table' },
    { icon: 'mdi-cellphone-link', text: 'Google', href: 'https://www.google.com', target: '_blank' },
  ];

  // methods
  async LoginButtonClick() {
    if (this.loginId === 'admin') {
      await userStore.setMenuItems(this.adminItems);
      this.$router.push('/');
    } else if (this.loginId === 'user') {
      await userStore.setMenuItems(this.userItems);
      this.$router.push('/');
    } else {
      // snackbarの処理
      this.snackbar = true;
    }
  }
}
</script>
