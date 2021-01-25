import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './ations.js'
import getters from './getters'
Vue.use(Vuex)
const state = {

}
export default new Vue.Store({
    state,
    mutations,
    actions,
    getters
})