<template>
  <div class="relative">
			<img class="absolute top-0 left-0 w-full h-full object-center object-cover" src="@/assets/img/header/timber.jpg" alt="">
			<div class="relative max-w-screen-xl mx-auto px-4 py-[150px]">
				<div class="flex flex-col items-center">
					<div class="bg-white px-[35px] py-[15px] rounded flex font-[Caveat] font-medium text-[20px] leading-[20px] text-[#171a1d]">
						<div class="pe-[10px]">You are here:</div>
						<a href="index.html" class="hover:text-[#ff5100]">Home</a>
						<div class="px-[10px]">//</div>
						<div class="text-[#ff5100]">Timber</div>
					</div>
					<div class="text-white leading-[50px] text-[50px] font-medium mt-[30px]">Timber</div>
				</div>
			</div>
		</div>

        

        <div class="pt-[30px] py-[50px] xl:py-[150px]">
			<div class="max-w-screen-xl mx-auto px-4">
				<div class="flex">
					<div class="flex-1">
						<img class="w-full mb-[30px]" src="@/assets/img/services/timber.jpg" alt="">
						<div class="mb-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered humour, or randomised words which don't look even slightly believable. If you are going to passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum Internet tend to repeat predefined chunks as necessary, making this the first generator on the Internet. It dictionary over combined with a handful of model generate Lorem reasonable.</div>
					</div>
					<div class="hidden xl:block px-[50px]"></div>
					<div class="hidden xl:block w-[350px]">
						<Sidebar></Sidebar>
					</div>
				</div>
			</div>
		</div>
</template>
<script setup>
import Sidebar from '@/components/body/Sidebar.vue';
</script>