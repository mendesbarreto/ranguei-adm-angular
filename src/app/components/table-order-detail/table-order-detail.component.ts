import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-table-order-detail',
  templateUrl: './table-order-detail.component.html',
  styleUrls: ['./table-order-detail.component.css']
})
export class TableOrderDetailComponent implements OnInit {

  	table_order_id:any;
	table_order_details:any;
	user_details: any;

  constructor(
  private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
	) { }

  ngOnInit() {
	  this.table_order_id = this.route.snapshot.params['table_id'];
	  console.log(this.table_order_id);
	  
	
	
		
		 
	
	  
	  this.firebaseService.getTableOrderDetail(this.table_order_id).on('value', (snapshot) => {
		  this.table_order_details = snapshot.val();
		});
		
		console.log(this.table_order_details);
		console.log(this.table_order_details.userId);
		
		if(this.table_order_details.userId){
				this.firebaseService.getUserDetail(this.table_order_details.userId).on('value', (snapshot) => {
				  this.user_details = snapshot.val();
				  
				  console.log(snapshot.val());
				});
				
				
				
				console.log(this.user_details);
		}
	  
  }
  
}
