<template>
  <div class="footer">
    <div class="footer-top">
      <ul class="footer-navigation">
        <li class="footer-link">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li class="footer-link">
          <router-link to="/projects">
            Projects
          </router-link>
        </li>
        <li class="footer-link">
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li class="footer-link">
          <router-link to="/contact">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer-middle">
      <ul class="socials">
        <li class="social-icon">
          <a
            class="social-icon-link"
            href="https://www.linkedin.com/in/markusohlsson/"
            target="_blank"
            aria-label="LinkedIn"
          ><Linkedin /></a>
        </li>
        <li class="social-icon">
          <a
            class="social-icon-link"
            href="https://www.github.com/markusohlsson"
            target="_blank"
            aria-label="Github"
          ><Github /></a>
        </li>
        <li class="social-icon">
          <a
            class="social-icon-link"
            href="mailto:hello@ohlsson.dev"
            aria-label="Email"
          ><Mail /></a>
        </li>
      </ul>
    </div>
    <div class="footer-bottom">
      <span>Built by Markus Ohlsson</span>
    </div>
  </div>
</template>

<script setup>
import { Linkedin, Github, Mail } from 'lucide-vue-next';
</script>
