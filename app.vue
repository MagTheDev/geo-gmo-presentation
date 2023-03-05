<template>
  <div class="h-screen bg-[url('layered-steps-haikei.svg')] bg-no-repeat bg-cover  text-white relative">
    <!-- First slide -->
    <TransitionFade>
      <Intro v-if="slide === 0" ref=""/>
      <Intro v-if="slide === 1" ref=""/>
      <Intro v-if="slide === 2" ref=""/>
    </TransitionFade>

    <!-- Navigation -->
    <Icon name="ph:caret-right-bold" class="absolute bottom-3 right-3 h-8 w-8 cursor-pointer" @click="nextSlide"/>
    <Icon v-if="slide > 0" name="ph:caret-left-bold"  class="absolute bottom-3 left-3 h-8 w-8 cursor-pointer" @click="prevSlide"/>
</div>
</template>

<script setup lang="ts">
import 'assets/css/tailwind.css'


onMounted(() => {
  
  onkeyup = (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide()
    } else if (e.key === 'ArrowLeft') {
      prevSlide()
    }
  }
})

let slide = ref(0)

const nextSlide = () => {
  slide.value++
}

const prevSlide = () => {
  
  if (slide.value === 0) {
    return
  }
  slide.value--
}

</script>
