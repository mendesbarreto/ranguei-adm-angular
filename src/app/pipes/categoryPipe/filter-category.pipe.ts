import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(categories: any, term: any): any {
    
	if(term === undefined) return categories;
	
	return categories.filter(function(category){
		return category.cat_name.toLowerCase().includes(term.toLowerCase());
	});
  }

}
