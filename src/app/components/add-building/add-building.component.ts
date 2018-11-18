import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {

 
    buildings : any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getBuildings().subscribe(buildings =>{
		  console.log(buildings);
		  this.buildings = buildings;
		  
	  });
  }
  
  deleteBuilding(buildingkey){
	   this.firebaseService.deleteBuilding(buildingkey);
  }
}
