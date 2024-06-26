import { call } from "../helpers/http";

function isLocatable()
{
    if (!navigator.geolocation) throw new Error('Tu navegador no soporta la geolocalizacion')
    return
}

function getUserLocation()
{
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
        
        const dailyData = data.timelines.daily.map(day => ({
            sunriseTime: day.values.sunriseTime,
            sunsetTime: day.values.sunsetTime,
            uvIndexMax: day.values.uvIndexMax,
            uvIndexAvg: day.values.uvIndexAvg,
            cloudCoverAvg: day.values.cloudCoverAvg,
            cloudCoverMax: day.values.cloudCoverMax,
            cloudCoverMin: day.values.cloudCoverMin,
            evapotranspirationSum: day.values.evapotranspirationSum
        }));
        /**
         * ¿cuando sale el sol - caundo se oculta? cantidad de horas de luz solar
         * intencidad de la luz solar
         * nubocidad
         * temperatura maxima y minima en el dia
         */
        return {
            location: {
                lat: data.location.lat,
                lon: data.location.lon
            },
            sunData: dailyData
        };
    } catch (err) {
        console.error(err);
        throw err;
    }
}

