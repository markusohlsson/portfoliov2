import { techs } from './techs';

import omdb from '../assets/img/projects/omdb.png'
import portfolio from '../assets/img/projects/portfolio.png'


export const projects = [
  {
    id: 'omdb',
    title: 'OMDB Movie Search',
    shortDescription: 'A full-stack web app for searching movies using the OMDB API.',
    longDescription: 'A full-stack web application that allows users to search for movies and fetch detailed movie information using the OMDB API. This project demonstrates a clean separation between frontend and backend with modern web technologies.',
    image: omdb,
    demo: 'https://ohlssondevomdb.netlify.app/',
    repo: 'https://github.com/markusohlsson/omdb',
    frontendTech: [ techs.vue, techs.vite, techs.tailwind, techs.pinia, techs.vueRouter, techs.lucide, techs.axios],
    backendTech: [techs.nodejs, techs.express, techs.axios, techs.cors, techs.expressRateLimit, techs.nodeCache, techs.dotenv, techs.nodemon],
    features: [
      'Search movies by title with paginated results.',
      'Fetch detailed movie information by ID or title.',
      'Cache frequent requests to optimize API usage.',
      'Responsive UI with modern design and icons.',
      'Backend API provides structured and rate-limited endpoints.',
    ],
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    shortDescription: 'A modern, responsive personal portfolio website.',
    longDescription: 'A modern, responsive personal portfolio website built with Vue 3, Vite, and animated UI enhancements. Designed to showcase my skills and projects as a Full Stack Developer.',
    image: portfolio,
    demo: 'https://www.ohlsson.dev',
    repo: 'https://github.com/markusohlsson/portfoliov2',
    featured: true,
    frontendTech: [techs.vue, techs.vite, techs.vueRouter, techs.aos, techs.typedjs, techs.lucide, techs.css],
    backendTech: null,
    features: [
      'Fully responsive design, optimized for mobile, tablet, and desktop.',
      'Built with Vue 3 for scalable and maintainable code.',
      'Fast development and production builds using Vite.',
      'Smooth scroll-based animations powered by AOS.',
      'Dynamic typing animations using Typed.js.',
      'Clean, minimalistic UI with custom styling and Lucide icons.',
      'Hosted with HTTPS and optimized for performance (Lighthouse 90+).'
    ],
  },
];