import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOrder'
})
export class FilterOrderPipe implements PipeTransform {

 transform(orders: any, term: any): any {
    
	if(term === undefined) return orders;
	
	return orders.filter(function(order){
		return order.customerDetails.email.toLowerCase().includes(term.toLowerCase());
	});
  }

}
