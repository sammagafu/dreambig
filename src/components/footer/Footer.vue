<template>
    <footer class=" container-fluid  mx-auto ">
        <div class="">
            <div class="container mx-auto">
                <div class="grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20">
                    <div>
                        <router-link :to="{ name: 'home' }">
                            <img :src="logoUrl" alt="Logo" class="h-24">
                        </router-link>
                    </div>
                    <div class="mt-12 lg:mt-0 flex gap-x-10"><span
                            class="h-[198px] w-[1px] bg-black block my-2.5"></span>
                        <div>
                            <h5 class="text-2xl font-extrabold block text-black leading-160 ">Address
                            </h5><span class="w-[99px] h-[1px] bg-black block my-2.5"></span>
                            <div class="">
                                <p class="text-xl font-bold text-black">Dream Big Projects  Company. LTD, </p>
                                <p class="text-lg text-black">Kibada Road, Opposite CRDB Bank Kibada Branch, Kibada,
                                    Kigamboni.</p>
                                <p class="text-lg  text-black">P.O. Box: 75100 Dar es Salaam, Tanzania.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 lg:mt-0 flex gap-x-10"><span
                            class="h-[198px] w-[1px] bg-black block my-2.5"></span>
                        <div>
                            <h5 class="text-2xl font-extrabold block text-black leading-160 ">Contacts
                            </h5><span class="w-[99px] h-[1px] bg-black block my-2.5"></span>

                            <div class="mt-[17px]"><a class="text-lg block text-black hover-underline"
                                    href="tel:+255757188271">Phone: <span>(+255) 757 188 271</span></a><a
                                    class="text-lg block text-black hover-underline"
                                    href="mailto:info@db.co.tz">Email: <span>info@db.co.tz</span></a>
                            </div>
                            <div class="flex my-6">
                                <a href="https://www.facebook.com/profile.php?id=61559141528292&sk=about" target="_blank"
                                    class="text-black hover:text-gray-900 dark:hover:text-white">
                                    <i class="pi pi-facebook" style="font-size: 1.2em"></i>
                                    <span class="sr-only">Facebook page</span>
                                </a>
                                <a href="https://www.instagram.com/dreambigtz/"
                                    target="_blank"
                                    class="text-black hover:text-gray-900 dark:hover:text-white ms-5">
                                    <i class="pi pi-instagram" style="font-size: 1.2em"></i>
                                    <span class="sr-only">Instagram Page</span>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>


                <hr class="bg-black text-black">
                <div class="py-8 lg:flex justify-between items-center"><span class="text-sm text-black block">Made
                        with Love by <a href="">Neotelabs</a>
                    </span><span class="text-sm text-black block mt-3 lg:mt-0">©2024, Dream Big Co. LTD</span></div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import logoUrl from '@/assets/img/logo-bottom.svg';
</script>
