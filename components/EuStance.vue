<template>

    <div class="h-full w-full flex gap-5 justify-center items-center font-space">

        <div class="flex flex-col gap-5 justify-center items-center backdrop-blur-2xl  bg-deep-100/[.03] p-10 rounded relative">
            <h1 class="text-8xl underline font-semibold">
                Postoj EU ku GMO
            </h1>
            <ul class="text-3xl list-outside list-disc mx-8">
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 1 ? '0' : '1' }">Pestovanie a predávanie iba s povolením</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 2 ? '0' : '1' }">Eú prideluje pre všetky členské krajiny</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 3 ? '0' : '1' }">Majú právo zakázať ich pestovanie na svojom území</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 4 ? '0' : '1' }">Momentálne sa pestuje iba modifikovaná kukurica</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 5 ? '0' : '1' }">Predávať a dovážať je možné ďalších 58 rastlín</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 6 ? '0' : '1' }">Väčšina GMO sa používa na výrobu krmiva, môžu byť aj súčasťou potravín</li>
                <li class="mb-4 transition-opacity" :style="{ opacity: step < 7 ? '0' : '1' }">Ak výrobok obsahuje &gt;0.9% GMO, musí byť označené</li>
            </ul>
        </div>

    </div>

</template>

<script setup lang="ts">
import { onKeyUp } from '@vueuse/core';


const maxSteps = 7

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