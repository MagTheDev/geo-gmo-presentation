<template>

    <div class="h-full w-full flex gap-5 justify-center items-center">

        <div class="flex flex-col gap-5 justify-center items-center backdrop-blur-2xl  bg-deep-100/[.03] p-10 rounded relative">
            <h1 class="text-8xl underline font-semibold">
                Postoj EU ku GMO
            </h1>
            <ul class="text-3xl list-outside list-disc mx-8">
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 1 ? '0' : '1', display: step > 7 ? 'none' : 'block' }">Pestovanie a predávanie iba s povolením</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 2 ? '0' : '1', display: step > 7 ? 'none' : 'block' }">Eú prideluje pre všetky členské krajiny</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 3 ? '0' : '1', display: step > 7 ? 'none' : 'block' }">Majú právo zakázať ich pestovanie na svojom území</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 4 ? '0' : '1', display: step > 7 ? 'none' : 'block' }">Momentálne sa pestuje iba modifikovaná kukurica</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 5 ? '0' : '1', display: step > 7 ? 'none' : 'block' }">Predávať a dovážať je možné ďalších 58 rastlín</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 6 ? '0' : '1', display: step > 7 ? 'none' : 'block' }">Väčšina GMO sa používa na výrobu krmiva, môžu byť aj súčasťou potravín</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 7 ? '0' : '1', display: step > 7 ? 'none' : 'block' }">Ak výrobok obsahuje &gt;0.9% GMO, musí byť označené</li>
            </ul>
            <div v-if="step > 7" class="z-10 relative" >
                <NuxtImg src="/eu_gmo.svg" />
                <div class="absolute top-0 left-0 flex">
                    <div class="w-5 h-5 rounded bg-[#AE9c6E] "></div>
                    <span class="ml-6">Pestovalo sa</span>
                </div>
                <div class="absolute top-6 left-0 flex">
                    <div class="w-5 h-5 rounded bg-[#86B742] "></div>
                    <span class="ml-6">Zakazaná</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onKeyUp } from '@vueuse/core';


const maxSteps = 8

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