import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FilterItemPipe } from '../../pipes/itemPipe/filter-item.pipe';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items : any;
  term: any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
	  this.firebaseService.getItems().subscribe(items =>{
		  this.items = items;
	  });
  }

}
