import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';
import About from '../pages/About.vue';
import Success from '../pages/Success.vue';
import ProjectDetails from '../pages/ProjectDetails.vue';
import Privacy from '../pages/Privacy.vue';

const routes = [
    { path: '/', component: Home, name: 'Home'},
    { path: '/projects', component: Projects, name: 'Projects'},
    { path: '/projects/:id', component: ProjectDetails, name: 'ProjectDetails', props: true},
    { path: '/contact', component: Contact, name: 'Contact'},
    { path: '/about', component: About, name: 'About'},
    { path: '/contact/success', component: Success, name: 'Success'},
    { path: '/privacy-policy', component: Privacy, name: 'Privacy'}, 

];

const router = createRouter({
    history: createWebHistory(),
    routes,
     scrollBehavior() {
    return { top: 0 }
  }
});

export default router;