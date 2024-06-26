<script setup>
const props = defineProps({
    sunData:{
        required: true,
        type: Object,
    }
})
const cloudCoverAvg = props.sunData.cloudCoverAvg
let nubocidad
if (cloudCoverAvg < 20) nubocidad = 'Va a estar re despejado'
if (cloudCoverAvg > 20 && cloudCoverAvg < 60) nubocidad = 'Un poco nublado pero todo piola'
if (cloudCoverAvg > 60) nubocidad = 'para mi que llueve'

let idealDay = false
if (cloudCoverAvg < 20 && props.sunData.uvIndexAvg < 5 && (props.sunData.evapotranspirationSum < 6 && props.sunData.evapotranspirationSum >= 2)) {
    idealDay = true
}
</script>
<template>
    <article class="border-2 rounded-md border-gray-700 max-w-52 p-2 flex flex-col">
        <h2>fecha: {{ sunData.sunriseTime }}</h2>
        <ul>
            <li>Puesta de sol: {{ sunData.sunriseTime }}</li>
            <li>El sol se oculta: {{ sunData.sunsetTime }}</li>
            <li>horas de luz solar:</li>
        </ul>
        <span>Dencidad de nubes: {{ nubocidad }}</span>
        <span>indice UV maximo: {{ sunData.uvIndexMax }}</span>
        <span>indice UV promedio: {{ sunData.uvIndexAvg }}</span>
        <span v-if="idealDay" class="m-auto text-xl text-green-400">Es el dia perfecto para tomar mate</span>
        <span v-else class="m-auto text-xl text-red-400">Toma mate en casa</span>
    </article>
</template>