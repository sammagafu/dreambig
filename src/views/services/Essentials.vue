<template>
    <div class="relative">
        <img class="absolute top-0 left-0 w-full h-full object-center object-cover"
            src="@/assets/img/header/essentials.jpg" alt="">
        <div class="relative max-w-screen-xl mx-auto px-4 py-[150px]">
            <div class="flex flex-col items-center">
                <div
                    class="bg-white px-[35px] py-[15px] rounded flex font-[Caveat] font-medium text-[20px] leading-[20px] text-[#171a1d]">
                    <!-- <div class="pe-[10px]">You are here:</div> -->
                    <a href="index.html" class="hover:text-[#ff5100]">Home</a>
                    <div class="px-[10px]">//</div>
                    <div class="text-[#ff5100]">Essentials</div>
                </div>
                <div class="text-white leading-[50px] text-[50px] font-medium mt-[30px]">Essentials</div>
            </div>
        </div>
    </div>



    <div class="pt-[30px] py-[50px] xl:py-[150px]">
        <div class="max-w-screen-xl mx-auto px-4">
            <div class="flex">
                <div class="flex-1">
                    <img class="w-full mb-[30px]" src="@/assets/img/services/essentials.jpg" alt="">
                    <div class="mb-[30px]">
                        Welcome to Dream Big Projects Company Ltd's Essentials collection — where functionality meets
                        elegance, and sustainability intertwines with luxury. Our mission is simple: to offer essential
                        products that elevate everyday experiences while honoring the beauty of nature and fostering a
                        sense of community.
                        <br><br>
                        Each item in our Essentials collection embodies our core values of functionality, beauty,
                        meaning, quality, and environmental responsibility. From our nourishing body wash and indulgent
                        body oil to our serene floating candles and captivating scented candles, every product is
                        meticulously crafted to enhance your well-being and surroundings.
                        <br><br>
                        At Dream Big Projects Company Ltd, we believe that even the simplest rituals can be transformed
                        into moments of indulgence and mindfulness. With our Essentials, you can immerse yourself in a
                        world of natural luxury, knowing that each product is thoughtfully designed to not only delight
                        your senses but also minimize our ecological footprint.
                        <br><br>
                        Join us on a journey of self-care, relaxation, and sustainability with Dream Big Projects
                        Company Ltd's Essentials collection. Because taking care of yourself and the planet should
                        always be an essential part of life.
                    </div>
                </div>
                <div class="hidden xl:block px-[50px]"></div>
                <Sidebar></Sidebar>
            </div>
        </div>
    </div>
</template>
<script setup>
import Sidebar from '@/components/body/Sidebar.vue';
</script>