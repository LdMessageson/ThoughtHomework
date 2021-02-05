<template>
    <div class="content">
        <div class="content-title">
            <div>
                <p>Building</p>
                <i class="cruise icon-cog"></i>
                <p>3</p>
            </div>
            <div></div>
            <div></div>
        </div>
        <div class="content-tab">
        </div>
        <div class="content-area">
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
    
        }
    },
	mounted(){

    },
    components:{
    
    },
    computed:{

    },
    methods:{

    },
}
</script>
<style lang="scss" scoped>
  	.content {
        width: calc(100% - 255px);
        padding: 18px 28px;
        background: #E1E4E6;
        overflow: auto;
        .content-title {
            display: flex;
            justify-content: space-between;
            div {
                width: 320px;
                height: 140px;
            }
            div:nth-child(1) {
                background: #FF9A2A;
                color: #ffffff;
                position: relative;
                p:first-of-type {
                    font-size: 18px;
                    font-weight: bold;
                    position: absolute;
                    top: 14px;
                    left: 12px;
                }
                i {
                    font-size: 144px;
                    opacity: .2;
                    left: 200px;
                    margin-left: -80px;
                    position: absolute;
                    animation: mtRoate 2s infinite;
                    -webkit-animation: mtRoate 2s linear infinite; /*Safari and Chrome*/
                }
                p:last-of-type {
                    font-size: 48px;
                    position: absolute;
                    bottom: 10px;
                    right: 14px;
                }
                @keyframes mtRoate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                 /*Safari and Chrome*/
                @-webkit-keyframes mtRoate { 
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            }
            // div:nth-child(2) {
            //     background: #7FBC39;
            // }
            // div:nth-child(3) {
            //     background: #F3F3F3;
            // }
        }
    }
</style>
