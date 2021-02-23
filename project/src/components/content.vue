<template>
    <div class="content">
        <div class="content_title">
            <div>
                <p>Building</p>
                <i class="cruise icon-cog"></i>
                <p>3</p>
            </div>
            <div>
                <p>IDIE</p>
                <i class="cruise icon-coffee"></i>
                <p>5</p>
            </div>
            <div></div>
        </div>
        <div class="content_tab_box">
            <div class="content_tab">
            
            </div>
            <div class="content_search">
            
            </div>
        </div>
        <div class="content_area">
            <div class="content_area_img" >
                <img src="../assets/windows.png" alt="" />
            </div>
            <ul>
                <li>
                    <i class="cruise icon-desktop"></i>
                    <span>bjstdmngbdr01.thoughtworks.com</span>
                    <span class="content_status">Idie</span>
                    <i class="cruise icon-info"></i>
                    <span>192.168.1.102</span>
                    <i class="icon-folder"></i>
                    <span>/var/lib/cruise-agent</span>
                </li>
                <li>
                    <p class="add_resource" @click="addResource">
                        <i class="cruise icon-plus"></i>
                    </p>
                    <p>
                        <span>Firefox</span>
                        <i class="icon-trash"></i>
                    </p>
                    <p>
                        <span>Firefox</span>
                        <i class="icon-trash"></i>
                    </p>
                     <p>
                        <span>Firefox</span>
                        <i class="icon-trash"></i>
                    </p>
                     <p>
                        <span>Firefox</span>
                        <i class="icon-trash"></i>
                    </p>
                    <p>
                        <span>Firefox</span>
                        <i class="icon-trash"></i>
                    </p>
                </li>
            </ul>
             <popUp :visible="visible"></popUp>
        </div>
       
    </div>
    
</template>

<script>
import popUp from "./common/popUp";
export default {
    data() {
        return{
            visible: false,
        }
    },
	mounted(){
    
    },
    components:{
        popUp
    },
    computed:{

    },
    methods:{
        addResource(event) {
            this.visible = true;
            console.log(event,"123");
        }
    },
}
</script>
<style lang="scss" scoped>
  	.content {
        width: calc(100% - 255px);
        padding: 18px 28px;
        background: #E1E4E6;
        overflow: auto;
        .content_title {
            display: flex;
            justify-content: space-between;
            div {
                width: 300px;
                height: 130px;
            }
            div:nth-child(1) {
                background: #FF9A2A;
                border-bottom: 1px solid #000000;
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
                    position: absolute;
                    font-size: 144px;
                    opacity: .2;
                    left: 150px;
                    top: -7px;
                    margin-left: -40px;
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
            div:nth-child(2) {
                background: $color5;
            }
            div:nth-child(3) {
                background: #F3F3F3;
            }
        }
        .content_tab_box {
            display: flex;
            justify-content:space-between;
            .content_tab{
                width: 300px;
                height: 50px;
                background: #FFFFFF;
            }
            .content_search {
                width: calc(100% - 306px);
                height: 50px;
                background: red;
            }
        }
        .content_area  {
            width: 100%;
            height: 130px;
            background: #ffffff;
            margin: 14px 0px;
            display: flex;
            position: relative;
            .content_area_img {
                width: 130px;
                height: 130px;
                line-height: 130px;
                text-align: center;
                img{
                    vertical-align: middle;
                }
            }
            .content_area_right {
                display: flex;
            }
            ul {
               li {
                   width: 100%;
                   height: 65px;
                
                   .content_status {
                        padding: 1px 10px;
                        background: #7FBC39;
                        color: #FFFFFF;
                   }
                   p {
                   }
                   i {
                       font-size: 16px;
                   }
                   i, span {
                        vertical-align: middle;
                   }
               }
               li:first-child {
                    line-height: 65px;
                    p{
                        
                    }
                    span {
                        font-size: 14px;
                    }
                    i {
                        font-size: 16px;
                    }
               } 
               li:last-child {
                   display: flex;
                   align-items: center;
                   p {
                        height: 26px;
                        line-height: 26px;
                        margin: 0px 4px;
                        padding: 0px 4px;
                        background: #EFEFEF;
                        color: #2D4054;
                   }
                   .add_resource {
                        width: 28px;
                        height: 27px;
                        cursor: pointer;
                        padding: 0px;
                        margin-left: 0px;
                        background: $color1;
                        position: relative;
                        
                       i {
                           position: absolute;
                           font-size: 18px;
                           color: #ffffff;
                           left: 50%;
                           top: 50%;
                           margin-top: -9px;
                           margin-left: -7px;
                       }
                   }
               }
            }
        }
        
    }
</style>
