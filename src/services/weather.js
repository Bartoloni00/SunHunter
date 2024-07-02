import { getDay, getHour } from "../helpers/formatDate";
import { call } from "../helpers/http";

function isLocatable() {
    if (!navigator.geolocation) throw new Error('Tu navegador no soporta la geolocalización');
    return;
}

function getUserLocation() {
    isLocatable()
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                const latitude = pos.coords.latitude;
                const longitude = pos.coords.longitude;
                resolve({ latitude, longitude });
            },
            err => {
                reject(err);
            }
        );
    });
}

export async function starter() {
    try {
        const userLocation = await getUserLocation();
        const data = await call({ location: `${userLocation.latitude},${userLocation.longitude}` });
        // console.log(data);

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
            },
            hourlyData: []
        }));

        // data.timelines.hourly.forEach(hourData => {
        //     const hourTime = new Date(hourData.time);
        //     dailyData.forEach(day => {
        //         const sunriseTime = new Date(day.sunriseTime);
        //         const sunsetTime = new Date(day.sunsetTime);

        //         if (hourTime >= sunriseTime && hourTime <= sunsetTime) {
        //             day.hourlyData.push({
        //                 time: hourData.time,
        //                 precipitationProbability: hourData.values.precipitationProbability,
        //                 uvIndex: hourData.values.uvIndex,
        //                 cloudCover: hourData.values.cloudCover,
        //                 humidity: hourData.values.humidity,
        //                 temperature: hourData.values.temperature,
        //             });
        //         }
        //     });
        // });

        return {
            location: {
                lat: data.location.lat,
                lon: data.location.lon,
            },
            sunData: dailyData,
        };
    } catch (err) {
        console.error(err);
        throw err;
    }
}