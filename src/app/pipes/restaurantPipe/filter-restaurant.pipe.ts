import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRestaurant'
})
export class FilterRestaurantPipe implements PipeTransform {

   transform(restaurants: any, term: any): any {
    
	if(term === undefined) return restaurants;
	
	return restaurants.filter(function(restaurant){
		return restaurant.title.toLowerCase().includes(term.toLowerCase());
	});
  }

}
