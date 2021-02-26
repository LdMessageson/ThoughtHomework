<template>
  	<!--<div class="pop_up" style="visible" :style="visible ? { display: 'block' } : { display: 'none' } ">    
        <i class="icon-close" @click="closePopup"></i>
    </div>
    -->
    <div class="pop_up" v-show="this.hidden" @click.stop="clo_box">
        <i class="icon-close" @click="popup_des"></i>
        <div class="popup_content">
            <div>{{ this.title }}</div>
            <div>
                <div v-if="this.content_text">{{ this.content_text }}</div>
                <slot></slot>
            </div>
            <div>
                <button @click="popup_sub">确定</button>
                <button @click="popup_clo">取消</button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
           
        }
    },
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "默认标题",
        },
        content_text: {
            type: String,
            default: "",
        },
        hidden: {
            type: Boolean,
            default: false,
        },
    },
	mounted(){
      

    },

    components:{
    
    },

    computed:{

    },

    methods:{
        closePopup() {
            this.visible = false;
        },
        //点击确定事件
        popup_sub() {
            this.$emit("popup_sub");
        },
        //点击关闭事件
        popup_des() {
            this.$emit("popup_des");
        },
        //点击了取消事件
        popup_clo() {
            this.$emit("popup_clo");
        },
        //点击了弹出框以外区域
        clo_box(e) {
            if (e.target._prevClass == "pop_up") {
                this.$emit("clo_box")
            }
        },
    }
}

</script>
<style lang="scss" scoped>
    .pop_up {
        width: 570px;
        height: 140px;
        border: 1px solid $color1;
        background: #FFFFFF;
        position: absolute;
        top: 133px;
        left: 115px;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3); 
        -moz-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3); 
        -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3); 
        z-index: 1;
    }
    /*生成2个叠加的三角形*/
    .pop_up:before,.pop_up:after {
        content: "";
        display:block;
        width:0;
        height:0;
        position: absolute;
        top: -18px;
        left: 20px;
        font-size: 0;
        line-height: 0;
        border-width:0px 8px 17px;
        border-style:none solid solid;
        border-color:transparent transparent $color1 transparent;
    }
    /*将上面的三角形颜色设置和容器背景色相同  */
    .pop_up:after {
        top: -16px;
        border-color: transparent transparent #FFFFFF transparent;
    }
  
    
</style>
