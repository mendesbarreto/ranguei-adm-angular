import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-district',
  templateUrl: './edit-district.component.html',
  styleUrls: ['./edit-district.component.css']
})
export class EditDistrictComponent implements OnInit {

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
	districtName: any;
  
  
  ngOnInit() {
	  
	      this.id = this.route.snapshot.params['district_id'];
	  
	  this.firebaseService.getDistrictDetails(this.id).subscribe(city =>{
		  
		  this.districtName = city.name;

	  });
  }
  
      onDistrictEditSubmit(){
	  
	   let city = {
		  name : this.districtName,
		  
	  }
	  
	  this.firebaseService.updateDistrict(this.id,city);
	  
	  this.router.navigate(['/add-district']);
	  
  }

}
