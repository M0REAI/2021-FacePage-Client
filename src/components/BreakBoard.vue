<template>
    <div class="board-wrapper">
      <div class="board">
        <div class="board-item">
          <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F49%2F9a%2F40%2F499a40736a97e44e1e821faf7c0f8df6.jpg&type=a340">
          <img src="https://source.unsplash.com/random/2">
          <img src="https://source.unsplash.com/random/3">
        </div>
        <div class="board-item">
          <img src="https://source.unsplash.com/random/11">
          <img src="https://source.unsplash.com/random/12">
          <img src="https://source.unsplash.com/random/13">
          <img src="https://source.unsplash.com/random/14">
        </div>
        <div class="board-item">
          <img src="https://source.unsplash.com/random/21">
          <img src="https://source.unsplash.com/random/22">
          <img src="https://source.unsplash.com/random/23">
          <img src="https://source.unsplash.com/random/24">
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.board-wrapper {
  display: inline-block;
  width: 70%;
  border-radius: 10px;
  box-shadow: 1px 1px 9px 2px rgb(214, 214, 214);
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 11px 15px;
}
.board {
  display: grid;
  /* border: 1px solid blue; */
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
}
.board-item {
  /* border: 1px solid black; */
  overflow: visible;
}
.board-item img {
  width: 100%;
  margin-bottom: 0.1rem;
}
</style>