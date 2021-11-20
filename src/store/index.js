// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // counter라는 state 속성을 추가
  state: {
    originalImageUrl: '',
    originalImageName: '',
    selectedStyle:''
  },
  mutations: {
    setOriginalImageUrl(state,url){
      return state.originalImageUrl = url 
    },
    setOriginalImageName(state,filename){
      return state.originalImageName = filename      
    },
    setStyle(state,style){
      return state.selectedStyle = style
    }
  },
  getters : {
    getOriginalImageName(state) {
      return state.originalImageName
    },
    getOriginalImageUrl(state) {
      return state.originalImageUrl
    },
    getSelectedStyle(state) {
      return state.selectedStyle
    }
  }
});