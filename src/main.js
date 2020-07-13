// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Index from './components/Index'
import Help from './components/Help'
import Labeler from './components/Labeler'
import License from './components/License'
import FitLoader from "./components/FitLoader"
import Dropdown from "./components/Dropdown"
import Button from "./components/Button"
import Pandas_js from "./components/Pandas_js"

require('expose-loader?$!expose-loader?jQuery!jquery')
require('jquery-csv')
require('popper.js')
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')

Vue.use(VueRouter)
const routes = [
	{ name: 'home', path: '/', component: Index, props: true },
	{ name: 'help', path: '/help', component: Help },
	{ name: 'license', path: '/license', component: License },
	{ name: 'fit-data', path: '/fit-data', component: FitLoader },
	{ name: 'labeler', path: '/labeler', component: Labeler, props: true },
    { name: 'dropdown', path: '/dropdown', component: Dropdown },
    { name: 'button', path: '/button', component: Button },
    { name: 'pandas-js', path: '/pandas-js', component: Pandas_js }
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	router
}).$mount('#app')