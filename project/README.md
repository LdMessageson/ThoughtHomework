# my-homework

> my homework

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

项目文件目录结构
第一次安装sass可能会报，使用淘宝镜像安装
设置淘宝镜像 安装sass
npm config set registry https://registry.npm.taobao.org
然后 npm install
后台接口用json-server,已经配置好，无需再配置
安装json-server
npm insatll -g json-server
安装之后本地可以启json-erver，在packjson文件里面设置
    "mock": "json-server --watch mock/db.json --port 3003",
    "mockdev": "npm run mock && npm run dev"  这行是让两个同时启动
json-server启动方式
需要设置代理

全局安装使用sass颜色变量需要安装
npm install --s sass-resources-loader

