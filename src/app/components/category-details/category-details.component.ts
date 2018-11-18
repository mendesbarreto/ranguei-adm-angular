import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

	cat_id:any;
	category_details:any;

  constructor(
  private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
	) { }

  ngOnInit() {
	  this.cat_id = this.route.snapshot.params['cat_id'];
	  console.log(this.cat_id);
	  
	  this.firebaseService.getCategoryDetails(this.cat_id).subscribe(category_details => {
      this.category_details = category_details;

    });
	  
  }
  
  
  onCategoryDelete(){
		this.firebaseService.deleteCategory(this.cat_id);
		
		this.router.navigate(['/category']);

  }

}
