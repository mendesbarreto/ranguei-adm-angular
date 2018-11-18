import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-street',
  templateUrl: './add-new-street.component.html',
  styleUrls: ['./add-new-street.component.css']
})
export class AddNewStreetComponent implements OnInit {
	
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
	streetName: any;

  constructor(
     private firebaseService:FirebaseService,
	private router:Router
  
  ) { }

   ngOnInit() {
	  
	   this.firebaseService.getStreets().subscribe(categories =>{
		  console.log(categories);
		  this.categories = categories;
	  });
  }
  
     addStreetName(){
	 
	 
			 let streetName= {
			  name: this.streetName
		  }

		  
		    this.firebaseService.addNewStreet(streetName);
			this.router.navigate(['add-street']);

  
  
  
  } 

}
