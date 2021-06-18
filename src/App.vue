<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    
  }
}
</script>

<template>
  <div class="layout">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <ul class="linkContainer">
          <li><router-link to="/" class="text-muted aLink ">Home</router-link></li>
          <li><router-link to="/practiceapi" class="text-muted aLink">Practice-API</router-link></li>
          <li><router-link to="/sideproject" class="text-muted aLink">Side-Project</router-link></li>
        </ul>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <router-view/>

    <footer class="navbar fixed-bottom navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand copyright" href="#">© 2021 By RoyLee. Practice Vue.js website</a>
      </div>
    </footer>      
  </div>
</template>


<style lang="scss">
  .linkContainer{
    padding-left: 0px;
    li{
      font-size: 20px;
      margin: 20px 0px;
    }
  }
  .copyright{
    line-height: 30px;
    font-size: 15px;
  }
</style>

