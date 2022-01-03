import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

 
  transform(value: any, _filterString: String, propertyname: string): any {
    const resultarray = []
    if (value.length == 0 || _filterString === '' || propertyname === '') {
      return value
    }

    for (const item of value) {
      if (item[propertyname].includes(_filterString)) {
        resultarray.push(item)
      }
    }

    return resultarray

  }


}
