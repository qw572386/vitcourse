import Vue from 'vue';
import iView from 'iview';
import router from './router';
import store from './store';
import App from './app.vue';
import config from '@/config'
import 'iview/dist/styles/iview.css';
import './my-theme/index.less';
// 实际打包时应该不引入mock
if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.use(iView);
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
