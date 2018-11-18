import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-city',
  templateUrl: './add-new-city.component.html',
  styleUrls: ['./add-new-city.component.css']
})
export class AddNewCityComponent implements OnInit {
	
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
	cityName: any;

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
  
   addCityName(){
	 
	 
			 let cityName= {
			  name: this.cityName
		  }

		  
		    this.firebaseService.addNewCity(cityName);
			this.router.navigate(['add-city']);

  
  
  
  } 
  

}
