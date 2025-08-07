<template>
    <form class="contact-form" action="https://formsubmit.co/c9878decdbff65e7b18774622abdbc3b" method="POST">
        <label class="contact-form-label" for="name">Name</label>
        <input class="contact-form-input" type="text" name="name" id="name" required>
        <label class="contact-form-label" for="email">Email</label>
        <input class="contact-form-input" type="email" name="email" id="email" required>
        <label class="contact-form-label" for="subject">Subject</label>
        <input class="contact-form-input" id="subject" name="subject" type="text" required>
        <label class="contact-form-label" for="message">Message</label>
        <textarea class="contact-form-textarea" name="message" id="message" required></textarea>
        <input type="hidden" name="_next" value="http://localhost:5173/Contact/Success">
        <input type="hidden" name="_captcha" value="false">
        <button type="submit" class="contact-button">Send Message</button>
    </form>
</template>