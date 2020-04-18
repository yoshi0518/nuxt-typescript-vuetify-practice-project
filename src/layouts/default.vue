<template>
  <v-app>
    <CompNavigationDrawer ref="compNavigationDrawer" :drawer="drawer" :items="items" />
    <CompAppBar @drawerChange="drawerChange()" />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { userStore } from '@/store';
import CompNavigationDrawer from '@/components/CompNavigationDrawer.vue';
import CompAppBar from '@/components/CompAppBar.vue';

@Component({
  components: {
    CompNavigationDrawer,
    CompAppBar,
  },
})
export default class DefaultLayout extends Vue {
  // data
  drawer: boolean = true;
  items: any = null;

  // method
  refs(): any {
    return this.$refs;
  }

  drawerChange() {
    this.refs().compNavigationDrawer.drawerChange();
  }

  // lifecycle hook
  mounted() {
    this.items = userStore.menuItems;
    if (!this.items) this.$router.push('/login'); // メニュー情報がない場合、ログイン画面へ
  }
}
</script>
