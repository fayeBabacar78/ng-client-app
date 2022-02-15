import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment as e} from "../../environments/environment.prod";

@Injectable({providedIn: 'root'})
export  class DataService {

  constructor(private http: HttpClient) {
  }

  getWeatherForecastData() {
    return this.http.get<any[]>(e.webAPI + 'forecast');
  }
}
