<template>
  <v-app>
    <v-content>
      <v-container fill-height fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class LoginLayout extends Vue {}
</script>
