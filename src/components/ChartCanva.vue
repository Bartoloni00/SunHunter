<script setup>
import { ref } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const props = defineProps({
  values:{
    type: Array,
    required: true
  },
  times:{
    type: Array,
    required: true
  },
  label:{
    type: String,
    required: true
  }
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
})
const chartData = ref({
  labels: props.times,
  datasets: [
    {
      data: props.values,
      label: props.label,
      backgroundColor: '#917800',
    }
  ]
})
</script>

<template>
  <section class="w-full h-full shadow-inner shadow-bg-300 bg-bg-200 rounded-md flex justify-center items-center">
    <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
  </section>
</template>
