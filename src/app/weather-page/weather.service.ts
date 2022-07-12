import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/forecast';
  apiKey = 'e1482bb24ad47bf1ca66a331af99cbfb';
  weather : any;

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string) {
    let params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('lang','ru')
      .set('appid',this.apiKey)

    return this.http.get(this.url,{params})
  }

}
