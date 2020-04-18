<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>Carousel</v-card-title>
          <v-carousel height="350">
            <v-carousel-item v-for="(title, index) in titles" :key="index">
              <v-sheet :color="colors[index]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ title }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-card-text>text text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>Carousel</v-card-title>
          <v-carousel height="350" cycle>
            <v-carousel-item v-for="(title, index) in titles" :key="index">
              <v-sheet :color="colors[index]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ title }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-card-text>text text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>Carousel</v-card-title>
          <v-carousel height="350">
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
              :src="image.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
          </v-carousel>
          <v-card-text>text text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>Carousel</v-card-title>
          <v-carousel height="350" :show-arrows="false">
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
              :src="image.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
          </v-carousel>
          <v-card-text>text text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>Carousel</v-card-title>
          <v-carousel height="350" hide-delimiters>
            <v-carousel-item
              v-for="(image, index) in images"
              :key="index"
              :src="image.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
          </v-carousel>
          <v-card-text>text text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>Carousel</v-card-title>
          <v-carousel v-model="page" height="350">
            <v-carousel-item v-for="(title, index) in titles" :key="index">
              <v-sheet :color="colors[index]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ title }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-card-text>
            <v-icon @click="page--">mdi-minus</v-icon>
            page: {{ page }}
            <v-icon @click="page++">mdi-plus</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class PageCarouselIndex extends Vue {
  // data
  colors: string[] = ['green', 'secondary', 'yellow darken-4', 'red lighten-2', 'orange darken-1'];
  images: Object[] = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ];

  titles: string[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  page: number = 0;
}
</script>
