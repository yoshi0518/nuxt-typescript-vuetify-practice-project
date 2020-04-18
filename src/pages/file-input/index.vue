<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>ファイル情報取得</v-card-title>
          <v-file-input label="File Input" show-size @change="fileUpload1" />
          <v-card-text>text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>ファイル情報取得(複数ファイル)</v-card-title>
          <v-file-input label="File Input" multiple counter @change="fileUpload2" />
          <v-card-text>text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>画像のみOK</v-card-title>
          <v-file-input label="File Input" prepend-icon="mdi-camera" outlined accept="image/*" show-size counter @change="fileUpload1" />
          <v-card-text>text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>画像のみOK(複数ファイル、chips)</v-card-title>
          <v-file-input
            label="File Input"
            prepend-icon="mdi-camera"
            outlined
            accept="image/*"
            chips
            multiple
            show-size
            counter
            @change="fileUpload2"
          />
          <v-card-text>text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>画像のみOK(複数ファイル、chips)</v-card-title>
          <v-file-input
            label="File Input"
            prepend-icon="mdi-camera"
            outlined
            accept="image/*"
            multiple
            show-size
            counter
            @change="fileUpload2"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="success">{{ text }}</v-chip>
            </template>
          </v-file-input>
          <v-card-text>text text text text</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>画像表示</v-card-title>
          <v-file-input
            v-model="image"
            label="File Input"
            prepend-icon="mdi-camera"
            outlined
            accept="image/*"
            show-size
            @change="fileUpload3"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="success">{{ text }}</v-chip>
            </template>
          </v-file-input>
          <v-card-text>text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-img v-if="url" :src="url" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>画像表示(複数ファイル)</v-card-title>
          <v-file-input
            v-model="images"
            label="File Input"
            prepend-icon="mdi-camera"
            outlined
            accept="image/*"
            show-size
            multiple
            @change="fileUpload4"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="primary">{{ text }}</v-chip>
            </template>
          </v-file-input>
          <v-card-text>text text text text</v-card-text>
        </v-card>
      </v-col>
      <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6">
        <v-card class="px-3">
          <v-card-title>{{ item.name }}</v-card-title>
          <v-img :src="item.url" />
          <v-card-text>
            <p>サイズ：{{ item.size }}</p>
            <p>更新日時：{{ item.updated }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class PageFileInputIndex extends Vue {
  // data
  image: any = null;
  url: any = '';
  images: any[] = [];
  items: Object[] = [];

  // method
  fileUpload1(e: File) {
    console.log('----- fileUpload1 -----');
    console.log({ e });
    console.log(`ファイル名：${e.name}`);
    console.log(`サイズ：${e.size}`);
    console.log(`タイプ：${e.type}`);
    console.log(`更新日時：${new Date(e.lastModified).toLocaleString()}`);
  }

  fileUpload2(e: File[]) {
    console.log('----- fileUpload2 -----');
    console.log({ e });
  }

  fileUpload3(file: File) {
    console.log('----- fileUpload3 -----');
    console.log({ file });
    if (file !== undefined && file !== null) {
      if (file.name.lastIndexOf('.') <= 0) {
        return;
      }
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.addEventListener('load', () => {
        console.log({ fr });
        this.url = fr.result;
        console.log({ url: this.url });
      });
    } else {
      this.url = '';
    }
  }

  fileUpload4(files: File[]) {
    console.log('----- fileUpload4 -----');
    files.forEach(async file => {
      await this.readImage(file);
    });
    console.log({ items: this.items });
  }

  readImage(file: File): any {
    if (file !== undefined && file !== null) {
      if (file.name.lastIndexOf('.') <= 0) {
        return;
      }
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.addEventListener('load', () => {
        this.items.push({
          name: file.name,
          size: file.size,
          type: file.type,
          url: fr.result,
          updated: new Date(file.lastModified).toLocaleString(),
        });
      });
    }
  }
}
</script>
