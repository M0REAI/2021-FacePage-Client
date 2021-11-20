<template>
  <div>
    <div class="images">
      이미지 자리
      <img :src="getOriginalImageUrl" />
      <img :src="resultImageUrl" />
    </div>

    <button>저장하기</button>
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
      this.resultImageUrl = response.data.url;
    },
  },
};
</script>

<style>
</style>