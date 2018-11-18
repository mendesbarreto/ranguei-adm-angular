import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  
  restaurants: FirebaseListObservable<any[]>;
  restaurant: FirebaseObjectObservable<any>;
  
  categories:FirebaseListObservable<any[]>;
  category_details:FirebaseObjectObservable<any>;
  
  items:FirebaseListObservable<any[]>;
  item_details:FirebaseObjectObservable<any>;
  
  orders:FirebaseListObservable<any[]>;
  order_details:FirebaseObjectObservable<any>;
  
  allTableOrders:FirebaseListObservable<any[]>;
  allTableOrdersDetails:FirebaseObjectObservable<any>;
  
  cities: FirebaseListObservable<any[]>;
  cityDetail: FirebaseObjectObservable<any>;
  
  districts: FirebaseListObservable<any[]>;
  districtDetail: FirebaseObjectObservable<any>;
  
  streets: FirebaseListObservable<any[]>;
  streetDetail: FirebaseObjectObservable<any>;
  
  buildings: FirebaseListObservable<any[]>;
  buildingDetail: FirebaseObjectObservable<any>;
  
  extraItemList: FirebaseListObservable<any[]>;
  extraItemDetail: FirebaseObjectObservable<any>;
  
  
  folder: any;
  itemFolder: any;
  restaurantFolder: any;
  categoryFolder: any;
  orderList: any;
  itemExtraList: any;
  userDetail: any;
  allTableOrdersList: any;
  //allTableOrders: any;
  paypal: any;
  stripe: any;
  
  
  productId: any;
  
  

  constructor(private af: AngularFire) {
	this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
	this.restaurants = this.af.database.list('/restaurants') as FirebaseListObservable<Listing[]>;
	this.categories = this.af.database.list('/category') as FirebaseListObservable<Category[]>;
	this.items = this.af.database.list('/items') as FirebaseListObservable<Item[]>;
	this.orders = this.af.database.list('/orders') as FirebaseListObservable<Order[]>;
	this.orderList = firebase.database().ref('/orders'); 
	this.itemExtraList = firebase.database().ref('/items');
	this.userDetail = firebase.database().ref('/users');
	this.allTableOrders = this.af.database.list('/AllTableOrders') as FirebaseListObservable<TableOrder[]>; 
	this.allTableOrdersList = firebase.database().ref('/AllTableOrders'); 
	this.paypal = firebase.database().ref('/paypal');
	this.stripe = firebase.database().ref('/stripe');
	this.cities = this.af.database.list('/city') as FirebaseListObservable<City[]>;
	this.districts = this.af.database.list('/districts') as FirebaseListObservable<District[]>;
	this.streets = this.af.database.list('/streets') as FirebaseListObservable<Street[]>;
	this.buildings = this.af.database.list('/apartments') as FirebaseListObservable<Building[]>;
	
    this.folder = 'listingimages';
	this.itemFolder = 'itemimages';
	this.restaurantFolder = 'restaurantimages';
	this.categoryFolder = 'categoryimages';
  }
  
  setProductId(id){
	  this.productId = id;
  }
  
  getProductId(){
	  return this.productId;
  }
  
   getItemEditExtraDetail(id){
    //return this.itemExtraList.child(id).child("extraOptions");
	//this.order_details = this.af.database.object('/orders/'+id);
	this.extraItemDetail = this.af.database.object('/items/'+this.productId+'/extraOptions/'+id) as FirebaseObjectObservable<Extra>;
    return this.extraItemDetail;
	
  }
  
  updateExtraItem(id,extraItem){
	    firebase.database().ref('/items').child(this.productId).child("extraOptions").child(id).update({
		name: extraItem.name,
		selected: "false",
		value: extraItem.value
    });  
  }
  
  getItemExtraDetail(id){
    //return this.itemExtraList.child(id).child("extraOptions");
	//this.order_details = this.af.database.object('/orders/'+id);
	this.extraItemList = this.af.database.list('/items/'+id+'/extraOptions/') as FirebaseListObservable<Extra[]>
    return this.extraItemList;
	
  }
  
    onExtraItemDelete(item_id,extra_id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
		this.itemExtraList.child(item_id).child("extraOptions").child(extra_id).remove();
	
  }
  /***
    onExtraItemUpdate(item_id,extra_id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
		this.itemExtraList.child(item_id).child("extraOptions").child(extra_id).update({
		status: order_details.status
    });  
	
  }
  */
  
  getRestaurants(){
    
    return this.restaurants;
  }
  
  getCities(){
	  
	  return this.cities;
  }
  
  getDistricts(){
	  return this.districts;
  }
  
  getStreets(){
	  return this.streets;
  }
  
   getBuildings(){
	  return this.buildings;
  }

  
  getOrders(){
    
    return this.orders;
  }
  
  getAllTableOrders(){
	  return this.allTableOrders;
  }
  
  getOrderDetails(id){
	
    //this.restaurant = this.af.object('users/' + uid + '/restaurants/'+id) as FirebaseObjectObservable<Restaurant>
	//this.order_details = this.af.database.object('/orders/'+id) as FirebaseObjectObservable<Order>
	this.order_details = this.af.database.object('/orders/'+id);
	
	
    return this.order_details;  
	  
  }
  
  getTableOrderDetail(id){
	

	
	
    return this.allTableOrdersList.child(id); 
	  
  }
  
  
  getUserDetail(id){
	

	
	
    return this.userDetail.child(id); 
	  
  }
  
  getOrderDetail(id){
    return this.orderList.child(id);
  }
  
  

  
  updateOrderStatus(id,order_details){
	  //private items = this.af.list('listings');
      //items.update(category);
	  return this.orders.update(id,order_details);
	  
  }
  
  updateRestaurantOrderStatus(id,order_details){
	  //private items = this.af.list('listings');
      //items.update(category);
	  //this.orders.update(id,order_details);
	  console.log(id);
	  console.log(order_details);
	  firebase.database().ref('/orders').child(id).update({
		status: order_details.status
    });  
	  
  }
  
    updateRestaurantTableOrderStatus(id,order_details,user_id){
	  //private items = this.af.list('listings');
      //items.update(category);
	  //this.orders.update(id,order_details);
	  console.log(id);
	  console.log(order_details);
	  firebase.database().ref('/AllTableOrders').child(id).update({
		status: order_details.status
    });


	firebase.database().ref('/tableOrders').child(user_id).child(id).update({
		status: order_details.status
    });  	
	  
  }
  
  
	addExtraItem(id,extraItem){
			console.log(id);
			console.log(extraItem);
			
			 firebase.database().ref('/items').child(id).child("extraOptions").push({
				name: extraItem.name,
				selected: "false",
				value: extraItem.price
			});
	}

  
  addRestaurant(restaurant){
	 
	  
	let storageRefItem = firebase.storage().ref();
    for(let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

	  //let path = '/${this.folder}/${selectedFile.name}';
      let pathItem = `/${this.restaurantFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      iRefItem.put(selectedItemFile).then((snapshot) => {
        restaurant.image = pathItem;
		
			  let storageRef = firebase.storage().ref();
			  let spaceRef = storageRef.child(restaurant.image);
			  
			  console.log(restaurant.image);
			  storageRef.child(restaurant.image).getDownloadURL().then((url) => {
				// Set image url
				console.log(url);
	
	
				restaurant.firebase_url=url;
				
				return this.restaurants.push(restaurant);
			
			  }).catch((error) => {
				console.log(error);
			  });
		

       // return this.restaurants.push(restaurant);  
      });
    }
	  
	  
  }
  //adding paypal configuration
  addPaypalConfiguration(paypal){
	  console.log(paypal);
	  
	    this.paypal.set({
			sandbox : paypal.sandbox,
			production: paypal.production
		});
  }
  
  addStripeConfiguration(stripe){
	  console.log(stripe);
	  
	    this.stripe.set({
			publishable : stripe.publishable,
			secret: stripe.secret
		});
  }
  
  
  getRestaurantDetails(id){
    this.restaurant = this.af.database.object('/restaurants/'+id) as FirebaseObjectObservable<Restaurant>
    return this.restaurant;
  }
  
  getCityDetails(id){
    this.cityDetail = this.af.database.object('/city/'+id) as FirebaseObjectObservable<City>
    return this.cityDetail;
  }
  
   getDistrictDetails(id){
    this.districtDetail = this.af.database.object('/districts/'+id) as FirebaseObjectObservable<District>
    return this.districtDetail;
  }
  
  getStreetDetails(id){
	  this.streetDetail = this.af.database.object('/streets/'+id) as FirebaseObjectObservable<Street>
    return this.streetDetail;
	  
  }
  
   getBuildingDetails(id){
	  this.buildingDetail = this.af.database.object('/apartments/'+id) as FirebaseObjectObservable<Building>
    return this.buildingDetail;
	  
  }
  
  
   deleteRestaurant(id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
	return this.restaurants.remove(id);
	
  }
  
 
  
  
  
   updateRestaurant(id,restaurant){
	  //private items = this.af.database.list('listings');
      //items.update(category);
	  return this.restaurants.update(id,restaurant);
	  
  }
  
  updateCity(id,city){
	  return this.cities.update(id,city);
  }
  
  updateDistrict(id,district){
	  return this.districts.update(id,district);
  }
  
   updateStreet(id,street){
	  return this.streets.update(id,street);
  }
  
   updateBuilding(id,building){
	  return this.buildings.update(id,building);
  }
  
  

  getListings(){
    
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }
  
 
  
  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

	  //let path = '/${this.folder}/${selectedFile.name}';
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }
  
  updateListing(id,listing){
	  //private items = this.af.database.list('listings');
      //items.update(category);
	  return this.listings.update(id,listing);
	  
  }
  
    deleteListing(id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
	return this.listings.remove(id);
	
  }
  
  addNewCity(cityName){
	  return this.cities.push(cityName);
  }
  
  addNewDistrict(districtName){
	  return this.districts.push(districtName);
  }
  
  addNewStreet(streetName){
	  return this.streets.push(streetName);
  }
  
  addNewBuilding(buildingName){
	  return this.buildings.push(buildingName);
  }


  
   addCategory(category){
	  
	  //private items = this.af.database.list('category');
      //items.push(category);
	  
	  let storageRefItem = firebase.storage().ref();
    for(let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

	  //let path = '/${this.folder}/${selectedFile.name}';
      let pathItem = `/${this.categoryFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      iRefItem.put(selectedItemFile).then((snapshot) => {
        category.image = pathItem;
		
			  let storageRef = firebase.storage().ref();
			  let spaceRef = storageRef.child(category.image);
			  
			  console.log(category.image);
			  storageRef.child(category.image).getDownloadURL().then((url) => {
				// Set image url
				console.log(url);
	
	
				category.firebase_url=url;
				
				return this.categories.push(category);
			
			  }).catch((error) => {
				console.log(error);
			  });
		

       // return this.restaurants.push(restaurant);  
      });
    }
	  
	 // return this.categories.push(category);
	  
	  
  }
  
  updateCategory(id,category){
	  //private items = this.af.database.list('listings');
      //items.update(category);
	  return this.categories.update(id,category);
	  
  }
  
   getCategories(){
    this.categories = this.af.database.list('/category') as FirebaseListObservable<Category[]>
    return this.categories;
  }

  getCategoryDetails(cat_id){
	this.category_details = this.af.database.object('/category/'+cat_id) as FirebaseObjectObservable<Category>
    return this.category_details;
	  
  }
  
  
  

  
  deleteCategory(id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
	return this.categories.remove(id);
	
  }
  
  deleteCity(cityKey){
	  return this.cities.remove(cityKey);
	  
  }
  
  deleteDistrict(districtKey){
	  return this.districts.remove(districtKey);
	  
  }
  
   deleteStreet(streetKey){
	  return this.streets.remove(streetKey);
	  
  }
  
   deleteBuilding(buildingKey){
	  return this.buildings.remove(buildingKey);
	  
  }
  
 
  
  getItems(){
	  return this.items;
	  
  }
  
  addItem(item){
	  
	  let storageRefItem = firebase.storage().ref();
    for(let selectedItemFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

	  //let path = '/${this.folder}/${selectedFile.name}';
      let pathItem = `/${this.itemFolder}/${selectedItemFile.name}`;
      let iRefItem = storageRefItem.child(pathItem);
      iRefItem.put(selectedItemFile).then((snapshot) => {
        item.image = pathItem;
		
			  let storageRef = firebase.storage().ref();
			  let spaceRef = storageRef.child(item.image);
			  
			  console.log(item.image);
			  storageRef.child(item.image).getDownloadURL().then((url) => {
				// Set image url
				console.log(url);
	
	
				item.image_firebase_url=url;
				
				return this.items.push(item);
			
			  }).catch((error) => {
				console.log(error);
			  });
		
        //return this.items.push(item);  
      });
    }
	
  }

	getItemDetails(id){
		
		this.item_details = this.af.database.object('/items/'+id) as FirebaseObjectObservable<Item>
		return this.item_details;
	}  
  
  updateItem(id,item){
	  //private items = this.af.database.list('listings');
      //items.update(category);
	  return this.items.update(id,item);
	  
  }
  
  deleteItem(id){
	  //private items = this.af.database.list('listings');
      //items.remove(category);
	return this.items.remove(id);
	
  }
  

}


interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
  path?:any;
}

interface Restaurant{
  $key?:string;
  address?:string;
  description?:string;
  image?:string;
  info?:string;
  lat?:string;
  long?:string;
  mark?:string;
  option?:string;
  outlet?:string;
  phonenumber?:string;
  title?:string;
  firebase_url?:string;
}

interface Category{
  $key?:string;
  cat_id?:string;
  cat_name?:string;
  res_name?:string;
  image?:string;
  firebase_url?:string;
}

interface City{
  $key?:string;
  name?:string;
}

interface District{
	$key?:string;
	name?:string;
}

interface Street{
	$key?:string;
	name?:string;
}

interface Building{
	$key?:string;
	name?:string;
}



interface Item{
  $key?:string;
  available?:string;
  category?:string;
  description?:string;
  image?:string;
  name?:string;
  price?:string;
  stock?:string;
  categories?:string;
  percent?:string;
  image_firebase_url?:string;
}

interface Extra{
	$key?:string;
	name:string;
	selected:string;
	value:string;
}


interface Order{
  $key?:string;
  address_id?:string;
  created?:string;
  item_qty?:string;
  order_date_time?:string;
  payment_id?:string;
  product_firebase?:string;
  product_id?:string;
  product_image?:string;
  product_price?:string;
  product_total_price?:string;
  restaurant_id?:string;
  restaurant_name?:string;
  status?:string;
  user_id?:string;
  user_name?:string;
  restaurant_owner_id?:string;
  checked?:string;
}

interface TableOrder{
	  $key?:string;
	  restaurant_id?: string;
	  restaurant_address?: string;
	  restaurant_description?: string;
	  restaurant_backgroundImage?: string;
	  restaurant_firebase_url?: string;
	  restaurant_icon?: string;
	  restaurant_iconText?: string;
	  restaurant_images?: string;
	  restaurant_info?: string;
	  restaurant_lat?: string;
	  restaurant_long?: string;
	  restaurant_mark?: string;
	  restaurant_market?: string;
	  restaurant_option?: string;
	  restaurant_outlet?: string;
	  restaurant_phonenumber?: string;
	  restaurant_show?: string;
	  restaurant_subtitle?: string;
	  restaurant_title?: string;
      date?: string;
	  person?: string;
	  time?: string;
	  userId?: string;
	  status?: string;
      timeStamp?: string;
      reverseOrder?: string;
}



/* import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

 listings: FirebaseListObservable<any[]>;
 listing: FirebaseObjectObservable<any[]>;
 folder:any;
 

  constructor(private af: AngularFire) { 
	this.folder = 'listingImages';
  }
  
  getListings(){
	  
	  this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
	  return this.listings;
  }
  
  getListingDetails(id){
	  
	  this.listing = this.af.database.object('/listings/' + id) as FirebaseObjectObservable<Listing>;
	  return this.listing;
	  
  }
  
  addListing(listing){
	  let storageRef = firebase.storage().ref(); 
	  
	  for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
		  
		  let path = '/${this.folder}/${selectedFile.name}';
		  let iRef = storageRef.child(path);
		  iRef.put(selectedFile).then((snapshot) => {
			 listing.image = selectedFile.name;
			 listing.path = path;
			 return this.listings.push(listing);
		  });
	  }
	  
  }

}

interface Listing{
	$key?:string;
	title?:string;
	type?:string;
	image?:string;
	city?:string;
	owner?:string;
	bedrooms?:string;
	
	
}
 */