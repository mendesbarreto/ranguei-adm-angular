import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

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
	cityName: any;

  ngOnInit() {
	  
	    this.id = this.route.snapshot.params['city_id'];
	  
	  this.firebaseService.getCityDetails(this.id).subscribe(city =>{
		  
		  this.cityName = city.name;

	  });
  }
  
  
    onCityEditSubmit(){
	  
	   let city = {
		  name : this.cityName,
		  
	  }
	  
	  this.firebaseService.updateCity(this.id,city);
	  
	  this.router.navigate(['/items']);
	  
  }

}
