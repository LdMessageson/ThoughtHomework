<template>
  	<div class="side">
        <div class="side_box">
            <p v-for="(item,i) in sideData" :key="item.id">
                <i :class="item.iconClassName"></i>
                <span>{{item.title}}</span>
            </p>
        </div>
        <div class="history_box">
            <div class="history_title">History</div>
            <p v-for="(item,i) in historyDatas" :key="item.id">
                <!-- <span>{{item.name}}</span>-->
                {{item.name}}
            </p>
        
        </div>
    </div>
    
</template>

<script>
import { getSideDatasService, getHistoryDatasService} from '../service/getData'
export default {
    data() {
        return{
            sideData: [],
            historyDatas:[]
        }
    },

	mounted(){
        getSideDatasService().then(res => {
            this.sideData = res;
        });
        getHistoryDatasService().then(res => {
            this.historyDatas = res;
        });

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
  	.side {
        width: 255px;
        // height: 100%;
        background: #2D4054;
        .side_box {
            height: 520px;
            padding-top: 18px;
            p {
                height: 45px;
                line-height: 45px;
                color: #F3F3F3;
                padding-left: 30px;
                i {
                    font-size: 20px;
                    vertical-align: middle;
                }
                span {
                    margin-left: 14px;
                    vertical-align: middle;
                }
            }
        }
        .history_box {
            width: 100%;
            padding-bottom: 16px;
            .history_title {
                margin: 0px 0px 15px 12px;
                font-size: 24px;
                color: #ccc;
            }
            p {
                width: 230px;
                height: 22px;
                overflow: hidden;
                text-overflow:ellipsis; 
                white-space: nowrap;
                line-height: 22px;
                font-size: 12px;
                color: #999999;
                
            }
            p:before {
                content: "";
                display:inline-block;
                width: 6px;
                height: 6px;
                background: #999999;
                border-radius: 50%;
                vertical-align: middle;
                margin: 0px 16px 0px 12px;
            }
        }
    }
    
</style>
