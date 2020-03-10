import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Weather } from '../models/weather';

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
    return this.http.get<Weather>('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=de10300ebff83ff66eb7a188c336b7b5', {responseType: 'json'}).pipe(
      // pass => {
      //   this.weather.name = pass.name;
      //   this.weather.description = pass.weather[0].main;
      //   this.weather.temp = pass.main.temp;
      //   this.weather.temp_min = pass.main.temp_min;
      //   this.weather.temp_max = pass.main.temp_max;
      //   this.weather.feels_like = pass.main.feels_like;
      //   this.weather.windSpeed = pass.wind.speed;
      //   this.weather.windDeg = pass.wind.deg;
      // },
      catchError((err: any) => {
        return throwError('Error obtaining weather data');
      })
    )
  }
  
}