<template>
    <form class="contact-form" action="https://formsubmit.co/c9878decdbff65e7b18774622abdbc3b" method="POST">
        <div class="contact-form-row" data-aos="fade-down-left">
            <input class="contact-form-input" type="text" id="name" name="name" required placeholder=" ">
            <label class="contact-form-label" for="name">Name</label>
        </div>
        <div class="contact-form-row" data-aos="fade-right">
            <input class="contact-form-input" type="email" id="email" name="email" required placeholder=" ">
            <label class="contact-form-label" for="email">Email</label>
        </div>
        <div class="contact-form-row" data-aos="fade-left">
            <input class="contact-form-input" type="text" id="subject" name="subject" required placeholder=" " >
            <label class="contact-form-label" for="subject">Subject</label>
        </div>
        <div class="contact-form-row" data-aos="fade-up-right">
            <textarea class="contact-form-textarea" id="message" name="message" required placeholder=" "></textarea>
            <label class="contact-form-label" for="message">Message</label>
        </div>
        <input type="hidden" name="_next" value="http://localhost:5173/Contact/Success">
        <input type="hidden" name="_captcha" value="false">
        <button type="submit" class="contact-button" data-aos="fade-up-left">Send Message</button>
    </form>
</template>
