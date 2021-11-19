<template>
  <div>
    <div class="images">
      이미지 자리 
      <img :src="originalImg">
    </div>

    <label for="original">원본 이미지</label>
    <input
      type="file"
      id="original"
      ref="originalImg"
      accept="image/png, image/jpeg, image/jpg"
    />

    <label for="search">원본 이미지 검색</label>
    <input type="text" v-model="keyword" id="search">
    <button type="button" @click="searchImages">검색하기</button>
    <div class="rec_images">
        <div v-for="(url,index) in urls" :key="index">
            <img :src="url">
        </div>
    </div>

    <hr/>
    <button @click="uploadImages">업로드하기</button>
    <hr/>

    <label for="style">캐릭터 선택</label>
    <div class="rec_images" id="style">
        <div v-for="(style,index) in styles" :key="index">
            <img :src="style">
        </div>
    </div>

    <router-link to='/changed'>
      <button>
        enter 버튼
      </button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

const styles = [1,2,3];

export default {
  data() {
      return {
          urls:[],
          originalImg: '',
          keyword:'',
          styles: styles,
      }
  },
  methods: {
    async uploadImages() {
       
      if (
        this.$refs.originalImg.files.length > 0
      ) {
        const originalData = new FormData();
        const originalImg = this.$refs.originalImg.files[0];
        originalData.append("original_img", originalImg);
        const promises = [
            axios.post("http://localhost:4000/api/image/original",originalData)
        ]
        // 비동기 병렬처리
        const responses = await Promise.all(promises);
        responses.forEach((response)=>{
            if(response.data.sort){
              this.originalImg = response.data.url    
            } else {
                alert('error');
            }
        })
      } else {
        return;
      }
    },
    async searchImages(){
        try{
            const keyword = this.keyword;
            const response = await axios.get(`http://localhost:5000/api/images?keyword=${keyword}`);
            this.urls = response.data.urls;            
        } catch(error){
            console.log(error); 
        }
      }
  },
};
</script>

<style>
.images{
    display: flex;
}
.images img{
    width: 300px;
    border:1px solid red;
}
.rec_images{
    border:1px solid red;
    display: flex;
    flex-wrap: wrap;
}
.rec_images div{
    border: 1px solid blue;
}
</style>