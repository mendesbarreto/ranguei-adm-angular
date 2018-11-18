import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
	
	id: any;
	cat_id : any;
	cat_name: any;

  constructor(
  private firebaseService:FirebaseService,
  private router: Router,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  
	  this.id = this.route.snapshot.params['cat_id'];
	  
	  this.firebaseService.getCategoryDetails(this.id).subscribe(category =>{
		  
		  this.cat_id = category.cat_id;
		  this.cat_name = category.cat_name;
	  });
	  
  }
  
  
   onCategoryEditSubmit(){
	  
	   let category= {
		  cat_id: this.cat_id,
		  cat_name: this.cat_name,
		  
	  }
	  
	  this.firebaseService.updateCategory(this.id,category);
	  
	  this.router.navigate(['/category']);
	  
  }

}
