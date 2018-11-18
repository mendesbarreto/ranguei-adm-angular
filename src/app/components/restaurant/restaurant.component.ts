import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {ActivatedRoute} from '@angular/router';
import { FilterRestaurantPipe } from '../../pipes/restaurantPipe/filter-restaurant.pipe';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  
})
export class RestaurantComponent implements OnInit {

  restaurants : any;
  term: any;
  
  
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getRestaurants().subscribe(restaurants =>{
		  console.log(restaurants);
		  this.restaurants = restaurants;
	  });
  }

}
