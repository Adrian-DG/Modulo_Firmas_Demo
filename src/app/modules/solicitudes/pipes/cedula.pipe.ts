import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cedula'
})
export class CedulaPipe implements PipeTransform {

  transform(value: string): string {
    let array = value.split('');
    let formatedCedula = '';
    array.forEach((value: string, index: number) => {
      if(index == 3 || index == 10) {
        formatedCedula += '-';
      }
      formatedCedula += value;
    })

    return formatedCedula;
  }

}
