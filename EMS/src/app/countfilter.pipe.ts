import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'countfilter'
})
export class CountfilterPipe implements PipeTransform {

  transform(EmpCollection: Employee[]): number {
    return EmpCollection.length;
  }

}
