import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    streets : any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getStreets().subscribe(streets =>{
		  console.log(streets);
		  this.streets = streets;
		  
	  });
  }
  
  deleteStreet(streetkey){
	   this.firebaseService.deleteStreet(streetkey);
  }
}
