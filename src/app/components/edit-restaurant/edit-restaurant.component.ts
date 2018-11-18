import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router , ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

   constructor(
  private firebaseService:FirebaseService,
  private router: Router,
  private route: ActivatedRoute
  ) { }
  
  id: any;
  address: any;
  description: any;
  image: any;
  info: any;
  lat: any;
  long: any;
  mark: any;
  option: any;
  outlet: any;
  phonenumber: any;
  title: any;

   ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  
	  this.firebaseService.getRestaurantDetails(this.id).subscribe(item =>{
		  
		  
		  this.address= item.address;
		  this.description= item.description;
		  this.image= item.image;
		  this.info= item.info;
		  this.lat= item.lat;
		  this.long= item.long;
		  this.mark= item.mark;
		  this.option= item.option;
		  this.outlet= item.outlet;
		  this.phonenumber= item.phonenumber;
		  this.title= item.title;
		  
		  
	  });
	  
  }
  
  
  onEditRestaurant(){
	  
	   let restaurant = {
		  address : this.address,
		  description :  this.description,
		  info :  this.info,
		  lat :  this.lat,
		  long :  this.long,
		  mark :  this.mark,
		  option :  this.option,
		  outlet :  this.outlet,
		  phonenumber :  this.phonenumber,
		  title :  this.title,
		  
	  }
	  
	  this.firebaseService.updateRestaurant(this.id,restaurant);
	  
	  this.router.navigate(['/restaurants']);
	  
  }

}
