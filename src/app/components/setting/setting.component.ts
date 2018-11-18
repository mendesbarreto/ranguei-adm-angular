import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FlashMessagesService } from 'angular2-flash-messages';
import {FirebaseService} from '../../services/firebase.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(
    private firebaseService : FirebaseService,
	private router: Router,
	private route: ActivatedRoute) { }

  ngOnInit() {
  }

  paypalConfiguration(){
	  console.log("Paypal Configuration Clicked");
	  
  }
  
  stripeConfiguration(){
	  console.log("Stripe Configuration Clicked");
	  
  }
  
}
