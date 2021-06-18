<script>
import { ref } from '@vue/reactivity'

export default {
  
}
</script>

<template>
  <div class="mainArea">
    <div class="photoContainer">
      <img src="@/assets/img/2021-06-18_193858.png" alt="Selfie">
    </div>
    <div class="aboutContainer">
      <h2>Hello,I'm RoyLee</h2>
      <p>關於我:</p>
      <p> 我畢業於淡江大學的資工系，但我的第一份工作卻是個銷售醫療器材的門市店長，<br>
          在經歷一段對未來以及工作的茫然時期後，我決定從頭開始自學寫網頁前端，<br>
          直到目前我也還在盡力學習我所知道的每一項技能：<br>
          Html、CSS(SCSS)、JavaScript、Vue.js、Vue Router<br>
          、Node.js、bootstrap5、Git、AWS、串接API、Python Flask。
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
$BG-color:rgb(255, 243, 226);
  .mainArea{
      height: 100%;
      display: flex; justify-content: center;
      // margin: 200px 0px;
      padding: 250px 0px; 
      flex-wrap: wrap;
      background-color: $BG-color;
  }
  .photoContainer img{
      width: 400px; height: 400px;
      border-radius: 50%; 
      margin-right: 50px;
  }
  @media(max-width:600px){
    .mainArea{
        padding: 20%;
    }
  }
</style>