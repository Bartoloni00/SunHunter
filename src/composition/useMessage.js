import { ref } from "vue";

export default function useMessage(dayData) {
    const message = ref("Un buen día para un mate. 🍃");
    
    if (dayData.temperature.Avg > 20 && dayData.cloudCover.Avg < 60) 
    { // Temperatura agradable y cielo despejado
        message.value = "Aprovecha el hermoso dia. 🌞🍃.";
    } 
    if (dayData.humidity.Avg > 70) 
    { // día muy húmedo
        message.value = "Día pesado... un mate para aliviarlo 🌿💧.";
    } 
    if (dayData.indexUv > 7) 
    { // índice UV alto
        message.value = "Un peligro el sol, anda a la sombra ☀️🕶️";
    }
    if (dayData.temperature.Avg < 10) 
    { // día frío
        message.value = "Un matecito para calentarse. 🥶🔥.";
    } 
    if (dayData.temperature.Avg < 10 && dayData.humidity.Avg > 70) 
    { // día humedo y frio
        message.value = "Matecito para el día húmedo y frío. 🌧️🥶🍵.";
    } 
    if (dayData.precipitationProbabilityAvg > 50) 
    { // día lluvioso
        message.value = "Prepárate unas tortas fritas! 🌧️🍵🥟";
    } 
    if (dayData.temperature.Avg > 30) 
    { // día muy caluroso
        message.value = "Hoy se toma tereré todo el día 🌡️🍃🔥.";
    } 
    if (dayData.cloudCover.Avg > 70) 
    { // día nublado
        message.value = "Mate nublado, ideal para relajarse. ☁️🌿.";
    }

    return {
        message
    }
}