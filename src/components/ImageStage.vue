<template>
  <div class="uploadPage-wrapper">
    <div class="upload-content">
      <!-- <div class="steps">step1. 사진 선택하기</div> -->
      
      <!-- 업로드한 이미지가 보이는 자리 -->
      <div class="imagePlace">
        <div class="imageBack" @change="HideContainerBackground" style='background-color: rgba(216, 215, 215, 0.473);'>
          <img :src="originalImgUrl" />
        </div>
        <!-- <p>{{ originalImgName }}</p> -->
      </div>

      <!-- 로컬에서 사진 업로드 -->
      <div class="fileInput-wrapper">
        <label for="fileInput">사진 불러오기</label>
        <input
          type="file"
          id="fileInput"
          ref="originalImg"
          accept="image/png, image/jpeg, image/jpg"
          @change="uploadImages"
        />
        <!-- <div class="upload-name">{{ filename }}</div> -->
      </div>

      <div class="stepTransition">
        <label for="pre-btn"></label>
        <button class="step-btn" id="pre-btn"></button>

        <!-- <label for="next-btn"><font-awesome-icon icon="fa-solid fa-angle-right" /></label> -->
        <label for="next-btn"><font-awesome-icon icon="fa-solid fa-arrow-right" /></label>
        <button class="step-btn" id="next-btn" @click="next"></button>
      </div>

      <!-- 이미지 검색 -->
      <div class="search-wrapper">
        <p>마음에 드는 이미지가 없다면…</p>
        <div class="search-input">
          <input type="text" v-model="keyword" id="search" />
          <button type="button" @click="searchImages"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
        </div>
      </div>
      
      <!-- <div class="search-images">
        <div v-for="(url, index) in urls" :key="index">
          <img :src="url" />
          <a :href="origin+'/api/image/download/scrapped?url='+url">다운받기</a>
        </div>
        <div class="search-item">
          <img src="https://source.unsplash.com/random/21" />
          <a><font-awesome-icon icon="fa-solid fa-file-arrow-down" /></a>
        </div>
        <div class="search-item">
          <img src="https://source.unsplash.com/random/1" />
          <a><font-awesome-icon icon="fa-solid fa-file-arrow-down" /></a>
        </div>
        <div class="search-item">
          <img src="https://source.unsplash.com/random/2" />
          <a><font-awesome-icon icon="fa-solid fa-file-arrow-down" /></a>
        </div>
        <div class="search-item">
          <img src="https://source.unsplash.com/random/31" />
          <a><font-awesome-icon icon="fa-solid fa-file-arrow-down" /></a>
        </div>
        <div class="search-item">
          <img src="https://source.unsplash.com/random/41" />
          <a><font-awesome-icon icon="fa-solid fa-file-arrow-down" /></a>
        </div>
        <div class="search-item">
          <img src="https://source.unsplash.com/random/81" />
          <a><font-awesome-icon icon="fa-solid fa-file-arrow-down" /></a>
        </div>
      </div> -->
      <break-board/>
    </div>
    <!-- <button @click="next">다음</button> -->
    
  </div>
</template>

<script>
import axios from "axios";
import BreakBoard from '../components/BreakBoard.vue';

export default {
  data() {
    return {
      urls: [],
      originalImgUrl: "",
      originalImgName: "",
      filename: "선택된 사진 없음",
      keyword: "",
    };
  },
  components: {
    BreakBoard,
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
    next(){
      // if(!this.originalImgUrl) return alert('이미지를 업로드해 주세요.');
      this.$store.commit('setStage','stage2')
    },
    HideContainerBackground() {
      const imageBack = document.querySelector('.imageBack');
      imageBack.style.backgroundColor = 'white';
    }
  },
};
</script>

<style>
.upload-content .imagePlace {
  margin: 30px 0 20px 0;
}
.upload-content .imagePlace .imageBack {
  width: 290px;
  height: 290px;
}
.upload-content .imagePlace img {
  object-fit: contain; /* 이미지가 컨테이너의 사이즈와 맞지 않을 경우, 가로세로 비율을 유지한 채 여백을 남김 */
}

.upload-content .fileInput-wrapper {
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin-bottom: 0.8rem;
}
.upload-content .fileInput-wrapper input[type="file"] {
  display: none;
}
.upload-content .fileInput-wrapper label {
  cursor: pointer;
  border: 1px solid black;
  font-size: 0.9rem;
  padding: 10px 26px;
}

.upload-content .search-wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  margin: 30px 0 30px 0;
} 
.upload-content .search-wrapper .search-input {
  width: 40%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 2px 2px;
}
.upload-content .search-wrapper .search-input input {
  width: 90%;
  border: none;
}
.upload-content .search-wrapper .search-input input:focus {
  outline: none;
}
.upload-content .search-wrapper .search-input button {
  background: inherit;
  border: none;
  /* color: rgb(255, 155, 172); */
  color: rgb(70, 70, 70);
}

.search-images {
  display: flex;
  flex-wrap: nowrap; /* 요소들을 강제로 한 줄에 배치 */
  width: 80%;
  max-width: 380px;
  overflow: scroll;
  overflow-y: hidden;
}
.search-images .search-item {
  display: flex;
  color: grey;
  font-size: 0.9rem;
  margin-right: 3px;
}
.search-images .search-item img {
  height: 80px;
}

</style>
