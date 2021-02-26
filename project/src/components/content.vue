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
        <div class="content_area" v-for="(item,i) in contentData" :key="item.i">
            <div class="content_area_img" >
               <img :src="require(`../assets/${item.os}.png`)" alt="" />
            </div>
            <ul>
                <li>
                    <i class="cruise icon-desktop"></i>
                    <span class="way">{{item.name}}</span>
                    <span class="content_status_box">
                        <span 
                        :style="item.status == 'idle' ? {background: '#7FBC39'} : {background:'#FF9A2A'}" 
                        class="content_status">{{item.status}}</span>
                    </span>
                    <i class="cruise icon-info"></i>
                    <span>{{item.ip}}</span>
                    <i class="icon-folder"></i>
                    <span>{{item.location}}</span>
                </li>   
                <li>
                    <p class="add_resource" @click="addResource(i,item)">
                        <i class="cruise icon-plus"></i>
                    </p>
                    <p v-for="(ele,j) in item.resources">
                        <span>{{ele}}</span>
                        <i class="icon-trash"></i>
                    </p>
                </li>
            </ul>
            <popUp
                v-if="i === isShow"
                title="父组件标题"
                :hidden="ishidden"
                @popup_sub="popup_submit"
                @popup_clo="popup_close"
                @clo_box="close_box"
                @popup_des="popup_des"
            >
            </popUp>
        </div>
       
    </div>
    
</template>

<script>
import popUp from "./common/popUp";
import { getContentDatasService } from '../service/getData'
export default {
    data() {
        return{
            // visible: false,
            ishidden: false,
            contentData: [],
            isShow: 0
        }
    },
	mounted(){
        getContentDatasService().then(res => {
            this.contentData = res;
        });
    },
    components:{
        popUp
    },
    computed:{

    },
    methods:{
        //点击弹出弹出层
        addResource(index,item) {
            this.isShow = index
            this.ishidden = true;
        },
        //子组件的确定事件
        popup_submit() {
            this.ishidden = false;
            console.log("点击了确定按钮");
        },
        //子组件的取消事件
        popup_close() {
            this.ishidden = false;
            console.log("点击了取消事件");
        },
        popup_des() {
            this.ishidden = false;
        },
        //点击弹出框以外触发
        close_box() {
            this.ishidden = false;
            console.log("点击了弹出框外部");
        },
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
            div:nth-child(1), div:nth-child(2) {
                color: #ffffff;
                position: relative;
                p:first-of-type {
                    font-size: 18px;
                    font-weight: bold;
                    position: absolute;
                    top: 14px;
                    left: 12px;
                }
                p:last-of-type {
                    font-size: 48px;
                    position: absolute;
                    bottom: 10px;
                    right: 18px;
                }
                i {
                    position: absolute;
                    font-size: 144px;
                    opacity: .2;
                }
            }
            div:nth-child(1) {
                background: #FF9A2A;
                i {
                    left: 150px;
                    top: -7px;
                    margin-left: -40px;
                    animation: mtRoate 2s infinite;
                    -webkit-animation: mtRoate 2s linear infinite; /*Safari and Chrome*/
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
                i {
                    left: 50%;
                    top: -7px;
                    margin-left: -75px;
                }
            }
            div:nth-child(3) {
                background: #F3F3F3;
            }
        }
        .content_tab_box {
            display: flex;
            justify-content:space-between;
            margin-top: 14px;
            .content_tab{
                width: 300px;
                height: 50px;
                background: #FFFFFF;
            }
            .content_search {
                width: calc(100% - 306px);
                height: 50px;
                background: #FFFFFF;
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
                    i{
                        font-size: 16px;
                        color: #999999;
                        margin: 0px 4px;
                    }
                    .way {
                        font-weight:bold;
                        color: $color1;
                    }
                    .content_status_box {
                        display: inline-block;
                        width: 144px;
                        margin-left: 40px;
                    }
                    .content_status {
                        padding: 1px 10px;
                        background: #7FBC39;
                        color: #FFFFFF;
                        // margin: 0px 100px 0px 60px;
                    }
                    i:last-of-type {
                        margin-left: 22px;
                    }
                    i:first-of-type {
                        margin-left: 0px;
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
                        width: 26px;
                        height: 24px;
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
