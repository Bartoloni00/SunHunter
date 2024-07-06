<script setup>
import useMessage from '../composition/useMessage.js'
import CardFooter from './CardFooter.vue'
import DataSpan from './DataSpan.vue'
import { getDay } from './../helpers/formatDate.js'
const props = defineProps({
    sunData:{
        required: true,
        type: Object,
    }
})
const {message} = useMessage(props.sunData)
</script> 
<template>
    <article class="rounded-md max-w-52 p-4 flex flex-col shadow-inner shadow-bg-300 bg-bg-200">
        <h2 class="text-xl text-center text-text-200 font-black">{{ getDay(sunData.sunriseTime) }}</h2>
        <section class="flex justify-evenly items-center gap-4 my-2">
            <div class="h-full flex flex-col justify-between items-center w-20">
                <img src="../assets/img/sun.svg" alt="sun icon" class="w-8">
                <DataSpan title="temperatura promedio durante el dia">{{ sunData.temperature.Avg }}°C</DataSpan>
            </div>
            <div class="h-full flex flex-col justify-between items-center w-20">
                <img src="../assets/img/rain.svg" alt="rain icon" class="w-8">
                <DataSpan title="Probabilidades de lluvia">{{ sunData.precipitationProbabilityAvg }} %</DataSpan>
            </div>
        </section>
        <CardFooter color="gray">{{ message }}</CardFooter>
    </article>
</template>