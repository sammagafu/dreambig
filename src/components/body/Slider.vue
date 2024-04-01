<template>
    <Carousel :autoplay="4800" :wrap-around="true">
      <Slide v-for="slide in slider" :key="slide">
        <div class="relative">
            <div class="carousel__item"><img :src="slide.imageSrc" alt="Object Image" /></div>
            <h1 class="absolute text-8xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold leading-110">{{ slide.title }}</h1>
            <p class="text-white">{{ slide.caption }}</p>
        </div>
        <!-- {{ slide.title }} -->
        <div class="">
            <h3></h3>
        </div>
      </Slide>
  
      <!-- <template #addons>
        <Pagination />
      </template> -->
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  import slide1 from "@/assets/img/slider/timber-1.jpg"
  import slide2 from "@/assets/img/slider/hardware-1.jpg"
  import slide3 from "@/assets/img/slider/essentials-1.jpg"


  
  export default defineComponent({
    name: 'Autoplay',
    data() {
  return {
    slider : [
        {
        imageSrc: slide1,
        title: 'Transform Your Space with Timeless Furniture',
        caption: 'Discover our exquisite collection of handcrafted furniture pieces, meticulously designed to elevate your living spaces. From elegant dining tables to cozy armchairs, each piece exudes warmth, character, and unparalleled craftsmanship.',
      },
      {
        imageSrc: slide2,
        title: 'Unleash Your Creativity with Premium Wood and Hardware',
        caption: "Unlock your creative potential with our premium wood and hardware solutions. Whether you're a seasoned woodworker or just starting out, our products are designed to inspire creativity and innovation, allowing you to bring your vision to life with ease. Explore the possibilities with Dream Big Projects wood and hardware"
        },
        
      {
        imageSrc: slide3,
        title: 'Upgrade Your Living Experience with Quality Essentials',
        caption: "Invest in quality essentials that enhance your daily life. Our handpicked selection of home accents combines durability, style, and affordability, ensuring that you get the most out of every piece. Elevate your living experience with Dream Big Projects essentials.",
      },
      ]
    };
    } ,
    components: {
      Carousel,
      Slide,
      Pagination,
    },
  })
  </script>
  