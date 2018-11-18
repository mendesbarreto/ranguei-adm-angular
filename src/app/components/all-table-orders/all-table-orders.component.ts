import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-all-table-orders',
  templateUrl: './all-table-orders.component.html',
  styleUrls: ['./all-table-orders.component.css']
})
export class AllTableOrdersComponent implements OnInit {

  allTableOrders : any;
 
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  //GET ALL ORDERS NO MATTER WHAT RESTAURANT OWNER
	  /**
	  this.firebaseService.getOrders().subscribe(orders =>{
		  console.log(orders);
		  this.orders = orders;
	  });
	  */
	  
	  this.firebaseService.getAllTableOrders().subscribe(allTableOrders =>{
		  console.log(allTableOrders);
		  this.allTableOrders = allTableOrders.reverse();
	  });
  }

}
