import { getDay, getHour } from "../formatDate.js";

export default function formatHourlyData(data,day)
{
 let hourlyData = {
    times:[],
    humidity:[],
    precipitatio:[],
    temperature:[],
 }
 for (let i = 0; i < data.length; i++) {
    if (getDay(data[i].time) == day) {
        hourlyData.times.push(getHour(data[i].time))
        hourlyData.humidity.push(data[i].values.humidity)
        hourlyData.precipitatio.push(data[i].values.precipitationProbability)
        hourlyData.temperature.push(data[i].values.temperature)
    }    
 }
 return hourlyData
}