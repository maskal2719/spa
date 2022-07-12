import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css'],
  providers: [WeatherService]
})
export class WeatherPageComponent implements OnInit {

  city!: string;
  weather: any;

  constructor(
    private weatherService: WeatherService
  ) { }



  ngOnInit(): void {
    this.getWeatherData('Gomel');
  }

  getWeatherData(city: string) {
    if (city == ''){
      return
    }
    this.weatherService.getWeather(city).subscribe((data)  => {
      this.weather = data;
      console.log(this.weather);
    },(error) => alert('Server request failed. Check if the entered city is correct.'))
  }

}
