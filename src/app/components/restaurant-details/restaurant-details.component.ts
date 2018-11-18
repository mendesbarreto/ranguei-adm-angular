import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
	id:any;
	restaurant:any;
	imageUrl:any;

    constructor(
  	private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
  ) { }

 ngOnInit() {
	  
	  this.id = this.route.snapshot.params['id'];
	  console.log(this.id);
	  
	  this.firebaseService.getRestaurantDetails(this.id).subscribe(restaurant => {
      this.restaurant = restaurant;

	  /**
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(restaurant.image);
	  
	  console.log(restaurant.image);
      storageRef.child(restaurant.image).getDownloadURL().then((url) => {
        // Set image url
		console.log(url);
		
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
	  
	  */
    });
	  
  }
  
   onRestaurantDelete(){
	  
	  this.firebaseService.deleteRestaurant(this.id);
		
	  this.router.navigate(['/restaurants']);
  }

}
