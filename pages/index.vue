

<script setup>
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <section class="relative pt-[48px] lg:pt-[146px] pb-0 lg:pb-[112px]">

    <div class="relative z-10 max-w-[1268px] px-[20px] lg:px-[24px] mx-auto">
      <div
        class="grid items-center auto-cols-[1fr] grid-cols-[1fr] lg:grid-cols-[1fr,1fr] grid-rows-[auto] gap-x-[28px] gap-y-[64px] lg:gap-y-[80px]">
        <div class="block self-start max-w-full lg:max-w-[546px] mt-0 lg:mt-[60px]">

          <div class="max-w-[100px] lg:max-w-[148px] min-h-[4px] lg:min-h-[8px] mb-[24px] lg:mb-[49px] w-full bg-white">
          </div>
          <h1 class="mb-[10px] lg:mb-[12px] text-white text-[34px] lg:text-[76px] leading-[1.132em] font-bold">
            I’m Leo, a
            <br>
            Web Developer
          </h1>
          <div class="max-w-full lg:max-w-[504px]">
            <p class="my-0">
              Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id
              elementum convallis lacus gravida.

            </p>
          </div>

          <a href="#about" class="flex 
              overflow-hidden 
              w-[64px] lg:w-[120px] 
              h-[64px] lg:h-[120px] 
              min-h-[64px] lg:min-h-[120px] 
              min-w-[64px] lg:min-w-[120px] 
              mt-[24px]  lg:mt-[74px] 
              justify-center 
              items-center 
              rounded-full 
              bg-[#075fe4] 
              transition-transform 
              text-white 
              text-[28px] lg:text-[50px] 
              leading-[1em] 
              p-[22px] lg:p-0
              no-underline
              ">
            <!-- width: 64px;
    height: 64px;
    min-height: 64px;
    min-width: 64px;
    margin-top: 24px;
    padding: 22px;
    font-size: 28px; -->
            <div class="line-square-icon"
              style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
              <ChevronDownIcon class="h-12 w-12" />
            </div>
          </a>
        </div>
        <div class="max-w-full lg:max-w-[342px] justify-self-start lg:justify-self-end col-start-[span 1]">


          <div class="">
            <div class="flex items-start flex-col">
              <div class="mb-[16px] font-normal">
                <div class="text-white font-bold uppercase tracking-widest leading-[1.111em]">
                  About me
                </div>
              </div>
              <p class="mb-[24px] lg:mb-[32px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis
                id elementum convallis lacus gravida.
              </p>
              <a href="/about"
                class="text-white mt-auto relative inline-block whitespace-nowrap duration-0 ease-linear delay-0 transition-none max-w-full bg-transparent no-underline">
                <div
                  class="text-[16px] leading-[1.125em] tracking-wider uppercase inline-block duration-300 ease-in delay-0 transition-colors">
                  Learn more</div>
                <div class="inline-block ml-[6px]">
                  <ArrowRightIcon class="h-4 w-4" />
                </div>
                <div class="min-h-[1.5px] w-full mt-[6px] bg-[#5d6c83]">
                  <div class="min-h-[1.5px]" style="width: 0%;height: 1.5px;"></div>
                </div>
              </a>
            </div>
            <div>
              <div class="h-[1px]  my-[40px] lg:my-[50px] bg-[#2d343f]"></div>
            </div>
            <div class="flex items-start flex-col">
              <div class="mb-[16px] font-normal">
                <div class="text-white font-bold uppercase tracking-widest leading-[1.111em]">
                  My work
                </div>
              </div>
              <p class="mb-[32px]">
                Purus ut faucibus pulvinar elementum integer enim neque fermentum iaculis eu non
                diam phasellus dolor consectur.
              </p>
              <a href="/about"
                class="text-white mt-auto relative inline-block whitespace-nowrap duration-0 ease-linear delay-0 transition-none max-w-full bg-transparent no-underline">
                <div
                  class="text-[16px] leading-[1.125em] tracking-wider uppercase inline-block duration-300 ease-in delay-0 transition-colors">
                  Browse portfolio</div>
                <div class="inline-block ml-[6px]">
                  <ArrowRightIcon class="h-4 w-4" />
                </div>
                <div class="min-h-[1.5px] w-full mt-[6px] bg-[#5d6c83]">
                  <div class="min-h-[1.5px]" style="width: 0%;height: 1.5px;"></div>
                </div>
              </a>
            </div>

          </div>
          <div>
            <div class="h-[1px] my-[50px] bg-[#2d343f]"></div>
          </div>
          <div class="mb-[24px]">
            <div class="font-bold tracking-widest text-white uppercase leading-[1.111em]">
              Follow me
            </div>
          </div>
          <div
            class="grid justify-start justify-items-start flex-[1] gap-x-[26px] gap-y-[16px] grid-cols-6 grid-rows-none ">
            <!-- justify-content: start;
            justify-items: start;
            flex: 1;
            grid-column-gap: 26px;
            grid-row-gap: 16px;
            grid-template-columns: repeat(auto-fit, 26px);
            -ms-grid-rows: auto;
            grid-template-rows: auto; -->
            <a data-w-id="d0235440-dcd9-912e-e256-a37c2833d211" href="https://facebook.com/" target="_blank"
              class="social-icon w-inline-block">
              <div class="social-icon-font"></div>
            </a><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d214" href="https://twitter.com/" target="_blank"
              class="social-icon w-inline-block">
              <div class="social-icon-font"></div>
            </a><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d217" href="https://www.instagram.com/" target="_blank"
              class="social-icon w-inline-block">
              <div class="social-icon-font"></div>
            </a><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d21a" href="https://www.linkedin.com/" target="_blank"
              class="social-icon w-inline-block">
              <div class="social-icon-font"></div>
            </a><a data-w-id="d0235440-dcd9-912e-e256-a37c2833d21d" href="https://youtube.com/" target="_blank"
              class="social-icon w-inline-block">
              <div class="social-icon-font"></div>
            </a><a data-w-id="2b2f33df-3a72-4bef-81c4-877448a0b977" href="https://github.com/" target="_blank"
              class="social-icon w-inline-block">
              <div class="social-icon-font"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative lg:absolute  left-0 right-0 bottom-[-52px] flex w-full justify-center"
      style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;">
      <!-- position: absolute;
    left: 0px;
    right: 0px;
    bottom: -52px;
    display: flex;
    width: 100%;
    justify-content: center; -->
      <img src="~/assets/img/yo.png" loading="eager" sizes="(max-width: 479px) 90vw, (max-width: 1439px) 70vw, 1000px"
        alt="Web Developer - Developer X Webflow Template"
        class="w-[50%] max-w-[1000px] ml-[18px] inline-block align-middle border-0 scale-x-[-1]">
    </div>
  </section>
</template>
