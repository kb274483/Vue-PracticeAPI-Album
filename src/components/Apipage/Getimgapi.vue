<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
    props:{
        load:{
            type:Boolean,
            default : false
        },
        pagenum:{
            type: Number,
            default : 1
        },
        src:{
        }
    },
    
    setup(props){

        // console.log("子組件",props.src);
        return{ props  }
    }
}
</script>

<template>
    <div class="mainArea">
        <div class="row row-cols-1 row-cols-md-3 g-4" v-if="props.load">
            <div class="col" v-for="item in props.src" :key="item">
                <div class="card">
                <img :src="item" class="card-img-top imgSize" alt="" >
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center loading" v-else>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>    
</template>


<style lang="scss" scoped>
    .mainArea{
        margin-top:  50px;
        .loading{
                margin-top:450px;
            }
    }   
    
</style>