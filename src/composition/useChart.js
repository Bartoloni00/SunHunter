import { ref } from "vue";
import {getDay} from '../helpers/formatDate.js'

export default function useChart(apiData, sunriseTime) {
    const apiDataIntern = ref(apiData)
    const day = ref(sunriseTime)

    const chartData = ref({
        labels: apiDataIntern.value.times,
        datasets: [
            {
                data: apiDataIntern.value.temperature,
                label: `Temperatura en °C para el dia ${getDay(day.value)}`,
                backgroundColor: '#917800',
            }
        ]
    });

    function temperature() {
        chartData.value = {
            labels: apiDataIntern.value.times,
            datasets: [
                {
                    data: apiDataIntern.value.temperature,
                    label: `Temperatura en °C durante el dia ${getDay(day.value)}`,
                    backgroundColor: '#917800',
                }
            ]
        };
    }

    function precipitation() {
        chartData.value = {
            labels: apiDataIntern.value.times,
            datasets: [
                {
                    data: apiDataIntern.value.precipitation,
                    label: `Probabilidad de lluvia durante el dia ${getDay(day.value)}`,
                    backgroundColor: '#917800',
                }
            ]
        };
    }

    function humidity() {
        chartData.value = {
            labels: apiDataIntern.value.times,
            datasets: [
                {
                    data: apiDataIntern.value.humidity,
                    label: `Humedad durante el dia ${getDay(day.value)}`,
                    backgroundColor: '#917800',
                }
            ]
        };
    }

    function refreshData(apiData, sunriseTime) {
        apiDataIntern.value = apiData
        day.value = sunriseTime
         chartData.value = {
            labels: apiDataIntern.value.times,
            datasets: [
                {
                    data: apiDataIntern.value.temperature,
                    label: `Temperatura en °C durante el dia ${getDay(day.value)}`,
                    backgroundColor: '#917800',
                }
            ]
        };
    }
    const chartOptions = ref({
        responsive: true,
        maintainAspectRatio: false
    });

    return {
        temperature,
        precipitation,
        humidity,
        refreshData,
        chartOptions,
        chartData
    };
}
