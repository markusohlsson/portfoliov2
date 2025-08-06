<template>
  <div class="thank-you-page">
    <img src="../assets/thanks.svg" alt="">
    <h1>Thank You!</h1>
    <p>Your message has been received. I’ll get back to you as soon as possible.</p>
    <router-link to="/">← Go back to home</router-link>
  </div>
</template>

<style scoped>
.thank-you-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  padding: 2rem;
  color: #5d3136;
  background-color: #f9ecdf;

  img {
    width:80%;
  }
}

.thank-you-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.thank-you-page p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
</style>