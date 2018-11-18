import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
	
	cat_id:any;
	cat_name:any;
	res_name:any;
	image?:any;
	restaurants : any;
	

  constructor(
    private firebaseService:FirebaseService,
	private router:Router
	) { }

  ngOnInit() {
	  
	  this.firebaseService.getRestaurants().subscribe(restaurants =>{
		  console.log(restaurants);
		  this.restaurants = restaurants;
	  });
  }
  
  
  onCategoryAddSubmit(){
	  
	    let category= {
		  cat_id: this.cat_id,
		  cat_name: this.cat_name,
		  res_name: this.res_name,
		  image: this.image,
		 
	  }
  
  
  this.firebaseService.addCategory(category);
  this.router.navigate(['category']);
  
  }

}
