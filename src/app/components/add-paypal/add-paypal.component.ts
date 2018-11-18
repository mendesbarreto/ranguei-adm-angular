import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-paypal',
  templateUrl: './add-paypal.component.html',
  styleUrls: ['./add-paypal.component.css']
})
export class AddPaypalComponent implements OnInit {
	
	
	available:any;
	category:any;
	description:any;
	image:any;
	name:any;
	price:any;
	stock:any;
	categories : any;
	percent: any;
	sandbox: any;
	production: any;

  constructor(
  private firebaseService:FirebaseService,
	private router:Router
  ) { }

  ngOnInit() {
	  
	  this.firebaseService.getCategories().subscribe(categories =>{
		  console.log(categories);
		  this.categories = categories;
	  });
	  
  }
  
  onPaypalConfiguration(){
	  console.log(this.production);
	  
	  if(this.production == "undefined" || this.production == undefined || this.production == ""){
		  let paypal= {
			  sandbox: this.sandbox,
			  production: ""
		  }
		  
		  
		    this.firebaseService.addPaypalConfiguration(paypal);
			this.router.navigate(['settings']);
	  }
	  else{
		 let paypal= {
			  sandbox: this.sandbox,
			  production: this.production
		  }


           this.firebaseService.addPaypalConfiguration(paypal);
           this.router.navigate(['settings']);		  
	 
	 }
  
  
  
  }  
  

}
