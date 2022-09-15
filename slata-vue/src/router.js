import { createRouter, createWebHashHistory } from "vue-router";
import InfoPage from './components/InfoPage';
import SlataDirect from './components/SlataDirect';
import SlataHr from './components/SlataHr';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: InfoPage, alias: '/' },
        { path: '/director', component: SlataDirect },
        { path: '/hr', component: SlataHr },
    ]
})