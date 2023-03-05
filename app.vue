<template>
  <div class="h-screen bg-[url('1.svg')] backdrop-brightness-50 bg-no-repeat bg-cover  text-white relative">
    <span class="absolute top-2 left-1/2 font-space font-semibold">{{ slide }} / {{ maxSlides }}</span>

    <!-- First slide -->
    <Intro v-if="slide === 0" class="animatable"/>


    <!-- Navigation -->
    <Icon name="ph:caret-right-bold" class="absolute bottom-3 right-3 h-8 w-8 cursor-pointer" @click="nextSlide" />
    <Icon v-if="slide > 0" name="ph:caret-left-bold" class="absolute bottom-3 left-3 h-8 w-8 cursor-pointer"
      @click="prevSlide" />
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">
import 'assets/css/tailwind.css'
const { $anime } = useNuxtApp()
const maxSlides = 5;

onMounted(() => {

  onkeyup = (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide()
    } else if (e.key === 'ArrowLeft') {
      prevSlide()
    }
  };


  $anime({
    targets: '.animatable',
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 1000
  })

})

onUnmounted(() => {
  onkeyup = null
  $anime({
    targets: '.animatable',
    opacity: [1, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
  })
})

let slide = ref(0)

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

</style>