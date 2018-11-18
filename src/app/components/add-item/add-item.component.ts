import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
	
	
	available:any;
	category:any;
	description:any;
	image:any;
	name:any;
	price:any;
	stock:any;
	categories : any;
	percent: any;

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
  
  onItemAddSubmit(){
	  
	  let item= {
		  available: this.available,
		  category: this.category,
		  description: this.description,
		  name: this.name,
		  price: this.price,
		  stock: this.stock,
		  categories: this.categories,
		  percent: this.percent,
		  
	  }
  
  
  this.firebaseService.addItem(item);
  this.router.navigate(['items']);
  }

}
