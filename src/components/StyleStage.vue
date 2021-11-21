<template>
  <div class="uploadPage-wrapper">
    <div class="upload-content">
      <!-- <label for="style">캐릭터 선택</label> -->
      <div class="style-images" id="style">
        <div class="style-item" :class="{ selected: style.name == selectedStyle }" v-for="style in styles" :key="style.name"
         @click="select(style.name)" >
          <img :src="style.image" style="height: 90px;" />
          <p>{{ style.name }}</p>
          <!-- <button >선택</button> -->
        </div>
      </div>

      <div class="stepTransition">
        <label for="pre-btn"><font-awesome-icon icon="fa-solid fa-arrow-left" /></label>
        <button class="step-btn" id="pre-btn" @click="prev"></button>

        <label for="next-btn" style="color: #ffe50c;"><font-awesome-icon icon="fa-solid fa-arrow-right" /></label>
        <button class="step-btn" id="next-btn" @click="next"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
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
        }
    },
    methods : {
        select(style) {
            console.log(style);
            this.selectedStyle = style;
            // 합성할 스타일
            this.$store.commit("setStyle", style);
        },
        next(){
           if(!this.selectedStyle) return alert('스타일을 선택해 주세요.');
            // this.$store.commit('setStage','stage2')
           
        },
        prev(){
          this.$store.commit('setStage','stage1')
        }
    }


}
</script>

<style>

</style>