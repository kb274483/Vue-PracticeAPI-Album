<script>
import { ref } from '@vue/reactivity'
export default {
    props:{
        switch:{
            type:Boolean,
            default:false,
        },
        src:{
            type:Number,
            default:0,
        }
    },
    setup(props){
        
        return{
            props,
        }
    }
}
</script>

<template>
    <transition name="fade">
        <div :class="['preViewContainer']" v-show="props.switch">
            <div class="preViewBox">
               <img src="@/assets/Screenshots/eumap.png" alt="" v-show="props.src === 1">
               <img src="@/assets/Screenshots/drink.png" alt="" v-show="props.src === 2">
               <img src="@/assets/Screenshots/todo.png" alt="" v-show="props.src === 3">
               <img src="@/assets/Screenshots/camera.png" alt="" v-show="props.src === 4">
               <img src="@/assets/Screenshots/github.png" alt="" v-show="props.src === 5">
            </div>
        </div>
    </transition>
</template>


<style lang="scss" scoped>
    .preViewContainer{
        position: absolute;
        top:70%; left:50%;
        transform: translate(-50%,-50%); 
        width:800px; height:350px;
        border:solid 5px rgba(48, 48, 48, 0.7); 
        box-shadow:4px 4px 7px rgba(107, 107, 107, 0.6);
    }
    .fade-enter-active {
        transition: all .6s ease;
    }
    .fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter-from{
        opacity: 0;
    }
    .fade-enter-to{
        opacity: 1;
    }  
    .fade-leave-from{
        opacity: 1;
    }
    .fade-leave-to{
        opacity: 0;
    }
    @media(max-width:900px) {
        .preViewContainer{
            display: none;
        }
    }

</style>