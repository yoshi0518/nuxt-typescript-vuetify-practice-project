import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

interface IUser {
  USER_NAME: string;
}

@Module({ stateFactory: true, namespaced: true, name: 'user' })
export default class User extends VuexModule implements IUser {
  // state
  USER_NAME: string = null;
  MENU_ITEMS: object[] = null;

  // getter
  get userName(): string {
    return this.USER_NAME;
  }

  get menuItems(): object[] {
    return this.MENU_ITEMS;
  }

  // mutation
  @Mutation
  SET_USER_NAME(payload: IUser) {
    this.USER_NAME = payload.USER_NAME;
  }

  @Mutation
  SET_MENU_ITEMS(payload: object[]) {
    this.MENU_ITEMS = payload;
  }

  // action
  @Action({ commit: 'SET_USER_NAME' })
  setUserName(payload: IUser) {
    return payload;
  }

  @Action({ commit: 'SET_MENU_ITEMS' })
  setMenuItems(payload: object[]) {
    return payload;
  }
}
