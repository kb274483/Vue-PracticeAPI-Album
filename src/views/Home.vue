<template>
  <Mainarea/>
</template>

<script>
import Mainarea from '@/components/Homepage/Mainarea.vue'
import { onMounted, reactive , ref } from '@vue/runtime-core'
import axios from "axios"

export default {
  name: 'Main',
  components: {
    Mainarea,
  },
  setup(){
    
    
    return{  }
  }
  

}
</script>
