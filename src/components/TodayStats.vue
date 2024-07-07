<script setup>
import useMessage from '../composition/useMessage.js'
import { getDay,getHour } from './../helpers/formatDate.js'
import DataSpan from './DataSpan.vue'
import CardFooter from './CardFooter.vue'
const props = defineProps({
    dayData:{
        required: true,
        type:Object
    }
})

const {message} = useMessage(props.dayData)
</script>
<template>
    <article class="rounded-md p-4 flex flex-col justify-between items-center shadow-inner shadow-primary-200 h-full bg-primary-300 w-full max-w-full  hover:shadow-accent-100 cursor-pointer">
        <h2 class="text-xl text-center text-text-200 font-black">Hoy</h2>
        <section class="flex justify-evenly items-center gap-4 my-4">
            <div class="h-full flex flex-col justify-between items-center w-20">
                <img src="../assets/img/sunset.svg" alt="sunset icon" class="w-12 mr-1">
                <DataSpan title="Hora a la que sale el sol">{{ getHour(dayData.sunriseTime) }}</DataSpan>
            </div>
            <div class="h-full flex flex-col justify-between items-center w-20">
                <img src="../assets/img/sunrice.svg" alt="sun rice icon" class="w-12 mr-1">
                <DataSpan title="Hora a la que se esconde el sol">{{ getHour(dayData.sunsetTime) }}</DataSpan>
            </div>
        </section>
        <section class="flex justify-evenly items-center gap-4 my-4">
            <div class="h-full flex flex-col justify-between items-center w-20">
                <img src="../assets/img/rain.svg" alt="rain icon" class="w-12 mr-1">
                <DataSpan title="Probabilidades de lluvia">{{ dayData.precipitationProbabilityAvg }} %</DataSpan>
            </div>
            <div class="h-full flex flex-col justify-between items-center w-20">
                <img src="../assets/img/cloud.svg" alt="cloud icon" class="w-12 mr-1">
                <DataSpan title="Cobertura de nubes promedio">{{ dayData.cloudCover.Avg }} %</DataSpan>
            </div>
        </section>
        <section class="pt-4 flex justify-evenly items-center">
                <DataSpan title="Temperatura maxima en el dia">{{ dayData.temperature.Max }}°C</DataSpan>
            <img src="../assets/img/temperature.svg" alt="temperature icon" class="w-8">
                <DataSpan title="Temperatura minima en el dia">{{ dayData.temperature.Min }}°C</DataSpan>
        </section>
       <CardFooter class="mt-4">{{ message }}</CardFooter>
    </article>
</template>