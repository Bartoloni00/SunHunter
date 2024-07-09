<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'vue-chartjs';
import useChart from '../composition/useChart.js';
import {watch} from 'vue';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  data:{
    type: Object,
    required: true
  },
})

const {
        temperature,
        precipitation,
        humidity,
        chartOptions,
        chartData,
        refreshData
    } = useChart(props.data.hourly, props.data.sunriseTime)

watch(()=>props.data, (oldData, newData)=>{
 refreshData(oldData.hourly, oldData.sunriseTime)
})
</script>
<template>
  <section class="w-full h-full shadow-inner shadow-bg-300 bg-bg-200 rounded-md flex justify-center items-center flex-col  hover:shadow-accent-100 cursor-pointer">
    <header class="w-full px-2 pt-4 pb-2">
      <nav>
        <ul class="flex justify-center gap-4 items-center w-full text-sm text-text-100 flex-wrap-reverse">
          <li>
            <button 
              class="rounded bg-bg-300 py-1 px-2 hover:bg-bg-100 transition-all" 
              @click="temperature"
              >Temperatura</button>
          </li>
          <li>
            <button 
              class="rounded bg-bg-300 py-1 px-2 hover:bg-bg-100 transition-all"
              @click="precipitation"
              >Probabilidad de lluvia</button>
          </li>
          <li>
            <button 
              class="rounded bg-bg-300 py-1 px-2 hover:bg-bg-100 transition-all"
              @click="humidity"
              >Humedad</button>
          </li>
        </ul>
      </nav>
    </header>
    <div class="w-full h-full flex justify-center items-center p-2">
      <Line
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </section>
</template>
