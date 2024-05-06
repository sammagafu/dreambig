<script setup>
import Slider from '@/components/body/Slider.vue';
import { ref } from 'vue';
// import Slid from "@/components/body/Slider.vue";

// images for services
import furniture from "@/assets/img/home/services/furniture.jpg"
import timber from "@/assets/img/home/services/timber.jpg"
import hardware from "@/assets/img/home/services/hardware.jpg"
import essentials from "@/assets/img/home/services/essentials.jpg"
import cta from "@/assets/img/cta.png"

const activeItem =  ref(-1)
const products =  [
        {
        imageSrc: furniture,
        title: 'Furnitures Fusion',
        caption: 'Where Wood Meets Style',
      },
      {
        imageSrc: timber,
        title: 'Timber Treasure',
        caption: "Crafting Nature's Elegance"
        },
        
      {
        imageSrc: hardware,
        title: 'Furniture Fusion',
        caption: "Functional Artistry in Every Details",
      },
      {
        imageSrc: essentials,
        title: 'Essential Elements',
        caption: "Sustainable Solutions for Modern Living",
      },
      ]

</script>

<template>
    <div class="mb-44">
        <Slider></Slider>
    </div>

    <section class="about">

        <div class="container mx-auto lg:my-48 lg:mx-auto px-4">
            <div class="flex md:flex-row flex-col justify-between md:items-center lg:space-x-24 space-y-8">
                <div class="">
                    <h2 class="lg:text-8xl text-6xl font-extrabold mb-2 text-stone-500">
                    We are <br />Dreamers </h2>
                <span><img src="@/assets/img/line03.svg"></span>
                </div>
                <div class="">
                    <h5 class="text-xl font-medium text-stone-500 pb-4">
                        Welcome to Dream Big Projects Company Ltd, where dreams Turned into Art, Join us on our journey
                        as we explore the endless possibilities of wood and metal, pushing the boundaries of creativity
                        and craftsmanship to new heights. Together, let's dream big and create something truly
                        extraordinary.
                    </h5>
                </div>
            </div>
        </div>


        <div class="xl:mt-[220px] lg:mt-25 md:mt-44 mt-[40px] xl:mb-20 mb-0">
            <div class="container mx-auto px-6">
                <div class="flex lg:flex-row flex-col items-center gap-[66px]">
                    <div class=""><img alt="about-bg"src="@/assets/img/home/about-image.108396fb.jpg" class="rounded-[1rem] shadow-sm"></div>
                    <ul class="lg:mt-0 mt-20 lg:pb-0 pb-10">
                        <li class="lg:flex gap-10 pb-10 last:pb-0 justify-between">
                            <p class="xl:text-6xl text-6xl mb-3 lg:mb-0 inline-block font-extrabold leading-120 text-stone-500">01</p>
                            <div class="max-w-[534px]">
                                <h4 class="text-3xl 2sm:text-4xl font-bold leading-135 text-stone-500">
                                    Visionary Ingenuity</h4>
                                <p class="text-lg text-stone-500 font-normal">Harnessing imagination and expertise to pioneer groundbreaking solutions and shape the future of innovation.</p>
                            </div>
                        </li>
                        <li class="lg:flex gap-10 pb-10 last:pb-0 justify-between">
                            <p class="xl:text-6xl text-6xl mb-3 lg:mb-0 inline-block font-extrabold leading-120 text-stone-500">02</p>
                            <div class="max-w-[534px]">
                                <h4 class="text-3xl 2sm:text-4xl font-bold leading-135 text-stone-500">Limitless Creativity</h4>

                                <p class="text-lg text-stone-500 font-normal">Breaking free from constraints to explore endless possibilities and ignite transformative ideas that transcend boundaries.</p>
                            </div>
                        </li>
                        <li class="lg:flex gap-10 pb-10 last:pb-0 justify-between">
                            <p class="xl:text-6xl text-6xl mb-3 lg:mb-0 inline-block font-extrabold leading-120 text-stone-500">03</p>
                            <div class="max-w-[534px]">
                                <h4 class="text-3xl 2sm:text-4xl font-bold leading-135 text-stone-500"> Frontier Exploration</h4>
                                <p class="text-lg text-stone-500 font-normal">Venturing into uncharted territories, we boldly innovate, discovering new realms of possibility and redefining what's achievable.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>




    <section class="service">
        <div class="flex flex-col sm:flex-row lg:flex-nowrap flex-wrap lg:pt-30 2sm:pt-20 pt-14">

            <div class="flex-grow sm:min-h-[750px] min-h-[420px] overflow-hidden group transition-all duration-700 relative"
                v-for="(product,index) in products" :key="index" @mouseover="activeItem = index"
                @mouseleave="activeItem = -1"
                :class="activeItem === index ? 'lg:basis-[47%] basis-[50%]' : 'lg:basis-[20%] basis-[30%]'">
                <div
                    class="absolute w-full h-full top-0 left-0 flex flex-col justify-between 2xl:pl-[30px] pl-5 pr-5 2xl:pr-0 py-[30px] after:absolute after:left-0 after:bottom-0 after:contents-[&quot;&quot;] after:w-full after:h-1/2 after:bg-bottom-liner after:z-[-1] z-10">
                    <h3
                        class="text-6xl font-extrabold leading-120 transition-all duration-700 text-transparent text-primary">
                        {{ index }}</h3>
                    <div class="flex 2xl:flex-row flex-col items-start justify-between 2xl:items-end mx-8">
                        <a class="text-3xl 2sm:text-4xl font-bold leading-135 text-primary max-w-60 2xl:min-w-56 min-w-48 relative"
                            href="/project-single/">{{ product.title}}</a>
                        <p
                            class="text-primary font-semibold 3xl:max-w-[421px] 2xl:max-w-80 transition-all duration-700 3xl:min-w-[420px] xl:min-w-80 min-w-72 overflow-hidden opacity-100">
                            {{ product.caption}}
                        </p>
                    </div>
                </div>
                <div class="overlay absolute inset-0 bg-black opacity-50"></div>
                <img alt="Cozy Living Room" loading="lazy" width="721" height="750" decoding="async" data-nimg="1"
                    class="h-full sm:min-h-[750px] min-h-[420px] w-full object-cover" style="color: transparent;"
                    :src="product.imageSrc">
            </div>
        </div>
    </section>




    <!-- CTA -->
    <section class="container mx-auto lg:py-20">
        <div class="bg-cover bg-no-repeat lg:py-48 pb-[69px] lg:pl-[148px] pl-10 lg:pr-[133px] 2sm:pr-24 pr-10 flex md:flex-row flex-col justify-between md:items-end items-start"
        :style="{ 'background-image': 'url(' + cta + ')' }">
            <h1
                class="text-4xl lg:text-6xl font-extrabold text-secondary lg:max-w-[600px] text-shadow">
                Ready to craft a sustainable future with us?</h1>
                <router-link :to="{name:'contact'}"><button
    class="flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl text-xl font-bold border-2 px-10 sm:py-[15px] py-3 relative z-10 overflow-hidden after:absolute after:right-0 after:top-0 after:bottom-0 after:z-[-1] after:w-full after:transition-all after:duration-500 hover:after:w-0 transition-all duration-500 after:left-0 after:bg-stone-700 text-primary border-stone-700 hover:text-black mt-6 md:mt-0">
    Let’s Talk <svg width="35" height="22" viewBox="0 0 35 22" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M24 0.585815L34.4142 10.9999L24 21.4142L22.5858 20L30.5857 12L0 12L2.38419e-07 10L30.5858 10L22.5858 2.00003L24 0.585815Z">
        </path>
    </svg> </button></router-link>
        </div>
    </section>
</template>


<style scoped>
img.home-about {
    z-index: -999;
    transition: filter .5s ease-in-out;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}

img.home-about:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);

}

.text-shadow {
  text-shadow: 3px 3px px rgba(0, 0, 0, 0.5); /* Example values */
}

</style>
