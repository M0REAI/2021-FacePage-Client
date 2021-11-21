// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // counter라는 state 속성을 추가
  state: {
    stage: 'stage1',
    originalImageUrl: '',
    originalImageName: '',
    selectedStyle:'',
    styledImageKey: '',
    styledImageUrl: ''
  },
  mutations: {
    setStage(state,stage){
      return state.stage = stage;
    },
    setOriginalImageUrl(state,url){
      return state.originalImageUrl = url;
    },
    setOriginalImageName(state,filename){
      return state.originalImageName = filename;   
    },
    setStyle(state,style){
      return state.selectedStyle = style;
    },
    setStyledImageUrl(state,url){
      return state.styledImageUrl = url;
    },
    setStyledImageKey(state,key) {
      return state.styledImageKey = key;
    },
    resetStyledImage(state) {
      state.styledImageKey = ''
      state.styledImageUrl = ''
    }
  },
  getters : {
    getOriginalImageName(state) {
      return state.originalImageName;
    },
    getOriginalImageUrl(state) {
      return state.originalImageUrl;
    },
    getSelectedStyle(state) {
      return state.selectedStyle;
    },
    getStyledImageUrl(state){
      return state.styledImageUrl;
    },
    getStyledImageKey(state) {
      return state.styledImageKey;
    }
  }
});