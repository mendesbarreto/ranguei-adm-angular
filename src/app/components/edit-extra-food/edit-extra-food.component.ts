import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-edit-extra-food',
  templateUrl: './edit-extra-food.component.html',
  styleUrls: ['./edit-extra-food.component.css']
})
export class EditExtraFoodComponent implements OnInit {
	
	  	order_id:any;
	order_details:any;
	user_details: any;

  constructor(
    private firebaseService:FirebaseService,
  private router: Router,
  private route: ActivatedRoute
  ) { }
  
  	id: any;
	name : any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock:any;
	image:any;

   ngOnInit() {
	  this.order_id = this.route.snapshot.params['id'];
	  console.log(this.order_id);
	  //this.order_details = [];
	  
		//this.firebaseService.getItemExtraDetail(this.order_id).on('value', (snapshot) => {
			
		  //this.order_details.push(snapshot.val());
		//});
		
		
		this.firebaseService.getItemEditExtraDetail(this.order_id).subscribe(order_details =>{
		  console.log(order_details);
		  this.order_details = order_details;
	  });

	
	

	console.log(this.order_details);
	
	
	
	
	  
  }
  
    save(id){
	  
	   let extraItem = {
		  name : this.order_details.name,
		  selected : this.order_details.selected,
		  value : this.order_details.value,		  
	  }
	  
	  this.firebaseService.updateExtraItem(this.order_id,extraItem);
	  
	  this.router.navigate(['/items']);
	  
  }

}
