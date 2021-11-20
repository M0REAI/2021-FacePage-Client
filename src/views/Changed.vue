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
import { mapGetters } from "vuex";

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
  },
  created() {
    const selectedStyle = this.getSelectedStyle;
    const originalImageName = this.getOriginalImageName;
    if (!selectedStyle && !originalImageName) return alert("오류 발생");
    this.transition(originalImageName);
  },
  methods: {
    // 이미지 합성
    async transition(filename) {
      const response = await axios.post(
        `http://localhost:8080/api/transition?filename=${filename}`
      );
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