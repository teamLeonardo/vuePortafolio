<template>
  <div class="mx-w-max mb-24">
    <div class="z-0 absolute w-screen h-screen lg:hidden flex items-end">
      <img
        class="h-auto w-screen"
        src="~/assets/img/yo.png"
        alt="Discover Nuxt 3"
      />
    </div>
    <div class="flex flex-row flex-wrap ml-12">
      <div class="basis-full lg:basis-3/5 pt-24 relative overflow-hidden">
        <div
          class="absolute blur-2xl z-[-1] rounded-full top-[-17rem] left-[20rem] bg-red-500 w-[70rem] h-[70rem]"
        ></div>

        <div class="flex flex-row w-screen h-screen lg:w-auto lg:h-auto">
          <div class="basis-3/5 z-10">
            <h1 class="text-9xl mb-6 font-bold">Leonardo Sifuentes</h1>
            <span class="text-5xl subpixel-antialiased"
              >Desarrollador Software</span
            >
            <span class="text-4xl font-bold block lg:hidden">
              Estoy en búsqueda de un equipo donde pueda aplicar mis habilidades
              como Desarrollador de Software. Mi enfoque honesto y apasionado me
              impulsa a alcanzar objetivos con determinación.Mi experiencia se
              centra en la creación de aplicaciones de alto rendimiento
              respaldadas por arquitecturas sólidamente organizadas.
            </span>
          </div>
          <div class="basis-2/5 z-0 hidden lg:block relative">
            <img
              class="h-[15rem] w-[15rem] rounded-full"
              src="~/assets/img/yo.png"
              alt="Discover Nuxt 3"
            />
          </div>
        </div>

        <div class="mt-12 relative pr-10">
          <h2 class="text-6xl font-bold">Experiencia</h2>
          <hr class="h-[0.5rem] my-4 w-full border-0 bg-gray-950" />
          <div class="flex flex-col gap-12">
            <ItemExp></ItemExp>
            <ItemExp></ItemExp>
            <ItemExp></ItemExp>
            <ItemExp></ItemExp>
          </div>
        </div>
        <div class="mt-9 relative pr-10">
          <h2 class="text-6xl font-bold">Educación</h2>
          <hr class="h-[0.5rem] my-4 w-full border-0 bg-gray-950" />
          <div class="flex flex-col gap-12">
            <div class="relative">
              <h3 class="text-4xl font-medium mb-1">INSTITUTO SENATI</h3>
              <h3 class="text-3xl font-bold mb-5">
                Software Development | 2018 - 2021
              </h3>
              <ul class="list-disc list-inside">
                <li class="text-2xl">
                  Conocimiento en el proceso de desarrollo de software.
                </li>
              </ul>
            </div>
            <div class="relative">
              <h3 class="text-3xl font-bold mb-5">PLATZI</h3>
              <ul class="list-disc list-inside">
                <li class="text-2xl">Curso profecional Angular</li>
                <li class="text-2xl">Curso de React js</li>
              </ul>
            </div>
            <div class="relative">
              <h3 class="text-3xl font-bold mb-5">UDEMY</h3>
              <ul class="list-disc list-inside">
                <li class="text-2xl">
                  Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="basis-full lg:basis-2/5 lg:pt-20 lg:pl-10 pr-10 relative overflow-hidden"
      >
        <div
          class="absolute blur-2xl z-[-1] rounded-full top-[51rem] right-[3rem] bg-gray-200 w-[70rem] h-[70rem]"
        ></div>
        <div class="flex flex-col-reverse flex-wrap lg:flex-col">
          <span class="text-4xl font-bold hidden lg:block">
            Estoy en búsqueda de un equipo donde pueda aplicar mis habilidades
            como Desarrollador de Software. Mi enfoque honesto y apasionado me
            impulsa a alcanzar objetivos con determinación.Mi experiencia se
            centra en la creación de aplicaciones de alto rendimiento
            respaldadas por arquitecturas sólidamente organizadas.
          </span>
          <div class="relative">
            <h2 class="text-6xl mt-12 font-bold">Contacto</h2>
            <hr class="h-[0.5rem] my-4 w-full border-0 bg-gray-950" />
            <div class="relative">
              <p class="text-xl">leonardosm3.14@gmail.com</p>
              <p class="text-xl">(+51) 924 426 169</p>
              <p class="text-xl">LinkedIn: @leonardo</p>
            </div>
          </div>
          <div class="relative">
            <h2 class="text-6xl mt-24 font-bold">Habilidades y experiencia</h2>
            <hr class="h-[0.5rem] my-4 w-full border-0 bg-gray-950" />
            <ul class="list-disc list-inside">
              <li class="text-2xl">HTML5, CSS3, JavaScript, PHP Y .NET.</li>
              <li class="text-2xl">Frameworks JS (React, Vue.js, Angular)</li>
              <li class="text-2xl">Optimización de Rendimiento</li>
              <li class="text-2xl">Git y GitHub</li>
              <li class="text-2xl">Integración de APIs</li>
              <li class="text-2xl">Consultas sql</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
