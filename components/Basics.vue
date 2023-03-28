<template>
    <div class="h-full w-full flex gap-5 justify-center items-center relative">
        
        <div class="w-10/12 h-fit relative ">

            <div class="absolute top-20 -right-3 w-24 h-24 bg-gradient-to-br from-[#FF4D4D] to-[#f7e479] rounded -z-[1] float"
            :style="{ animationDelay: getRandomDelay() }" />

            <div class="absolute bottom-10 right-6 w-44 h-32 bg-gradient-to-br from-[#7928CA] to-[#c13584] rounded -z-[1] float"
            :style="{ animationDelay: getRandomDelay() }" />
            
            <div class="absolute bottom-15 right-20 w-32 h-32 bg-gradient-to-br from-[#00DFD8] to-[#007CF0]  rounded -z-[1] float"
            :style="{ animationDelay: getRandomDelay() }" />

            <div class="absolute top-20 right-44 w-24 h-24 bg-gradient-to-br from-[#FF4D4D] to-[#f7e479] rounded -z-[1] float"
            :style="{ animationDelay: getRandomDelay() }" />

            <div class="absolute bottom-10 left-6 w-44 h-32 bg-gradient-to-br from-[#7928CA] to-[#c13584] rounded -z-[1] float"
            :style="{ animationDelay: getRandomDelay() }" />

            <div class="absolute top-5 left-32 w-32 h-32 bg-gradient-to-br from-[#00DFD8] to-[#007CF0]  rounded -z-[1] float"
            :style="{ animationDelay: getRandomDelay() }" />



            <div class="flex flex-col gap-5 justify-center items-center backdrop-blur-2xl  bg-deep-100/[.03] p-10 rounded relative">
                <h1 class="text-8xl underline font-semibold"> Základy </h1>
                <div>
                    <ul class="text-3xl list-outside list-disc mx-8">
                        <li class="mb-4 transition-opacity" :style="{ opacity: step < 1 ? '0' : '1' }">
                            GMO - Geneticky Modifikované Organizmy
                        </li>
                        <li class="mb-4 transition-opacity" :style="{ opacity: step < 2 ? '0' : '1' }">
                            Genetická informácia bola pozmenená - zlepšenie vlastností
                        </li>
                        <li class="mb-4 transition-opacity" :style="{ opacity: step < 3 ? '0' : '1' }">
                            Ako pokračovanie tradičného šľachtenia
                        </li>
                        <li class="mb-4 transition-opacity" :style="{ opacity: step < 4 ? '0' : '1' }">
                            Dokážeme dosiahnuť vlastnosti, ktoré sa v prírode nevyskytujú
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onKeyUp } from '@vueuse/core';
const maxSteps = 5;

const step = ref(0)

onMounted(() => {
    onKeyUp(" ", nextStep);
    onKeyUp([" "], (e: KeyboardEvent) => {
        if (e.shiftKey) {
            prevStep()
        }
    });
})

const prevStep = () => {
    if (step.value === 0) {
        return
    }
    step.value--
}

const nextStep = () => {
    if (step.value === maxSteps) {
        return
    }
    step.value++
}

const getRandomDelay = () => {
    const base = Math.floor(Math.random() * 2 * 1000 )
    console.log(base)
    console.log("OUT: " + ((base + 1000).toString() + "ms"))
    return (base + 1000).toString() + "ms"
}

</script>

<style>
.float {
    animation-name: float;
    animation-duration: 20s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

@keyframes float {

    0%,
    100% {}

    50% {
        transform: translateY(-25px);
    }
}
</style>