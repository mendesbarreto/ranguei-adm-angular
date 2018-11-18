import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-table-update-status',
  templateUrl: './table-update-status.component.html',
  styleUrls: ['./table-update-status.component.css']
})
export class TableUpdateStatusComponent implements OnInit {
	
	  	order_id:any;
	table_order_details:any;
	status:any;
	checked:any;
	

  constructor(
   private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  
	   this.order_id = this.route.snapshot.params['table_id'];
	  console.log(this.order_id);
	  
	  this.firebaseService.getTableOrderDetail(this.order_id).on('value', (snapshot) => {
		  this.table_order_details = snapshot.val();
		});
  }
  
  
    onStatusTableOrderSubmit(){
	  
	   let table_order_details= {
		  status : this.status,
		  checked : ""
		  
	  }
	  
	  this.firebaseService.updateRestaurantTableOrderStatus(this.order_id,table_order_details,this.table_order_details.userId);
	  
	  this.router.navigate(['/all-table-order']);
	  
  }

}
