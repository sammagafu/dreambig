<template>
  <Carousel :autoplay="6800" :wrap-around="true">
    <Slide v-for="slide in slider" :key="slide">
      <div :style="{ backgroundImage: 'url(' + slide.imageSrc + ')' }" class="relative w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] bg-cover">
        <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Overlay -->
        <div class="grid items-center justify-center text-white relative h-full">
          <div class="container mx-auto">
            <div class="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
              <h1 class="text-xl sm:text-3xl md:text-4xl lg:text-6xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">{{slide.title}}</h1>
              <h4 class="text-xl my-4 mx-40">{{ slide.caption }}</h4>
            </div>
            <router-link :to="{name:slide.link}"><button
                class="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
                text-base
               font-Garamond
                font-medium mt-[-6px] bg-secondary after:bg-bg-black after:rounded-none hover:before:bg-normalBlack uppercase">Discover
                More</button></router-link>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

  <style scoped>
  .text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); /* Example values */
}
  </style>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import slide0 from "@/assets/img/slider/furniture.jpg"
import slide1 from "@/assets/img/slider/timber-1.jpg"
import slide2 from "@/assets/img/slider/hardware-1.jpg"
import slide3 from "@/assets/img/slider/essentials-1.jpg"

const slider = ref([
  {
    imageSrc: slide0,
    title: 'Standout Furniture',
    caption: 'Experience the artistry of handcrafted furniture that seamlessly blends elegance, functionality, and sustainability, creating pieces that tell stories in every room',
  },
  {
    imageSrc: slide1,
    title: 'Everlasting Timber Treasures',
    caption: 'Step into a world of natural wonder with our exquisite timber collection, meticulously sourced and crafted to bring timeless beauty to your projects'

,
  },
  {
    imageSrc: slide2,
    title: 'Reliable Hardware Solutions for Long-Lasting Timers',
    caption: "Empower your projects with precision and reliability using our high-quality hardware solutions, designed to endure while preserving our planet for generations to come",
    link : 'hardware',
  },
  {
    imageSrc: slide3,
    title: ' Essential Elegance',
    caption: "Indulge in luxurious everyday essentials with our eco-friendly body care products and ambient candles, elevating your space with sophistication and serenity",
    link:'essentials',
  },
])
</script>
  