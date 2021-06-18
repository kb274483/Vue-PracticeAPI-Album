<template>
  <Projectpage @previewitem="previewitemcallback"/>
  <ProjectPreView :switch="preViewSwitch" :src="imgID" />
</template>

<script>
import Projectpage from '@/components/ProjectPage/ProjectPage.vue'
import ProjectPreView from '@/components/ProjectPage/ProjectPreView.vue'
import { onMounted, reactive , ref } from '@vue/runtime-core'

export default {
  name: 'ProjectPage',
  components: {
    Projectpage,ProjectPreView
  },
  setup(){
    const preViewSwitch = ref(false);
    const imgID = ref(0);
    
    const previewitemcallback = (id)=>{
      preViewSwitch.value = !preViewSwitch.value;
      if(id === "itemeu"){
        imgID.value = 1 ;
      }else if(id === "itemdrink"){
        imgID.value = 2;
      }else if(id === "itemlist"){
        imgID.value = 3;
      }else if(id === "itemshop"){
        imgID.value = 4;
      }else if(id === "itemgithub"){
        imgID.value = 5;
      }
    }
    
    return{ 
      previewitemcallback,
      preViewSwitch,
      imgID
    }
  }
  

}
</script>
