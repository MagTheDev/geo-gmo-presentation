<template>
    <div class="h-full w-full flex gap-5 justify-center items-center">
        <div class="flex flex-col h-fit m-6 px-20 py-5  rounded-md ">
            <span class="text-8xl font-bold blue gradient pb-2" :class="blue"> Geneticky </span>
            <span class="text-8xl font-bold purple gradient pb-2" :class="purple">Modifikované</span>
            <span class="text-8xl font-bold orange gradient pb-2" :class="orange">Organizmy</span>
            <span class="text-xl mt-5 font-light">
                By Jakub <span class="blue gradient" :class="blue">Tulek</span>, Richard <span class="purple gradient" :class="purple">Sepši</span> 
            </span>
        </div>
    </div>
</template>


<script setup lang="ts">

    const blue = ref('selected');
    const purple = ref('');
    const orange = ref('');

    setInterval(() => {

        if (blue.value === 'selected') {
            blue.value = '';
            purple.value = 'selected';
        } else if (purple.value === 'selected') {
            purple.value = '';
            orange.value = 'selected';
        } else if (orange.value === 'selected') {
            orange.value = '';
            blue.value = 'selected';
        }

    }, 5000);


</script>

<style scoped>

    .blue {
        --color-end: #007CF0;
        --color-start: #00DFD8;
        
    }

    .purple {
        --color-start: #7928CA;
        --color-end: #c13584;
        
    }

    .orange {
        --color-start: #FF4D4D;
        --color-end: #f7e479;
    }

    .gradient {

        background-image: linear-gradient(90deg, var(--color-start), var(--color-end), white, white);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300%;
        transition: background-position 0.5s ease-in-out;      
        background-position: right;  
    }

    .selected {
        background-position: left;
    }

</style>