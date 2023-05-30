export const kelvinToCelsius = (tempk) => {
    return `${(tempk - 273.15).toFixed(1)}°C`

}

export const kelvinTofahrenheit = (tempk) => {
    return `${((tempk - 273.15)* (9/5)+32).toFixed(1)}°F`
}