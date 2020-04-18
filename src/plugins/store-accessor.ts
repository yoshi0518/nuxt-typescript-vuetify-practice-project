import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import User from '@/store/user';

let userStore: User; // eslint-disable-line

function initialiseStores(store: Store<any>): void {
  userStore = getModule(User, store);
}

export { initialiseStores, userStore };
