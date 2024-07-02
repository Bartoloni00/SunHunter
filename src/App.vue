<script setup>
import { onMounted, ref } from 'vue';
import { starter } from './services/weather.js';
import DailyStats from './components/DailyStats.vue';
import TodayStats from './components/TodayStats.vue';

const location = ref(null);
const sunData = ref(null);
const loading = ref(true); // Inicializa loading con true

onMounted(async () => {
    try {
        const res = await starter();
        console.log('API response:', res);
        location.value = res.location;
        sunData.value = res.sunData;
    } catch (err) {
        console.error('Error fetching data:', err);
        location.value = { lat: 'Error', lon: 'Error' };
    } finally {
        loading.value = false; // Asegúrate de que loading se establece en false
    }
});
</script>

<template>
    <main class="bg-bg-300 min-w-screen min-h-screen text-text-200">
        <h1  class="text-3xl text-accent-100 py-8 text-center">¿Cuando vamos a tomar mate a la plaza?</h1>
        <template v-if="loading">
            <span class="text-5xl text-accent-100 min-w-screen min-h-screen flex justify-center items-center">Cargando...</span>
        </template>
        <section v-else class="flex justify-center items-start flex-wrap gap-3 mt-8">
            <div class="grid grid-cols-4 grid-rows-6 gap-4">
                <div class="row-span-6"><TodayStats :day-data="sunData[3]" /></div>
                <div class="row-span-2"><DailyStats :sun-data="sunData[1]" /></div>
                <div class="row-span-2"><DailyStats :sun-data="sunData[2]" /></div>
                <div class="row-span-2"><DailyStats :sun-data="sunData[3]" /></div>
                <div class="row-span-2 col-start-4 row-start-3"><DailyStats :sun-data="sunData[4]" /></div>
                <div class="row-span-2 col-start-4 row-start-5"><DailyStats :sun-data="sunData[5]" /></div>
                <div class="col-span-2 row-span-4 col-start-2 row-start-3">7</div>
            </div>
        </section>
    </main>
</template>
