<template>
    <form class="contact-form" action="https://formsubmit.co/c9878decdbff65e7b18774622abdbc3b" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <label for="subject">Subject</label>
        <input id="subject" name="subject" type="text">
        <label for="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <input type="hidden" name="_next" value="http://localhost:5173/Contact/Success">
        <input type="hidden" name="_captcha" value="false">
        <button type="submit">Send Message</button>
    </form>
</template>

<style>
.contact-form {
    display:flex;
    flex-direction: column;
    gap:10px;
    label {
        font-weight: 800;
        font-size:1.2rem;
    }
    input, textarea{
        border: 1px solid #5d3136;
        border-radius:12px;
        padding:15px;
        background-color: inherit;
    }
    textarea {
        height:150px;
    }
    button {
        background-color: #5d3136;
        border: none;
        color: #f9ecdf;
        border-radius:2.5rem;
        font-size:1.5rem;
        padding:20px;
        font-weight: 600;
    }
    button:hover {
        background-color: #7a474c;
        cursor:pointer;
    }
}
</style>