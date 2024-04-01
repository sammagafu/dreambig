<script setup>
import TopNavigationBar from '@/components/header/TopNavigationBar.vue';
import Footer from './components/footer/Footer.vue';
</script>

<template>
   <main>
    <TopNavigationBar />
  </main>
  <RouterView />

  <div>
    <Footer></Footer>
  </div>
</template>
