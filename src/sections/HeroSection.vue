<script setup>
import { onMounted, ref } from 'vue';
import { starter } from '../services/weather.js';
import DailyStats from '../components/DailyStats.vue';
import TodayStats from '../components/TodayStats.vue';
import ChartCanva from '../components/ChartCanva.vue';

const location = ref(null);
const sunData = ref(null);
const loading = ref(true);

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
        loading.value = false;
    }
});
</script>
<template>
    <template v-if="loading">
        <span class="text-5xl text-primary-200 font-black min-w-screen min-h-screen flex justify-center items-center">Cargando...</span>
    </template>
    <section v-else class="grid grid-cols-4 grid-rows-2 gap-2 mt-4 m-auto max-w-[870px]">
        <TodayStats :day-data="sunData[3]" class="row-span-6"/>
        <DailyStats :sun-data="sunData[1]" class="row-span-2"/>
        <DailyStats :sun-data="sunData[2]" class="row-span-2"/>
        <DailyStats :sun-data="sunData[3]" class="row-span-2"/>
        <DailyStats :sun-data="sunData[4]" class="row-span-2 col-start-4 row-start-3"/>
        <!-- <DailyStats :sun-data="sunData[5]" class="row-span-2 col-start-4 row-start-5"/> -->
        <ChartCanva 
            class="col-span-2 row-span-4 col-start-2 row-start-3" 
            :data="sunData[1].hourly"
        />
    </section>
</template>