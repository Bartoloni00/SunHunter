<script setup>
import { onMounted, ref } from 'vue';
import { starter } from './services/weather.js';
import DailyStats from './components/DailyStats.vue';

const location = ref();
const sunData = ref();
const loading = ref(true);

onMounted(async () => {
    try {
        const res = await starter();
        location.value = res.location;
        sunData.value = res.sunData;
    } catch (err) {
        console.error('Error fetching data:', err);
        data.value = { location: { lat: 'Error', lon: 'Error' } };
    } finally {
        loading.value = false;
    }
});
</script>
<template>
      <template v-if="loading"><span class="text-5xl">Cargando...</span></template>
      <h1 v-else class="text-3xl text-red-600">¿Cuando vamos a tomar mate a la plaza?</h1>
      <section class="flex justify-center items-start flex-wrap gap-3">
        <DailyStats v-for="day in sunData" :sun-data="day"/>
      </section>
</template>
  
