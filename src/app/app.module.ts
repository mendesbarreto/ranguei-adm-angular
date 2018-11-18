import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import { AngularFireModule,AuthProviders, AuthMethods  } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ItemComponent } from './components/item/item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './components/edit-restaurant/edit-restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantCategoryComponent } from './components/restaurant-category/restaurant-category.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { SettingComponent } from './components/setting/setting.component';
import { AddPaypalComponent } from './components/add-paypal/add-paypal.component';
import { StripeComponent } from './components/stripe/stripe.component';
import { CityConfigurationComponent } from './components/city-configuration/city-configuration.component';
import { AddNewCityComponent } from './components/add-new-city/add-new-city.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { EditCityComponent } from './components/edit-city/edit-city.component';
import { AddDistrictComponent } from './components/add-district/add-district.component';
import { AddNewDistrictComponent } from './components/add-new-district/add-new-district.component';
import { EditDistrictComponent } from './components/edit-district/edit-district.component';
import { AddComponent } from './components/add/add.component';
import { AddNewStreetComponent } from './components/add-new-street/add-new-street.component';
import { EditStreetComponent } from './components/edit-street/edit-street.component';
import { AddBuildingComponent } from './components/add-building/add-building.component';
import { AddNewBuildingComponent } from './components/add-new-building/add-new-building.component';
import { EditBuildingComponent } from './components/edit-building/edit-building.component';
import { AllTableOrdersComponent } from './components/all-table-orders/all-table-orders.component';
import { TableOrderDetailComponent } from './components/table-order-detail/table-order-detail.component';
import { TableUpdateStatusComponent } from './components/table-update-status/table-update-status.component';
import { AddExtraFoodComponent } from './components/add-extra-food/add-extra-food.component';
import { ViewExtraFoodComponent } from './components/view-extra-food/view-extra-food.component';
import { EditExtraFoodComponent } from './components/edit-extra-food/edit-extra-food.component';

import { FilterRestaurantPipe } from './pipes/restaurantPipe/filter-restaurant.pipe';
import { FilterCategoryPipe } from './pipes/categoryPipe/filter-category.pipe';
import { FilterItemPipe } from './pipes/itemPipe/filter-item.pipe';
import { FilterOrderPipe } from './pipes/orderPipe/filter-order.pipe';

export const firebaseConfig = {
	apiKey: "AIzaSyBUScqVmMGH3llog55ujVcP2M6b7NLe-lA",
    authDomain: "ranguei-f81c5.firebaseapp.com",
    databaseURL: "https://ranguei-f81c5.firebaseio.com",
    projectId: "ranguei-f81c5",
    storageBucket: "ranguei-f81c5.appspot.com",
    messagingSenderId: "77710659761"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes : Routes = [
	{path:'',component:HomeComponent},
	{path:'listings',component:ListingsComponent},
	{path:'listing/:id',component:ListingComponent},
	{path:'add-listing',component:AddListingComponent},
	{path:'edit-listing/:id',component:EditListingComponent},
	
	{path:'category',component:CategoryComponent},
	{path:'category-details/:cat_id',component:CategoryDetailsComponent},
	{path:'add-category',component:AddCategoryComponent},
	{path:'edit-category/:cat_id',component:EditCategoryComponent},
	
	{path:'items',component:ItemComponent},
	{path:'add-item',component:AddItemComponent},
	{path:'item-details/:id',component:ItemDetailsComponent},
	{path:'edit-item/:id',component:EditItemComponent},
	
	{path:'restaurants',component:RestaurantComponent},
	{path:'add-restaurant',component:AddRestaurantComponent},
	{path:'restaurant-details/:id',component:RestaurantDetailsComponent},
	{path:'edit-restaurant/:id',component:EditRestaurantComponent},
	
	{path:'orders',component:OrderComponent},
	{path:'order-details/:order_id',component:OrderDetailsComponent},
	{path:'edit-order/:order_id',component:EditOrderComponent},
	
	{path:'settings',component:SettingComponent},
	
	{path:'add-paypal',component:AddPaypalComponent},
	{path:'add-stripe',component:StripeComponent},
	
	
	{path:'add-city',component:CityConfigurationComponent},
	{path:'add-new-city',component:AddNewCityComponent},
	{path:'edit-city/:city_id',component:EditCityComponent},
	
	{path:'add-district',component:AddDistrictComponent},
	{path:'add-new-district',component:AddNewDistrictComponent},
	{path:'edit-district/:district_id',component:EditDistrictComponent},
	
	{path:'add-street',component:AddComponent},
	{path:'add-new-street',component:AddNewStreetComponent},
	{path:'edit-street/:street_id',component:EditStreetComponent},
	
	{path:'add-building',component:AddBuildingComponent},
	{path:'add-new-building',component:AddNewBuildingComponent},
	{path:'edit-building/:building_id',component:EditBuildingComponent},
	
	{path:'all-table-order',component:AllTableOrdersComponent},
	{path:'table-order-detail/:table_id',component:TableOrderDetailComponent},
	{path:'table-update-status/:table_id',component:TableUpdateStatusComponent},
	
	{path:'add-extra-food/:id',component:AddExtraFoodComponent},
	{path:'view-extra-food/:id',component:ViewExtraFoodComponent},
	{path:'edit-extra-food/:id',component:EditExtraFoodComponent},
	
	
	
	
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    AddCategoryComponent,
    ItemComponent,
    AddItemComponent,
    ItemDetailsComponent,
    EditCategoryComponent,
    EditItemComponent,
    RestaurantComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantCategoryComponent,
    OrderComponent,
    OrderDetailsComponent,
    EditOrderComponent,
    SettingComponent,
    AddPaypalComponent,
    StripeComponent,
    CityConfigurationComponent,
    AddNewCityComponent,
    CityDetailsComponent,
    EditCityComponent,
    AddDistrictComponent,
    AddNewDistrictComponent,
    EditDistrictComponent,
    AddComponent,
    AddNewStreetComponent,
    EditStreetComponent,
    AddBuildingComponent,
    AddNewBuildingComponent,
    EditBuildingComponent,
    AllTableOrdersComponent,
    TableOrderDetailComponent,
    TableUpdateStatusComponent,
    AddExtraFoodComponent,
    ViewExtraFoodComponent,
    EditExtraFoodComponent,
    FilterRestaurantPipe,
    FilterCategoryPipe,
    FilterItemPipe,
    FilterOrderPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	FlashMessagesModule,
	RouterModule.forRoot(appRoutes),
	AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
