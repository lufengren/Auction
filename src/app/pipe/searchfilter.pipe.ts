import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchfilter"
})
export class SearchfilterPipe implements PipeTransform {
  transform(products: any[], keyword?: any, filtertype?: any): any {
    if (!keyword || !filtertype) {
      return products;
    }
    let filterResults = products.filter(item => {
      let result = item[filtertype];
      return result.indexOf(keyword) >= 0;
    });
    return filterResults;
  }
}
