<template>
    <div class="h-full w-full flex  justify-center items-center font-space">
        <div class="flex flex-col h-fit m-6 px-20 py-5 border-4 border-white rounded-md">
            <span class="text-8xl font-bold blue gradient" :class="blue"> Genetically </span>
            <span class="text-8xl font-bold purple gradient" :class="purple">Modified</span>
            <span class="text-8xl font-bold orange gradient" :class="orange">Organisms</span>
            <span class="text-xl mt-5">
                By Jakub <span class="blue gradient" :class="blue">Tulek</span>, Richard <span class="purple gradient" :class="purple">Sepsi</span> and Jakub <span class="orange gradient" :class="orange">Porubec</span>
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
        --color-start: #007CF0;
        --color-end: #00DFD8;
        
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