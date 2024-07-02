<script setup>
import { getDay,getHour } from './../helpers/formatDate.js'
const props = defineProps({
    dayData:{
        required: true,
        type:Object
    }
})
const cloudCoverAvg = props.dayData.cloudCover.Avg
let nubocidad
if (cloudCoverAvg < 20) nubocidad = 'Despejado'
if (cloudCoverAvg > 20 && cloudCoverAvg < 60) nubocidad = 'Un poco nublado'
if (cloudCoverAvg > 60) nubocidad = 'Nublado'

let idealDay = false
if (cloudCoverAvg < 20 && props.dayData.indexUv.Avg < 5 && (props.dayData.evapotranspirationSum < 6 && props.dayData.evapotranspirationSum >= 2)) {
    idealDay = true
}
</script>
<template>
    <article class="rounded-md p-4 flex flex-col shadow-inner shadow-primary-300 h-full">
        <h2 class="text-xl text-center text-accent-200">Hoy</h2>
        <ul class="flex gap-3 items-start justify-center">
            <li class="flex flex-col items-center">
                <span class="text-sm">Amanecer</span> 
                <span class="text-bold">{{ getHour(dayData.sunriseTime) }}</span>
            </li>
            <li class="flex flex-col items-center">
                <span class="text-sm">Atardecer</span>
                <span class="text-bold">{{ getHour(dayData.sunsetTime) }}</span>
            </li>
        </ul>
        <span class="text-xl text-center">{{ nubocidad }}</span>
        <!--<ul class="flex gap-3 items-start justify-center">
            <li class="flex flex-col items-center">
                <span class="text-sm">UV maximo</span> 
                <span class="text-bold">{{ dayData.indexUv.Max }}</span>
            </li>
            <li class="flex flex-col items-center">
                <span class="text-sm">UV promedio</span>
                <span class="text-bold">{{ dayData.indexUv.Avg }}</span>
            </li>
        </ul> -->
        <span v-if="idealDay" class="m-auto text-xl text-accent-300">A la Plaza</span>
        <span v-else class="m-auto text-xl text-buttons-200">Toma mate en casa</span>
    </article>
</template>