import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data$!: Observable<any>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data$ = this.dataService.getWeatherForecastData();
  }

}
