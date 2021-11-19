<template>
  <div>
    <div class="images">
        이미지 자리 
      <img :src="changedImg">
    </div>

    <button>저장하기</button>
    <button>공개하기</button>
  </div>
</template>

<script>
export default {
    name: 'Changed',
    data() {
      return {
          originalImg: '',
          changedImg: '',
      }
  },
}
</script>

<style>

</style>