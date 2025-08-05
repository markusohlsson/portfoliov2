<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>
<template>
    <h1>Contact</h1>
    <div class="contact">
        <div class="contact-image-container">
            <img class="contact-image" src="../assets/contact.svg" alt="">
        </div>
        <div class="contact-info">
            <p>Whether you’re interested in working together, have a question about one of my projects, or just want to say hello — I’d love to hear from you!</p>
            <p>Feel free to reach out using the form below or connect with me directly.</p>
        </div>
    </div>
    <ContactForm/>
</template>

<style>
.contact-image {
    height:250px;
}

.contact {
    display: flex;
    gap:10px;
}
</style>