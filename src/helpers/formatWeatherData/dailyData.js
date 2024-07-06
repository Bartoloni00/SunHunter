import { getDay } from "../formatDate.js";
import formatHourlyData from './hourlyData.js'
export default function formatDailyData(data)
{
    const dailyData = data.timelines.daily.map(day => ({
        sunriseTime: day.values.sunriseTime,
        sunsetTime: day.values.sunsetTime,
        precipitationProbabilityAvg: day.values.precipitationProbabilityAvg,
        indexUv: {
            Max: day.values.uvIndexMax,
            Avg: day.values.uvIndexAvg,
        },
        cloudCover: {
            Avg: day.values.cloudCoverAvg,
            Max: day.values.cloudCoverMax,
            Min: day.values.cloudCoverMin,
        },
        evapotranspirationSum: day.values.evapotranspirationSum,
        humidity: {
            Avg: day.values.humidityAvg,
            Max: day.values.humidityMax,
            Min: day.values.humidityMin,
        },
        temperature: {
            Avg: day.values.temperatureAvg,
            Max: day.values.temperatureMax,
            Min: day.values.temperatureMin,
        }
    }));

    dailyData.forEach((day,i) => {
        dailyData[i].hourly = formatHourlyData(data.timelines.hourly, getDay(day.sunriseTime))
    });
    return dailyData
}