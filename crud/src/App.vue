<script setup>
// B1: RouterView
import { RouterView } from 'vue-router';
// B2: import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {provide} from 'vue';
// <!-- Thiết lập aip chung -->
let apiBook = "http://localhost:3000/books";
provide('apiBook', apiBook);
</script>
<template>
  <div  class="container">
    <RouterView />
  </div>
</template>