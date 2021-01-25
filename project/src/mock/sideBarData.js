import Mock from 'mockjs'
const projectList = Mock.mock({
    "list|20": [{
    'name': '@cname', // 中文名
    'account': `@word`, // 英文单词
    'phone': /1[3-9][0-9]{9}/, // 正则模式
    'deptName': Mock.mock('@cword(2,4)'), // 随机2-4字中文单词
    'id': '@guid', // guid
   }]
 })
 export default projectList