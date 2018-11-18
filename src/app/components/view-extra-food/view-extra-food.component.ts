import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-view-extra-food',
  templateUrl: './view-extra-food.component.html',
  styleUrls: ['./view-extra-food.component.css']
})
export class ViewExtraFoodComponent implements OnInit {

  	order_id:any;
	order_details:any;
	user_details: any;

  constructor(
    private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  this.order_id = this.route.snapshot.params['id'];
	  console.log(this.order_id);
	  //this.order_details = [];
	  
		//this.firebaseService.getItemExtraDetail(this.order_id).on('value', (snapshot) => {
			
		  //this.order_details.push(snapshot.val());
		//});
		
		
		this.firebaseService.getItemExtraDetail(this.order_id).subscribe(order_details =>{
		  console.log(order_details);
		  this.order_details = order_details;
	  });

	
	

	console.log(this.order_details);
	
	
	
	
	  
  }
  
  onExtraItemDelete(id){
	  this.firebaseService.onExtraItemDelete(this.order_id,id);
  }
  
  onExtraItemEdit(id){
	  
	  this.firebaseService.setProductId(this.order_id);
	  
	  this.router.navigate(['/edit-extra-food/' + id]);
  }

}
