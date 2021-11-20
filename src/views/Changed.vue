<template>
  <div>
    <div class="images">
      이미지 자리
      <img :src="getOriginalImageUrl"/>
      <img :src="getStyledImageUrl"/>
    </div>
    <a :href="'http://localhost:8080' + '/api/image/download?bucket_key='+ getStyledImageKey">이미지 다운로드</a>
    <button>공개하기</button>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters,mapMutations } from "vuex";

export default {
  name: "Changed",
  data() {
    return {
      resultImageUrl: "",
    };
  },
  computed: {
    ...mapGetters([
      "getOriginalImageName",
      "getOriginalImageUrl",
      "getSelectedStyle",
      "getStyledImageUrl",
      "getStyledImageKey" 
    ]),
    ...mapMutations([
      "resetStyledImage"
    ])
  },
  created() {
    this.$store.commit('resetStyledImage')
    const selectedStyle = this.getSelectedStyle;
    const originalImageName = this.getOriginalImageName;
    if (!selectedStyle && !originalImageName) return this.$router.push({ name: "select" });
    this.transition(originalImageName,selectedStyle);
  },
  methods: {
    // 이미지 합성
    async transition(filename,style) {
      let requestUrl;
      switch(style){
        case '반 고흐':
          requestUrl =  `http://localhost:8080/api/transition?filename=${filename}` 
          break;
        case '파프리카':
          requestUrl = `http://localhost:8080/api/transition/paprika?filename=${filename}`  
          break;
        case '이웃집 토토로':
          requestUrl = `http://localhost:8080/api/transition/hayao?filename=${filename}`  
          break;
        case '너의 이름은':
          // 신카이 마코토
          requestUrl = `http://localhost:8080/api/transition/shinkai?filename=${filename}`
          break;
        case '시간을 달리는 소녀':  
          requestUrl = `http://localhost:8080/api/transition/hosoda?filename=${filename}`
          break;
        default:
          return alert('선택된 스타일이 없습니다.')
      }
      const response = await axios.post(requestUrl);
      const { url,key } = response.data;
      if(!url || !key) return alert('오류 발생');
      this.$store.commit('setStyledImageUrl',url);
      this.$store.commit('setStyledImageKey',key);
    }
  }
};
</script>

<style>
</style>