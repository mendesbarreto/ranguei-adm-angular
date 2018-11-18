import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(
    private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
  ) { }
  
	id: any;
	name : any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock:any;
	image:any;
  

  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  
	  this.firebaseService.getItemDetails(this.id).subscribe(item =>{
		  
		  this.name = item.name;
		  this.category = item.category;
		  this.description = item.description;
		  this.available = item.available;
		  this.price = item.price;
		  this.stock = item.stock;
	  });
	  
  }
  
  onItemEditSubmit(){
	  
	   let item = {
		  name : this.name,
		  category : this.category,
		  description : this.description,
		  available : this.available,
		  price : this.price,
		  stock : this.stock,
		  
	  }
	  
	  this.firebaseService.updateItem(this.id,item);
	  
	  this.router.navigate(['/items']);
	  
  }

}
