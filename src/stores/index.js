import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';
// import { createStore } from "vuex";
import { Counter } from "@/store/moduleA/Counter";
import { moduleA } from "@/store/moduleA/moduleA";

import store from '../index';

@Module({
  name: 'ModuleA',
  dynamic: true,
  namespaced: true,
  store,
})
class ModuleA extends VuexModule {
  private count = 0;

  @Mutation
  public increment(delta: number) {
    this.count += delta;
  }
  @Mutation
  public decrement(delta: number) {
    this.count -= delta;
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  incr() {
    return 5;
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr() {
    return 5;
  }

  public get getCount(): number {
    return this.count;
  }
}


export default createStore({
  modules: { Counter, moduleA }
});
