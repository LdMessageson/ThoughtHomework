<template>
  	<div class="main">
        <!-- 顶部 -->
        <headTop></headTop>
        <div class="main_content">
            <!-- 侧边导航 -->
            <sideBar></sideBar>
            <!-- 内容部分 -->
            <contentArea></contentArea>
        </div>
        <!-- <footerAa></footerAa> -->
    </div>
</template>

<script>
import headTop from "../components/head";
import footerAa from "../components/footer";
import sideBar from "../components/sideBar";
import contentArea from "../components/content";
export default {
    data(){
        return{
            data: [],
            data1: []
        }
    },

	mounted(){

    },

    components:{
       headTop,
       sideBar,
       contentArea,
       footerAa
    },

    computed:{

    },

    methods:{

    },
}

</script>
<style lang="scss" scoped>
    .main {
        height: 100%;
        width: 100%;
        .main_content {
            width: 70%;
            // height: calc(100% - 120px);
            margin: 0px auto;
            display: -webkit-flex;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
    }
</style>
