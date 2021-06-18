<template>
  <Getimgapi :load="loadingOver" :src="sendPropsSrc"
  :pagenum="currentPage" />

  <Selectpage :page="pageOfImgSrc" :load="loadingOver" 
  @pageCallBack="currentPageCallBack"/>
</template>

<script>

import Getimgapi from '@/components/Apipage/Getimgapi.vue'
import Selectpage from '@/components/Apipage/Selectpage.vue'
import { onMounted, reactive , ref, watch } from '@vue/runtime-core'
import axios from "axios"

export default {
  
  components: {
    Getimgapi,Selectpage
  },
  setup(){
  
    const onePageSrc = ref([]);
    const twoPageSrc = ref([]);
    const threePageSrc = ref([]);
    const fourPageSrc = ref([]);
    const fivePageSrc = ref([]);
    const sendPropsSrc = ref([]);

    const pageOfImgSrc = reactive({
      "totalPage": 5,
    });
    const currentPage = ref(1);
    const loadingOver = ref(false);
    const currentPageCallBack = (page)=>{
      currentPage.value = page
    }

    watch(
      currentPage,
      (page)=>{
      if(page == 1){
        sendPropsSrc.value = onePageSrc.value;
      }else if(page == 2){
        sendPropsSrc.value = twoPageSrc.value;
      }
      else if(page == 3){
        sendPropsSrc.value = threePageSrc.value;
      }
      else if(page == 4){
        sendPropsSrc.value = fourPageSrc.value;
      }
      else if(page == 5){
        sendPropsSrc.value = fivePageSrc.value;
      }
    })
  
    watch(
      onePageSrc.value,
      (arr)=>{
      if(arr.length >= 6){
        loadingOver.value = true;
        sendPropsSrc.value = arr;
      }
    })

    onMounted(() => {
      axios.get('https://api.unsplash.com/photos/random?client_id=bKFaiEZpPA7eGovGXxXcSGe2KUo2ZUGe0qBzaOUFLZo',{
            params:{
                count : 30 ,
                orientation: "landscape",
            }
        })
        .then(function (response) {
            for(let i=0 ; i<response.data.length ; i++){
              if(i>=0 && i <6){
                onePageSrc.value.push(response.data[i].urls.regular);
              }
              else if(i>=6 && i<12){
                twoPageSrc.value.push(response.data[i].urls.regular);
              }
              else if(i>=12 && i<18){
                threePageSrc.value.push(response.data[i].urls.regular);
              }
              else if(i>=18 && i<24){
                fourPageSrc.value.push(response.data[i].urls.regular);
              }
              else if(i>=24 && i<30){
                fivePageSrc.value.push(response.data[i].urls.regular);
              }
            }   
        })
        .catch(function (error) {
          console.log(error);
          alert('檔案載入失敗');
        });
    })

    return{ loadingOver , pageOfImgSrc ,
            currentPageCallBack ,currentPage
            ,sendPropsSrc
    } 
  }
}
</script>

<style>

</style>