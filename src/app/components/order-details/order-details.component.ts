import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  	order_id:any;
	order_details:any;
	user_details: any;

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
	
	console.log(this.order_details);
	
	
	
	
	  
  }
  
	
 

}
