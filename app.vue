<template>
  <div class="h-screen bg-[url('background.svg')] backdrop-brightness-50 bg-no-repeat bg-cover  text-white relative overflow-hidden">
    <span class="absolute top-2 left-1/2 font-['Helvetica'] font-semibold">{{ slide }} / {{ maxSlides }}</span>

    <!-- First slide -->
    <TransitionGroup>
      <Intro class="font-['Helvetica']" v-if="slide === 0"  />
      <Basics class="font-['Helvetica']" v-if="slide === 1" />
      <Health class="font-['Helvetica']" v-if="slide === 2" />
      <EuStance class="font-['Helvetica']" v-if="slide === 3" />
      <Producers class="font-['Helvetica']" v-if="slide === 4"/>
      <MostUsed class="font-['Helvetica']" v-if="slide === 5"/>
      
    </TransitionGroup>

    <!-- Navigation -->
    <Icon name="ph:caret-right-bold" class="absolute bottom-3 right-3 h-8 w-8 cursor-pointer" @click="nextSlide" />
    <Icon v-if="slide > 0" name="ph:caret-left-bold" class="absolute bottom-3 left-3 h-8 w-8 cursor-pointer"
      @click="prevSlide" />
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">

import { onKeyUp } from '@vueuse/core';
import 'assets/css/tailwind.css'
const maxSlides = 5;

onMounted(() => {

  onKeyUp(true, (e: KeyboardEvent) => {
    
    if (e.key === "ArrowRight") {
      nextSlide()
      clearTimeout(inter)
    } else if (e.key === "ArrowLeft") {
      prevSlide()
    }

  });

  let inter = setTimeout(() => {
    nextSlide()
  }, 5000);

});

let slide = ref(-1)

const nextSlide = () => {
  if (slide.value === maxSlides) {
    return
  }
  slide.value++
}

const prevSlide = () => {

  if (slide.value === 0) {
    return
  }
  slide.value--

}

</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>