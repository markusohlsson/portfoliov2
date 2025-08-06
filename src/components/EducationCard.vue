<template>            
  <div class="education-card">
    <img class="education-logo" src="../assets/milogo.svg" alt="Medieinstitutet" />

    <span class="education-date">Sep 2022 - May 2024</span>
    <span class="education-title">FrontEnd Developer Focus E-Commerce</span>
    <span class="education-school">Medieinstitutet</span>
    
    <p class="education-description">
      During the vocational education program in E-commerce Web Development, I learned to work with databases,
      build responsive websites, and create as well as manage APIs. The focus has been on expanding my skills in both
      front-end and back-end development, including HTML5, CSS, JavaScript, PHP, and SQL. I have also gained experience
      integrating various business systems and payment solutions.
    </p>

    <span class="education-link">
      <a href="https://medieinstitutet.se/utbildningar/webbutvecklare-inom-e-handel/" target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      
    </span>
  </div>
</template>

<style scoped>
.education-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
  padding: 20px;
  background-color: #f9ecdf;
  color: #5d3136;
  border-left: 4px solid #5d3136;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(93, 49, 54, 0.1);
}

.education-logo {
  height: 60px;
  width: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.education-date {
  font-weight: 700;
  font-size: 1rem;
  color: #5d3136;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}

.education-title {
  font-weight: 600;
  font-size: 1.2rem;
  color: #3e1f22;
}

.education-school {
  font-weight: 700;
  font-size: 1rem;
  color: #8a4b4e;
  font-style: italic;
  margin-bottom: 6px;
}

.education-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #4b2a2d;
}

.education-link a {
  display: inline-block;
  padding: 6px 12px;
  background-color: #5d3136;
  color: #f9ecdf;
  text-decoration: none;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.education-link a:hover {
  background-color: #3e1f22;
}
</style>
