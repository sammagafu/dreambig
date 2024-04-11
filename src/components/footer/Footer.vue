<template>
    <footer class=" container-fluid  mx-auto ">
        <div class=" bg-gray-800">
            <div class="container mx-auto">
                <div class="grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20">
                    <div>
                        <router-link :to="{ name: 'home' }">
                            <img :src="logoUrl" alt="Logo" class="h-24">
                        </router-link>
                        <h5 class="xl:text-2xl text-xl font-semibold text-primary leading-160 pt-2.5 pb-3">
                            Shaping Interior Excellence</h5>
                        <!-- <ul class="flex items-center gap-7.5">
                            <li><a class="font-semibold text-lg relative after:contents-[&quot;&quot;] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline"
                                    href=""><span>FB</span></a></li>
                            <li><a class="font-semibold text-lg relative after:contents-[&quot;&quot;] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline"
                                    href=""><span>IN</span></a></li>
                            <li><a class="font-semibold text-lg relative after:contents-[&quot;&quot;] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] hover-underline"
                                    href=""><span>TW</span></a></li>
                            <li><a class="font-semibold text-lg hover-underline" href=""><span>LI</span></a></li>
                        </ul> -->
                    </div>
                    <div class="mt-12 lg:mt-0 flex gap-x-10"><span
                            class="h-[198px] w-[1px] bg-primary block my-2.5"></span>
                        <div>
                            <h5 class="text-2xl font-extrabold block text-primary leading-160 ">Address
                            </h5><span class="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                            <div class="">
                                <p class="text-xl font-bold text-primary">Dream Big Co. LTD, </p>
                                <p class="text-lg text-primary">Kibada Road, Opposite CRDB Bank Kibada Branch, Kibada,
                                    Kigamboni.</p>
                                <p class="text-lg  text-primary">P.O. Box: 75100 Dar es Salaam, Tanzania.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12 lg:mt-0 flex gap-x-10"><span
                            class="h-[198px] w-[1px] bg-primary block my-2.5"></span>
                        <div>
                            <h5 class="text-2xl font-extrabold block text-primary leading-160 ">Contacts
                            </h5><span class="w-[99px] h-[1px] bg-primary block my-2.5"></span>

                            <div class="mt-[17px]"><a class="text-lg block text-primary hover-underline"
                                    href="tel:+255757188271">Phone: <span>(+255) 757 188 271</span></a><a
                                    class="text-lg block text-primary hover-underline"
                                    href="mailto:info@db.co.tz">Email: <span>info@db.co.tz</span></a>
                            </div>
                            <div class="flex my-6">
                                <a href="https://web.facebook.com/profile.php?id=61557302621441" target="_blank"
                                    class="text-primary hover:text-gray-900 dark:hover:text-white">
                                    <i class="pi pi-facebook" style="font-size: 1.2em"></i>
                                    <span class="sr-only">Facebook page</span>
                                </a>
                                <a href="https://www.instagram.com/dreambig.tz/?igsh=MTQ0YTBxdDNhcTd6cA%3D%3D"
                                    target="_blank"
                                    class="text-primary hover:text-gray-900 dark:hover:text-white ms-5">
                                    <i class="pi pi-instagram" style="font-size: 1.2em"></i>
                                    <span class="sr-only">Instagram Page</span>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>


                <hr class="bg-pritext-primary">
                <div class="py-8 lg:flex justify-between items-center"><span class="text-sm text-primary block">Made
                        with Love by <a href="">Neotelabs</a>
                    </span><span class="text-sm text-primary block mt-3 lg:mt-0">©2024, Dream Big Co. LTD</span></div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import logoUrl from '@/assets/img/logo-02.svg';
</script>
