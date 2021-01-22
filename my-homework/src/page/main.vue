<template>
  	<div class="main_container">
        <!-- 顶部 -->
        <headTop></headTop>
        <div class="main_content">
            <!-- 侧边导航 -->
            <sideBar></sideBar>
            <!-- 内容部分 -->
            <contentArea></contentArea>
        </div>
        
    </div>
</template>

<script>
import headTop from "../components/head";
import sideBar from "../components/sideBar";
import contentArea from "../components/content";
import { hotcity1 } from '../service/getData'
export default {
    data(){
        return{
            data: [],
        }
    },

	mounted(){
        hotcity1().then(res => {
            
            this.data = res;
            console.log(this.data)
        })

    },

    components:{
       headTop,
       sideBar,
       contentArea
    },

    computed:{

    },

    methods:{

    },
}

</script>
<style lang="scss" scoped>
    .main_container {
        .main_content {
            width: 80%;
            margin: 0px auto;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
    }
</style>
