<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card class="mx-auto">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text>
              テスト
            </v-btn>
            <v-btn color="orange" text>
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="mx-auto">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
          <v-card-title>
            Top western road trips
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text>Share</v-btn>
            <v-btn color="purple" text>
              Explore
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier,
                not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or
                we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-card class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="180"></v-img>
          <v-card-text>
            Visit ten places on our planet that are undergoing the biggest changes today.
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">
              Read
            </v-btn>
            <v-btn text color="deep-purple accent-4">
              Bookmark
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class PageCardIndex extends Vue {
  // data
  show: boolean = false;
}
</script>
