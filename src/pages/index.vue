<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="4">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">Unlimited music now</v-card-title>
          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
          <v-card-actions>
            <v-btn text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-for="(item, i) in mediaItems" :key="i" cols="12" sm="6" md="4">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-list two-line>
            <template v-for="(item, index) in newsItems">
              <v-subheader v-if="item.date" :key="index" v-text="item.date" />
              <v-divider v-else-if="item.divider" :key="index" :inset="item.inset" />
              <v-list-item v-else :key="index">
                <v-list-item-avatar>
                  <v-icon :class="[item.iconClass]" v-text="item.icon" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                  <v-list-item-subtitle v-text="item.subtitle" />
                </v-list-item-content>
                <v-list-item-action>
                  <v-row>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-message-text-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </v-row>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-list two-line>
            <template v-for="(item, index) in newsItems">
              <v-subheader v-if="item.date" :key="index" v-text="item.date" />
              <v-divider v-else-if="item.divider" :key="index" :inset="item.inset" />
              <v-list-item v-else :key="index">
                <v-list-item-avatar>
                  <v-icon :class="[item.iconClass]" v-text="item.icon" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" />
                  <v-list-item-subtitle v-text="item.subtitle" />
                </v-list-item-content>
                <v-list-item-action>
                  <v-row>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-message-text-outline</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </v-row>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Index extends Vue {
  // data
  mediaItems: any = [
    {
      color: '#1F7087',
      src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
      title: 'Supermodel',
      artist: 'Foster the People',
    },
    {
      color: '#952175',
      src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
      title: 'Halcyon Days',
      artist: 'Ellie Goulding',
    },
  ];

  newsItems: any = [
    { date: 'Today' },
    { icon: 'assignment', iconClass: 'blue white--text', title: 'Title 1', subtitle: '14:23' },
    { divider: true },
    { icon: 'assignment', iconClass: 'blue white--text', title: 'Title 2', subtitle: '13:23' },
    { divider: true },
    { icon: 'assignment', iconClass: 'blue white--text', title: 'Title 3', subtitle: '12:23' },
    { divider: true },
    { date: 'Yestarday' },
    { icon: 'assignment', iconClass: 'blue white--text', title: 'Title 1', subtitle: '10:43' },
    { divider: true },
    { icon: 'assignment', iconClass: 'blue white--text', title: 'Title 2', subtitle: '09:43' },
    { divider: true },
    { date: '2020/04/12' },
    { icon: 'assignment', iconClass: 'blue white--text', title: 'Title 1', subtitle: '20:03' },
  ];
}
</script>
