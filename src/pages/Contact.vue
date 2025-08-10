<script setup>
import { Linkedin, Mail, Github, ExternalLink } from 'lucide-vue-next';
import ContactForm from '../components/ContactForm.vue';
</script>

<template>
  <div class="contact-wrapper">
    <h1 class="contact-title" data-aos="fade-down">Let's Connect</h1>
    
    <div class="contact-container">
      <div class="contact-info">
        <p class="contact-info-text" data-aos="fade-down-left">
          Whether you’re interested in working together, have a question about one of my projects, 
          or just want to say hello — I’d love to hear from you!
        </p>
      </div>
    </div>

    <ContactForm />

    <div class="contact-details">
      <h2 data-aos="fade-right">Or Connect On</h2>
      <div class="socials-container">
        <a class="contact-social" href="https://www.github.com/markusohlsson" target="_blank" data-aos="fade-down-right">
          <span class="contact-social-icon">
            <Github /> Github
          </span>
          <ExternalLink />
        </a>

        <a class="contact-social" href="https://www.linkedin.com/in/markusohlsson" target="_blank" data-aos="fade-right">
          <span class="contact-social-icon">
            <Linkedin /> LinkedIn
          </span>
          <ExternalLink />
        </a>

      </div>
    </div>
  </div>
</template>
