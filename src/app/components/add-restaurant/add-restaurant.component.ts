import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
	
  address?:string;
  description?:string;
  image?:string;
  info?:string;
  lat?:string;
  long?:string;
  mark?:string;
  option?:string;
  outlet?:string;
  phonenumber?:string;
  title?:string;

  constructor(
	private firebaseService:FirebaseService,
	private router:Router
  ) { }

  ngOnInit() {
  }

  onAddRestaurant(){
	  
	  let restaurant= {
		  
		  address: this.address,
		  description: this.description,
		  image: this.image,
		  info: this.info,
		  lat: this.lat,
		  long: this.long,
		  mark: this.mark,
		  option: this.option,
		  outlet: this.outlet,
		  phonenumber: this.phonenumber,
		  title: this.title,
		  
		  
	  }
	  

   
  
  
  this.firebaseService.addRestaurant(restaurant);
  this.router.navigate(['restaurants']);
  
  }

}
