<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
// console.log({ locales });

const iconsCountry = {
    "es": `<svg class="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                        <path d="M0 0h512v170.7H0z" />
                                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                    </svg>`,
    "en": ` <svg class="w-5 h-5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
                        <path fill="#b22234" d="M0 0h7410v3900H0z" />
                        <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                            stroke-width="300" />
                        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                        <g fill="#fff">
                            <g id="d">
                                <g id="c">
                                    <g id="e">
                                        <g id="b">
                                            <path id="a"
                                                d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                                            <use xlink:href="#a" y="420" />
                                            <use xlink:href="#a" y="840" />
                                            <use xlink:href="#a" y="1260" />
                                        </g>
                                        <use xlink:href="#a" y="1680" />
                                    </g>
                                    <use xlink:href="#b" x="247" y="210" />
                                </g>
                                <use xlink:href="#c" x="494" />
                            </g>
                            <use xlink:href="#d" x="988" />
                            <use xlink:href="#c" x="1976" />
                            <use xlink:href="#e" x="2470" />
                        </g>
                    </svg>`
}

</script>

<template>
    <nav class="bg-transparent py-[24px]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Lsifu</span>

            </a>
            <div class="flex items-center md:order-2">
                <button type="button" data-dropdown-toggle="language-dropdown-menu"
                    class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer">
                    <div v-html="iconsCountry[locale]">
                    </div>

                    {{ locales.find(({ code }) => code === locale).name }}
                </button>
                <!-- Dropdown -->
                <div class="z-50 hidden my-4 text-base list-none  divide-y divide-gray-100 rounded-lg shadow "
                    id="language-dropdown-menu">
                    <ul class="py-2 font-medium" role="none">
                        <li v-for="{ code, name } in locales" :key="code" class="text-white">
                            <NuxtLink :to="switchLocalePath(code)" class="block px-4 py-2 text-sm text-white" role="menuitem">
                                <div class="inline-flex items-center">
                                    <div v-html="iconsCountry[code]">
                                    </div>
                                    {{ name }}
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-language" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden text-white"
                    aria-controls="navbar-language" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 
                            text-white
                            rounded 
                            md:p-0 
                            md:dark:hover:bg-transparent 
                            ">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 
                            text-white
                            rounded 
                            md:p-0 
                            md:dark:hover:bg-transparent ">Services</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 
                            text-white
                            rounded 
                            md:p-0 
                            md:dark:hover:bg-transparent ">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 
                            text-white
                            rounded 
                            md:p-0 
                            md:dark:hover:bg-transparent ">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>