<template>
    <div class="relative">
              <img class="absolute top-0 left-0 w-full h-full object-center object-cover" src="@/assets/img/header/furniture.jpg" alt="">
              <div class="relative max-w-screen-xl mx-auto px-4 py-[150px]">
                  <div class="flex flex-col items-center">
                      <div class="bg-white px-[35px] py-[15px] rounded flex font-[Caveat] font-medium text-[20px] leading-[20px] text-[#171a1d]">
                          <div class="pe-[10px]">You are here:</div>
                          <a href="index.html" class="hover:text-[#ff5100]">Home</a>
                          <div class="px-[10px]">//</div>
                          <div class="text-[#ff5100]">Furnitures</div>
                      </div>
                      <div class="text-white leading-[50px] text-[50px] font-medium mt-[30px]">Furnitures</div>
                  </div>
              </div>
          </div>
  
          
  
          <div class="pt-[30px] py-[50px] xl:py-[150px]">
              <div class="max-w-screen-xl mx-auto px-4">
                  <div class="flex">
                      <div class="flex-1">
                          <img class="w-full mb-[30px]" src="@/assets/img/services/furniture.jpg" alt="">
                          <div class="mb-[30px]">Discover the essence of elegance and sustainability with Dream Big Projects Company Ltd's furniture collection. Crafted from responsibly sourced Pine, Muninga, Mkongo, Panga Panga, and Teak Wood, each piece embodies artistry and functionality. From the rich hues of Muninga to the timeless elegance of Teak Wood, our furniture reflects the beauty of nature while embodying modern design sensibilities.

<br><br> your space with our eco-friendly designs, where beauty meets purpose. Whether it's a cozy chair, a sturdy table, or a stylish cabinet, every piece is meticulously crafted by our skilled artisans. Experience the perfect blend of form and function, and join us in our journey towards a more sustainable future.<br><br> 

Welcome to the world of Dream Big Projects Company Ltd, where furniture isn't just about sitting or storing – it's about making a statement and leaving a legacy.</div>
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