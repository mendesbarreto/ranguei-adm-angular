import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
	
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
	publishable: any;
	secret: any;

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
  
    onStripeConfiguration(){
	  //console.log(this.production);
	  

		 let stripe= {
			  publishable: this.publishable,
			  secret: this.secret
		  }


           this.firebaseService.addStripeConfiguration(stripe);
          this.router.navigate(['settings']);		  
	 
	 
  
  
  
  } 

}
