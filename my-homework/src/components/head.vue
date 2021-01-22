<template>
  	<div>
        <div class="head_box">
            <!-- <svg-icon></svg-icon> -->
        </div>
    </div>
    
</template>

<script>
import svgIcon from "./common/IconSvg"
export default {
    data() {
        return{
    
        }
    },

	mounted(){


    },

    components:{
        svgIcon
    },

    computed:{

    },

    methods:{

    },
}

</script>
<style lang="scss" scoped>
    .head_box {
        width: 100%;
        height: 70px;
        text-align: center;
        box-shadow: 0px 5px 8px #888888;
        position: relative;
        .head_title {
            // position: absolute;
        }
        .head_login {
            // position: absolute;
        }
    }
</style>
