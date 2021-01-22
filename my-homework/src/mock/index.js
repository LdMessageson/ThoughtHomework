import Mock from 'mockjs'
// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
    timeout: 0-300
})
import data from './sideBarData'
Mock.mock('172.21.73.5/api/redo', 'get', () => {  // 此处会劫持/api/redo接口，并返回数据
    debugger
  return data.projectList  // 返回模拟数据
})