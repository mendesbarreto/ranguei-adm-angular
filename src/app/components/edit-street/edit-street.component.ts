import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-street',
  templateUrl: './edit-street.component.html',
  styleUrls: ['./edit-street.component.css']
})
export class EditStreetComponent implements OnInit {

  constructor(
   private firebaseService:FirebaseService,
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
	streetName: any;

   ngOnInit() {
	  
	    this.id = this.route.snapshot.params['street_id'];
	  
	  this.firebaseService.getStreetDetails(this.id).subscribe(street =>{
		  
		  this.streetName = street.name;

	  });
  }
  
    onStreetEditSubmit(){
	  
	   let street = {
		  name : this.streetName,
		  
	  }
	  
	  this.firebaseService.updateStreet(this.id,street);
	  
	  this.router.navigate(['/add-street']);
	  
  }
}
