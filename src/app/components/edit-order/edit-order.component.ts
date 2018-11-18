import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  	order_id:any;
	order_details:any;
	status:any;
	checked:any;
	

  constructor(
  private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
	) { }

  ngOnInit() {
	  this.order_id = this.route.snapshot.params['order_id'];
	  console.log(this.order_id);
	  
	  this.firebaseService.getOrderDetail(this.order_id).on('value', (snapshot) => {
		  this.order_details = snapshot.val();
		});
	  
  }
  
  onStatusOrderSubmit(){
	  
	   let order_details= {
		  status : this.status,
		  checked : ""
		  
	  }
	  
	  this.firebaseService.updateRestaurantOrderStatus(this.order_id,order_details);
	  
	  this.router.navigate(['/orders']);
	  
  }

}
