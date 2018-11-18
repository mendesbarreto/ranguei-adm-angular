import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-restaurant-category',
  templateUrl: './restaurant-category.component.html',
  styleUrls: ['./restaurant-category.component.css']
})
export class RestaurantCategoryComponent implements OnInit {
	restaurant_category : any;
  constructor(private firebaseService:FirebaseService) { }



  ngOnInit() {
	
  }

}
