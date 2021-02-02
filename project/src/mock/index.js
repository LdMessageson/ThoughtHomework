const MockData = require('mockjs');
const projectList = MockData.mock({
    "list|20": [{
    'name': '@cname', // 中文名
    'account': `@word`, // 英文单词
    'phone': /1[3-9][0-9]{9}/, // 正则模式
    'deptName': MockData.mock('@cword(2,4)'), // 随机2-4字中文单词
    'id': '@guid', // guid
   }]
 });
 
const data1 = [1,2,3,4,5];
const artworkMock = function(app) {
    app.get("/mock/artwork/chord1", function(_req, res) {
        res.json(projectList);
    }); 
    app.get("/mock/artwork/chord2", function(_req, res) {
        res.json(data1);
    });
};
function Mock(app) {
    artworkMock(app);
}
module.exports = Mock;
