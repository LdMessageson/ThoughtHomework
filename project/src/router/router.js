import App from '../App'
const main = r => require.ensure([], () => r(require('../page/main')), 'main');
export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [
    {
      path: '',
      redirect: '/main'
    },
    {
      path: '/main',
      component: main
    },
  ]
}]
