import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-new-district',
  templateUrl: './add-new-district.component.html',
  styleUrls: ['./add-new-district.component.css']
})
export class AddNewDistrictComponent implements OnInit {
	
		
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
	districtName: any;

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
  
     addDistrictName(){
	 
	 
			 let districtName= {
			  name: this.districtName
		  }

		  
		    this.firebaseService.addNewDistrict(districtName);
			this.router.navigate(['add-building']);

  
  
  
  } 

}
