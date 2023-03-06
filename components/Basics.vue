<template>
    <div class="h-full w-full flex gap-5 justify-center items-center font-space "> 
        <h1 class="text-8xl underline "> Základy </h1>
        <div>
            <ul class="text-3xl list-outside list-disc mx-8">
                <li class="mb-4 transition-opacity" :style="{opacity: step < 1 ? '0' : '1'}">
                    GMO - Geneticky Modifikované Organizmy
                </li>
                <li class="mb-4 transition-opacity" :style="{opacity: step < 2 ? '0' : '1'}">
                    Genetická informácia bola pozmenená - zlepšenie vlastností
                </li>
                <li class="mb-4 transition-opacity" :style="{opacity: step < 3 ? '0' : '1'}">
                    Ako pokračovanie tradičného šľachtenia
                </li>
                <li class="mb-4 transition-opacity" :style="{opacity: step < 4 ? '0' : '1'}">
                    Dokážeme dosiahnuť vlastnosti, ktoré sa v prírode nevyskytujú
                </li>
            </ul>
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

</script>

<style></style>