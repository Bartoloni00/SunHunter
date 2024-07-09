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
        location.value = res.location;
        sunData.value = res.sunData;
    } catch (err) {
        location.value = { lat: 'Error', lon: 'Error' };
    } finally {
        loading.value = false;
    }
});

const showChartDay = ref(0)

function changeChartDay(day) {
    if(day == showChartDay.value) return
    showChartDay.value = day
}
</script>
<template>
    <template v-if="loading">
        <span class="text-5xl text-primary-200 font-black w-screen h-screen flex justify-center items-center">Cargando...</span>
    </template>
    <section v-else class="md:grid grid-cols-4 grid-rows-2 gap-2 mt-4 m-auto max-w-[870px]">
        <TodayStats :day-data="sunData[0]" class="my-2 md:my-0 row-span-6" @click="changeChartDay(0)"/>
        <DailyStats :sun-data="sunData[1]" class="my-2 md:my-0 row-span-2"  @click="changeChartDay(1)"/>
        <DailyStats :sun-data="sunData[2]" class="my-2 md:my-0 row-span-2"  @click="changeChartDay(2)"/>
        <DailyStats :sun-data="sunData[3]" class="my-2 md:my-0 row-span-2"  @click="changeChartDay(3)"/>
        <DailyStats :sun-data="sunData[4]" class="my-2 md:my-0 row-span-2 col-start-4 row-start-3"  @click="changeChartDay(4)"/>
        <!-- <DailyStats :sun-data="sunData[5]" class="my-2 md:my-0 row-span-2 col-start-4 row-start-5" "/> -->
        <ChartCanva 
            class="my-2 md:my-0 col-span-2 row-span-4 col-start-2 row-start-3" 
            :data="sunData[showChartDay]"
        />
    </section>
</template>