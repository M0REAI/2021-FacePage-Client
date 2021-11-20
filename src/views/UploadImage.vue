<template>
  <div>
    <div class="images">
      이미지 자리
      <img :src="originalImgUrl" />
      <p>{{ originalImgName }}</p>
    </div>
    <label for="original">원본 이미지</label>
    <input
      type="file"
      id="original"
      ref="originalImg"
      accept="image/png, image/jpeg, image/jpg"
    />
    <label for="search">원본 이미지 검색</label>
    <input type="text" v-model="keyword" id="search" />

    <button type="button" @click="searchImages">검색하기</button>

    <div class="rec_images">
      <div v-for="(url, index) in urls" :key="index">
        <img :src="url" />
        <a :href="origin + '/api/image/download/scrapped?url=' + url"
          >다운받기</a
        >
      </div>
    </div>

    <hr />
    <button @click="uploadImages">업로드하기</button>
    <hr />
    <label for="style">캐릭터 선택</label>
    <div class="rec_images" id="style">
      <div
        :class="{ selected: style.name == selectedStyle }"
        v-for="style in styles"
        :key="style.name"
      >
        <img :src="style.image" />
        <p>{{ style.name }}</p>
        <button @click="select(style.name)">선택</button>
      </div>
    </div>
    <button @click="enter">enter 버튼</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      urls: [],
      originalImgUrl: "",
      originalImgName: "",
      keyword: "",
      // https://rnwns2.tistory.com/87
      styles: [
        {
          name: "반 고흐",
          image: require("../../assets/van_gogh.jpg")
        },
        {
          name: "파프리카",
          image: require("../../assets/paprika.png")
        },
        {
          name: "이웃집 토토로",
          image: require("../../assets/totoro.png")
        },
        {
          name: "너의 이름은",
          image: require("../../assets/yourname.png")
        },
        {
          name: "시간을 달리는 소녀",
          image: require("../../assets/timerunninggirl.png")
        },
      ],
      selectedStyle: null,
      origin: "http://localhost:8080",
    };
  },
  methods: {
    async uploadImages() {
      try {
        if (this.$refs.originalImg.files.length > 0) {
          const originalData = new FormData();
          const originalImg = this.$refs.originalImg.files[0];
          originalData.append("original_image", originalImg);
          const response = await axios.post(
            "http://localhost:8080/api/image/upload",
            originalData
          );
          // 비동기 병렬처리
          const originalImageUrl = response.data.url;
          const originalImageName = response.data.filename;
          this.originalImgUrl = originalImageUrl;
          this.originalImgName = originalImageName;
          this.$store.commit("setOriginalImageUrl", originalImageUrl);
          this.$store.commit("setOriginalImageName", originalImageName);
        } else {
          return alert("파일을 업로드해 주세요");
        }
      } catch (error) {
        console.log(error);
      }
    },
    select(style) {
      console.log(style);
      this.selectedStyle = style;
      // 합성할 스타일
      this.$store.commit("setStyle", style);
    },
    async searchImages() {
      try {
        const keyword = this.keyword;
        const response = await axios.get(
          `http://localhost:8080/api/image/?keyword=${keyword}`
        );
        this.urls = response.data.urls;
      } catch (error) {
        console.log(error);
      }
    },
    enter() {
      if (!this.originalImgUrl) return alert("이미지를 업로드해 주세요.");
      if (!this.selectedStyle) return alert("스타일을 선택해 주세요.");
      this.$router.push({ name: "result" });
    },
  },
};
</script>

<style>
.images {
  display: flex;
}
.images img {
  width: 300px;
  border: 1px solid red;
}
.rec_images {
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
}
/* .rec_images div {
  border: 1px solid blue;
} */
.selected {
  border: 3px solid red;
}
</style>