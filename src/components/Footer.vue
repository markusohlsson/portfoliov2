<template>
    <div class="footer">
        <div class="top">
            <ul class="socials">
                <li class="social-icon"><a href="https://www.linkedin.com/in/markusohlsson/" target="_blank"><Linkedin/></a></li>
                <li class="social-icon"><a href="https://www.github.com/markusohlsson" target="_blank"><Github/></a></li>
                <li class="social-icon"><a href="mailto:ohlssonmarkus1@gmail.com"><Mail/></a></li>
                <li class="social-icon"><a href=""><FileUser/></a></li>
            </ul>
        </div>
        <div class="bottom">
            <span>Built by Markus Ohlsson</span>
        </div>
    </div>
</template>

<script setup>
import { Linkedin, Github, Mail, FileUser  } from 'lucide-vue-next';
</script>

<style>
.footer {
    margin-top:20px;
    padding-top:10px;
    border-top: 1px solid #5d3136;
}
.socials {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    justify-content: space-evenly;
    a {
        color:inherit;
        text-decoration:none;
    }
}
.bottom {
    text-align: center;
}
.social-icon {
    display: flex;
    a {
        padding:5px;
        height:25px;
    }
}
.social-icon a:hover {
    background-color: #5d3136;
    color:#f9ecdf;
    border-radius:50%;
}
</style>