import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-add-extra-food',
  templateUrl: './add-extra-food.component.html',
  styleUrls: ['./add-extra-food.component.css']
})
export class AddExtraFoodComponent implements OnInit {
	
	id: any;
    available:any;
	category:any;
	description:any;
	image:any;
	name:any;
	price:any;
	stock:any;
	categories : any;
	percent: any;
	
	extraName: any;
	extraSelected: any;
	extraPrice: any;

  constructor(
  private firebaseService:FirebaseService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  
	   this.id = this.route.snapshot.params['id'];
	   
	   console.log(this.id);
	  
	  this.firebaseService.getItemDetails(this.id).subscribe(item =>{
		  
		  this.name = item.name;
		  this.category = item.category;
		  this.description = item.description;
		  this.available = item.available;
		  this.price = item.price;
		  this.stock = item.stock;
	  });
  }
  
     onExtraItemAddSubmit(){
	  
	   let extraItem = {
		  name : this.extraName,
		  selected : this.extraSelected,
		  price : this.extraPrice,
		  
	  }
	  
	  console.log(extraItem);
	  
	  this.firebaseService.addExtraItem(this.id,extraItem);
	  
	  this.router.navigate(['/items']);
	  
  }

}
