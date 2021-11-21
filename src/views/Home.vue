<template>
  <div class="home">
    <div class="banner">
      <div class="banner-item">
        <!-- video 자리 -->
        <video>동영상 자리</video>
      </div>
      <div class="banner-item">
        <div class="banner-textBox">
          <p style="font-size:1.2rem; font-weight:bold; text-align: right;">서비스 이름</p>
          <p style="font-size:0.9rem; text-align: right;">자신의 얼굴을 여러가지 캐릭터로 변신해보세요. </p>
        </div>
        <div class="banner-btnBox">
          <router-link to='/upload'>
            <button>적용하러 가기 → 🤓</button>
          </router-link>
        </div>
      </div>  
    </div>
    
    <break-board />
  </div>
</template>

<script>
import BreakBoard from '../components/BreakBoard.vue';

export default {
  name: 'Home',
  components: {
    BreakBoard,
  }
}
</script>

<style>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.banner {
  display: grid; 
  grid-template-columns: 1.2fr 1fr;
  /* border: 1px solid blue; */
  padding: 30px 30px;
  width: 65%;
  grid-gap: 2rem;
  margin-top: 2rem;
}
.banner-item {
  /* border: 1px solid red; */
}
.banner-item:nth-child(2) {
  text-align: right;
  padding-right: 2rem;
}
.banner-textBox {
  /* border: 1px solid blue; */
  margin-top: 7rem;
}
.banner-btnBox {
  /* border: 1px solid blue; */
  margin-top: 3rem;
  margin-bottom: 4rem;
}
.banner-item:nth-child(1) {
  width: 100%;
  height: 100%;
  border: 1px solid red;  
}

</style>