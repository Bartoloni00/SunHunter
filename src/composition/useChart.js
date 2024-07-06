import { ref } from "vue";

export default function useChart(apiData) {
    const data = ref(apiData.temperature);
    const labelMessage = ref("Temperatura en °C");
    const chartData = ref({
        labels: apiData.times,
        datasets: [
            {
                data: data.value,
                label: labelMessage.value,
                backgroundColor: '#917800',
            }
        ]
    });

    function temperature() {
        data.value = apiData.temperature;
        labelMessage.value = "Temperatura en °C";
        chartData.value = {
            labels: apiData.times,
            datasets: [
                {
                    data: data.value,
                    label: labelMessage.value,
                    backgroundColor: '#917800',
                }
            ]
        };
    }

    function precipitation() {
        data.value = apiData.precipitation;
        labelMessage.value = "Probabilidad de lluvia";
        chartData.value = {
            labels: apiData.times,
            datasets: [
                {
                    data: data.value,
                    label: labelMessage.value,
                    backgroundColor: '#917800',
                }
            ]
        };
    }

    function humidity() {
        data.value = apiData.humidity;
        labelMessage.value = "Humedad";
        chartData.value = {
            labels: apiData.times,
            datasets: [
                {
                    data: data.value,
                    label: labelMessage.value,
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
        chartOptions,
        chartData
    };
}
