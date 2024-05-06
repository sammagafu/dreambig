<template>
	<div class="relative">
		<img class="absolute top-0 left-0 w-full h-full object-center object-cover" src="@/assets/img/header/timber.jpg"
			alt="">
		<div class="relative max-w-screen-xl mx-auto px-4 py-[150px]">
			<div class="flex flex-col items-center">
				<div
					class="bg-white px-[35px] py-[15px] rounded flex font-[Caveat] font-medium text-[20px] leading-[20px] text-[#171a1d]">
					<!-- <div class="pe-[10px]">You are here:</div> -->
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
					<div class="mb-[30px]">
						From the majestic Pine forests of the northern temperate regions to the vibrant Muninga trees of
						Africa, each timber species tells a unique story of resilience and beauty. Our collection also
						features the robust Mkongo, known for its strength, and the striking Panga Panga, with its
						distinctive figure and stability. And of course, no timber collection would be complete without
						the timeless allure of Teak Wood, hailed as the king of woods for its durability and
						water-resistance.
						<br><br>
						At Dream Big Projects Company Ltd, sustainability is at the core of everything we do. We ensure
						that our timber is responsibly sourced, adhering to the highest standards of environmental
						stewardship. By choosing our timber products, you not only bring the warmth and beauty of
						natural wood into your space but also support eco-friendly practices that help preserve our
						planet for future generations.
						<br><br>
						Explore our timber collection and embark on a journey of discovery and inspiration. From
						crafting exquisite furniture to building sustainable structures, the possibilities are endless
						when you dream big with timber from Dream Big Projects Company Ltd.
					</div>

					<div class="mb-[30px]">
						<div>
							<div class="text-[#ff5100] font-bold text-xl">Pine</div>
							Pine trees (genus Pinus) are evergreen, conifers (they produce cones that encase
							reproduction seeds) and can be found throughout the world, but they are native to northern
							temperate regions.
						</div>
						<div>
							<div class="text-[#ff5100] font-bold text-xl">Mninga</div>
							Muninga is one of many names for a tree that grows in Tanzania, Zambia, Angola, Mozambique, Zimbabwe and South Africa. A rough translation of its botanical name, Pterocarpus angolensis, is winged fruit from Angola. The long list of names for muninga includes the colorful bloodwood, Transvaal teak, and sealing-wax tree
						</div>
						<div>
							<div class="text-[#ff5100] font-bold text-xl">Mkongo</div>
							Afzelia quanzensis, known in Kiswahili as mkongo or mbambakofi, grows in dry low-altitude zones of between 0 to 1,800 metres above sea level. Annual rains range from 400 to 1,700mm. It is known as a 'spectacle case' tree in English, because of the shape of its fruit. Other names include pod mahogany and Doussie.
						</div>
						<div>
							<div class="text-[#ff5100] font-bold text-xl">Panga Panga</div>
							SCIENTIFIC NAME: Millettia Stuhlmannii COMMON NAMES: Panga Panga, Jambire, Partridge Wood & Wenge. The wood of Panga Panga has a characteristic partridge feathered figure. Texture is fine. Abundant small dark yellow gum pockets are present. Excellent stability in service and highly resistant to abrasion (good for flooring).
						</div>
						<div>
							<div class="text-[#ff5100] font-bold text-xl">Mkongo</div>
							Teak is a close-grained type of hardwood. It is widely considered to be the 'king of woods' and makes excellent outdoor furniture due to its water-resistance, durability and beauty.
						</div>
					</div>


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