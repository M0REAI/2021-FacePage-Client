<template>
  <div class="uploadPage">
    <image-stage v-if="stage == 'stage1'"></image-stage>
    <style-stage v-if="stage == 'stage2'"></style-stage>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImageStage from '../components/ImageStage.vue'
import StyleStage from '../components/StyleStage.vue';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'stage'
    ])
  },
  components: {
    ImageStage,
    StyleStage
  }
};
</script>

<style>
/* ImageStage와 StyleStage 공통 영역 */
.uploadPage {
  height: 100%;
  display: flex;
  justify-content: center;
}
.uploadPage-wrapper {
  /* 본인 크기와 위치 조정 */
  margin: 20px 0;
  width: 80%;
  /* 자식 요소 배치 */
  display: flex;
  justify-content: space-around;
}

.upload-content {
  /* 본인 넓이와 위치 조정 */
  flex: 1;
  margin: 0 10px;
  /* 자식 요소 배치 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stepTransition {
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  color: rgb(49, 49, 49);
}
.stepTransition .step-btn {
  display: none;
}

/* 아래는 StyleStage 영역 */
.style-images {
  border: 1px solid blue;
  display: flex;
  flex-wrap: nowrap; /* 요소들을 강제로 한 줄에 배치 */
  width: 80%;
  overflow: auto;
  overflow-y: hidden;
}
.style-item {
  height: 180px; 
  margin-right: 3px;
  box-sizing: border-box;
}
.rec-item p {
  border: 1px solid red; 
  font-size: 0.7rem; 
  text-align: center;
} 
/* .rec_images div {
  border: 1px solid blue;
} */
.selected img {
   box-sizing: border-box;
  border: 3px solid red;
}


.upload-btn {
  width: 150px;
}
</style>