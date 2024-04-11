<template>
    <div class="relative">
        <img class="absolute top-0 left-0 w-full h-full object-center object-cover"
            src="@/assets/img/header/hardware.jpg" alt="">
        <div class="relative max-w-screen-xl mx-auto px-4 py-[150px]">
            <div class="flex flex-col items-center">
                <div
                    class="bg-white px-[35px] py-[15px] rounded flex font-[Caveat] font-medium text-[20px] leading-[20px] text-[#171a1d]">
                    <div class="pe-[10px]">You are here:</div>
                    <a href="index.html" class="hover:text-[#ff5100]">Home</a>
                    <div class="px-[10px]">//</div>
                    <div class="text-[#ff5100]">Hardware</div>
                </div>
                <div class="text-white leading-[50px] text-[50px] font-medium mt-[30px]">Hardware</div>
            </div>
        </div>
    </div>



    <div class="pt-[30px] py-[50px] xl:py-[150px]">
        <div class="max-w-screen-xl mx-auto px-4">
            <div class="flex">
                <div class="flex-1">
                    <img class="w-full mb-[30px]" src="@/assets/img/services/hardware.jpg" alt="">
                    <div class="mb-[30px]">From the essential functionality of nails to the versatility of welded mesh,
                        our hardware collection is designed to support your projects with durability and efficiency.
                        Whether you're constructing a new building, renovating a space, or crafting intricate woodwork,
                        our hardware products are engineered to deliver exceptional performance every time.
                        <br><br>
                        At Dream Big Projects Company Ltd, we prioritize both functionality and sustainability. Our
                        hardware products are crafted from premium materials, ensuring longevity and reliability while
                        minimizing environmental impact. By choosing our hardware solutions, you can trust that your
                        projects will not only meet but exceed your expectations, leaving a lasting impression for years
                        to come.
                        <br><br>
                        Explore our hardware collection and unlock the potential of your projects with Dream Big
                        Projects Company Ltd. From nails to welded mesh and everything in between, we have the tools you
                        need to turn your dreams into reality.</div>
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