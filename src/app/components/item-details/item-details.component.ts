import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
	id:any;
	item:any;
	imageUrl:any;

  constructor(
  	private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute
  ) { }

  ngOnInit() {
	  
	  this.id = this.route.snapshot.params['id'];
	  console.log(this.id);
	  
	  this.firebaseService.getItemDetails(this.id).subscribe(item => {
      this.item = item;

	  /**
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(item.image);
      storageRef.child(item.image).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
	  
	  */
    });
	  
  }
  
  onItemDelete(){
	  
	  this.firebaseService.deleteItem(this.id);
		
	  this.router.navigate(['/items']);
  }

}
