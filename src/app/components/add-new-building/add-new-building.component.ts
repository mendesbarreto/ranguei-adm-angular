import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-building',
  templateUrl: './add-new-building.component.html',
  styleUrls: ['./add-new-building.component.css']
})
export class AddNewBuildingComponent implements OnInit {

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
	buildingName: any;

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
  
       addBuildingName(){
	 
	 
			 let buildingName= {
			  name: this.buildingName
		  }

		  
		    this.firebaseService.addNewBuilding(buildingName);
			this.router.navigate(['add-building']);

  
  
  
  } 

}
