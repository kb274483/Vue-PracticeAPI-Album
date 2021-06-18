<script>
export default {
    
    setup(props , context){
        const preViewOpen = (e)=>{
            context.emit("previewitem", e.target.id);
        }
        const preViewClose = (e)=>{
            context.emit("previewitem", e.target.id);
        }

        return{
            preViewOpen,
            preViewClose,
        }
    }
}
</script>

<template>
    <div class="projectPage">
        <div class="title">
            <h2>個人其他網頁作品</h2>
            <p>持續更新中...</p>
        </div>
        <div class="projectList">
            <ul class="linkList">
                <li >
                    <a href="https://kb274483.github.io/Vue-EU-CountryTravelLevel/">
                        <div class="infoContainer">
                            <img src="https://image.flaticon.com/icons/png/128/3419/3419965.png" 
                                alt="eumap" id="itemeu" @mouseover="preViewOpen" @mouseout="preViewClose">
                            <div>歐洲旅遊等級</div> 
                        </div>
                    </a>
                </li>

                <li>
                    <a href="https://kb274483.github.io/Vue-drinkOrder/">
                        <div class="infoContainer">
                            <img src="https://image.flaticon.com/icons/png/128/3080/3080866.png" 
                                alt="drinkicon" id="itemdrink" @mouseover="preViewOpen" @mouseout="preViewClose">
                            <div>簡易飲料下單網站</div> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://kb274483.github.io/Vue-TodoList/">
                        <div class="infoContainer">
                            <img src="https://image.flaticon.com/icons/png/128/616/616948.png" 
                                alt="listicon" id="itemlist" @mouseover="preViewOpen" @mouseout="preViewClose">
                            <div>Vue版本TodoList</div> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://kb274483.github.io/JS-E_Commerce-web-practice/">
                        <div class="infoContainer">
                            <img src="https://image.flaticon.com/icons/png/128/287/287623.png"
                                alt="shopicon" id="itemshop" @mouseover="preViewOpen" @mouseout="preViewClose">
                            <div>JS製作多頁式電商網站</div> 
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kb274483">
                        <div class="infoContainer">
                            <img src="https://image.flaticon.com/icons/png/128/733/733609.png" 
                                alt="github" id="itemgithub" @mouseover="preViewOpen" @mouseout="preViewClose">
                            <div>Github</div> 
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    $BG-color:rgb(255, 243, 226);
    $Font-color:#5e5e5e;

    a{
        color: $Font-color;
        text-decoration: none;
        &:hover{
            color:lighten($Font-color,30%);
        }   
    }
    
    .projectPage{
        min-height:900px;
        padding-top:80px;
        text-align: center;
        background-color: $BG-color;
        margin-left: auto;
        margin-right: auto;
    }
    .projectList{
        margin-top: 50px;
    }
    .linkList{
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        li{
            padding: 10px 20px;
        }
    }
    .infoContainer{
        img{
            width: 100px ;height: 100px;
            transition: ease-in-out all 0.5s;
            &:hover{
                width: 120px ;height: 120px;
            }
        }
        div{
            margin: 20px 0px;
        }
    }
    @media(max-width:900px) {
        .projectPage{
            padding-top:30px;
        }
    }

</style>