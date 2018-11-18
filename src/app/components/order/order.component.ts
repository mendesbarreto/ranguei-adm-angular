import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FilterOrderPipe } from '../../pipes/orderPipe/filter-order.pipe';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders : any;
  term: any;
 
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  //GET ALL ORDERS NO MATTER WHAT RESTAURANT OWNER
	  /**
	  this.firebaseService.getOrders().subscribe(orders =>{
		  console.log(orders);
		  this.orders = orders;
	  });
	  */
	  
	  this.firebaseService.getOrders().subscribe(orders =>{
		  console.log(orders);
		  this.orders = orders.reverse();
	  });
  }

}
