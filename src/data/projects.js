import { techs } from './techs';

import omdb from '../assets/img/projects/omdb.png'
import portfolio from '../assets/img/projects/portfolio.png'


export const projects = [
  {
    id: 'omdb',
    title: 'OMDB Movie Search',
    shortDescription: 'A full-stack web app that lets users search for movies and fetch detailed information from the OMDB API.',
    longDescription: 'The OMDB Movie Search App is a full-stack web application that allows users to search for movies and access detailed information from the OMDB API. It features a clean separation between frontend and backend, with a modern, responsive UI built using Vue 3, Tailwind CSS, and Pinia for state management. The backend, powered by Node.js and Express 5, efficiently handles API requests with caching, rate-limiting, and secure environment variable management. Users can enjoy fast, paginated search results and structured movie details. Please note that, due to the free hosting used for the backend demo, the initial request may take up to 30 seconds.',
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
    shortDescription: 'A modern, responsive personal portfolio built with Vue 3 and Vite to showcase skills, projects, and professional experience.',
    longDescription: 'This portfolio website is a full-featured, responsive web application built with Vue 3 and Vite, designed to highlight my skills and projects as a Full Stack Developer. It features smooth scroll animations with AOS, dynamic typing effects with Typed.js, and a clean, modular component structure using the Composition API. The project emphasizes performance, maintainability, and a modern user experience, with client-side routing powered by Vue Router and a lightweight, fast development setup. Additional tooling includes ESLint and Stylelint for code quality, ensuring a professional and polished codebase.',
    image: portfolio,
    demo: 'https://www.ohlsson.dev',
    repo: 'https://github.com/markusohlsson/portfoliov2',
    featured: true,
    frontendTech: [techs.vue, techs.vite, techs.vueRouter, techs.aos, techs.typedjs, techs.lucide, techs.css, techs.eslint],
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