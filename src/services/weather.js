import formatDailyData from "../helpers/formatWeatherData/dailyData";
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
        // const data = await call({ location: ` 43,7` });
        console.log(data);

        const dailyData = formatDailyData(data)

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