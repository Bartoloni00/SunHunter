export function getDay(date)
{
    const fecha = new Date(date);
    return fecha.toISOString().split('T')[0];
}

export function getHour(date)
{
    const fecha = new Date(date);
    return fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function daylightHours(sunset, sunrise) 
{
    const sunriseHour = parseInt(getHour(sunrise).split(':')[0], 10);
    const sunsetHour = parseInt(getHour(sunset).split(':')[0], 10);
    
    let daylightHours = sunsetHour - sunriseHour;
    if (daylightHours < 0) daylightHours += 24;

    return daylightHours;
}
