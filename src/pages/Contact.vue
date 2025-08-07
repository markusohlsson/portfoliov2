<script setup>
import { Linkedin, Mail } from 'lucide-vue-next';
import ContactForm from '../components/ContactForm.vue';
</script>
<template>
    <div class="contact-wrapper">
        <h1 class="contact-title">Contact</h1>
        <div class="contact-container">
            <div class="contact-image-container">
                <img class="contact-image" src="../assets/contact.svg" alt="">
            </div>
            <div class="contact-info">
                <p class="contact-info-text">Whether you’re interested in working together, have a question about one of my projects, or just want to say hello — I’d love to hear from you!</p>
                <p class="contact-info-text">Feel free to reach out using the form below or connect with me directly.</p>
                <div class="contact-socials">
                    <a class="contact-socials-link" href="mailto:ohlssonmarkus1@gmail.com"><Mail/></a>
                    <a class="contact-socials-link" href="https://www.linkedin.com/in/markusohlsson/" target="_blank"><Linkedin/></a>
                </div>
            </div>
        </div> 
    <ContactForm/>
    </div>
</template>
