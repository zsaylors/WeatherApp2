import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  weather: Weather;

  constructor(private http: HttpClient) { }

  // Returns random coordinates
  generateLongitude(num) {
    return this.http.get('https://www.random.org/integers/?num=' + num + 
                                      '&min=-180&max=180&col=1&base=10&format=plain&rnd=new',  {responseType: 'text'})
  }

  generateLatitude(num) {
    return this.http.get('https://www.random.org/integers/?num=' + num + 
                                      '&min=-90&max=90&col=1&base=10&format=plain&rnd=new', {responseType: 'text'})
  }

  // Gets weather data from open weathermap
  getWeatherData(lat, lon) {
    return this.http.get<Forecast>('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=de10300ebff83ff66eb7a188c336b7b5', {responseType: 'json'}).pipe(
      catchError((err: any) => {
        return throwError('Error obtaining weather data');
      })
    )
  }
  
}

interface Forecast {
  coord: Coord;
  sys: Sys;
  weather: Weather[];
  main: Main;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
  cod: number;
}


interface Clouds {
  all: number;
}

interface Rain {
  '3h': number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Main {
  temp: number;
  humidity: number;
  pressure: number;
  temp_min: number;
  temp_max: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface Coord {
  lon: number;
  lat: number;
}