import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';
import About from '../pages/About.vue';

const routes = [
    { path: '/', component: Home, name: 'Home'},
    { path: '/projects', component: Projects, name: 'Projects'},
    { path: '/Contact', component: Contact, name: 'Contact'},
    { path: '/About', component: About, name: 'About'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;