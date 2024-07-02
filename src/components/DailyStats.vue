<script setup>
import { getDay,getHour } from './../helpers/formatDate.js'
const props = defineProps({
    sunData:{
        required: true,
        type: Object,
    }
})
const cloudCoverAvg = props.sunData.cloudCover.Avg
let nubocidad
if (cloudCoverAvg < 20) nubocidad = 'Despejado'
if (cloudCoverAvg > 20 && cloudCoverAvg < 60) nubocidad = 'Un poco nublado'
if (cloudCoverAvg > 60) nubocidad = 'Nublado'

let idealDay = false
if (cloudCoverAvg < 20 && props.sunData.indexUv.Avg < 5 && (props.sunData.evapotranspirationSum < 6 && props.sunData.evapotranspirationSum >= 2)) {
    idealDay = true
}
</script>
<template>
    <article class="rounded-md max-w-52 p-4 flex flex-col shadow-inner shadow-primary-300">
        <h2 class="text-xl text-center text-accent-200">{{ getDay(sunData.sunriseTime) }}</h2>
        <ul class="flex gap-3 items-start justify-center">
            <li class="flex flex-col items-center">
                <span class="text-sm">Amanecer</span> 
                <span class="text-bold">{{ getHour(sunData.sunriseTime) }}</span>
            </li>
            <li class="flex flex-col items-center">
                <span class="text-sm">Atardecer</span>
                <span class="text-bold">{{ getHour(sunData.sunsetTime) }}</span>
            </li>
        </ul>
        <span class="text-xl text-center">{{ nubocidad }}</span>
        <span v-if="idealDay" class="m-auto text-xl text-accent-300">A la Plaza</span>
        <span v-else class="m-auto text-xl text-buttons-200">Toma mate en casa</span>
    </article>
</template>