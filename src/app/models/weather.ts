export class Weather {
    name: String;
    lat: number;
    lon: number;
    timezone: number;
    main: String;
    description: String;
    icon: String;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    windSpeed: number;
    windDeg: number;
    clouds: number;
    dt: number;
    sunrise: number;
    sunset: number;

    constructor(
        name?: String,
        lat?: number,
        lon?: number,
        timezone?: number,
        main?: String,
        description?: String,
        icon?: String,
        temp?: number,
        feels_like?: number,
        temp_min?: number,
        temp_max?: number,
        pressure?: number,
        humidity?: number,
        windSpeed?: number,
        windDeg?: number,
        clouds?: number,
        dt?: number,
        sunrise?: number,
        sunset?: number
        ) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.timezone = timezone;
        this.main = main;
        this.description = description;
        this.icon = icon;
        this.temp = temp;
        this.feels_like = feels_like;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.pressure = pressure;
        this.humidity = humidity;
        this.windDeg = windDeg;
        this.windSpeed = windSpeed;
        this.clouds = clouds;
        this.dt = dt;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
}