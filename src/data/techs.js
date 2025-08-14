/* Icons */
import axiosIcon from '../assets/icons/axios.svg';
import cssIcon from '../assets/icons/css3.svg';
import dotenvIcon from '../assets/icons/dotenv.svg';
import expressIcon from '../assets/icons/express.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import laravelIcon from '../assets/icons/laravel.svg';
import lucideIcon from '../assets/icons/lucide.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import nodeCacheIcon from '../assets/icons/node_cache.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import nodemonIcon from '../assets/icons/nodemon.svg';
import phpIcon from '../assets/icons/php.svg';
import piniaIcon from '../assets/icons/pinia.svg';
import scssIcon from '../assets/icons/scss.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import viteIcon from '../assets/icons/vite.svg';
import vueIcon from '../assets/icons/vue.svg';
import placeholderIcon from '../assets/icons/techstack-placeholder.svg'
import kafkaIcon from '../assets/icons/kafka.svg';
import jiraIcon from '../assets/icons/jira.svg';

export const techs = {
  vue: { name: 'Vue 3', description: 'Core framework for building the SPA.', icon: vueIcon },
  vite: { name: 'Vite', description: 'Fast development server and build tool.', icon: viteIcon },
  tailwind: { name: 'Tailwind CSS', description: 'Utility-first styling framework.', icon: tailwindIcon },
  pinia: { name: 'Pinia', description: 'State management.', icon: piniaIcon },
  vueRouter: { name: 'Vue Router', description: 'Client-side routing.', icon: vueIcon },
  lucide: { name: 'Lucide', description: 'Scalable SVG icons.', icon: lucideIcon },
  aos: { name: 'AOS', description: 'Scroll animations', icon: placeholderIcon },
  typedjs: { name: 'Typed.js', description: 'Typing effect', icon: placeholderIcon },
  css: { name: 'CSS', description: 'CSS styling for web pages.', icon: cssIcon },
  scss: { name: 'SCSS', description: 'Enhanced CSS with variables and nesting.', icon: scssIcon },
  javascript: { name: 'JavaScript', description: 'Dynamic scripting language.', icon: javascriptIcon },

  nodejs: { name: 'Node.js', description: 'JavaScript runtime for server-side applications.', icon: nodejsIcon },
  express: { name: 'Express 5', description: 'Fast, minimalist web framework for Node.js.', icon: expressIcon },
  laravel: { name: 'Laravel', description: 'PHP web application framework.', icon: laravelIcon },
  mysql: { name: 'MySQL', description: 'Relational database management system.', icon: mysqlIcon },
  php: { name: 'PHP', description: 'Server-side scripting language.', icon: phpIcon },

  axios: { name: 'Axios', description: 'HTTP client for API requests.', icon: axiosIcon },
  cors: { name: 'CORS', description: 'Cross-origin resource sharing.', icon: placeholderIcon },
  expressRateLimit: { name: 'Express Rate Limit', description: 'Throttling requests to protect APIs.', icon: placeholderIcon },
  nodeCache: { name: 'Node-Cache', description: 'In-memory caching.', icon: nodeCacheIcon },
  dotenv: { name: 'dotenv', description: 'Environment variable management.', icon: dotenvIcon },
  nodemon: { name: 'Nodemon', description: 'Auto-reload during development.', icon: nodemonIcon },
  kafka: {name: 'Apache Kafka', description: 'Distributed platform for streaming and processing real-time data.', icon: kafkaIcon},
  jira: {name: 'Jira', description: 'Project management and issue-tracking tool for agile teams.', icon: jiraIcon}
};


export const comfortableTech = [
  techs.vue,
  techs.laravel,
  techs.mysql,
  techs.javascript,
  techs.css,
  techs.scss,
  techs.php,
  techs.vite,
  techs.vueRouter,
  techs.jira,
  techs.axios,
  techs.lucide,
  techs.dotenv,
];