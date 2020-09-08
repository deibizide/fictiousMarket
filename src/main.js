import Vue from 'vue';
// component
import App from './App';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
