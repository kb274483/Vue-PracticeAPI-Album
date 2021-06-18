
<script>
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
export default {
    props:["page","load"],
    setup(props , context){
        const currentPage = ref(1);

        const choosePage = (e) =>{
            currentPage.value = parseInt(e.target.innerText)
            context.emit("pageCallBack" , currentPage.value);
        }

        const changeNextPage = ()=>{
            currentPage.value = currentPage.value + 1 ;
            if(currentPage.value > 5){
                currentPage.value = 1;
            } 
            context.emit("pageCallBack" , currentPage.value);
        }

        const changePrevPage = ()=>{
            currentPage.value = currentPage.value - 1 ;
            if(currentPage.value < 1){
                currentPage.value = 5;
            } 
            context.emit("pageCallBack" , currentPage.value);
        }

        return{ props, choosePage, currentPage, changePrevPage, changeNextPage }
    }
}
</script>

<template>
    <div class="selectBar " v-if="props.load">
        <div class="prev box" @click="changePrevPage"> Prev </div>

        <div :class="['page','box',{selectedBox : page == currentPage}]" 
            v-for="page in props.page.totalPage" :key="page"
            @click="choosePage">{{page}}
        </div>

        <div class="next box" @click="changeNextPage"> Next </div>
    </div>
</template>


<style lang="scss" scoped>
.selectBar{
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
    display: flex;
    .box{
        cursor: pointer;
        box-shadow:4px 4px 5px rgba(107, 107, 107, 0.5);
        margin: 0px 0.5px;
        padding: 5px 15px;
    }
    .selectedBox{
        background: rgb(196, 196, 196);
    }
}
</style>