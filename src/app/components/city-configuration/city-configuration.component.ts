import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-city-configuration',
  templateUrl: './city-configuration.component.html',
  styleUrls: ['./city-configuration.component.css']
})
export class CityConfigurationComponent implements OnInit {
  
  cities : any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getCities().subscribe(cities =>{
		  console.log(cities);
		  this.cities = cities;
		  
	  });
  }
  
  deleteCity(citykey){
	   this.firebaseService.deleteCity(citykey);
  }

}
