import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent implements OnInit {

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
	buildingName: any;

  ngOnInit() {
	  
	  	    this.id = this.route.snapshot.params['building_id'];
	  
	  this.firebaseService.getBuildingDetails(this.id).subscribe(building =>{
		  
		  this.buildingName = building.name;

	  });
  }
  
    onBuildingEditSubmit(){
	  
	   let building = {
		  name : this.buildingName,
		  
	  }
	  
	  this.firebaseService.updateBuilding(this.id,building);
	  
	  this.router.navigate(['/add-building']);
	  
  }

}
