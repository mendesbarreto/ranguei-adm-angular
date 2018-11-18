import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.css']
})
export class AddDistrictComponent implements OnInit {

  
    districts : any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getDistricts().subscribe(districts =>{
		  console.log(districts);
		  this.districts = districts;
		  
	  });
  }
  
  deleteDistrict(districtkey){
	   this.firebaseService.deleteDistrict(districtkey);
  }
}
